# Creator Rights Layer — Module Stub

Status: Proposed / Not Yet Implemented
Position in stack: between Rights Contract v0.2 and Clearance Gate
Date proposed: 2026-09-21
Source: FanzPro research conversation, Loptr Lab / SuperMe.ai session

## Purpose

Provide a structured record for disputed content use cases where a
creator needs to demonstrate: what content they used, under what
claimed right, what value they delivered to the rights holder, and
what the current conflict status is.

Primary use case identified: YouTube reactor channels facing Content
ID claims from major labels (e.g., UMG) where existing sales/
performance data could support a licensing negotiation or dispute
response, but no structured record currently exists to hold that
evidence.

## Core object: ConflictSet (dispute variant)

Extends the existing ConflictSet model. Fields:

- content_used: description and identifier of the content in dispute
- claimed_right: the right asserted by the disputing party
- claimant: entity asserting the claim
- creator: entity whose monetization is affected
- value_delivered: documented evidence of value generated for the
  rights holder (e.g., verified sales data, traffic attribution,
  audience growth)
- claimed_basis: the creator's stated legal or contractual basis
  (e.g., fair use, license, affiliate agreement)
- evidence_refs: links or hashes to supporting documentation
- conflict_status: open | under_review | resolved | escalated
- created_at: timestamp
- last_updated: timestamp

## What this module does not do

- Does not provide legal advice
- Does not automatically resolve disputes
- Does not integrate with any external platform (FanzPro or otherwise)
- Does not assert any rights on behalf of any party

## Implementation notes

The data model is compatible with the existing ConflictSet schema.
Implementation requires: UI for creator input, evidence attachment
handling, and a read path for export to dispute response documents.

No implementation work should begin until the module is reviewed
against the Rights Contract v0.2 and cleared by legal review.
