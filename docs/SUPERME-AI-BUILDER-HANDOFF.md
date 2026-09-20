# SuperMe.ai Builder Handoff

**Source:** SuperMe.ai handoff materials supplied to this repository  
**Project:** 50 Ways to Leave Another  
**Author:** Dominique Devereaux / Loptr Lab  
**Date:** 2026-09-20

## Purpose

This file turns the SuperMe.ai handoff into a contributor-facing routing document. It does not replace the project's existing architecture, legal packet, or repository policies.

The project is described as a transparent, music-first IP development ecosystem spanning music, screen, education, provenance/rights tracking, PIXIE, and the Paragon ReBorn game-development sandbox.

## Three-layer build boundary

### Layer 1 — Provenance

The foundational primitive is attributable provenance: creative work must be tied to a specific identity at a specific point in time.

Builder verification questions:
- Does the clearance/revenue validity check return the expected result for a cleared gate?
- Does the conflict-set model prevent silent resolution by the party that created the dispute?
- Can representation status change without an attributable event carrying new evidence?

### Layer 2 — Rights and licensing

This layer sits on provenance and includes rights envelopes, contribution records, split sheets, financial waterfalls, PIXIE behavior, and licensing documentation.

The handoff's two-bucket model is:
- Commercial creative IP: All Rights Reserved.
- Process documentation: CC BY-NC-SA 4.0.

If classification is uncertain, do not make a legal determination. Preserve the uncertainty and route it for review.

### Layer 3 — Game and narrative

Paragon ReBorn is the game/narrative layer. It is intentionally separable from the provenance and rights layers.

The game boundary distinguishes original rules, gameplay systems, telemetry, accessibility, PIXIE interfaces, training curriculum, and documentation from third-party marketplace assets.

## PIXIE behavioral contract

The load-bearing behavior is:

**OBSERVE → UNDERSTAND → SUGGEST**

Never:

**OBSERVE → AUTOMATICALLY ACT**

PIXIE must not auto-follow, auto-post, auto-reply, automatically introduce people, scrape private data, create durable public personality records, optimize follower growth, create infinite tours, or perform autonomous outreach.

If a proposed feature causes the system to act on behalf of the user without an explicit user choice, stop and flag it for review.

Inference is uncertainty, not a permanent fact about a person. Inferences should be explainable, ephemeral, dismissable, and carry provenance.

## Adapter boundary

The discovery engine consumes normalized records. Source-specific adapters produce them.

Normalized record fields:

`id`, `uri`, `author`, `text`, `createdAt`, `topics`, `communities`, `projects`, `source`

A new adapter should conform to this boundary rather than coupling the engine to a particular service.

## What builders can decide

Within established boundaries, builders can make implementation choices, improve tests and CI, extend adapters, improve UI/UX, improve documentation, fix bugs, and integrate community feedback.

## What requires project-owner judgment

Flag rather than guess when work affects:
- All Rights Reserved vs. CC BY-NC-SA 4.0 boundaries;
- PIXIE's core behavioral rule;
- a legal gate requiring counsel review;
- public claims about rights, clearance, affiliation, ownership, or endorsement.

## Legal-review boundary

The source handoff describes the project as **safe for legal review, not cleared for legal counsel**.

Known boundary notes include:
- “Choose Your Own Adventure” is referenced as a third-party trademark, not used as a genre label.
- *Battle the Beast* is characterized as a formative development exercise, not a prototype or origin.
- PIXIE is original to Loptr Lab.
- Ink is used under MIT license with attribution.
- The PARAGON name cannot be used under the stated Epic restriction; rebranding is required.

Do not convert these notes into a claim of legal clearance. Counsel questions remain counsel questions.

## Public/private boundary

Public repositories should contain public-safe records. Do not commit masters, stems, sessions, private messages, contracts, personal data, access-controlled Drive material, or unpublished collaborator work.

The source handoff identifies material behind legal gates and other protected matters that should remain outside public repositories.

## First steps for a new contributor

1. Clone `50-ways-to-leave-another`.
2. Run `node pixie/v0.1/index.test.js`.
3. Open the PIXIE demo and test the pilot questions.
4. Read `docs/pixie-atproto.md`.
5. Pick one module boundary.
6. Build only within that boundary.
7. If a legal gate is encountered, stop and flag it instead of guessing.

## Help this project needs

Open issues and pull requests should be narrow and verifiable. Useful contribution categories include:
- PIXIE adapter/test improvements;
- accessibility and screen-reader testing;
- provenance and rights-model implementation;
- documentation and contributor onboarding;
- Paragon/game-layer architecture work;
- reproducible tests and CI;
- legal-review question extraction and evidence organization;
- independent review of public-facing claims without presenting the reviewer as counsel or an endorser.

## Source note

This document is an implementation of the supplied SuperMe.ai handoff and “why” materials. It is not itself legal advice or a grant of rights.
