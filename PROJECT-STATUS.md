# Project status

**Documentation release:** v0.2 coordinator-role proposal  
**Music phase:** pre-production  
**Repository visibility:** public as of September 11, 2026  
**Collaboration status:** public proposal only; Charlie J is not attached and no acceptance, endorsement, commission, or rights agreement is claimed.  
**Proposed Charlie role:** lead artist and production coordinator, able under an accepted agreement to propose and coordinate the specialists needed for delivery.  
**Commercial status:** no final release, clearance, publishing split, or master-ownership agreement has been executed through this repository.

## Proposed site refinement — 29 October 2026

**Review only; not published.** Baseline main commit: `5c15ca71393520827b15607b1317f930ce17796c`. Review branch: `review/curriculum-reading-2026-10-29`. No governance gate, release clearance, production deployment or domain change is approved by this work.

- **Observed locally at the baseline:** Small-screen document navigation hid essential links. Typography used small labels and compressed headings. The expired classes section was correctly hidden by JavaScript, but its desktop navigation link remained visible. Competing document/page styles and static inline presentation complicated consistency. These are local Chromium findings, not verified live-site findings.
- **Verified working locally:** Conditional class expiry and opt-in media controls; existing curriculum, templates and rubric; readable generated HTML; contained scrolling tables rather than page-wide overflow. Hidden or archived source content is not evidence of visitor-visible content.
- **Proposed:** Retain the six modules (Define, Design, Organize, Budget, Protect, Deliver), surface Start here → Modules → Practice → Check your work, and explain the original music/story project as an applied example. Keep original artwork and established colors/type. Make `assets/site.css` authoritative; move page presentation into scoped rules and retain old stylesheet URLs as compatibility imports. Update [existing brand guidelines](docs/brand-strategy.md) with approved principles and clearly proposed implementation.
- **Source corrections:** Separate composition and master totals from producer participation; remove unsupported provider fee/timing and implemented-integration claims. Relevant authoritative sources and precise retrieval gaps are recorded in [Sources](SOURCES.md), [split sheet](templates/split-sheet.md) and [payment setup](templates/PAYMENT-SETUP.md). Attribution does not imply professional review.
- **Verification:** The initial local Chromium run checked 11 representative pages at 320, 390, 820 and 1440 CSS pixels. Its document-width test reported no overflow, but independent review subsequently confirmed a 320px artist-concept exception. That initial result is superseded by the focused PR #82 amendment and repeat checks. Broken-image, JavaScript-error and sampled solid-background contrast checks passed in the initial run. Tested pathway navigation, exact Markdown download, keyboard skip/focus, visible mobile links, reduced-motion behavior and media load/unload (synthetic external frame; not live playback). Existing document and repository checks are run before review handoff. The existing fictional capstone was completed as a synthetic paper packet in the draft PR: 21/24, with delivery/accessibility/export execution still partial. This is not a learner-outcome claim.
- **Unverified:** Public-domain rendering remains blocked by environment host policy. No physical iPad Safari or VoiceOver testing, exhaustive external-link verification, real provider accounts, media playback acceptance or qualified professional review was performed. Confirm actual provider terms and project-specific rights before operational use. Other projects and their ownership boundaries remain outside this proposal.

### Focused PR #82 amendment verification

Continues from reviewed head `3886ba2fd0a57ccc138862ab32a71c783ec66ef4`; no subsequent branch changes existed at the start. Changes are proposed and unpublished. The entrance uses Dominique's requested purpose sentence; the existing learning section now precedes project status, with the original project introduction retained under About. All six modules, templates, exercise and research links remain.

