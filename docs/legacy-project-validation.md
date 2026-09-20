
# Legacy Project Validation

## Purpose

This document records a reusable validation pattern discovered while extending the PIXIE ecosystem into older or previously paused projects.

Bringing an old project up to date is not only a technical resurrection. It is a validation process across provenance, rights, dependencies, authorship, data practices, accessibility, production readiness, and public claims.

**Paragon ReBorn / Return to the Void is one controlled proving environment for this process. It is not the owner of the process.**

## Validation sequence

~~~
OLD / EXISTING PROJECT
        ↓
ARCHIVE + INVENTORY
        ↓
PROVENANCE AUDIT
        ↓
RIGHTS / LICENSE AUDIT
        ↓
DEPENDENCY AUDIT
        ↓
CURRENT-STANDARD GAP ANALYSIS
        ↓
CONTROLLED REBUILD
        ↓
PLAYABILITY / ACCESSIBILITY / DATA TEST
        ↓
DOCUMENTED RESULT
        ↓
PRODUCTION DECISION
~~~

Each stage should preserve the distinction between what is documented, observed, self-reported, interpreted, proposed, and still pending evidence.

## Paragon ReBorn discovery

The Paragon ReBorn work established a useful distinction:

- the historical project/material may be valuable;
- released third-party assets may be technically useful;
- neither fact by itself establishes current permission for a particular use;
- rebuilding a playable system can be useful even while asset, naming, trademark, commercial, grant, or production-use questions remain under review;
- a sandbox can therefore validate production practice without silently converting unresolved third-party material into cleared production IP.

The working role of Paragon ReBorn is consequently:

> **a controlled game-development sandbox and validation environment in which old-project material, current production standards, and rights/provenance controls can be tested together.**

This does **not** establish that any Paragon asset is cleared for commercial release, training, grant submission, marketing, or production handoff. Those questions remain asset-by-asset, license-by-license, and use-by-use.

## Evidence boundary

A repository reference is not a rights grant.

A technical reuse is not a commercial-use permission.

A training artifact is not automatically production IP.

A sandbox character is not automatically canonical.

An AI-generated statement is not automatically a verified fact.

Git history demonstrates repository activity; it does not by itself establish authorship, ownership, permission, endorsement, or legal clearance.

## Required validation record

For each legacy-project element that may survive into a current build, record:

| Field | Required question |
| --- | --- |
| Source | Where did this element come from? |
| Provenance | What evidence establishes its origin? |
| Rights | What license, permission, or ownership evidence applies? |
| Version | Which historical/current terms govern? |
| Technical use | How is it being used in the validation build? |
| Modification | Is it altered or transformed? |
| Public use | May it appear in demos, documentation, screenshots, or case studies? |
| Commercial use | Is commercial use permitted? |
| Grant use | May it appear in a grant application or pitch? |
| Identity / marks | Does the element depend on a name, character, likeness, trademark, or other protected identity? |
| Redistribution | May the element or derivative be redistributed? |
| Production handoff | Can it move into a receiving production project? |
| Replacement | What original/replacement path exists if clearance fails? |
| Evidence locator | Where is the supporting document stored? |
| Decision | Cleared / pending / restricted / replace / counsel review |

## Relationship to 50 Ways

The 50 Ways rights-and-clearance model is the reference pattern for this process:

**identify → preserve evidence → distinguish rights from consent → stop when required evidence is missing → escalate unresolved ownership/contract questions.**

This validation document extends that discipline into game production. It does not replace project-specific counsel, license review, or receiving-project governance.

## Case-study principle

A discovered mistake or restriction should become a documented control rather than disappear from the record.

~~~
DISCOVERY
   ↓
ASSUMPTION
   ↓
VERIFICATION
   ↓
CORRECTION
   ↓
CONTROL
   ↓
RETEST
~~~

This makes the process useful to other indie teams without claiming that a particular historical project was legally cleared.

## Authority boundaries

- **50 Ways** remains the public rights/provenance case-study reference.
- **Narrative Provenance** remains the private provenance tooling layer.
- **PIXIE Device Stewardship** remains canonical for evidence boundaries, methodology, and safety.
- **Training** teaches the production workflow and milestone evidence.
- **Paragon ReBorn** is a sandbox/validation implementation.
- **Veiled Dominion** remains a separate receiving production authority.
- **PIXIE** may explain, route, document, and present evidence but does not decide legal ownership, canon, or production acceptance.

## Status

`PROPOSED` as an ecosystem-wide validation pattern; `IMPLEMENTED` in documentation where individual repositories link or adopt this model.

This document is project-control documentation, not legal advice.
