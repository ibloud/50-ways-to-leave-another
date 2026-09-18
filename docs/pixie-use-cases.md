# Pixie Use Cases

This document is the scenario layer for the Pixie v0.1.0 architecture.

## Use-case matrix

| Use case | Pixie path | Primary evidence | User decision |
| --- | --- | --- | --- |
| Discover an adjacent conversation | DISCOVER → CONTEXT → TOUR | topic + community relationship | explore / skip |
| Find a collaborator | DISCOVER → CONTEXT → BRIDGE → INTRODUCE | public project/context overlap | draft / don't send |
| Cross-pollinate communities | BRIDGE → TOUR | cross-community relationship | take tour / stop |
| Explain a recommendation | CONTEXT | provenance | accept / reject / investigate |
| Get unstuck | DISCOVER → CONTEXT | stated preference + network context | choose path |
| Return later without FOMO | TOUR → RELEASE | user-selected stopping point | leave / return later |
| Find distributed expertise | DISCOVER → BRIDGE → CONTEXT | multiple public sources | investigate |
| Orient a newcomer | CONTEXT → TOUR → RELEASE | relevant conversations + community context | continue independently |
| Hand off responsibility | BRIDGE → INTRODUCE | explicit project relationship | authorize draft |
| Find a contribution path | DISCOVER → CONTEXT → BRIDGE | project + stated interest | choose contribution |

## Architecture-to-use-case example

A single journey can exercise the whole current architecture:

```
User's post
   ↓
DISCOVER
   ↓
Interesting person
   ↓
CONTEXT
   ↓
Their conversation
   ↓
BRIDGE
   ↓
Their community
   ↓
TOUR
   ↓
Related feed / project
   ↓
Optional INTRODUCE
   ↓
RELEASE
   ↓
User continues independently
```

This is the canonical Pixie pattern: **help someone cross a boundary, then get out of the way.**

## Product acceptance examples

### Discovery
Given a user with an explicit interest in a topic, Pixie can surface a relevant public conversation outside the user's immediate network and explain the observable reason.

### Context
Given any Pixie recommendation, the user can inspect why it was surfaced and distinguish observed evidence from inference.

### Bridge
Given two public contexts with a meaningful relationship, Pixie can describe the connection without asserting that the people themselves are compatible.

### Introduce
Given user authorization, Pixie can prepare an introduction for review before any external communication occurs.

### Tour
Given a starting record, Pixie can provide a finite sequence of related records and a clear stopping point.

### Release
Given completion or an explicit stop, Pixie does not manufacture another reason to continue.

## Anti-use cases

These are tests for behavior Pixie should reject:

- “Follow these 500 people automatically.”
- “Reply to everyone who might be interested.”
- “Keep the user scrolling.”
- “Recommend whatever maximizes engagement.”
- “Pretend two people are interested in each other.”
- “Turn an inference into a public label.”
- “Contact GitHub users because their profile looks relevant.”
- “Hide the reason for a recommendation.”
