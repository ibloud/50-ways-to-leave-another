# Incident addendum: incorrect site-function audit

**Incident date:** September 13, 2026  
**Affected pull request:** [#25](https://github.com/ibloud/50-ways-to-leave-another/pull/25)  
**Publication impact:** None. The pull request was closed without merge; `main` and the live site were not changed.

## Scope and evidence

| Statement | Classification | Evidence |
| --- | --- | --- |
| Work moved from Codex to Claude and then Gemini while Codex was unavailable | Creator statement | Dominique’s statement in the working conversation; no model export is public here |
| PR #25 proposed removing the seminar and series-oriented presentation | Verified provenance | PR #25 diff and description |
| PR #25 was closed without merge | Verified provenance | GitHub PR state |
| The classes are intentional referrals to real resources available through Lex Nova Lawyer | Creator statement + documented third-party source | Dominique’s clarification and https://linktr.ee/lexnovalawyer |
| The expiry behavior is intentional | Creator statement + verified implementation | Dominique’s clarification and dated-card JavaScript in `index.html` |
| The song/EP demonstrates development for a proposed five-part series intended for a Netflix pitch | Creator statement + repository support | Dominique’s clarification and `docs/series-bible-methodology-addendum.md` |
| A particular passage was authored by Claude or Gemini | Unresolved | Git commits do not contain model identity or generation logs |

## What went wrong

The audit privileged a narrow reading of the README over the combined evidence in the site, the series methodology, prior project context, and deliberate expiry code. It interpreted a documentation mismatch as proof that the public function was invalid.

The model should have recognized several stop signals:

- a complete seminar section included dates, prices, an external provider, and automatic expiry;
- the site repeatedly connected audio, film, business, sync, and delivery;
- the repository already contained a series-bible methodology addendum;
- memory described broader story, licensing, and screen-development work;
- removing entire functions would have been a high-impact change.

Instead of asking what unified those elements, the audit invented a simpler function and attempted to conform the project to it.

## Creative harm that could have resulted

- erasing the educational pathway that shows creators where professional legal/business learning enters production;
- severing the title song and EP from the five-episode narrative structure;
- making the repository look like a static archive rather than a living process demonstration;
- destroying intentional temporal behavior by removing expiring event code;
- misrepresenting the creator’s architecture and forcing it into a generic category;
- adding false provenance by treating a model’s interpretation as the creator’s intent;
- increasing emotional and revision labor for the creator.

## Corrective action

- PR #25 was closed and clearly marked as an incorrect interpretation.
- The original public history was preserved.
- A new reconciliation branch retains the classes and expiry logic while clarifying the series, Netflix, educational-resource, and non-affiliation boundaries.
- `LLM-REVIEW-PROTOCOL.md` now requires memory checks, source hierarchy, alternative-interpretation testing, and clarifying questions before high-impact edits.

## Model-handoff observation

Different LLM outputs may optimize for different patterns—such as detailed rights controls, generic landing-page conversion, or aggressive compliance cleanup. That difference is observable at the artifact level, but it does not verify which vendor produced which text. The governance lesson is to preserve prompt/model/date records privately and require every system to obey the same current project controls.

This record is a correction and learning artifact. It does not assign bad faith to any person, provider, or model.
