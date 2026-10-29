---
brand: 50 Ways to Leave Another
owner: Dominique Devereaux
scope: This repository; does not redefine Made-Sick or PIXIE
status: Consolidated owner direction; implementation remains review-only
reviewed: 2026-10-29
stylesheet: assets/site.css
---
# 50 Ways brand guidelines

## Authority and use
Read this file and AGENTS.md before changing copy, UI, images or CSS. Reuse current
source and the existing PR before creating anything. Owner instructions supersede
older preservation restrictions: the 29 October request authorizes correction of
the splash, spacing, learning templates and persistent PIXIE entry, preserving the
graded background and original artwork. Publication still needs preview approval.
This file consolidates existing direction; new implementation is proposed, not
proof of accepted visual design. Historical creative strategy stays in
[docs/brand-strategy.md](docs/brand-strategy.md), which must link here.

## Purpose, audience and promise
For independent music, screen and community creators and professionals reviewing
their work. Teach creators to take a project from idea to a reviewable production
package, with budgets, credits, permissions and questions for professional help.
Creative care and economic agency belong together: scope, payment, credit,
permission and exit must remain connected. Do not frame the project as a law firm,
contract service, accredited qualification or professionally validated course.
Preserve the original EP and proposed series as applied development examples.

## Ecosystem responsibilities
50 Ways supplies learning and production context. Made-Sick is the existing
resource directory. PIXIE Project Companion is the current administrative work
and continuity destination, not a new app to build inside this repository.
Current Companion: https://pixie-project-companion-production.up.railway.app/ .
The old pixie/demo is a read-only topic-discovery experiment, not the Companion.
Retain its implementation and history; demote it to an explicitly labelled
prototype link. Do not claim shared sign-in, workspace, publishing or data transfer.
PIXIE's own identity authority is
https://github.com/Loptr-Lab/pixie-ecosystem-guide/blob/review/brand-guidelines-2026-10-29/brand-guidelines.md
(review PR #9; main remains unchanged until approved).

## Visual identity and semantic roles
Keep the graded atmosphere and existing artwork; do not transplant another site's
palette. Literal values belong in shared tokens, not individual pages.

| Role | Existing value | Use |
| --- | --- | --- |
| surface | #100d14 | Canvas |
| surfaceContainer | #18131e | Grouped content |
| surfaceContainerHigh | #211727 | Raised/context surfaces |
| onSurface | #f5ecdc | Main text |
| onSurfaceVariant | #c8bac7 | Supporting text |
| primary | #9c3cf1 | Main action; verify actual text pair |
| link/accent | #f06a4d | Existing links and emphasis |
| identity accent | #d7a84c | Restrained gold signals |

Georgia/Times serif is the established display face. Inter/system sans is the
reading face. Semantic roles: display for the main title only; headline for major
sections; title for item headings; body for explanations; label for controls and
metadata. Use sentence case, normal tracking and real heading levels. Never shrink
body text to solve layout or use a giant label to imitate hierarchy.

## Layout and spacing
assets/site.css is authoritative: tokens → shared type/components → scoped
functional layouts → minimal breakpoint exceptions. No embedded or per-page
presentation, competing themes, blanket overflow clipping or new CSS framework.
The discovery demo's functional layouts are scoped under body.discovery-demo in the same stylesheet; its search behavior remains separate.
Align section edges; stack headings above explanatory prose when a side-by-side
layout creates an empty column. Keep reading lines bounded (existing target
72–78 characters), but do not push every paragraph into a narrow right-hand rail.
Use existing shared spacing tokens/rhythm; component and section gaps express
relatedness. No tall fixed-height text panels. Review the full page, not only the
hero. Splash hierarchy: identity → practical purpose → Start here → supporting
artwork/context. Graded background is brand expression, not evidence of Material
compliance. Avoid centered multi-line body copy and forced title line breaks.

## Controls and PIXIE presence
One primary learning action per group; secondary actions have lower emphasis.
Keep Start here → Modules → Practice → Check your work visible across sizes.
Persistent PIXIE entry belongs bottom-right, outside top navigation. Reuse the
actual current Companion sigil, with a visible PIXIE label and accessible name.
Do not replace it with Unicode, a generic star or the supplied page illustrations.
The link opens the existing Companion; it is not a fake inline chat or a claim
that 50 Ways shares private project state. Respect safe areas and reserve space
so the launcher cannot hide footer actions. This is an owner-requested persistent
assistance link, not a claim that navigation is a standard Material primary FAB.

Sigil provenance: copied without modification from Loptr-Lab/pixie-ecosystem-guide
main 0d049b8114c09991ce0382e38661ae72dad64a02, assets/pixie-sigil-proposal.png.
Source and local asset share Git blob 2f2f88570d7e2c9bca15d7fe649c6ed4b41b3a49.

## Images, voice and source integrity
Preserve originals, aspect ratios, alternatives and provenance. Page illustrations
are not app icons. Do not generate replacements, assign new identities or invent
an evolution sequence. PIXIE speaks warmly, directly and practically, with judgment
supported by evidence. 50 Ways instructions explain the action, expected output,
example and next use. Prefer “Record the proposed fee and payment date” over
“Consider compensation.” Avoid hype, jargon, fake partnerships and unsupported
claims of clearance, earnings, savings or training results.

## Learning template contract
Every activity states what the learner does, how to complete it, where the result
goes and what counts as done. Templates need writable/copyable fields and a
fictional worked example. A list of field names alone is not a usable activity.
Use fictional details in public exercises; private contracts and identity details
stay private. Label estimates, proposals, agreed evidence and unresolved items.
A contribution record does not itself transfer rights or execute an agreement.
Keep legal boundaries close to the relevant decision without repetitive blocks.
Verify claims against authoritative sources; record jurisdiction/date/uncertainty.
The fictional capstone score is a paper example, not a learner outcome.

## Accessibility and Material 3 review
Read the relevant Material guidance rather than approximating its appearance.
References: https://m3.material.io/ and the owner-supplied implementation skill
https://github.com/skydashnet/material-design-3-ui-skill . The latter is third-party,
not Google's specification. Review spacing, typography, adaptive design, component
semantics, states, color, accessibility and anti-patterns before delivery. Do not
copy Android-only conventions into the web without justification.
Maintain readable text, contrast, visible focus, keyboard paths, skip navigation,
reduced motion, text scaling and consent/hidden states. Use 48px touch areas where
practical; verify actual 4.5:1 normal-text and 3:1 large-text/UI pairs. These are
verification targets, not an existing certification. Check breakpoint boundaries,
320/390/820/1440 widths and enlarged text; inspect the actual layout visually.

## Source references

Owner-supplied Markdown guidance: https://www.branding5.com/brand-guidelines-md-the-file-every-ai-tool-needs . Used for document structure only; no automatic compliance or paid-tool claims are adopted.

## Release and change record
No main merge, production promotion, domain change or provider deployment without
owner approval after the preview. Record exact commits and distinguish source,
local browser, deployed response and physical-device evidence. Failed access is a
blocker to that check, not permission to claim it passed. A Markdown file does not
make AI compliance automatic; AGENTS/README links and review enforce its use.

29 October 2026: consolidated approved direction from owner corrections, existing
AGENTS, brand-strategy, source and PR #82. This replaces scattered instructions as
the repository's brand entry point; it does not erase historical records.

## Homepage display-font amendment — preview, 29 October 2026

Dominique requested a more playful front-page font, distinct from reading text.
The homepage title previews self-hosted Fraunces, a soft old-style display serif
by Phaedra Charles and Flavia Zimbardi. Only .home-title uses it; body, labels,
controls, other headings and document typography are preserved. Normal tracking,
responsive size and selectable text remain. Source: Google Fonts ofl/fraunces;
assets/fonts/Fraunces-variable.ttf with adjacent Fraunces-OFL.txt (SIL OFL 1.1).
Softness/wonky axes express this proposed display treatment; they are not a change
to the owner-approved body typography. Owner preview acceptance remains pending.
