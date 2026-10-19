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

## The artist we are designing with

A solo artist may be songwriter, performer, producer, administrator and release manager at once. Accessibility assistance may be how they work, not an optional marketing novelty. Corporate-trained, artist at heart means translating between creative intention and business systems while leaving the artist in control of both the work and the decision to use AI.

The barriers below are workflow hypotheses to test with artists, not findings that EVEN is inaccessible. No keyboard, screen-reader, voice-control or cognitive-access audit of EVEN has been completed here. Describe functional needs; no diagnosis is required.

| Possible challenge | Proposed bridge | What remains with the artist or EVEN |
| --- | --- | --- |
| Fatigue, executive-function load or unfamiliar release terminology | One task at a time, plain-language explanations, a resumable checklist and artist-reviewed drafts | Artist chooses pace, confirms facts and decides when to proceed |
| Dictating ideas but struggling to structure forms and files | Turn the artist’s notes into a brief, metadata draft and file manifest; mark missing fields | Confirm actual upload requirements and accessible input methods with EVEN |
| Moving between ChatGPT and a release dashboard | A clear manual handoff with named files, destination fields and completion status | No existing account connection or automatic submission is claimed |
| Understanding fees and contributor payments | Explain a worked net-receipts example and compare payout settings with the agreed split record | Artist verifies agreements; EVEN confirms applicable terms and account configuration |
| Describing photographs without losing artistic meaning | Draft image-specific visual descriptions separately from credits and optional interpretation; artist reviews them | Confirm image provenance, intended meaning and use permissions |
| Using AI for access while preserving authorship | Record whether AI helped organize, transcribe, edit or generate content; preserve original source and corrections | Ask EVEN how its AI disclosure applies to each use; assistance is not automatically AI-generated music |
| Knowing which product is appropriate | Explain marketplace versus STUDIO before planning integrations | EVEN confirms STUDIO eligibility, support and any custom-build scope |

EVEN’s public documentation distinguishes a self-serve marketplace from STUDIO’s team-supported custom campaigns. Its release workflow also involves uploads, metadata, review and support handoffs. Our proposed contribution is preparation and continuity around that process, not replacing EVEN’s team or claiming access to its systems.

### Optional ChatGPT assistance

Start with artist-selected material and a manual review/export workflow. Reading, story completion and access to educational materials must work without ChatGPT. Never request shared credentials or automatically copy fan records, private contracts or unreleased assets. An API connection is a separate proposal requiring EVEN-authorized access, scoped permissions, accessible error recovery and artist approval of consequential actions.

EVEN publishes distribution API documentation mentioning developer access keys, but we have not verified authorization, account scopes or supported STUDIO operations. This does not establish a working ChatGPT connector. Ask EVEN whether an artist-authorized draft/read workflow is supported before commissioning integration work.

## Beginner prompt: start with your story, not software

Copy the prompt below into ChatGPT and replace the bracketed parts. You do not need to know Ink or have an EVEN account. Share only material you are entitled and comfortable to share.

> I am an independent artist developing a small pilot story around [my original theme, song idea or project]. I have never used Ink or EVEN STUDIO. Help me work as an artist first. My preferred working format is [short text / dictation-friendly questions / a numbered checklist / another format]. My access needs for this task are [optional functional needs; no diagnosis needed].
>
> Start by asking no more than three short questions about the feeling I want to create, what the audience should choose, and the original material I already have. Wait for my answers. Let me skip questions and keep a short checkpoint so I can return later.
>
> Then propose a three-to-five-minute plain-language story with two or three meaningful choices, visible consequences and a complete text-only ending. Keep my supplied facts and creative choices separate from your invented suggestions. Mark inventions as proposals for my approval. Do not imitate a named artist or import their lyrics, photographs or biography.
>
> If I provide photos, describe only visible details first, then separately suggest possible story connections. Do not infer emotions, diagnosis or intent from appearance. If I provide my own lyrics or a permitted summary, show a small evidence table connecting each proposed scene to that material. Mark missing evidence instead of inventing a connection.
>
> Show me the outline and one sample scene before drafting the whole story. After I approve, provide a linear reading version, a choice map, a source/credit list and unresolved questions. Explain Ink as the tool that can turn this approved structure into branching text. Only generate Ink source if I ask; label it uncompiled until it has actually been compiled and tested.
>
> Finally suggest one optional listening or purchase handoff and explain what I would need to confirm with EVEN. Do not claim a platform integration, publish, contact anyone, create accounts, collect fan data or promise earnings. Finish with the next small action and what I should save.

A useful result is an editable starting point with the artist’s approval history. It is not automatically a playable, cleared or commercially validated release. A facilitator can help with the handoff without taking over artistic authority.

## Yellow Door example review — 19 October 2026

The existing example is valuable for studying a working story interface, but it does not yet demonstrate a verified photo-to-lyric narrative translation.

- The six entry photographs and closing photograph in `interactive/yellow-door/docs/app.js` receive the same generic source-credit alt text. This identifies origin, but does not describe the distinct visible images.
- The six entry titles follow the supplied music sequence. Their prompts are editorial framing, not a documented lyrical analysis.
- The Ink narrative concerns an unexplained door restriction, information, support, challenge and shared decision-making. Its source does not map passages to photographs or lyrics.
- `VIDEO-ENCOUNTERS.md` explicitly calls the still-to-screen assignments provisional pending visual review. `MUSIC-BREADCRUMB.md` describes an independent listening breadcrumb, not artist authorship or approval of the narrative.
- Visual inspection shows materially different settings and actions across the photographs; repeating one source caption does not provide equivalent access to those differences. No verified lyric text or audio comparison was available in this review, so lyrical fidelity remains unverified.

**Proposed follow-up in the owning repository:** supply image-specific alt text, retain separate source credits, and create an owner-reviewed image → intended theme → story passage → lyric-source/summary mapping. Keep observed image content, Dominique’s interpretation and AI suggestions separate. Correct misleading framing where the map fails; do not invent relationships to make it fit. This PR records the gap and does not change Yellow Door’s story or image assignments.

Sources: [Yellow Door app](https://github.com/ibloud/inpatient-corridors-review/blob/main/interactive/yellow-door/docs/app.js), [Ink story](https://github.com/ibloud/inpatient-corridors-review/blob/main/interactive/yellow-door/story/yellow-door-alpha.ink), [visual encounter record](https://github.com/ibloud/inpatient-corridors-review/blob/main/interactive/yellow-door/docs/VIDEO-ENCOUNTERS.md), [music breadcrumb](https://github.com/ibloud/inpatient-corridors-review/blob/main/interactive/yellow-door/docs/MUSIC-BREADCRUMB.md).

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

Accessibility-assistance workflow references checked 19 October 2026:

- STUDIO audience and support model: https://studio.even.biz/help/articles/who-is-even-studio-for
- Release workflow: https://help.even.biz/en/articles/16973307-what-happens-after-you-upload-a-release
- AI/content disclosure: https://help.even.biz/en/articles/16894164-terms-of-use
- Distribution API (scope/access not verified): https://api.docs.even.biz/
