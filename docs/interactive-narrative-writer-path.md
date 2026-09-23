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

## Repository handoff

The case-study repository is:

**Inpatient Corridors: The Yellow Door**  
https://github.com/ibloud/inpatient-corridors-review

Its own training cross-reference is maintained in `TRAINING-INTEGRATION.md`.

The 50 Ways curriculum remains the canonical learning-path index; this document supplies the interactive-narrative specialization without changing the project's existing landing-page structure.