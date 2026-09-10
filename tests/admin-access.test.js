import assert from "node:assert/strict";
import test from "node:test";

import middleware from "../middleware.js";
import {
  DEFAULT_ACCESS_STATE,
  normalizeUpdates,
  readAccessState,
  sectionForPath,
  writeAccessState,
} from "../server/access-control.js";
import {
  createSessionToken,
  parseCookies,
  verifyPassword,
  verifySessionToken,
} from "../server/admin-auth.js";

function withLocalEnvironment(callback) {
  const previous = {
    VERCEL: process.env.VERCEL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    ADMIN_SESSION_SECRET: process.env.ADMIN_SESSION_SECRET,
  };

  delete process.env.VERCEL;
  delete process.env.ADMIN_PASSWORD;
  delete process.env.ADMIN_SESSION_SECRET;
  delete globalThis[Symbol.for("vibecoding101.workshopAccessState")];

  return Promise.resolve(callback()).finally(() => {
    Object.entries(previous).forEach(([key, value]) => {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    });
    delete globalThis[Symbol.for("vibecoding101.workshopAccessState")];
  });
}

test("section routes cover current and archived workshop URLs", () => {
  assert.equal(sectionForPath("/pre-workshop/01-stack-setup/").id, "preWorkshop");
  assert.equal(sectionForPath("/day-1-new/03-setup/").id, "day1");
  assert.equal(sectionForPath("/day-1/02-tools-and-environment/").id, "day1");
  assert.equal(sectionForPath("/day-2-new/").id, "day2");
  assert.equal(sectionForPath("/day-3/05-agentic-workflows-and-subagents/").id, "day3");
  assert.equal(sectionForPath("/post-workshop/02-handbook-and-roadmap/").id, "postWorkshop");
  assert.equal(sectionForPath("/day-10/"), undefined);
  assert.equal(sectionForPath("/admin/"), undefined);
});

test("updates accept only known sections with boolean values", () => {
  assert.deepEqual(normalizeUpdates({ day1: false, day3: true }), {
    day1: false,
    day3: true,
  });
  assert.throws(() => normalizeUpdates({}), /At least one/);
  assert.throws(() => normalizeUpdates({ day4: false }), /valid section/);
  assert.throws(() => normalizeUpdates({ day1: "false" }), /boolean/);
});

test("local access changes are returned immediately and enforced by middleware", async () => {
  await withLocalEnvironment(async () => {
    assert.deepEqual((await readAccessState()).sections, DEFAULT_ACCESS_STATE);

    await writeAccessState({ day1: false });
    const blocked = await middleware(
      new Request("http://localhost/day-1-new/01-what-is-vibecoding/"),
    );
    const allowed = await middleware(
      new Request("http://localhost/day-2-new/01-the-plan/"),
    );

    assert.equal(blocked.status, 307);
    assert.match(blocked.headers.get("location"), /access-closed/);
    assert.match(blocked.headers.get("location"), /section=day1/);
    assert.equal(allowed, undefined);
  });
});

test("admin sessions require the requested password and reject tampering or expiry", async () => {
  await withLocalEnvironment(() => {
    assert.equal(verifyPassword("admin-workshop"), true);
    assert.equal(verifyPassword("wrong"), false);

    const issuedAt = Date.now();
    const token = createSessionToken(issuedAt);
    assert.equal(verifySessionToken(token, issuedAt + 1_000), true);
    assert.equal(verifySessionToken(token + "x", issuedAt + 1_000), false);
    assert.equal(verifySessionToken(token, issuedAt + 9 * 60 * 60 * 1_000), false);
  });
});

test("cookie parser preserves signed session token characters", () => {
  assert.deepEqual(parseCookies("theme=light; vibecoding101_admin=a.b_c-d; empty="), {
    theme: "light",
    vibecoding101_admin: "a.b_c-d",
    empty: "",
  });
});
