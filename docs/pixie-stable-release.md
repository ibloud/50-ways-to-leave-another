# Pixie Stable Release — v0.1.0

## Release status

**Pixie v0.1.0 is the stable public architecture and application-schema release.**

This release does not claim that a production Pixie service, feed, agent, or client is already deployed. It freezes the public architecture, behavioral contract, use-case model, and candidate application schemas so implementation can proceed without changing the conceptual contract underneath it.

## Current Pixie architecture

```
                         ATProto network
                              │
              ┌───────────────┴────────────────┐
              │                                │
       Firehose / Jetstream              Public records
              │                                │
              └───────────────┬────────────────┘
                              ↓
                        PIXIE INDEX
                 ┌────────────┼────────────┐
                 ↓            ↓            ↓
              People       Topics      Communities
                 │            │            │
                 └────────────┼────────────┘
                              ↓
                    Social graph / backlinks
                              │
                              ↓
                         PIXIE GUIDE
      ┌─────────┬─────────┬────────┬──────────┬────────┬─────────┐
      │DISCOVER │ CONTEXT │ BRIDGE │INTRODUCE │  TOUR  │ RELEASE │
      └─────────┴─────────┴────────┴──────────┴────────┴─────────┘
                              │
                              ↓
                     ATProto outputs
              ┌───────────────┼────────────────┐
              ↓               ↓                ↓
         Custom feed     Opt-in agent     Client / web UI
                              │
                              ↓
                         User agency

                 OBSERVE → UNDERSTAND → SUGGEST
                          DRAFT > ASK > ACT
```

### Architectural boundaries

1. **ATProto remains the network substrate.** Pixie does not create a replacement social graph.
2. **The index is an implementation detail.** It does not claim ownership of ATProto identity or relationships.
3. **Recommendations carry provenance.** A recommendation is an observation with context, not a statement of fact.
4. **Inference is private and revisable.** No public `social.pixie.inference` record is defined in v0.1.0.
5. **Actions require agency.** Pixie may draft or suggest; consequential actions require user authorization.
6. **Release is a feature.** A successful interaction can end with the user no longer needing Pixie.
7. **Existing primitives come first.** New protocol requirements are deferred until real implementation demonstrates a need.

## Core use cases

### 1. Find a conversation outside your usual neighborhood

**Situation:** Someone is participating in an AI conversation and wants to discover adjacent communities rather than receive more of the same.

**Pixie path:** DISCOVER → CONTEXT → TOUR

**Example:** Pixie surfaces a conversation from a neighboring community, explains that it shares a topic but comes from a different community, then offers a bounded path to explore it.

**Interdependence outcome:** discovery expands the person's network rather than increasing dependence on one feed or community.

### 2. Find a collaborator

**Situation:** A creator or open-source contributor needs a collaborator with a specific interest or capability.

**Pixie path:** DISCOVER → CONTEXT → BRIDGE → INTRODUCE

**Example:** Pixie identifies two public project contexts with overlapping interests, explains the evidence, and drafts an introduction. Neither person is contacted until authorized.

**Interdependence outcome:** Pixie helps people connect directly; it does not become the relationship.

### 3. Cross-pollinate communities

**Situation:** A community has a recurring topic but few connections outside itself.

**Pixie path:** BRIDGE → TOUR

**Example:** Pixie identifies a related discussion in another community and proposes a short tour showing the connection.

**Interdependence outcome:** knowledge and participation circulate rather than becoming captive to one community.

### 4. Explain “Why am I seeing this?”

**Situation:** A person encounters a recommendation and wants to understand its basis.

**Pixie path:** CONTEXT

**Example:** “This appeared because you participated in X and this conversation discusses Y; the connection is inferred and may be wrong.”

**Interdependence outcome:** the person can accept, reject, or investigate the recommendation instead of treating the algorithm as an authority.

### 5. Get unstuck without outsourcing judgment

**Situation:** A person asks Pixie where to go next.

**Pixie path:** DISCOVER → CONTEXT → SUGGEST

**Example:** Pixie offers three materially different paths: a person, a community, and a project. The person chooses.

**Interdependence outcome:** Pixie increases navigational capacity without choosing the person's destination.

### 6. Return without FOMO

**Situation:** Someone wants to leave a network journey and preserve the useful context.

**Pixie path:** TOUR → RELEASE

**Example:** Pixie records the user's chosen stopping point and says, in effect, “You have what you came for.”

**Interdependence outcome:** leaving is treated as a normal successful state, not a lost engagement opportunity.

### 7. Discover distributed expertise

**Situation:** A question appears to have one dominant source, but useful knowledge may exist elsewhere.

**Pixie path:** DISCOVER → BRIDGE → CONTEXT

**Example:** Pixie surfaces independent discussions or practitioners and explains the relationship between them.

**Interdependence outcome:** authority and knowledge remain distributed.

### 8. Help a newcomer enter a community

**Situation:** A newcomer sees an active community but lacks context.

**Pixie path:** CONTEXT → TOUR → RELEASE

**Example:** Pixie provides a short orientation through relevant conversations, norms, and people, then stops.

**Interdependence outcome:** the newcomer gains enough context to navigate without a permanent guide.

### 9. Hand off responsibility

**Situation:** One person is carrying too much coordination work.

**Pixie path:** BRIDGE → INTRODUCE

**Example:** Pixie identifies a person already working in the relevant area and drafts a handoff rather than keeping the original coordinator central.

**Interdependence outcome:** capability and responsibility circulate.

### 10. Find a project worth contributing to

**Situation:** Someone wants to contribute but does not know where their skills fit.

**Pixie path:** DISCOVER → CONTEXT → BRIDGE

**Example:** Pixie surfaces a project, explains the connection to the person's stated interest, and identifies an appropriate public contribution path.

**Interdependence outcome:** the person develops a relationship with the project directly.

## What Pixie deliberately does not do

- No automatic follows, posts, replies, introductions, or engagement.
- No follower-growth optimization.
- No popularity-as-value ranking.
- No manufactured disagreement or scarcity.
- No FOMO loops or endless-session optimization.
- No hidden recommendation rationale.
- No durable public personality/inference record in v0.1.0.
- No GitHub-derived people-prospecting or unsolicited outreach.
- No claim that Pixie is an official ATProto or Bluesky project.

## v0.1.0 implementation contract

### Required first implementation

A conforming v0.1.0 prototype should be able to:

1. ingest a bounded stream of ATProto events;
2. index public records needed for discovery;
3. produce at least one Discover result;
4. attach a human-readable provenance/context explanation;
5. expose an expiration or refresh policy for derived observations;
6. let the user reject or ignore a recommendation;
7. avoid autonomous consequential actions;
8. expose a bounded Tour;
9. provide a Release state;
10. log enough information to evaluate Agency Gain without optimizing attention metrics.

### Deferred

The following remain intentionally outside the stable release:

- protocol-wide Pixie standardization;
- public inference/personality records;
- automated introductions;
- autonomous outreach;
- a universal community-health score;
- a centralized Pixie-owned social graph;
- follower-growth or engagement optimization.

## Stable release test

The release is successful when another developer can read this document and answer:

- What does Pixie do?
- What existing ATProto primitives does it compose?
- What does Pixie refuse to automate?
- Why was a recommendation made?
- Where does user consent enter?
- How can a user leave?
- What evidence would show increased agency?

If those answers change, the public architecture version should change with them.

## Release principle

**Build Pixie on ATProto first; do not ask ATProto to adopt Pixie first.**

The purpose of v0.1.0 is to make the implementation contract clear enough for independent builders to critique, fork, replace, or extend parts of Pixie without needing permission from Pixie itself.
