# Interactive Narrative Writer Path

This is the interactive-narrative branch of the 50 Ways independent learning pathway.

The path uses **[Inpatient Corridors: The Yellow Door](https://github.com/ibloud/inpatient-corridors-review)** as a concrete case study. Learners study the repository as an example of how a narrative writer can move from branching-story design to a playable browser implementation.

## Why this case study

The Yellow Door provides a compact, inspectable example of:

- branching choices and converging paths;
- story state represented by variables;
- conditional narrative and consequences;
- midpoint reframing;
- multiple ending conditions;
- playtesting and narrative QA;
- accessibility and non-clinical boundaries;
- provenance, rights, and production documentation.

The case study is **independent educational material**. It does not imply affiliation, endorsement, participation, or permission from any third party referenced by the project.

## What the Ink / interactive track covers

This track can be used from several roles without creating a separate production permission or access path:

| Use case | What the learner studies | Evidence of work |
| --- | --- | --- |
| Interactive writer | Choices, knots/stitches, variables, conditional text, convergence, endings | Ink source + state map |
| Narrative designer | Pacing, branch shape, consequence visibility, midpoint/reframe, replay paths | Branch map + playtest notes |
| Producer | Source → compile → runtime → browser handoff, versions, ownership, delivery | Handoff/checklist record |
| Narrative QA | Branch coverage, restart behavior, state changes, ending conditions, regression checks | Test matrix + issue log |
| Accessibility reviewer | Linear rendering, keyboard use, low-demand participation, readable choice structure | Accessibility review |
| Rights/provenance reviewer | Original source boundaries, credits, permissions, disclosure, correction/withdrawal records | Rights/provenance checklist |
| Creative/technical learner | How an Ink story becomes a browser experience without coupling story text to UI | Small original browser-ready exercise |

The same source can therefore support writing, design, production, QA, and review exercises. The track does **not** grant repository permissions, contributor status, collaboration rights, or rights to third-party material.

## Writer path

### 1. Learn the narrative language

Start with the concepts behind Ink:

- knots and stitches;
- choices;
- variables;
- conditional text;
- state and consequences;
- branching and convergence.

The goal is narrative control, not programming fluency.

### 2. Read the Yellow Door source

Open the `interactive/yellow-door/story/` directory in the Inpatient Corridors repository.

Trace:

1. where the story begins;
2. where the player is offered choices;
3. which variables change;
4. where those variables affect later text;
5. where branches converge;
6. how the story determines an ending.

Write a short state map before changing anything.

### 3. Work like a narrative writer

Make one controlled change at a time:

- revise a passage;
- add or revise a choice;
- introduce a consequence;
- alter a conditional;
- test a convergence point;
- document the intended player experience.

Then play through the affected path and at least one neighboring path.

### 4. Understand the production handoff

Learn the stable conceptual pipeline:

**Ink source → compiled story data → JavaScript runtime → browser experience**

For this path:

- **Ink** is the writer-facing narrative language.
- **Inky** is an authoring/preview environment.
- **inkjs** is the JavaScript runtime used to run Ink stories in web contexts.
- Compiled story data separates narrative content from the browser interface.

The training objective is to understand the handoff. Learners do not need to reproduce the repository's deployment machinery from scratch.

### 5. Playtest the narrative

Use the Yellow Door playtest materials to examine:

- clarity of choices;
- pacing;
- whether choices feel meaningfully different;
- whether consequences are legible;
- whether the ending reflects prior decisions;
- whether any section feels repetitive;
- accessibility and low-demand participation.

Record observations rather than assuming that a branch is successful because it compiles.

### 6. Build a small original story

After the case study, create a short Ink narrative of your own.

Minimum exercise:

- 3–5 meaningful choices;
- at least one state variable;
- one conditional consequence;
- one convergence point;
- two possible endings;
- a short playtest note.

Keep the exercise original and rights-safe. Do not begin by adapting private, disputed, or uncleared material.

## Current implementation map

The repositories currently demonstrate two different levels of readiness:

### Playable / compiled case study

**Inpatient Corridors: The Yellow Door** contains:

- the `.ink` narrative source;
- compiled story JSON;
- a browser runtime using `inkjs`;
- a GitHub Actions build/verification path;
- browser-facing documentation and accessibility-oriented review material.

Its current conceptual pipeline is:

**`.ink` → compiled `.json` → local `inkjs` runtime → browser UI**

This is the implementation to study when the exercise requires a real compile/runtime handoff.

### Source-only 50 Ways music/Ink pilot

The `proposal/ink-music-chapter-pilot` material in **50 Ways to Leave Another** is different. It is explicitly a fictional, source-only pilot: the Ink source and creative brief describe possible music/interactive use, but they do not constitute a playable production release, sponsor agreement, music release, distributor delivery, or production integration.

That distinction is part of the training: **a source file is not the same thing as a compiled release, a cleared recording, or an implemented player.**

No narrator/audio track is treated as implemented merely because a track brief or Ink source exists. Any future audio use remains subject to its own rights, credits, and implementation checks.

## Controlled training boundary

This specialization is additive documentation and training material. It does not:

- change game rules or endings;
- bypass event or participant gates;
- grant Discord access;
- create contributor status;
- change Pixie controls;
- alter safety or provenance lockouts;
- grant permission to reuse third-party music, likenesses, writing, recordings, or other protected material;
- turn a proposal/source-only pilot into a production claim.

Learners should work from original, public-safe materials and stop for qualified review when a legal, rights, consent, safeguarding, or accessibility question requires it.

## Suggested assessment

A learner can demonstrate the track by submitting:

1. a one-page branch/state map;
2. a small original `.ink` story;
3. a compile or browser-playtest record;
4. a branch/ending test matrix;
5. an accessibility check;
6. a short rights/provenance note;
7. a brief reflection on one revision made after playtesting.

Completion demonstrates process literacy. It is not professional certification, rights clearance, contributor status, or permission to publish someone else's material.

## Repository handoff

The case-study repository is:

**Inpatient Corridors: The Yellow Door**  
https://github.com/ibloud/inpatient-corridors-review

Its own training cross-reference is maintained in `TRAINING-INTEGRATION.md`.

The 50 Ways curriculum remains the canonical learning-path index; this document supplies the interactive-narrative specialization without changing the project's existing landing-page structure.