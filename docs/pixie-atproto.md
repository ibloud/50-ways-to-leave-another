# Pixie: Interdependence Layer for 50 Ways

## Thesis

**50 Ways maps the patterns of co-dependence. Interdependence defines the transition. Pixie operationalizes the transition on ATProto.**

Pixie is an ATProto-native guide for discovering people, conversations, communities, projects, and bridges without optimizing for attention, follower growth, or dependence on the guide.

> The less someone needs Pixie, the better Pixie has done its job.

## Three-act architecture

| Act | Layer | Question |
| --- | --- | --- |
| I — The Patterns | 50 Ways | What is happening? |
| II — The Transition | Interdependence / Pixie | What could happen instead? |
| III — The Network | ATmosphere / ATProto | How can the network make the alternative possible? |

Interdependence is **not** a 51st Way. It is the bridge from diagnosis to practice.

## Product primitives

### DISCOVER
Surface something the person would not otherwise have found: people, conversations, communities, feeds, and projects.

### CONTEXT
Explain why something was surfaced. A recommendation is an observation with provenance, not a declaration of truth.

### BRIDGE
Identify a useful connection between two people, conversations, topics, feeds, or communities.

### INTRODUCE
Offer a possible introduction when two parties may have something useful to exchange. Never connect people automatically.

### TOUR
Offer a bounded journey through the network rather than an infinite feed.

`your post → interesting person → their conversation → their community → related feed → another community → new conversation`

### RELEASE
Know when to step away. “You’ve got what you came for.” Release is a product behavior: the system should increase user agency rather than manufacture continued dependence.

## Behavioral rules

Pixie follows:

`OBSERVE → UNDERSTAND → SUGGEST`

not:

`OBSERVE → AUTOMATICALLY ACT`

Default action policy:

`DRAFT > ASK > ACT`

Pixie does not auto-follow, auto-post, auto-reply, manufacture engagement or disagreement, use FOMO, hide recommendation reasons, optimize endless sessions, equate popularity with value, or treat inferred interests as facts.

## Co-dependence → interdependence map

| Pattern | Alternative | Pixie behavior | ATProto expression |
| --- | --- | --- | --- |
| “You need me.” | “I can help you become capable.” | Surface another resource or person | discovery |
| “Don’t leave.” | “Come and go freely.” | Suggest paths outside the current community | feeds / discovery |
| “Engage with me.” | “Take what is useful.” | Reduce pressure to respond | preferences |
| “Everyone must agree.” | “Difference can be useful.” | Surface adjacent perspectives | discovery |
| “One person knows everything.” | “Knowledge is distributed.” | Find additional sources and people | social graph |
| “Stay in this community.” | “Cross-pollinate.” | Find bridges to other communities | community graph |
| “Follow me.” | “Find your people.” | Explain relevance rather than demand attention | discovery |
| “I need your attention.” | “We can exchange value.” | Prefer reciprocity over raw engagement | feedback |
| “The community needs me.” | “The community can function without me.” | Surface new contributors | community |
| “The algorithm decides.” | “You choose your path.” | Explain recommendations | inference + explanation |
| “Don’t lose your place.” | “You can return when useful.” | Preserve context without FOMO | bookmarks / tours |
| “More engagement = better.” | “More capacity = healthier.” | Look for meaningful connection | community signals |
| “I must manage everything.” | “Responsibility can circulate.” | Suggest handoffs | introduction |
| “People are my audience.” | “People are participants.” | Discover potential collaborators | social graph |
| “Don’t outgrow us.” | “Grow beyond us—and bring something back.” | Cross-community discovery | tours / bridges |

The complete 50-row mapping is the next content-layer build. Not every Way should become software; only rows with computable consequences should become product or protocol requirements.

## What Pixie can compose today

Pixie should begin by composing existing ATProto primitives rather than asking the protocol to adopt Pixie-specific primitives.

### 1. Social graph

ATProto applications can reuse existing social-graph records and RPCs such as `app.bsky.graph.getFollows`. Backlinks can expose records that point to a person or record. This gives Pixie a network of people and relationships without creating a second centralized social graph.

**Pixie use:** DISCOVER, BRIDGE, CONTEXT.

### 2. Firehose / Jetstream

The firehose provides authenticated network events; Jetstream provides a simpler JSON streaming interface with live and replay modes. Pixie can consume only the records it needs, build a bounded index, and discard data that is no longer useful.

**Pixie use:** discovery indexing, temporal context, community/topic detection.

### 3. Custom feeds

Custom feed generators already provide user-selectable algorithms through ATProto. A Pixie feed can therefore be an output surface rather than a new protocol concept.

**Pixie use:** DISCOVER and bounded TOUR entry points.

### 4. Lexicons

