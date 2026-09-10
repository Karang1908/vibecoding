import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

import sectionsHandler from "../api/admin/sections.js";
import sessionHandler from "../api/admin/session.js";
import middleware from "../middleware.js";

const siteDirectory = join(process.cwd(), "site");
const listenPort = Number(process.env.PORT || 8000);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function readBody(request) {
  return new Promise((resolve, reject) => {
    var chunks = [];
    var size = 0;

    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > 32 * 1024) {
        reject(new Error("Request body is too large."));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => {
      const text = Buffer.concat(chunks).toString("utf8");
      if (!text) return resolve(undefined);
      try {
        resolve(JSON.parse(text));
      } catch {
        resolve(text);
      }
    });
    request.on("error", reject);
  });
}

async function runApiHandler(handler, request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    request.body = await readBody(request);
  }
  await handler(request, response);
}

async function existingFile(pathname) {
  let relativePath = decodeURIComponent(pathname).replace(/^\/+/, "");
  relativePath = normalize(relativePath).replace(/^(\.\.(\/|\\|$))+/, "");
  const candidates = [];

  if (!relativePath || pathname.endsWith("/")) {
    candidates.push(join(siteDirectory, relativePath, "index.html"));
  } else {
    candidates.push(join(siteDirectory, relativePath));
    if (!extname(relativePath)) {
      candidates.push(join(siteDirectory, relativePath + ".html"));
      candidates.push(join(siteDirectory, relativePath, "index.html"));
    }
  }

  for (const candidate of candidates) {
    if (!candidate.startsWith(siteDirectory)) continue;
    try {
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {
      // Try the next clean URL candidate.
    }
  }
  return null;
}

async function serveStatic(request, response, url) {
  const file = (await existingFile(url.pathname)) || join(siteDirectory, "404.html");
  let fileStat;
  try {
    fileStat = await stat(file);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(file.endsWith("404.html") ? 404 : 200, {
    "Content-Type": mimeTypes[extname(file)] || "application/octet-stream",
    "Content-Length": fileStat.size,
    "Cache-Control": url.pathname.startsWith("/admin") ? "private, no-store" : "no-cache",
  });
  if (request.method === "HEAD") response.end();
  else createReadStream(file).pipe(response);
}

const server = createServer(async (request, response) => {
  try {
    const origin = `http://${request.headers.host || `127.0.0.1:${listenPort}`}`;
    const url = new URL(request.url || "/", origin);

    if (url.pathname === "/api/admin/session") {
      await runApiHandler(sessionHandler, request, response);
      return;
    }
    if (url.pathname === "/api/admin/sections") {
      await runApiHandler(sectionsHandler, request, response);
      return;
    }

    const middlewareResponse = await middleware(new Request(url, {
      method: request.method,
      headers: request.headers,
    }));
    if (middlewareResponse) {
      response.writeHead(
        middlewareResponse.status,
        Object.fromEntries(middlewareResponse.headers.entries()),
      );
      response.end();
      return;
    }

    await serveStatic(request, response, url);
  } catch (error) {
    console.error(error);
    if (!response.headersSent) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    }
    response.end("Internal server error");
  }
});

server.listen(listenPort, "127.0.0.1", () => {
  console.log(`Vibecoding 101 running at http://127.0.0.1:${listenPort}`);
  console.log(`Admin portal: http://127.0.0.1:${listenPort}/admin`);
});
