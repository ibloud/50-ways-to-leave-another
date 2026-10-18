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
