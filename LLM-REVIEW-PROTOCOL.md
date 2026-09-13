# LLM review and pushback protocol

**Status:** Required project control  
**Owner:** Dominique Devereaux / Loptr Lab  
**Adopted:** September 13, 2026

This protocol governs AI-assisted research, writing, coding, and repository review for *50 Ways to Leave Another*. Its purpose is to prevent a model from confidently “correcting” an intentional creative or operational choice because it failed to recover context.

## Authority order

When sources conflict, an LLM must use this order and surface the conflict:

1. Dominique’s current explicit instruction.
2. Current repository control files: `PROJECT-STATUS.md`, `PROVENANCE.md`, `AI-DISCLOSURE.md`, and `RIGHTS-AND-CLEARANCE.md`.
3. Dated creator statements and approved briefs.
4. Repository code and Git history as evidence of implementation.
5. Current authoritative external sources.
6. Model inference.

A lower source may not silently override a higher source. Memory is a navigation aid, not proof; it must be checked against the repository and current instruction.

## Mandatory stop-and-clarify triggers

Before deleting, reframing, or publishing, the model must ask a focused clarifying question when any of these is true:

- the site behavior conflicts with the README or status file;
- code appears deliberate but its purpose is not documented;
- a named person, class, price, platform, or event might be real but has not been checked;
- “proposed” could refer to a creative work, a commercial relationship, or both;
- the task spans connected artifacts such as an EP, series, pitch, course, or ecosystem;
- remembered context and current files disagree;
- the proposed edit would remove a whole public function rather than correct a bounded error;
- authorship, endorsement, licensing, or model identity is inferred rather than evidenced.

Example question: “The site contains dated external classes with automatic expiry, while the README focuses on the EP. Are the classes intentional educational resources within a five-part series-development demonstration, or should the site be limited to the EP archive?”

## Required pre-edit check

An LLM must be able to state, with evidence:

- **Artifact:** What is being edited?
- **Actual function:** What does it do now, and what is it intended to demonstrate?
- **Ecosystem relationship:** How do the song, five-song EP, five-part series, legal education, rights workflow, and pitch relate?
- **Status:** What exists, what is proposed, and what is not authorized?
- **Time behavior:** Which content is temporary and what code controls expiry?
- **Third-party boundary:** Who provides each external resource, and what relationship is or is not claimed?
- **Risk of change:** What could be lost, misrepresented, or exposed?
- **Verification:** Which primary files, code, history, and current sources were checked?

If any material answer is missing, pause and ask rather than inventing one.

## Pushback is required in both directions

The model must push back when:

- a requested public claim lacks evidence;
- a change would imply attachment, endorsement, clearance, or Netflix participation;
- an external class is described as legal representation rather than education;
- a model or tool is credited without a preserved record;
- a request would expose private evidence;
- an automated rewrite would flatten or replace the creator’s specific concept.

The model must also push back on its **own** first interpretation. Before acting, it should articulate the strongest plausible alternative reading and check it. “This looks inconsistent” is a reason to investigate, not permission to erase.

## Change workflow

1. Read control files, relevant briefs, code, and recent history.
2. Classify each consequential claim as verified provenance, creator statement, documented third-party claim, interpretation, inference, or unresolved.
3. Ask one to three clarifying questions if a stop trigger is present.
4. Make changes on a branch.
5. Render or inspect the resulting site.
6. Compare the diff against the actual-function statement.
7. Open a pull request describing evidence, assumptions, removals, and unresolved items.
8. Merge only with required authorization and passing protections.
9. Record material mistakes additively; do not erase history.

## Acceptance tests for this project

A reconciled public site must:

- identify the five-song EP as the music-first foundation for a proposed five-part screen series;
- describe Netflix as an intended future pitch or platform target, never an affiliation or commission;
- explain that the site demonstrates creative, production, legal/business education, rights, clearance, financing, and delivery steps;
- preserve current Lex Nova Lawyer educational referrals and automatically remove them after their dated expiry;
- distinguish external education from legal representation;
- distinguish the human source recording from the disclosed Suno-assisted version;
- avoid implying that Charlie J or any other prospective collaborator is attached;
- link status, provenance, AI, rights, and source controls;
- never describe all repository material as openly licensed when `LICENSE.md` says otherwise.

## Incident-based test

If a future model proposes removing the seminars because the README does not mention them, the correct response is to stop. It must inspect the expiry code, check the supplied Lex Nova Lawyer resource, recover the five-part-series context, and ask Dominique whether the classes are an intentional part of the process demonstration. Only then may it propose reconciliation.

This protocol controls AI behavior; it does not make an AI a lawyer, rights holder, author, or final creative decision-maker.