ATProto explicitly supports independent Lexicon namespaces for new record schemas and APIs. Pixie-specific records can therefore be experimented with under a Pixie namespace without requiring a change to the core protocol.

**Pixie use:** preferences, discovery provenance, introductions, tours, feedback.

### 5. Agents

ATProto supports bots/agents, but the ecosystem guidance makes opt-in interaction important. Pixie should use an agent only where the user has explicitly invited the interaction.

**Pixie use:** user-requested guidance, notifications, or bounded assistance — not unsolicited outreach.

### 6. Backlinks / ecosystem services

Existing community infrastructure such as Microcosm demonstrates that ATProto's public, addressable records can support graph queries and relationship discovery without every application maintaining an identical local mirror.

**Pixie use:** BRIDGE and CONTEXT, while avoiding unnecessary duplication.

## Initial public Lexicons

- `social.pixie.preference`
- `social.pixie.discovery`
- `social.pixie.introduction`
- `social.pixie.community`
- `social.pixie.tour`
- `social.pixie.feedback`

These are **candidate application schemas**, not requests for ATProto standardization.

Do **not** make `social.pixie.inference` public initially. Private/internal inference can remain ephemeral rather than becoming a durable social fact about a person.

Illustrative discovery record:

```json
{
  "$type": "social.pixie.discovery",
  "subject": "...",
  "reason": "shared_topic",
  "context": "...",
  "confidence": 0.72,
  "expiresAt": "..."
}
```

## Technical shape

```
ATProto firehose / Jetstream
        ↓
Pixie Index
  ├── people
  ├── conversations
  ├── communities
  ├── topics
  └── bridges
        ↓
Social Graph + backlinks
        ↓
Pixie Guide
  ├── Discover
  ├── Context
  ├── Bridge
  ├── Introduce
  ├── Tour
  └── Release
        ↓
ATProto outputs
  ├── custom feed
  ├── opt-in agent
  ├── Pixie Lexicons
  └── client UI
```

The index is an implementation detail, not a claim of ownership over the network's social graph.

## Data minimization and provenance

Pixie should prefer **derived, expiring observations** over permanent personality labels.

Every recommendation should be explainable in terms of observable network evidence where practical:

- shared topic or conversation
- mutual community participation
- explicit project relationship
- relevant feed membership
- recent interaction
- cross-community bridge
- user-stated preference

Inference should remain distinct from fact. A confidence value describes Pixie's uncertainty; it does not establish a truth about the person.

Pixie should support deletion, expiration, and re-computation of derived index data. It should not turn a temporary recommendation into a permanent reputation record.

## Evaluation

Do not reduce community health to one gamified score.

Useful signals include reciprocal conversations, meaningful new connections, diversity of connections, cross-community introductions, newcomer responses, conversation continuity, distributed contribution, knowledge transfer, successful handoffs, voluntary return, and user capability without Pixie.

Avoid optimizing for DAU, session duration, clicks, impressions, follower growth, or replies per user.

### Agency Gain

> **Can the person do something afterward that they previously needed Pixie to help them do?**

A successful Pixie interaction can therefore end with less Pixie.

## Positioning

Pixie is not an anti-growth system. The distinction is **capacity versus dependency**.

- Growth/optimization tools: “Help me grow what I’m doing.”
- Pixie: “Help me understand where I am and who or what I might discover.”

These can be complementary.

## First implementation sequence

1. Build the complete `50 Ways → Interdependence → Pixie → ATProto` matrix.
2. Build a read-only index using existing ATProto event streams and social-graph data.
3. Implement one concrete **DISCOVER** experience.
4. Add **CONTEXT** with provenance and expiration.
5. Expose the result as a simple custom feed or web view.
6. Prototype bounded **TOUR** paths.
7. Add **BRIDGE** and **INTRODUCE** flows with explicit consent.
8. Add **RELEASE** behavior and measure Agency Gain.
9. Only after real usage, evaluate which Pixie Lexicons are necessary and whether any deserve broader ecosystem discussion.

## Ecosystem fit

The current ATProto ecosystem demonstrates a pattern worth following: community projects are often surfaced **in the context of the technical capability they implement**, rather than through a single permanent directory.

Pixie should therefore earn ecosystem visibility through working implementation:

```
50 Ways
    ↓
Pixie specification
    ↓
ATProto implementation
    ↓
working feed / service / client
    ↓
real interoperability
    ↓
community discussion
    ↓
possible documentation or showcase reference
```

The goal is not to ask ATProto to endorse Pixie. The goal is to make Pixie useful enough that other builders can reuse, critique, fork, or replace parts of it.

## Public-build principle

**Build Pixie on ATProto first; do not ask ATProto to adopt Pixie first.**

The repository is the canonical public-safe record of the concept, constraints, experiments, and implementation decisions. Human contributors retain authorship, consent, credit, and final judgment.
