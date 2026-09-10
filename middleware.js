import { next } from "@vercel/functions";
import { readAccessState, sectionForPath } from "./server/access-control.js";

function continueRequest() {
  // The local server treats undefined as "continue". Vercel's proxy needs
  // the explicit middleware-next response so the static page is served.
  return process.env.VERCEL === "1" ? next() : undefined;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const section = sectionForPath(url.pathname);
  if (!section) return continueRequest();

  const { sections } = await readAccessState();
  if (sections[section.id] !== false) return continueRequest();

  const blockedUrl = new URL("/access-closed/", request.url);
  blockedUrl.searchParams.set("section", section.id);
  blockedUrl.searchParams.set("returnTo", `${url.pathname}${url.search}`);

  return new Response(null, {
    status: 307,
    headers: {
      Location: blockedUrl.toString(),
      "Cache-Control": "private, no-store",
    },
  });
}
