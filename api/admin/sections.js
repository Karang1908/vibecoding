import {
  SECTION_DEFINITIONS,
  readAccessState,
  writeAccessState,
} from "../../server/access-control.js";
import {
  isAuthenticatedRequest,
  isSameOriginRequest,
} from "../../server/admin-auth.js";

function json(response, status, body) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "private, no-store");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.end(JSON.stringify(body));
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

function payload(state) {
  return {
    ...state,
    definitions: SECTION_DEFINITIONS.map(({ id, label, description }) => ({
      id,
      label,
      description,
    })),
  };
}

export default async function handler(request, response) {
  if (!isAuthenticatedRequest(request)) {
    return json(response, 401, { error: "Authentication required." });
  }

  if (request.method === "GET") {
    const state = await readAccessState({ consistentRead: true });
    return json(response, 200, payload(state));
  }

  if (request.method !== "PATCH") {
    response.setHeader("Allow", "GET, PATCH");
    return json(response, 405, { error: "Method not allowed." });
  }

  if (!isSameOriginRequest(request)) {
    return json(response, 403, { error: "Request origin was rejected." });
  }

  try {
    const state = await writeAccessState(requestBody(request).updates);
    return json(response, 200, payload(state));
  } catch (error) {
    if (error instanceof TypeError) {
      return json(response, 400, { error: error.message });
    }

    console.error("Unable to update workshop access", error);
    return json(response, 502, {
      error: "The access change could not be saved. Try again.",
    });
  }
}
