# Repository instruction entry — ibloud/50-ways-to-leave-another

Scope: this repository. Music-first show development and rights-aware production/education record; portfolio presentation remains separate.

Before work, explicitly read the [shared ecosystem instructions](https://github.com/ibloud/ibloud.github.io/blob/docs/agent-design-continuity/docs/ECOSYSTEM_INSTRUCTIONS.md)
(or `docs/ECOSYSTEM_INSTRUCTIONS.md` in a locally available `ibloud/ibloud.github.io` checkout),
then the local sources below and any applicable nested `AGENTS.md`.
A link does not automatically load or inherit instructions. The shared file is under
review in portfolio PR #59; it is not yet a merged production record. If unavailable,
identify the gap and stop only work dependent on it; do not fabricate its contents.
Local security, privacy, canon, license, tests and release authority remain local.

## Local essentials and sources

Preserve existing art, graded background, assets/site.css ownership and the limited PR #82 correction. Counsel/owner reuse gates remain; a public educational document is not clearance. Do not publish private correspondence, contracts, recordings, stems or likeness/voice-training material without authority. Keep generated reading pages with their Markdown sources.

Read: [README.md](README.md), [START-HERE.md](START-HERE.md), [brand-guidelines.md](brand-guidelines.md), [CONTRIBUTOR-POLICY.md](CONTRIBUTOR-POLICY.md), [RIGHTS-AND-CLEARANCE.md](RIGHTS-AND-CLEARANCE.md), [privacy.md](privacy.md), [RELEASE-CHECKLIST.md](RELEASE-CHECKLIST.md), [LICENSE.md](LICENSE.md).
Inspect existing changes, open issues/PRs and unpublished work before creating a duplicate.
Use the current contribution entry in README and the local contribution policy where present;
record ideas as proposals, not automatic assignments. Identify exact source conflicts and
preserve behavior; do not invent precedence or relax a hold.

## Existing work

Existing [rights-aware education PR #88](https://github.com/ibloud/50-ways-to-leave-another/pull/88) and held cinematic PR #87 are separate from instruction discovery.

## Checks and release boundary

Commands confirmed in local scripts/configuration (not a claim of current passing results):

- `python3 scripts/build_documents.py`
- `python3 scripts/build_documents.py --check`

CNAME 50ways.loptrlab.com is configured; owner-preview gates remain. Current live/review deployments unverified.
No merge, deploy, release, DNS, authentication or infrastructure change is authorized
by this instruction structure. Preserve existing palettes, symbols, stylesheet ownership,
privacy and governance gates. Report committed documentation, checks, previews, merged
source and observed live behavior separately. Automated checks do not establish physical
iPad/Safari/VoiceOver acceptance. MCP tools do not automatically discover or enforce this file.

No nested AGENTS.md was found in the inspected revision; add one only for materially different directory requirements.

---

## Retained project instructions

# Required brand authority

Read [brand-guidelines.md](brand-guidelines.md) before any design, copy, image or
CSS change. The owner's 29 October correction supersedes the old homepage-layout
freeze below for PR #82 only. Preserve original art and graded background; preview
before publication. Do not substitute icons or invent approvals. Read relevant
Material 3 skill references before claiming alignment, and document blocked checks.

# Site presentation and completion requirements

Dominique's direction, 18 October 2026: preserve the existing visual style of
50 Ways to Leave Another. Do not redesign the homepage, replace its palette,
typography, artwork or layout, or introduce a new framework for document pages.
Use the existing assets/site.css and matching document-specific layout rules.

Public reading paths must lead to readable HTML, including links between
curriculum, research, guides and templates. Keep Markdown as editable source and
an explicitly labelled source/download option. Markdown is not a legal-review
status indicator. Formatting a document does not imply attorney review or
clearance; preserve its actual qualifications and source-review dates.

Run `python3 scripts/build_documents.py` after Markdown edits. Install the pinned
dependency in requirements-docs.txt. Run `python3 scripts/build_documents.py --check`
to check reproducibility, local HTML links, fragments and image/style targets.
Commit generated HTML with source changes so the existing static host can serve
it without a new hosting system or client-side Markdown renderer.

Report source changes, passing checks, deployment status and observed live
behavior separately. A merged PR or an existing link target is not evidence that
the whole site is review-ready. Do not describe legal review as complete unless
the project's actual retained counsel review supports that claim.
