# Pixie Discover — V0 Read-Only Prototype

This is the first implementation target for Pixie v0.1.0.

## Goal

Demonstrate one complete, non-autonomous Pixie journey using existing ATProto primitives:

**DISCOVER → CONTEXT → optional TOUR → RELEASE**

The prototype does not publish, follow, reply, introduce, or otherwise act on behalf of a person.

## Inputs

The discovery service may consume:

- public ATProto records;
- authenticated event streams available through Firehose / Jetstream;
- public social-graph relationships;
- user-provided interests or explicit starting records.

The implementation should use the minimum data required for the requested discovery task.

## Candidate scoring model

Pixie should not produce a universal "best" score.

For a requested starting context, candidate relevance can be composed from explainable signals such as:

- shared topic;
- shared or adjacent community;
- conversation relationship;
- project relationship;
- recency;
- cross-community distance;
- explicit user preference.

Each signal must remain inspectable. A numeric confidence is uncertainty about Pixie's own inference, not a claim about the person.

Illustrative internal representation:

```json
{
  "subject": "at://...",
  "signals": [
    {"type": "shared_topic", "evidence": "record:..."},
    {"type": "adjacent_community", "evidence": "community:..."}
  ],
  "confidence": 0.72,
  "expiresAt": "..."
}
```

## Context response

Every surfaced item should be accompanied by a concise explanation:

> **Why this?** You discussed X. This conversation discusses X in a different community. The connection is inferred from public records and may be wrong.

The UI must provide:

- inspect evidence;
- dismiss;
- explore;
- stop.

## Bounded Tour

A Tour is finite. The prototype should cap the number of steps and expose the path before or while navigating it.

Example:

```
Starting post
  ↓
Related conversation
  ↓
Person participating there
  ↓
Their community
  ↓
Related project/feed
  ↓
STOP
```

The prototype must never require continued navigation to preserve context.

## Release

Release is a first-class state.

When the user stops, Pixie should preserve only what is necessary for an intentional return and should not generate a new recommendation merely to prolong the session.

Success can be:

> "You found what you came for."

## Acceptance criteria

A V0 implementation is complete when a developer can:

1. provide a public starting ATProto record or explicit topic;
2. retrieve a small candidate set from public ATProto data;
3. identify at least one candidate outside the immediate starting context;
4. display the observable evidence for the recommendation;
5. distinguish evidence from inference;
6. expire or refresh derived discovery data;
7. dismiss a candidate;
8. follow a bounded Tour;
9. stop without a replacement engagement prompt;
10. run the flow without autonomous external actions.

## Explicit non-goals

V0 does not:

- auto-follow;
- auto-post;
- auto-reply;
- send introductions;
- scrape private data;
- create public personality/inference records;
- optimize for clicks, impressions, session length, or follower growth;
- claim that a recommended person is "compatible";
- contact people merely because Pixie inferred relevance.

## Developer test scenarios

### A. Adjacent community
Input: a public post about a topic.

Expected: Pixie finds a related discussion in another community, explains the relationship, and offers a finite tour.

### B. Distributed expertise
Input: a question with one obvious source.

Expected: Pixie surfaces additional independent public sources and explains why each is relevant.

### C. Collaborator candidate
Input: an explicit request to find collaborators for a public project.

Expected: Pixie identifies public project contexts with relevant overlap and offers a draft introduction. No message is sent automatically.

### D. Wrong recommendation
Input: user dismisses a recommendation.

Expected: Pixie removes it from the current journey and does not repeatedly resurface the same item merely to recover engagement.

### E. Release
Input: user selects Stop.

Expected: the journey ends cleanly.

## Next implementation layer

After this read-only prototype works:

1. package the discovery output as a custom feed or web view;
2. add explicit user preferences;
3. add bounded Tour persistence;
4. prototype Bridge;
5. add consent-gated Introduce;
6. measure Agency Gain;
7. evaluate whether any candidate Pixie Lexicon should become durable application infrastructure.
