import { getCache } from "@vercel/functions";

const LOCAL_STATE_KEY = Symbol.for("vibecoding101.workshopAccessState");
const CACHE_KEY = "workshop-access-v1";
const CACHE_TTL_SECONDS = 31 * 24 * 60 * 60;
const runtimeCache = getCache({ namespace: "vibecoding101" });

export const SECTION_DEFINITIONS = Object.freeze([
  {
    id: "preWorkshop",
    label: "Pre-workshop",
    description: "Setup, accounts, and API key preparation",
    paths: ["/pre-workshop"],
  },
  {
    id: "day1",
    label: "Day 1",
    description: "Your first app",
    paths: ["/day-1-new", "/day-1"],
  },
  {
    id: "day2",
    label: "Day 2",
    description: "Build your idea",
    paths: ["/day-2-new", "/day-2"],
  },
  {
    id: "day3",
    label: "Day 3",
    description: "Make it real",
    paths: ["/day-3-new", "/day-3"],
  },
  {
    id: "postWorkshop",
    label: "Post-workshop",
    description: "Handbook and next steps",
    paths: ["/post-workshop"],
  },
]);

export const DEFAULT_ACCESS_STATE = Object.freeze(
  Object.fromEntries(SECTION_DEFINITIONS.map(({ id }) => [id, true])),
);

function isVercelRuntime() {
  return process.env.VERCEL === "1";
}

function localStore() {
  if (!globalThis[LOCAL_STATE_KEY]) {
    globalThis[LOCAL_STATE_KEY] = {
      sections: { ...DEFAULT_ACCESS_STATE },
      updatedAt: null,
    };
  }
  return globalThis[LOCAL_STATE_KEY];
}

function normalizeStoredState(storedSections = {}) {
  return Object.fromEntries(
    SECTION_DEFINITIONS.map(({ id }) => [
      id,
      typeof storedSections[id] === "boolean"
        ? storedSections[id]
        : DEFAULT_ACCESS_STATE[id],
    ]),
  );
}

export function normalizeUpdates(updates) {
  if (!updates || typeof updates !== "object" || Array.isArray(updates)) {
    throw new TypeError("Updates must be an object.");
  }

  const allowedIds = new Set(SECTION_DEFINITIONS.map(({ id }) => id));
  const normalized = {};

  for (const [id, enabled] of Object.entries(updates)) {
    if (!allowedIds.has(id) || typeof enabled !== "boolean") {
      throw new TypeError("Each update must use a valid section and a boolean value.");
    }
    normalized[id] = enabled;
  }

  if (Object.keys(normalized).length === 0) {
    throw new TypeError("At least one section update is required.");
  }

  return normalized;
}

export function sectionForPath(pathname) {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  return SECTION_DEFINITIONS.find(({ paths }) =>
    paths.some(
      (prefix) =>
        normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
    ),
  );
}

export async function readAccessState() {
  if (!isVercelRuntime()) {
    const state = localStore();
    return {
      sections: { ...state.sections },
      updatedAt: state.updatedAt,
      configured: true,
      storage: "local",
    };
  }

  try {
    const stored = await runtimeCache.get(CACHE_KEY);

    return {
      sections: normalizeStoredState(stored?.sections),
      updatedAt: typeof stored?.updatedAt === "string" ? stored.updatedAt : null,
      configured: true,
      storage: "runtime-cache",
    };
  } catch (error) {
    console.error("Unable to read workshop access state", error);
    return {
      sections: { ...DEFAULT_ACCESS_STATE },
      updatedAt: null,
      configured: true,
      storage: "runtime-cache-unavailable",
    };
  }
}

export async function writeAccessState(rawUpdates) {
  const updates = normalizeUpdates(rawUpdates);

  if (!isVercelRuntime()) {
    const state = localStore();
    state.sections = { ...state.sections, ...updates };
    state.updatedAt = new Date().toISOString();
    return {
      sections: { ...state.sections },
      updatedAt: state.updatedAt,
      configured: true,
      storage: "local",
    };
  }

  const current = await readAccessState();
  const updatedAt = new Date().toISOString();
  const sections = { ...current.sections, ...updates };
  await runtimeCache.set(
    CACHE_KEY,
    { sections, updatedAt },
    {
      name: "Workshop section access",
      tags: ["workshop-access"],
      ttl: CACHE_TTL_SECONDS,
    },
  );

  return {
    sections,
    updatedAt,
    configured: true,
    storage: "runtime-cache",
  };
}
