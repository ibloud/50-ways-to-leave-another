# Addendum: model handoff, creative drift, and legal review

**Recorded:** September 13, 2026  
**Scope:** Explain why the public-site corrections were needed after work moved between AI systems, distinguish evidence from inference, and identify decisions that require licensed counsel.

## Attribution boundary

Dominique Devereaux reports that project work moved from ChatGPT/Codex to Claude and then to Gemini while Codex was unavailable.

The Git history records the repository account, timestamps, branches, commit messages, and resulting text. It does **not** identify the AI system that drafted each passage. No Claude or Gemini export, prompt log, cryptographic attestation, or model-specific commit metadata is preserved in this public repository. Therefore:

- the handoff sequence is a **creator statement**;
- textual and structural differences are **observable evidence**;
- assigning a particular passage to Claude or Gemini is **inference**, not verified authorship.

This addendum does not claim that either provider necessarily caused a specific error. It documents the governance problem created when model handoffs are not accompanied by source records and a human-approved project brief.

## Observable differences in the repository

The documentation layer and the later public-page layer diverged in function and voice.

| Earlier project controls | Later public-page presentation | Resulting conflict |
| --- | --- | --- |
| Proposed five-song EP in pre-production | “Audio & Film Masterclass” | The public identity changed from project record to educational product |
| No collaborator attachment without consent | Named “guest expert” and seminars | The page could imply participation or endorsement |
| Nonbinding proposals and approval gates | Enrollment calls to action and a per-seat price | A proposal appeared to become a live commercial offer |
| No final master or commercial clearance | “Engineered and mastered” for major platforms | Production and delivery readiness were overstated |
| Documentation all rights reserved | “Open License” | The page contradicted the actual license |
| Five-song concept | Five episodes plus a sixth module | The creative object changed without an explained decision record |

The corrected v0.3 page removes those unsupported representations and restores the documented purpose: a public-safe pre-production record, disclosed listening comparison, and rights-aware coordination archive.

## What can reasonably be inferred about the handoff

The contrast suggests two different optimization goals were applied without a shared acceptance test:

1. one pass emphasized project-specific provenance, consent, scope, and conditional language;
2. another emphasized a polished commercial landing-page pattern, adding generic curriculum, seminar, distribution, and conversion language.

That is a difference in **output behavior**, not proof of model identity. A template can improve presentation while still overriding the creator’s actual function. The failure was not “using more than one AI”; it was allowing a new system to infer product facts instead of treating the approved project record as authoritative.

## How this can harm the creative work

- **Concept dilution:** generic “masterclass” language replaces the work’s specific narrative, musical purpose, and creator voice.
- **False commitments:** invented dates, prices, modules, or distribution readiness can be mistaken for approved business decisions.
- **Consent and relationship harm:** naming a person as a presenter, collaborator, or endorser can create pressure and damage trust when no agreement exists.
- **Rights confusion:** conflicting license language can obscure what may be copied, performed, trained on, or commercially used.
- **Provenance gaps:** later readers cannot reliably separate Dominique’s decisions, public facts, proposals, and AI-generated additions.
- **Revision debt:** each unsupported claim creates more review work and increases the chance that another system will repeat it as fact.
- **Voice fragmentation:** successive models may smooth away unusual, deliberate language that carries the project’s identity.

## Required handoff control

For future AI-assisted edits:

1. Treat `PROJECT-STATUS.md`, `PROVENANCE.md`, `AI-DISCLOSURE.md`, and `RIGHTS-AND-CLEARANCE.md` as controlling context.
2. Preserve the user’s prompt, tool/model name, date, and affected files in a private generation log.
3. Require every new public factual claim to have a source or an explicit “proposed” label.
4. Do not add a named person, price, event, endorsement, license, or commercial-readiness claim without human-confirmed evidence.
5. Compare the rendered page with the status document before merging.
6. Use a protected branch and pull request so the human creator can review the complete diff.

## Why consult a licensed attorney

Educational resources and AI can identify questions and organize evidence, but they do not create an attorney-client relationship, investigate all private facts, apply jurisdiction-specific law to the project, negotiate on Dominique’s behalf, or accept professional responsibility for advice.

This project crosses several fact-dependent areas: composition and master ownership, performer releases, publishing splits, name/likeness and endorsement, platform and AI-service terms, commissioned work, sync and promotional licensing, privacy, and possibly trademarks. A licensed attorney can determine which jurisdictions and bodies of law apply, identify conflicts, draft or revise enforceable language, and advise on the consequences of a specific deal before anyone relies on it.

The American Bar Association explains that lawyers are licensed professionals who advise and represent clients, and notes that quick legal advice can help prevent later problems when consequences are uncertain:
https://www.americanbar.org/groups/public_education/resources/public-information/what-is-a-lawyer-/

The U.S. Copyright Office provides authoritative copyright education and registration information, but its public materials are not a substitute for advice about a specific collaboration, license, or dispute:
https://www.copyright.gov/

## How to find and screen a reputable attorney

For this project, look for a lawyer licensed where the relevant client and transaction are located, with current experience in **music/entertainment transactions, copyright, licensing, right of publicity, and AI-assisted creative work**.

1. Start with a bar-association referral service rather than relying only on advertisements or social profiles. The ABA’s public portal explains lawyer referral, licensing, and free/limited-scope options:
   https://www.americanbar.org/groups/legal_services/flh-home/
2. For Minnesota, use the Minnesota State Bar Association’s lawyer referral and information resources:
   https://www.mnbar.org/
3. Verify the lawyer’s active license and disciplinary status with the relevant state licensing authority.
4. Ask how much of the lawyer’s practice covers music agreements, commissioned recordings, sync/master licensing, publishing splits, publicity rights, and AI terms.
5. Ask who will perform the work, whether conflicts exist, what the consultation covers, and whether limited-scope review is available.
6. Require a written engagement letter defining scope, fees, expenses, confidentiality, file handling, and the end of representation.
7. Avoid anyone who guarantees an outcome. The ABA recommends asking about experience, fees, staffing, written terms, and disciplinary standing:
   https://www.americanbar.org/groups/legal_services/milvets/aba_home_front/information_center/working_with_lawyer/finding_lawyer/questions_to_ask/

People who qualify may also use ABA Free Legal Answers for brief civil legal guidance, while recognizing that a short answer may not replace transactional representation:
https://www.americanbar.org/groups/probono_public_service/projects_awards/free-legal-answers/

## Counsel review packet

Before the consultation, prepare a private packet containing:

- dated source lyrics, demos, session files, and generation records;
- every proposed contributor role and public naming request;
- marketplace listings or quotes used to estimate scope;
- proposed payment, credit, publishing, master, revision, and exit terms;
- intended media, territory, term, promotion, training, and sublicensing uses;
- all relevant platform terms captured with access dates;
- a list of unresolved questions and the public claims that depend on them.

Do not place that private packet in this public repository. Record only the resulting public-safe decision, approval status, and evidence locator.

This addendum is educational project documentation, not legal advice or a recommendation of a particular attorney.
