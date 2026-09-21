# Provenance Entry: Creator Rights Layer

Date: 2026-09-21
Author: Dominique Devereaux / Loptr Lab
Status: Documented transformation from source to proposed module

## Recording pointers

- Original commit: f4b155089762a47a561f344fe320649c01089b9b
- Pull request: #52
- PR URL: https://github.com/ibloud/50-ways-to-leave-another/pull/52

## Source

A research conversation examining FanzPro (fanzpro.com) as a
potential partner platform. The conversation identified that
FanzPro's commission infrastructure handles the transaction layer
but has no mechanism for rights documentation upstream of the sale.

The specific trigger was a question about YouTube reactor channels
facing Content ID claims from major labels. The observation was that
a reactor channel fighting UMG needs documented evidence of what
content they used, what value they delivered to the artist, and what
their claimed basis is. FanzPro's verified sales data could support
that argument, but only if paired with a structured rights record.

## Transformation

Source observation: creators in monetization disputes need a
structured record that combines content use documentation, rights
claims, value-delivered evidence, and conflict status.

Architectural response: a ConflictSet variant positioned between
Rights Contract v0.2 and the Clearance Gate, scoped to platform
dispute use cases.

This is a proposed module stub. No implementation has occurred.

## Links

- research/fanzpro-partnership-research.md
- docs/architecture/creator-rights-layer.md
- Rights Contract v0.2 (existing)
- Clearance Gate (existing)
- PR #52

## What this provenance entry does not establish

This entry records the origin of an architectural idea. It does not
create any relationship with FanzPro, Bryan Ogden, or any third
party named in the source research.
