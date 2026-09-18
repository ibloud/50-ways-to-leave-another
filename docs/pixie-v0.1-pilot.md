# Pixie v0.1 Pilot — Verification and Open Questions

## Purpose

This document records what is actually implemented and what still needs outside verification. It is intentionally limited to the existing Pixie v0.1 build structure.

## IMPLEMENTED

- Read-only Pixie discovery engine.
- Public Bluesky AppView adapter for `app.bsky.feed.searchPosts`.
- Public topic/hashtag extraction.
- Provenance/context output.
- Confidence and expiry fields in the discovery model.
- Dismissal, bounded Tour, and Release primitives.
- HTTPS-only adapter validation.
- Explicit opt-in for custom service endpoints.
- No credentials in service URLs.
- Request timeout support.
- Static web demo at `pixie/demo/` using the public AppView endpoint.
- Dependency-free Node test entry points.
- GitHub Actions CI for the Pixie v0.1 test suite.

## VERIFIED IN REPOSITORY

- Core and adapter tests are present and are now configured to run in GitHub Actions.
- The demo is intentionally read-only and contains no authentication or write path.
- The public-facing experiment explicitly distinguishes inference from fact and provides dismissal/stop behavior.
- No claim is made here that Pixie is an official ATProto or Bluesky project.

## STILL REQUIRES EXTERNAL VERIFICATION

These are not being represented as completed:

1. GitHub Actions run passes on the current branch/merge commit.
2. GitHub Pages serves `pixie/demo/` correctly after publication.
3. A real browser can reach the public ATProto endpoint from the hosted page.
4. Multiple independent testers can use the demo successfully.
5. Recommendation quality, wrongness, serendipity, cluster reinforcement, popularity bias, and accidental profiling have been evaluated with real users.
6. The prototype has been reviewed by ATProto ecosystem participants.

## PILOT QUESTIONS

Please test only these questions at this stage:

- Does DISCOVER return useful public records?
- Is the reason for each result understandable and honest?
- Does Pixie make incorrect assumptions that a user could mistake for facts?
- Does the experience help someone find something outside their immediate context?
- Can the user dismiss a result and stop without pressure?
- Does the bounded experience feel useful without becoming an engagement loop?

## NON-GOALS FOR THIS PILOT

No auto-follow, auto-post, auto-reply, automatic introductions, private-data scraping, durable public personality/inference records, follower-growth optimization, infinite tours, or autonomous outreach.

## STATUS VOCABULARY

Use **IMPLEMENTED** for code that exists, **VERIFIED** only for behavior confirmed by a repeatable test or external observation, **OBSERVED** for pilot findings, and **NOT VERIFIED** where evidence is still missing.

## Community handoff

The remaining verification work belongs with people who can run the hosted page, inspect the behavior in real browsers, and assess interoperability in the ATProto ecosystem. This repository is intentionally asking for help rather than presenting those questions as solved.
