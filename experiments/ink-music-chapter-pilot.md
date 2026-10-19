# Ink + music chapter pilot — proposal

**Status:** source-only fictional pilot. No player, sponsor agreement, music release, distributor delivery, or production integration is implemented. The five-song EP remains in pre-production.

## Placement

Use Ink as the interaction layer on the artist-owned 50 Ways site, following the source → compiled JSON → inkjs browser handoff in the [Interactive Narrative Writer Path](../docs/interactive-narrative-writer-path.md), whose compiled case study is Inpatient Corridors. A chapter must make sense as a text-first story even if no one plays audio. A released song can enrich the chapter only after the track's rights and public use are cleared. The chapter ends in a public-safe recap and a next-chapter link when another chapter exists. Never require a subscription, stream, account, email, or sponsor interaction.

The accompanying source is [ink-music-chapter-pilot.ink](ink-music-chapter-pilot.ink). It tests one fictional producer decision about funding, recording permissions, and sponsor editorial control. It does not name Charlie J or any sponsor as a participant. Its variables record fictional choices, not actual rights clearance.

## See an existing browser example

[Open The Yellow Door browser-story alpha](https://ibloud.github.io/inpatient-corridors-review/interactive/yellow-door/docs/). It is a separate, existing Ink-based learning example, not the proposed music chapter or evidence of EVEN integration. Participation is optional. See its own content and accessibility guidance before playing.

## Proposed visitor route

1. Open the chapter on the owned site. Show a fiction notice, content note, any actual sponsor disclosure, and a visible Read linear version link.
2. Read/play the text choice. Show consequences within the story so the decision makes emotional and practical sense before an external listening invitation.
3. Finish with a concise decision recap: what the fictional producer chose, what remained unresolved, and how that affects the next chapter. Offer a shareable chapter-level discussion prompt that does not expose or publish a visitor's path automatically.
4. When a cleared track exists, offer an optional official Apple Music link or official preview beside the recap, plus another authorized listening route where available. Do not put track titles, lyrics, a copied audio preview, or a service URL inside the Ink source.
5. Provide an accessible linear rendering of the *story text* and choices, approved credits, correction contact, and an archive of past chapters. Do not reproduce a song's lyrics as a “transcript” without permission.

The redirect versus embed seam is an **unresolved experience question**. Test whether a listener prefers to finish the choice, then listen, or listen between scenes. Avoid autoplay. Both paths must reach the same complete story.

## Measurement before music integration

First collect anonymous, minimal *usability* feedback from an opt-in small cohort: could they finish, understand the decision, find the recap, and continue without music or an account? Observe iPad and keyboard/screen-reader use. A short voluntary feedback question can ask which decision felt consequential. Do not infer health, intent, or rights positions from a fictional choice.

For a later public pilot, publish a data notice before enabling analytics. Default to no individual path collection. If aggregate chapter events are genuinely needed, document the exact event names, processor, retention period, opt-out, and access policy; avoid IP-based identity stitching, sponsor pixels, cross-site tracking, and transmitting individual choices to a sponsor. The current source has **no analytics** and session state is conceptual only.

## Music and rights gate

Linking to an existing official release, embedding a preview, uploading music, synchronizing it with story content, and implying artist or sponsor participation are different actions. Assess the exact use rather than treating every hyperlink as a new music release.

**Hard stop for the proposed music integration:** do not publish a paired recording, preview, cover art, lyrics, video clip, or promotional association until the exact intended use is documented and each required permission is confirmed. That includes source and samples, all contributors and splits, master ownership, performances, AI/source terms, distributor delivery, artwork, approved credits, and any additional permission needed for pairing the music with this interactive experience or sponsor message. A catalog link is not a substitute for a clearance review. Recheck territory and availability after release. If the gate fails, publish only an independently cleared, text-only fictional alpha.

A future experiment may let choices change the *editorial framing* of the same cleared song. Different tracks or excerpts on different paths would require separate rights review and testing; neither mechanism is promised in this pilot.

## Service and sponsor roles

| Participant | Proposed role | What it does not imply |
| --- | --- | --- |
| Distributor | Deliver a cleared master and metadata to Apple Music and other selected services | It does not grant underlying contributor, sample, story, or promotional rights |
| Apple Music | Host released music; supply catalog links or official preview embeds | Apple is not an ARG host, sponsor, collaborator, or endorser |
| Owned website | Host Ink/inkjs, linear story, disclosure, recaps, accessibility, and provenance | A working embed does not establish permission for every surrounding use |
| External sponsor, if any | Fund defined costs under written terms and receive limited, disclosed placement | No implied ownership of songs, story, visitor choices, or editorial decisions |

**Sponsor term proposal:** a fixed budget for defined deliverables (for example, captions and accessibility testing); fee/payment schedule; cancellation; limited placement and logo permission; no exclusivity over distribution, sequels, adaptation, or pitching; no ownership or use of audience choice data; no post-launch expansion of creative control. Define “factual review” as pointing to a specific, verifiable factual claim with supporting evidence. The artist decides how to correct it and retains final judgment over interpretation and fictional narrative. Any broadened review or branding request requires a new written agreement. Have qualified counsel review an actual offer.

If a sponsor relationship exists, disclose it beside sponsored material and in related posts. Disclose affiliate compensation if applicable. Do not call a prospect a partner until accepted.

## Implementation gates

- **Now:** review the fictional Ink source, narrative, and rights boundary. The source alone is not a playable alpha.
- **Before browser pilot:** compile Ink to JSON, add inkjs, linear story rendering, keyboard and screen-reader checks, and skip/restart. Test every branch and confirm restarting clears variables.
- **Before public alpha:** run small opt-in usability sessions; publish the data notice before any analytics; ensure recaps are comprehensible without the music.
- **Before any music-linked version:** complete the hard rights gate above, then test official links or previews on iPad and in relevant territories.
- **Before sponsor display:** obtain signed scope, logo/credit approval, and disclosure text.
- **Before five chapters:** compare completion and qualitative feedback for text-only and optional-listening routes, then decide whether tighter audio integration earns its cost.

Apple says small independent catalogs generally go through a distributor. Apple Music Marketing Tools provide direct links and official embeds: listeners not logged in get a 30-second song preview, while logged-in listeners can hear full tracks in the embed. Pre-adds for eligible upcoming releases are coordinated with the distributor. MusicKit is a separate, more complex integration and is unnecessary for this pilot.

## Review provenance

A user-provided synthesis of five external review comments informed the text-first route, measurement priorities, rights gate, sponsor terms, and recap plan. The reviewers' identities, exact statements, and independent participation have **not** been verified for this repository; no endorsement, accepted role, or formal approval is claimed. This document records proposed design choices rather than attributing claims to those people. It is not evidence of their approval.

## Platform fit and partner conversation — reviewed 19 October 2026

Keep the existing site as the initial home for the proposed Ink experience. A story recap can offer an optional official listening or purchase route. Returning for the next chapter must remain possible without an account or marketing signup. No platform migration or new integration is part of this source-only proposal.

| Surface | Potential role | Unresolved fit |
| --- | --- | --- |
| Existing 50 Ways site | Host the proposed story, accessible linear route, recap and provenance | Browser player and usability verification remain unimplemented |
| EVEN STUDIO | Prospective custom campaign presentation, music/content access and commerce | Confirm support for Ink/inkjs or external embedding, accessibility, access handoff, portability, maintenance and commercial terms |
| EVEN marketplace | Optional authorized purchase/listening destination | Standard marketplace access does not establish STUDIO customization or production funding |
| Laylo | Optional opt-in notifications linking back to a chapter | Signup embeds and the subscription API do not establish an Ink runtime; add only if return notifications address an observed need |

EVEN STUDIO documents custom sections and artist domains; Laylo documents signup embeds and drop messages linking to external destinations. Neither source verifies that our Ink experience runs inside their product. Do not add fan-profile enrichment, pixels, individual choice tracking or buyer-email exports by default. Reading and continuation must not depend on marketing consent.

**First fit-review question for EVEN:** Could an artist-controlled branching music narrative work as a STUDIO custom section, or should the story remain on our site with an explicit handoff to EVEN? Ask who maintains the implementation, what remains exportable, how accessibility is tested, and whether purchase access needs to cross the handoff. Confirm release-level payout splits against song-by-song contributor agreements; platform payout settings do not replace those agreements.

These are prospective roles, not partnerships, endorsements, financing commitments or verified integrations. Keep the EP production proposal, studio workflow pilot and PIXIE verification separate. This comparison does not change Holdings or establish an artist-retention programme.

## Pitch positioning and readiness

Owner-approved positioning: **Corporate-trained, artist at heart.** Loptr Lab aims to bridge independent artistic intent and professional delivery through clear scope, budgets, credits, permissions, accessible experiences and workable release plans. Replication and self-sustainability remain goals to test.

For a platform fit conversation, offer a documented creative-development approach and this fictional narrative source. Ask the platform to assess the commerce/release handoff. Do not promise improved conversion or earnings before observation.

Prepare one concise series brief, this source-only example, a clear statement of confirmed versus proposed participation, and one bounded fit-review question. Artist names or recordings must not imply an unapproved attachment. A LinkedIn connection is not a partnership. No outreach is sent by this update.

The immediate deliverable is a readable proposal and fictional source, not a playable browser demonstration. Compile, implement and verify one text-first chapter before showing it as working software. Future evaluation should distinguish usability, audience response and net receipts after labor and costs.

Related public discussion: [pitch refinement #74](https://github.com/ibloud/50-ways-to-leave-another/discussions/74). Broader documentation work remains in [issue #72](https://github.com/ibloud/50-ways-to-leave-another/issues/72).

## Sources

- Apple, distribution: https://artists.apple.com/support/1108-get-your-next-release-on-apple-music
- Apple, links and embeds: https://artists.apple.com/support/1117-apple-music-marketing-tools
- Apple, pre-adds: https://artists.apple.com/support/1118-apple-music-pre-adds
- Apple, MusicKit: https://developer.apple.com/musickit/
- FTC, disclosure: https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers
- Project rights gate: ../RIGHTS-AND-CLEARANCE.md
- Battle the Beast Ink reference: https://github.com/ibloud/battle-the-beast

Platform references checked 19 October 2026 (capabilities and terms can change):

- EVEN STUDIO sections: https://studio.even.biz/help/articles/what-are-studio-modules
- STUDIO versus marketplace: https://studio.even.biz/help/articles/how-is-even-studio-different-from-the-even-marketplace-and-app
- Laylo features: https://laylo.com/features
- Laylo drop destinations: https://docs.laylo.com/en/articles/6429096-creating-a-drop
- Laylo subscription API: https://docs.laylo.com/en/articles/6520155-laylo-api
- EVEN collaborator payouts: https://help.even.biz/en/articles/16302214-revenue-splits-and-collaborator-payouts
