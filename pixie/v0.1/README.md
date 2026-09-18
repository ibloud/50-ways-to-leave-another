# Pixie v0.1 Read-Only Discover Engine

First executable Pixie slice: DISCOVER → CONTEXT → optional TOUR → RELEASE.

The engine accepts normalized public-record metadata from an ATProto adapter. The adapter remains separate so the core does not couple to a particular relay, Jetstream client, or Bluesky API.

## Run

    node pixie/v0.1/index.test.js

No package install is required.

## Adapter boundary

A future ATProto adapter normalizes records to:

    { id, uri, topics: [], communities: [], projects: [] }

The adapter retrieves public records; Pixie performs discovery reasoning and produces provenance.

## Safety boundary

This engine does not follow, post, reply, message, introduce, scrape private data, create public personality/inference records, or optimize engagement.

A numeric confidence is uncertainty about Pixie's inference, not a score for a person.
