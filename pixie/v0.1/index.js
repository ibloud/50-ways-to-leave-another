/**
 * Pixie v0.1.0 — read-only Discover engine.
 * No network client and no autonomous actions.
 */
const DEFAULT_TTL_MS = 24 * 60 * 60 * 1000;
function normalize(value) { return String(value ?? "").trim().toLowerCase(); }
function setOf(values = []) { return new Set(values.map(normalize).filter(Boolean)); }
function overlap(a, b) { let n = 0; for (const value of a) if (b.has(value)) n++; return n; }
function evidence(type, detail, source) { return { type, detail, source }; }

function discover(start, candidates = [], options = {}) {
  const now = options.now instanceof Date ? options.now : new Date();
  const ttlMs = Number.isFinite(options.ttlMs) ? options.ttlMs : DEFAULT_TTL_MS;
  const limit = Number.isFinite(options.limit) ? Math.max(1, options.limit) : 5;
  const startTopics = setOf(start?.topics);
  const startCommunities = setOf(start?.communities);
  const startProjects = setOf(start?.projects);

  return candidates
    .filter(candidate => candidate?.id && candidate.id !== start?.id)
    .map(candidate => {
      const topics = setOf(candidate.topics);
      const communities = setOf(candidate.communities);
      const projects = setOf(candidate.projects);
      const topicOverlap = overlap(startTopics, topics);
      const communityOverlap = overlap(startCommunities, communities);
      const projectOverlap = overlap(startProjects, projects);
      const adjacentCommunity = communityOverlap === 0 && topicOverlap > 0 && communities.size > 0;
      const signals = [];
      let raw = 0;
      if (topicOverlap) {
        raw += Math.min(topicOverlap, 3) * 0.30;
        signals.push(evidence("shared_topic", topicOverlap + " shared topic" + (topicOverlap === 1 ? "" : "s"), candidate.uri ?? candidate.id));
      }
      if (projectOverlap) {
        raw += Math.min(projectOverlap, 2) * 0.25;
        signals.push(evidence("shared_project_context", projectOverlap + " shared project context" + (projectOverlap === 1 ? "" : "s"), candidate.uri ?? candidate.id));
      }
      if (adjacentCommunity) {
        raw += 0.25;
        signals.push(evidence("adjacent_community", "related topic in a different community", candidate.uri ?? candidate.id));
      }
      if (communityOverlap) {
        raw += 0.10;
        signals.push(evidence("shared_community", communityOverlap + " shared communit" + (communityOverlap === 1 ? "y" : "ies"), candidate.uri ?? candidate.id));
      }
      if (!signals.length) return null;
      return {
        subject: candidate.uri ?? candidate.id,
        confidence: Math.min(0.99, Number(raw.toFixed(2))),
        expiresAt: new Date(now.getTime() + ttlMs).toISOString(),
        signals,
        context: "Surfaced because " + signals.map(s => s.detail).join("; ") + ". This is an inference from public context and may be wrong.",
        _rank: raw
      };
    })
    .filter(Boolean)
    .sort((a, b) => b._rank - a._rank)
    .slice(0, limit)
    .map(({ _rank, ...result }) => result);
}
function dismiss(discoveryState, subject) {
  return { ...discoveryState, dismissed: [...new Set([...(discoveryState.dismissed ?? []), subject])] };
}
function release() {
  return { status: "released", message: "You found what you came for.", autonomousAction: false };
}
function tour(start, steps, maxSteps = 5) {
  const bound = Math.max(1, maxSteps);
  return { start, steps: steps.slice(0, bound), bounded: true, maxSteps: bound };
}
module.exports = { discover, dismiss, release, tour };
