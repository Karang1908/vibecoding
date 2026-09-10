import {
  createSessionToken,
  expiredSessionCookie,
  isAuthenticatedRequest,
  isSameOriginRequest,
  sessionCookie,
  verifyPassword,
} from "../../server/admin-auth.js";

const attempts = new Map();
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 10;

function json(response, status, body) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "private, no-store");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.end(JSON.stringify(body));
}

function requestIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  return (
    (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0]) ||
    request.socket?.remoteAddress ||
    "unknown"
  );
}

function attemptState(ip, now = Date.now()) {
  const current = attempts.get(ip);
  if (!current || current.resetAt <= now) {
    const fresh = { count: 0, resetAt: now + ATTEMPT_WINDOW_MS };
    attempts.set(ip, fresh);
    return fresh;
  }
  return current;
}

function requestBody(request) {
  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }
  return request.body || {};
}

export default async function handler(request, response) {
  if (request.method === "GET") {
    return json(response, 200, {
      authenticated: isAuthenticatedRequest(request),
    });
  }

  if (request.method === "DELETE") {
    response.setHeader("Set-Cookie", expiredSessionCookie(request));
    return json(response, 200, { authenticated: false });
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "GET, POST, DELETE");
    return json(response, 405, { error: "Method not allowed." });
  }

  if (!isSameOriginRequest(request)) {
    return json(response, 403, { error: "Request origin was rejected." });
  }

  const ip = requestIp(request);
  const state = attemptState(ip);
  if (state.count >= MAX_ATTEMPTS) {
    const retryAfter = Math.max(
      1,
      Math.ceil((state.resetAt - Date.now()) / 1000),
    );
    response.setHeader("Retry-After", String(retryAfter));
    return json(response, 429, {
      error: "Too many attempts. Try again in a few minutes.",
    });
  }

  const { password } = requestBody(request);
  if (!verifyPassword(password)) {
    state.count += 1;
    return json(response, 401, { error: "Incorrect password." });
  }

  attempts.delete(ip);
  response.setHeader("Set-Cookie", sessionCookie(request, createSessionToken()));
  return json(response, 200, { authenticated: true });
}
