const assert = require("node:assert/strict");
const { createPublicAdapter, SEARCH_METHOD } = require("./atproto-public.js");
const { discover } = require("./index.js");

(async () => {
const requests = [];
const fakeResponse = {
  ok: true,
  status: 200,
  async json() {
    return {
      posts: [
        {
          uri: "at://did:plc:test/app.bsky.feed.post/abc",
          author: { did: "did:plc:test", handle: "example.test" },
          record: {
            text: "AI and #indie",
            createdAt: "2026-09-18T00:00:00Z",
            facets: [{
              features: [{ $type: "app.bsky.richtext.facet#tag", tag: "AI" }]
            }]
          }
        }
      ]
    };
  }
};

const adapter = createPublicAdapter({
  service: "https://public.example.test",
  allowCustomService: true,
  fetchImpl: async (url, init) => {
    requests.push({ url: String(url), init });
    return fakeResponse;
  }
});

const records = await adapter.searchPosts("AI", { limit: 3 });
assert.equal(records.length, 1);
assert.deepEqual(records[0].topics.sort(), ["ai", "indie"]);
assert.equal(requests.length, 1);
assert.equal(new URL(requests[0].url).pathname, SEARCH_METHOD);
assert.equal(new URL(requests[0].url).searchParams.get("q"), "AI");
assert.equal(requests[0].init.method, "GET");
assert.equal(requests[0].init.headers.accept, "application/json");
assert.ok(requests[0].init.signal instanceof AbortSignal);

let rejectedCustom = false;
try { createPublicAdapter({ service: "http://localhost:9999", fetchImpl: async () => fakeResponse }); }
catch (error) { rejectedCustom = /HTTPS/.test(error.message); }
assert.equal(rejectedCustom, true);

let rejectedUnapproved = false;
try { createPublicAdapter({ service: "https://other.example.test", fetchImpl: async () => fakeResponse }); }
catch (error) { rejectedUnapproved = /allowCustomService/.test(error.message); }
assert.equal(rejectedUnapproved, true);

const journey = await adapter.discoverTopic(
  "AI",
  discover,
  { communities: ["film"] },
  { limit: 3, now: new Date("2026-09-18T00:00:00Z"), ttlMs: 60000 }
);
assert.equal(journey.candidates[0].source, "public-appview");
assert.equal(journey.discoveries.length, 1);
assert.equal(journey.discoveries[0].signals[0].type, "shared_topic");

let threw = false;
try {
  await adapter.searchPosts("");
} catch (error) {
  threw = /topic is required/.test(error.message);
}
assert.equal(threw, true);

console.log("Pixie ATProto public adapter tests passed.");
})().catch(error => { console.error(error); process.exitCode = 1; });
