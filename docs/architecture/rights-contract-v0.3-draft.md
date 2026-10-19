# Rights contract v0.3 — draft

**Status:** Draft for public review  
**Automation:** None  
**Authority:** Proposed schema layer; does not replace `RIGHTS-AND-CLEARANCE.md`  
**Baseline note:** This draft references a v0.2 contract discussed in project review, but no `rights-contract-v0.2.md` file is present on the repository's `main` branch as of 2026-09-28. That missing baseline must be reconciled before this draft can be treated as a versioned successor.

## Purpose

This draft adds the minimum schema needed to represent recursive derivation, derivation completeness, reason codes, sync-specific scope checks, and control-document conflicts without treating uncertainty as clearance.

## Fixed gate status vocabulary

Gate status remains intentionally small:

- `blocked`
- `pending_review`
- `cleared`
- `revoked`

Specific causes belong in `reason_codes`, not in new status values.

```ts
type ClearanceStatus =
  | "blocked"
  | "pending_review"
  | "cleared"
  | "revoked";

interface ClearanceGateResult {
  status: ClearanceStatus;
  reason_codes: string[];
  evidence_refs: string[];
  reviewed_by?: string;
  reviewed_at?: string;
}
```

## Recursive derivation

Every dependency must carry its own derivation record or an explicit `unknown` value. A present but incomplete derivation record must not be treated as complete.

```ts
type DerivationCompleteness =
  | "attested"
  | "unverified"
  | "unknown";

type EvidenceClass =
  | "creator_statement"
  | "public_source_fact"
  | "documentary"
  | "contractual"
  | "technical_observation"
  | "recommendation"
  | "pending_evidence"
  | "unknown";

interface AttestationEvidence {
  kind:
    | "producer_declaration"
    | "session_or_stem_inspection"
    | "audio_fingerprint_scan"
    | "rights_holder_confirmation"
    | "other";
  evidence_class: EvidenceClass;
  evidence_ref: string;
  recorded_by: string;
  recorded_at: string;
  tool?: string;
  tool_version?: string;
}

interface DerivationCompletenessClaim {
  status: DerivationCompleteness;
  attested_by?: string;
  evidence: AttestationEvidence[];
  recorded_at: string;
}

interface DerivationDependency {
  work_id: string;
  relationship:
    | "sample"
    | "beat"
    | "stem"
    | "interpolation"
    | "other";
  derivation: DerivationRecord | "unknown";
}

interface DerivationRecord {
  work_id: string;
  dependencies: DerivationDependency[] | "unknown";
  completeness: DerivationCompletenessClaim;
}
```

## Evidence that may support `attested`

The following evidence may support an `attested` derivation-completeness claim when a human reviewer accepts it for the specific work:

| Evidence | Evidence class | Required record |
| --- | --- | --- |
| Signed producer declaration listing all samples and interpolations known to the producer | documentary | signer, date, work/dependency identifier, declaration reference |
| Session files or stems inspected by a reviewer | technical_observation | reviewer, date, inspected materials, evidence locator |
| Audio-fingerprint or sample-identification scan | technical_observation | tool, version if known, date, result reference |
| Written confirmation from the upstream rights holder | documentary | sender/authority, date, scope of confirmation, evidence locator |

A marketplace or license originality warranty is `contractual` evidence. It records a contractual representation but **does not by itself establish derivation completeness** and cannot by itself convert `unverified` or `unknown` to `attested`.

### Open review question: sufficiency threshold

This draft does not yet require a universal number of evidence items for attestation. Public review should determine whether one sufficiently direct item can ever be enough, or whether higher-risk cases should require two independent evidence types. Until that threshold is adopted, a human reviewer must state why the evidence is sufficient for an `attested` claim.

## Sync scope

Sync clearance is scoped independently from other commercial uses.

```ts
interface ScopeMatch {
  media: "matched" | "not_matched" | "pending";
  territory: "matched" | "not_matched" | "pending";
  term: "matched" | "not_matched" | "pending";
}

interface RightsEnvelopeVersion {
  sync_grant: ScopeMatch;
  master_grant: ScopeMatch;
}
```

A dependency is not cleared for a proposed sync merely because it is cleared for streaming, distribution, or another use. The applicable sync and master grants must cover the proposed media, territory, and term.

## Control-document conflicts

A conflict between project-control documents must halt implementation for human review. No file silently wins at runtime.

```ts
type ConflictSubjectType =
  | "permission"
  | "control_document";

interface ConflictSet {
  subject_type: ConflictSubjectType;
  subject_refs: string[];
  status: "open" | "under_review" | "resolved" | "escalated";
  detected_at: string;
  detected_by: string;
  resolution_ref?: string;
}
```

A control-document conflict should also receive a dated provenance entry describing the conflicting claims, the resolution, and the commit or review record that reconciled them.

## Human-review boundary

These schema fields do not determine ownership, infringement, contractual validity, or dispute outcomes. They record evidence and gate state for human review.
