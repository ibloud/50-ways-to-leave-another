# Ink + music chapter pilot — proposal

**Status:** source-only fictional pilot. No player, sponsor agreement, music release, distributor delivery, or production integration is implemented. The five-song EP remains in pre-production.

## Placement

Use Ink as the interaction layer on the artist-owned 50 Ways site, using the same source → compiled JSON → inkjs browser pattern documented in Battle the Beast. Link an independently distributed, cleared song from each chapter. The song and transcript stay available without completing the choices. The chapter ends in a public-safe recap and a next-chapter link. Do not gate a release behind a subscription, puzzle, social account, or sponsor interaction.

The accompanying source is [ink-music-chapter-pilot.ink](ink-music-chapter-pilot.ink). It tests one fictional producer decision about funding, recording permissions, and sponsor editorial control. It does not name Charlie J or any actual sponsor as a participant.

## Proposed visitor route

1. Open the chapter on the owned site. Show title, fiction notice, any actual sponsor disclosure, content note, and a visible Skip interaction link.
2. Offer the song through a direct Apple Music link plus another authorized listening route where available. Use Apple's official preview embed if the released catalog item supports it. Provide a text route and credits.
3. Play the Ink choices or read a linear recap. Store choices in session memory only for the pilot.
4. Show a consequence and a plain-language source/rights note. Link to the next chapter without requiring a stream, account, email, or payment.
5. Offer a correction contact and archive past chapters in navigable order.

## Service and sponsor roles

| Participant | Proposed role | What it does not imply |
| --- | --- | --- |
| Distributor | Deliver a cleared master and metadata to Apple Music and other selected services | It does not grant underlying contributor, sample, story, or promotional rights |
| Apple Music | Host released music; supply catalog links or official preview embeds | Apple is not an ARG host, sponsor, collaborator, or endorser |
| Owned website | Host Ink/inkjs, transcripts, disclosure, recaps, accessibility, and provenance | The site cannot play uncleared recordings merely because it links to Apple Music |
| External sponsor, if any | Fund defined costs under a written agreement and receive limited, disclosed placement | No implied ownership of songs, story, player data, or editorial decisions |

**Recommendation:** fund a fixed chapter production budget or accessibility work. Agree in writing on deliverables, fee/payment schedule, cancellation, sponsor credit, factual claim review, logo permission, data handling, reporting, and the artist's final creative approval. Do not promise impressions, streams, signups, or conversion before a baseline exists. Avoid sponsor exclusivity that blocks distribution or a future series pitch. A lawyer should review any deal granting rights or control.

If a sponsor relationship exists, place a clear disclosure beside the sponsored material and in related posts; do not bury it on an About page. If a link generates affiliate compensation, disclose that relationship as well. Do not call a prospective sponsor a partner until accepted.

## Implementation gates

- **Now:** review fictional Ink source and its accessibility as a text-only choice flow.
- **Before a browser pilot:** add an Ink compiler and inkjs runtime, linear transcript, keyboard and screen-reader checks, and skip/restart controls. Battle the Beast demonstrates the build shape; this branch has not added a player.
- **Before a music-linked pilot:** confirm source, contributors, splits, master, performance, AI/source terms, and approved public credits; choose distributor; test catalog links and previews once a track is live.
- **Before sponsor display:** obtain a signed scope, funding receipt, logo/credit approval, and disclosure text. Keep the sponsor out of Ink canon unless independently approved.
- **Before expanding to five chapters:** test whether people can understand the song and chapter independently and whether recap/next-step links work on iPad.

Apple says small independent catalogs generally go through a distributor. Apple Music Marketing Tools provide direct links and official embeds: a listener who is not logged in gets a 30-second song preview, while a logged-in listener can hear full tracks in the embed. Pre-adds for eligible upcoming releases are coordinated with the distributor. MusicKit is a separate, more complex integration and is unnecessary for this pilot.

## Sources

- Apple, distribution: https://artists.apple.com/support/1108-get-your-next-release-on-apple-music
- Apple, links and embeds: https://artists.apple.com/support/1117-apple-music-marketing-tools
- Apple, pre-adds: https://artists.apple.com/support/1118-apple-music-pre-adds
- Apple, MusicKit: https://developer.apple.com/musickit/
- FTC, disclosure: https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers
- Project rights gate: ../RIGHTS-AND-CLEARANCE.md
- Battle the Beast Ink reference: https://github.com/ibloud/battle-the-beast
