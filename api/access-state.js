import { readAccessState } from "../server/access-control.js";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.statusCode = 405;
    response.end();
    return;
  }

  const state = await readAccessState();
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.end(JSON.stringify({ sections: state.sections }));
}
