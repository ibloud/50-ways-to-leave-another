# Rule catalog

> **Implementation status**
>
> These rules are defined but not automated. At this stage, a human reads each applicable gate and confirms the result. A rule's presence in this catalog does not make it a signed contractual term or a determination of ownership.

> **Schema dependency**
>
> These rules reference fields proposed in `rights-contract-v0.3-draft.md`, including reason codes, recursive derivation records, derivation completeness, sync-specific scope checks, and control-document conflict records. They are not fully representable against the currently documented repository state, and the referenced v0.2 baseline file is not present on `main` as of 2026-09-28.

## Authority and conflict handling

This catalog operationalizes controls in `RIGHTS-AND-CLEARANCE.md`. It does not replace that document or independently create new rights requirements.

If this catalog and `RIGHTS-AND-CLEARANCE.md`, `PROJECT-STATUS.md`, `PROVENANCE.md`, or `AI-DISCLOSURE.md` conflict, implementation stops for human review. The contradiction must be recorded and the relevant control documents reconciled before the gate can proceed. No file silently wins.

## R-001 — Upstream provenance and clearance required before sync pitch

**Status:** Proposed  
**Automation:** None — human review only  
**Evidence class:** Recommendation  
**Schema:** Requires `rights-contract-v0.3-draft.md`

### Trigger

A sync-placement request is proposed.

### Required data

For the work and every recursively identified upstream dependency:

- a derivation record or explicit `unknown`;
- a derivation-completeness claim;
- the evidence supporting that completeness claim;
- an applicable clearance record;
- applicable sync and master scope.

### Pass

R-001 passes only when all of the following are true:

1. every dependency in the recursive derivation graph has `derivation_completeness: attested`;
2. the attestation names supporting provenance evidence and is not based solely on a contractual originality warranty;
3. the dependency license status is `cleared`; and
4. the applicable rights envelope shows the sync and master grants matched for the proposed media, territory, and term.

### Pending review

Return **R-001 gate result: `pending_review`** when:

- derivation completeness is `unverified`;
- derivation completeness is `unknown`;
- any recursive dependency lacks a derivation record;
- evidence is insufficient to support the completeness claim; or
- applicable sync/master scope remains pending.

Suggested reason codes:

- `derivation_unverified`
- `derivation_unknown`
- `derivation_record_missing`
- `sync_scope_unverified`

### Block

Return **R-001 gate result: `blocked`** when available evidence establishes that an applicable dependency does not have the required sync clearance.

Suggested reason codes:

- `upstream_uncleared`
- `sync_scope_mismatch`
- `clearance_revoked`

### Evidence rule

A contractual originality warranty may be recorded as evidence of a contractual representation. It MUST NOT, by itself, satisfy a derivation-completeness attestation.

### Human action

A reviewer examines the recursive derivation graph, completeness evidence, clearance records, and scope before the sync process proceeds.

### Worked example A — licensed dependency with unverified derivation

A track proposes a sync use. Its identified upstream dependency has a valid license and the applicable sync scope matches, but the dependency's own derivation has not been verified.

| Field | Value |
| --- | --- |
| Dependency license status | `cleared` |
| Sync scope | matched |
| Derivation completeness | `unverified` |
| Evidence | contractual originality warranty only |
| R-001 gate result | `pending_review` |
| Reason code | `derivation_unverified` |

A valid license does not establish that the dependency graph is complete. The contractual warranty is recorded, but it does not convert derivation completeness to `attested`.

This example is normative for R-001 behavior but is not an executable fixture. Any later executable fixture implementing this scenario should reference this worked example.

### Worked example B — attested derivation and matched sync scope

A track proposes a sync use. Its upstream dependency has a valid license. The producer supplied a signed declaration listing all samples and interpolations, and a reviewer inspected the relevant session files/stems. The recursive derivation record is marked `attested`. Sync and master grants match the proposed media, territory, and term.

| Field | Value |
| --- | --- |
| Dependency license status | `cleared` |
| Derivation evidence 1 | signed producer declaration — `documentary` |
| Derivation evidence 2 | inspected session files/stems — `technical_observation` |
| Derivation completeness | `attested` |
| Sync/master scope | matched for media, territory, and term |
| R-001 gate result | `cleared` |
| Reason code | none |

This passing example does not establish that two evidence items are always required. The sufficiency threshold remains an explicit public-review question in `rights-contract-v0.3-draft.md`.

## R-002 — Contributor exit and later commercial use

**Status:** Proposed  
**Automation:** None — human review only  
**Evidence class:** Recommendation

### Trigger

Commercial use is proposed after a contributor has exited, withdrawn, or stopped participating.

### Required data

- contributor agreement or applicable written terms;
- exit/withdrawal record;
- payment and settlement status where applicable;
- rights retained, revoked, or disputed;
- intended commercial use.

### Gate behavior

Return `pending_review` unless a human reviewer can establish from the applicable records that the proposed commercial use remains authorized and all required conditions for that use have been satisfied.

Return `blocked` when the records establish that required permission is absent, revoked, or outside the proposed use.

This rule is intentionally separate from R-001. A sync-clearance result does not determine whether post-exit commercial use is authorized.

## Public review questions

1. What evidence should be sufficient to move derivation completeness from `unverified` to `attested`?
2. Should some dependency classes require two independent evidence types rather than one?
3. When statements conflict, what should become operationally active: latest, authorized, or explicitly upheld through review?
4. When clearance is revoked, should the operational default be an automatic hold or a mandatory human-review flag?
5. What persistent record format best preserves this history without confusing storage technology with evidentiary authority?
