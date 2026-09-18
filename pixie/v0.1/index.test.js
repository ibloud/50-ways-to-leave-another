import assert from "node:assert/strict";
import { discover, dismiss, release, tour } from "./index.js";

const start = { id: "post:start", topics: ["AI", "music"], communities: ["film"], projects: ["50-ways"] };
const candidates = [
  { id: "post:adjacent", uri: "at://did:plc:example/app.bsky.feed.post/1", topics: ["ai"], communities: ["indie-tech"], projects: [] },
  { id: "post:unrelated", topics: ["gardening"], communities: ["plants"], projects: [] }
];

const results = discover(start, candidates, { now: new Date("2026-09-18T00:00:00Z"), ttlMs: 60000 });
assert.equal(results.length, 1);
assert.equal(results[0].subject, candidates[0].uri);
assert.ok(results[0].signals.some(s => s.type === "adjacent_community"));
assert.equal(results[0].expiresAt, "2026-09-18T00:01:00.000Z");
assert.match(results[0].context, /may be wrong/);

const state = dismiss({ dismissed: [] }, results[0].subject);
assert.deepEqual(state.dismissed, [results[0].subject]);

const bounded = tour("post:start", ["a", "b", "c", "d"], 2);
assert.deepEqual(bounded.steps, ["a", "b"]);
assert.equal(bounded.bounded, true);

assert.deepEqual(release(), { status: "released", message: "You found what you came for.", autonomousAction: false });
console.log("Pixie v0.1 tests passed.");
