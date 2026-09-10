import { readAccessState, sectionForPath } from "./server/access-control.js";

export const config = {
  matcher: [
    "/pre-workshop/:path*",
    "/day-1/:path*",
    "/day-1-new/:path*",
    "/day-2/:path*",
    "/day-2-new/:path*",
    "/day-3/:path*",
    "/day-3-new/:path*",
    "/post-workshop/:path*",
  ],
  runtime: "nodejs",
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const section = sectionForPath(url.pathname);
  if (!section) return;

  const { sections } = await readAccessState();
  if (sections[section.id] !== false) return;

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