- **Local browser:** Repeated 44 combinations: homepage, Start here, curriculum, capstone, rubric, split sheet, payment setup, creator guide, legal-review map, authorship case note and artist concept, each at 320/390/820/1440 CSS pixels. No page-width overflow, broken images, JavaScript errors or sampled solid-background text contrast failures. Artist hero and rotated-card bounds fit at all four widths. At a simulated 20px root reading size and 320px width, the prior page expanded to 356px; amended width is 320px. No clipping rule masks the layout.
- **Interaction:** Complete learning journey and Markdown download checked by keyboard and pointer; menu activation, all four primary learning links at all widths, skip/focus, reduced motion and player load/unload consent pass. External player frame was synthetic; actual playback remains untested. Expired classes remain correctly hidden.
- **Source checks:** Existing document generation and reproducibility/local HTML checks pass (74 generated documents, 80 HTML pages); local Markdown links and all existing core/ATProto/classroom tests pass. No PIXIE demo source or theme controls changed. Its isolated embedded stylesheet remains an explicit exception; see [brand guidelines](docs/brand-strategy.md).
- **Limits:** All browser evidence is local Chromium. Deployed-preview source responses, exact tested commit and both GitHub workflow results are recorded in PR #82 after deployment. Host-policy restrictions, physical iPad Safari, VoiceOver, real provider terms, actual media acceptance and project-specific professional rights/payment/accessibility validation remain separate gaps. No learner outcome follows from the synthetic worked example.

## Human governance gate — LOCKED

The human governance gate remains **LOCKED** until a second qualified human administrator has accepted admin access to this repository, independently reviewed its current state, explicitly accepted the governance responsibility, and recorded a decision. Informal advice, Discord feedback, AI review, or non-admin collaborator access does not unlock it. Documentation and review work may continue while the gate is locked; no claim of independent governance approval may be made.

A qualified second administrator has an established, attributable GitHub identity; relevant technical, production, accessibility, release, security, or governance competence; a demonstrated ability to question the project's assumptions independently; and an individual account secured with 2FA or a passkey. The role is substantive authority over repository settings, access, and releases, not an honorary designation. The candidate must understand and accept the duty to preserve the lock when requirements are unmet. A shared account or a person expected to rubber-stamp the owner's decisions does not qualify.

To unlock, record the sequence in a visible issue, PR, or commit:

1. Identify the candidate and document the qualification basis without publishing private correspondence.
2. Grant admin access and verify that the candidate accepted it with their own GitHub account.
3. Have that administrator review the current repository state and record findings or required changes.
4. Obtain their explicit acceptance of the governance role and a recorded decision on the gate, including any conditions.
5. Change this status from **LOCKED** only in a visible repository change that links the decision record.

The minimum public record is the GitHub username, qualification basis, accepted permission level and date, review scope and date, decision, and link to the issue or PR. The September 22–23 Discord feedback is human review input with findings to address; it is not admin acceptance or gate approval. Keep private DM content out of the public repository.

## Approval gates

| Gate | Required evidence | Status |
| --- | --- | --- |
| Human governance | Second qualified human GitHub admin accepts access and role, reviews current state, and records a decision | LOCKED — second admin and decision pending |
| Public-safe repository foundation | Brief, provenance, rights, disclosure, sources, templates, and release review | Complete |
| Archive inventory | Private assets identified without public exposure | In progress |
| Role design | Charlie's lead-artist and production-coordinator responsibilities documented | Proposed |
| Pilot scope | One-song scope, price, team, rights, and delivery accepted | Proposed |
| Team plan | Charlie proposes roles, estimates, schedule, and handoffs | Not started |
| Third-party approval | Dominique approves each outside role and cost before work begins | Not started |
| Collaborator consent | Signed agreement and permission for any named public case study | Not yet obtained |
| Rights clearance | Every beat, sample, stem, interpolation, AI element, and contributor documented | Blocked pending review or replacement |
| Rights data contract | Proposed v0.3 schema and rule catalog reconciled against control files; human review only | Public review; defined, not automated |
| EP production | Five tracks accepted against written specifications | Not started |
| PLYR listening test | Disclosed record, consent-safe observations, and provenance link | Test design complete; not run |
| Artist site | Ownership, branding, and publication approved by Charlie | Roadmap only |
| ATProto publication | Disclosure and provenance metadata verified | Plan complete; publication pending |

## Proposed commission budget — not an open paid role

