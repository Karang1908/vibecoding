import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE_NAME = "vibecoding101_admin";
const SESSION_VERSION = "v1";
const SESSION_DURATION_SECONDS = 8 * 60 * 60;
const DEFAULT_ADMIN_PASSWORD = "admin-workshop";

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return (
    leftBuffer.length === rightBuffer.length &&
    timingSafeEqual(leftBuffer, rightBuffer)
  );
}

function password() {
  return process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;
}

function sessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    `vibecoding101-admin-session:${password()}`
  );
}

function sign(value) {
  return createHmac("sha256", sessionSecret()).update(value).digest("base64url");
}

export function verifyPassword(candidate) {
  return typeof candidate === "string" && safeEqual(candidate, password());
}

export function createSessionToken(now = Date.now()) {
  const expiresAt = Math.floor(now / 1000) + SESSION_DURATION_SECONDS;
  const payload = `${SESSION_VERSION}.${expiresAt}.${randomBytes(18).toString("base64url")}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token, now = Date.now()) {
  if (typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 4 || parts[0] !== SESSION_VERSION) return false;

  const [version, expiresAtText, nonce, signature] = parts;
  const expiresAt = Number(expiresAtText);
  if (!Number.isInteger(expiresAt) || expiresAt <= Math.floor(now / 1000)) {
    return false;
  }

  const payload = `${version}.${expiresAtText}.${nonce}`;
  return safeEqual(signature, sign(payload));
}

export function parseCookies(header = "") {
  return Object.fromEntries(
    header
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const separator = part.indexOf("=");
        if (separator === -1) return [part, ""];
        return [
          part.slice(0, separator),
          decodeURIComponent(part.slice(separator + 1)),
        ];
      }),
  );
}

export function isAuthenticatedRequest(request) {
  const cookies = parseCookies(request.headers.cookie || "");
  return verifySessionToken(cookies[ADMIN_COOKIE_NAME]);
}

function requestUsesHttps(request) {
  return request.headers["x-forwarded-proto"] === "https" || process.env.VERCEL === "1";
}

export function sessionCookie(request, token) {
  const secure = requestUsesHttps(request) ? "; Secure" : "";
  return `${ADMIN_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_DURATION_SECONDS}${secure}`;
}

export function expiredSessionCookie(request) {
  const secure = requestUsesHttps(request) ? "; Secure" : "";
  return `${ADMIN_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure}`;
}

export function isSameOriginRequest(request) {
  const origin = request.headers.origin;
  if (!origin) return true;

  const protocol = request.headers["x-forwarded-proto"] || "http";
  const host = request.headers["x-forwarded-host"] || request.headers.host;
  if (!host) return false;

  try {
    return new URL(origin).origin === `${protocol}://${host}`;
  } catch {
    return false;
  }
}
