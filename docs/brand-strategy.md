# Neighborhood Art Supply Strategy Framework

> Reference guide mapping narrative plot archetypes, fan engagement models, and visual identity systems to project architecture.

---

## Narrative & Visual Structure

* **Plot Archetype:** Overcoming the Monster / Structural Transformation.
* **Themes:** Dual-entity dialogue, control, power, and high-contrast atmospheric storytelling.
* **Visual Systems:** High-contrast line work, cross-hatching, geometric obsidian grids, and robed iconography.

---

## Code Integration
* **Document Reference:** Linked in site archive as creative strategy documentation.
* **Metadata Alignment:** Informs track creative briefs and lore asset management.

## 50 Ways site presentation principles

**Direction approved for this review — Dominique, 29 October 2026.** Preserve the existing work, artwork, music/story project, six-module curriculum and voice. Adapt Material 3's semantic type, component and state roles to that identity; do not replace it with another brand or framework.

The established source is `assets/site.css`, governed by the repository's `AGENTS.md`. Its existing palette is retained: ink `#100d14`, surfaces `#18131e` / `#211727`, cream `#f5ecdc`, muted text `#c8bac7`, coral `#f06a4d`, violet `#9c3cf1` and gold `#d7a84c`. Georgia remains the display face; the existing Inter/system sans-serif stack remains the reading face. This is 50 Ways' identity, not PIXIE's palette.

Use one authoritative stylesheet, shared tokens first, then type and controls, then narrow page exceptions. Give display, headline, title, body and label text distinct roles. Keep normal heading letter spacing, readable body text, comfortable line height, balanced gutters, visible keyboard focus and responsive navigation. Keep reading text around 72–78 characters wide; data tables may scroll inside a labelled, keyboard-accessible region. Do not hide essential reading links on small screens or use tiny all-caps labels instead of headings.

Navigation follows the existing learning architecture: Start here → Define, Design, Organize, Budget, Protect, Deliver → fictional capstone → assessment. Project examples, research, external resources and templates remain available in their existing locations. Use short instructions with concrete verbs. Keep the original project as an applied example, without implying a Netflix relationship or completed production.

Preserve image originals, captions, source boundaries, media consent and intentional event expiry. A source link is not professional review, a provider proposal is not an active integration, and a completed exercise is not clearance. Put necessary boundaries next to the decision they qualify rather than repeating them throughout the page.

### Proposed implementation — not published

On the review branch, consolidate document, listening, platform and scoped artist-concept styles into `assets/site.css`. Old CSS URLs may remain import-only compatibility paths for excluded content; they must contain no competing theme. Move static presentation and bespoke map/case-note rules into the same source. Keep essential dynamic behavior; use the hidden state for expired events and their unavailable navigation route.

Generate reading pages through the existing `scripts/build_documents.py`, with consistent document navigation, breadcrumbs and numeric-cell alignment classes. Preserve Markdown as editable source and a clearly labelled download, and preserve the separately scoped artist concept's existing visual identity. Do not modify PIXIE module source or any other project.

### Change record — 29 October 2026

- **Approved principles:** the review direction above; preservation, curriculum-led navigation, central styles, accessible roles and source-grounded language.
- **Proposed implementation:** review-branch navigation, style consolidation, linked module outputs, and payment/provider wording corrections. Requires Dominique's review of the Vercel preview before merge or publication.
- **Verification limits:** baseline `5c15ca71393520827b15607b1317f930ce17796c`; local Chromium rendering is distinct from the network-blocked public-domain browser check. Physical iPad Safari, VoiceOver and retained professional review are not established. Keep detailed results and remaining source gaps in the draft PR and existing project status record.


### Focused PR #82 amendment — proposed, not owner-approved publication

Dominique requested these amendments on 29 October 2026. The learning entrance uses: “Learn to take a creative project from idea to a reviewable production package—with clear budgets, credits, permissions and questions for professional help.” The existing four-step navigation and six modules stay intact. The learning entrance precedes the project-status strip; the original project introduction remains in the existing About section. Artwork, music, source records and archive links remain available.

The implementation amends the existing artist-concept grid rules in `assets/site.css`: zero-minimum grid tracks, shrinkable/wrapping hero children, and space inside the mobile gutters for the rotated signal card and its shadow. No blanket overflow clipping is added. Shared semantic type roles, larger reading text, normal tracking, existing contrast tokens and focus styles remain unchanged. This is a proposed layout correction within the existing 50 Ways concept page, not a new artist website or an approved visual redesign.

**Isolated styling exception:** `pixie/demo/index.html` has its own embedded demo stylesheet. It is an excluded PIXIE prototype, not a competing stylesheet for the learning site. This PR does not consolidate or redesign that demo; its styling and behavior remain untouched. Existing reading/theme controls are not changed by this amendment.

**Evidence correction:** Independent review reported 320px overflow in the artist concept. The earlier document-wide scroll-width check did not detect it, so the earlier blanket no-overflow statement is not sufficient evidence for that page. With a simulated larger 20px root reading size at 320px, the prior implementation grew to 356px; the amended page stays at 320px. At the normal reading size, all 44 local combinations pass the page-width and sampled contrast checks; artist hero/card bounds also pass at 320, 390, 820 and 1440px. Exact commit, deployed-access limitations and CI results belong in the PR record. Professional validation of project-specific rights, payment terms and final media accessibility remains outstanding. The capstone's 21/24 is a synthetic worked example only.