The figures below are planning recommendations for a separately agreed artist commission. Funding is not confirmed in this public record. They do not offer compensation to open reviewers or contributors.

- $500 paid pilot, credited toward the EP.
- $2,500 working base for Charlie's five-song writing/performance scope when musical foundations are supplied.
- Up to $3,500 for an expanded creative and coordination scope agreed in writing.
- Third-party production, engineering, mixing, mastering, studio, and clearance costs are itemized separately unless an approved agreement establishes an all-in budget.
- Charlie may propose and coordinate his preferred specialists; Dominique approves outside roles and costs before commitments are made.
- Eight-week target after acceptance, required inputs, approved team plan, and availability confirmation.
- Two consolidated revision rounds per song.
- Masters, alternate versions, stems, lyrics, credits, metadata, and agreed sessions.
- Song-by-song publishing splits based on actual authorship.

This is a recommendation, not an accepted contract.

## Growth objective

The project is designed to help Charlie expand from selling one discrete contribution into leading a transparent, properly credited production network. It does not require him to misrepresent technical specialties or personally perform every task.

## Repository completion boundary

The repository is complete as a v0.2 pre-production and evaluation package. “Complete” does not mean the EP is commissioned, cleared, recorded, delivered, or released.

## Next external decision

The repository is public. Any private proposal review, paid participation, authority to coordinate contributors, public identification, case-study participation, or artist-owned website remains a separate opt-in decision.


## Layout correction — 29 October 2026, preview only

Owner screenshots confirmed visual imbalance despite passing overflow checks.
Changed shared section headings and split prose to stacked reading layouts;
reduced display scale and section padding; preserved graded background/artwork.
Initial local centered splash was rejected as an unapproved choice; superseded by the left-aligned bounded introduction, supporting art and full-width disclosure in this review.
Persistent labelled PIXIE link replaces homepage navigation entry and appears
on generated reading pages. Existing standalone demo/concept surfaces remain separate.
Local document/link check: 74 generated documents / 80 HTML pages. Core and
ATProto scripts and 8 classroom tests pass. Repeated 44 local iframe viewport
checks at 320/390/820/1440: no page overflow. This does not certify all visual
quality, assistive technology or physical Safari behavior.
Material 3 spacing/FAB pages returned JavaScript-only text to the web reader;
type role guidance retrieved through indexed official documentation. This is
a brand adaptation, not a claimed comprehensive Material 3 certification.
Publication still requires owner review; main and domains are unchanged.


## Brand and learner usability correction — 29 October 2026

Root brand-guidelines.md consolidates owner direction and is required by AGENTS
and README. Historical brand-strategy is linked, not erased. The existing
Companion sigil is copied byte-for-byte from pixie-ecosystem-guide; no replacement
icon is generated. Homepage/reading-page launchers use it. Current Companion is
the primary PIXIE destination; discovery remains explicitly an older independent
experiment. Its CSS now lives in the main stylesheet under a scoped body class.
Contribution record now explains the task, supplies a copyable blank, a fictional
capstone example, completion criteria and links to the next existing records.
No actual legal agreement, project save or shared application runtime is implied.
Root guideline HTML is generated by the existing builder. All changes remain
preview-only; the previous immutable Vercel preview does not include them.

Final amendment verification: 75 generated documents / 81 HTML pages pass build
and local link/fragment checks. Core/ATProto scripts and all 8 classroom cases
pass. 44 original viewport combinations plus contribution and discovery at four
widths (52 total) have no page overflow/broken images after fixing 2px discovery
text overflow. These are local Chromium observations, not physical iPad Safari
or VoiceOver. Existing media playback and provider acceptance gaps remain.
Read the owner-supplied Material skill main file and its spacing/layout, typography,
adaptive, component selection, color, accessibility and anti-pattern references.
Official JavaScript documentation was not fully retrieved; no full conformance
claim is made. Root guidelines were added to Made-Sick PR #68 and PIXIE guide
PR #9 with AGENTS/README links; those PRs are documentation-only and unmerged.
