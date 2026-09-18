/**
 * Pixie v0.1 — read-only public ATProto/AppView adapter.
 *
 * This adapter is deliberately separate from discovery logic. It uses public
 * XRPC reads only and returns normalized records that the Pixie engine can
 * reason over. It never authenticates, writes, follows, posts, replies, or
 * contacts users.
 *
 * The default service is Bluesky's public AppView. The core interface is
 * service-agnostic so another ATProto AppView/service can be supplied later.
 */

const DEFAULT_SERVICE = "https://public.api.bsky.app";
const SEARCH_METHOD = "/xrpc/app.bsky.feed.searchPosts";

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

function unique(values) {
  return [...new Set(values.map(normalize).filter(Boolean))];
}

function tagsFromPost(post) {
  const tags = (post?.record?.facets ?? [])
    .flatMap(facet => facet.features ?? [])
    .filter(feature => feature?.$type === "app.bsky.richtext.facet#tag")
    .map(feature => feature.tag);
  const textTags = String(post?.record?.text ?? "").match(/#[\p{L}\p{N}_-]+/gu) ?? [];
  return unique([...tags, ...textTags.map(tag => tag.slice(1))]);
}

function normalizeSearchResult(post, explicitTopics = []) {
  const uri = post?.uri;
  if (!uri) return null;

  const authorDid = post?.author?.did;
  const authorHandle = post?.author?.handle;
  const topics = unique([...explicitTopics, ...tagsFromPost(post)]);

  return {
    id: uri,
    uri,
    author: {
      did: authorDid ?? null,
      handle: authorHandle ?? null
    },
    text: String(post?.record?.text ?? ""),
    createdAt: post?.record?.createdAt ?? null,
    topics,
    communities: [],
    projects: [],
    source: "public-appview"
  };
}

/**
 * Create a read-only public adapter.
 *
 * fetchImpl is injectable for deterministic tests. In production it defaults
 * to globalThis.fetch.
 */
function validateService(value, allowCustomService) {
  const url = new URL(String(value));
  if (url.protocol !== "https:") throw new Error("ATProto service must use HTTPS.");
  if (url.username || url.password) throw new Error("ATProto service must not contain credentials.");
  if (!allowCustomService && url.origin !== DEFAULT_SERVICE) {
    throw new Error("Custom ATProto services require allowCustomService: true.");
  }
  return url.origin;
}

function createPublicAdapter(options = {}) {
  const requestedService = String(options.service ?? DEFAULT_SERVICE).replace(/\/$/, "");
  const service = validateService(requestedService, options.allowCustomService === true);
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  const timeoutMs = Number.isFinite(options.timeoutMs) ? Math.max(1000, options.timeoutMs) : 10000;
  if (typeof fetchImpl !== "function") {
    throw new Error("A fetch implementation is required.");
  }

  async function searchPosts(topic, options = {}) {
    const q = String(topic ?? "").trim();
    if (!q) throw new Error("topic is required");

    const limit = Math.min(100, Math.max(1, Number(options.limit) || 20));
    const url = new URL(SEARCH_METHOD, service);
    url.searchParams.set("q", q);
    url.searchParams.set("limit", String(limit));

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let response;
    try {
      response = await fetchImpl(url, {
        method: "GET",
        headers: { accept: "application/json" },
        signal: controller.signal
      });
    } finally {
      clearTimeout(timer);
    }

    if (!response.ok) {
      throw new Error(`ATProto public search failed: HTTP ${response.status}`);
    }

    const payload = await response.json();
    return (payload.posts ?? [])
      .map(post => normalizeSearchResult(post, [q]))
      .filter(Boolean);
  }

  async function discoverTopic(topic, discover, start = {}, options = {}) {
    const candidates = await searchPosts(topic, options);
    const normalizedStart = {
      id: start.id ?? `topic:${normalize(topic)}`,
      topics: unique([topic, ...(start.topics ?? [])]),
      communities: start.communities ?? [],
      projects: start.projects ?? []
    };

    return {
      start: normalizedStart,
      candidates,
      discoveries: discover(normalizedStart, candidates, options)
    };
  }

  return Object.freeze({ searchPosts, discoverTopic });
}

module.exports = {
  DEFAULT_SERVICE,
  SEARCH_METHOD,
  createPublicAdapter,
  normalizeSearchResult
};
