# Pixie v0.1 Read-Only Discover Engine

First executable Pixie slice: **DISCOVER → CONTEXT → optional TOUR → RELEASE**.

The engine accepts normalized public-record metadata from an ATProto adapter. The default adapter in `atproto-public.js` reads public Bluesky AppView search results and normalizes them for the engine.

## Run

    node pixie/v0.1/index.test.js
    node pixie/v0.1/atproto-public.test.js

No package install is required.

## Public ATProto adapter

The adapter uses the public XRPC `app.bsky.feed.searchPosts` read endpoint. It is deliberately isolated from the discovery engine so the same engine can later consume another ATProto AppView/service.

Example:

    const { createPublicAdapter } = require("./atproto-public.js");
    const { discover } = require("./index.js");

    const pixie = createPublicAdapter();
    const result = await pixie.discoverTopic("AI", discover, {
      topics: ["AI"],
      communities: ["film"]
    });

The adapter performs **read-only public retrieval**. It does not authenticate or write to the network.

## Adapter boundary

Normalized records have this shape:

    {
      id,
      uri,
      author: { did, handle },
      text,
      createdAt,
      topics: [],
      communities: [],
      projects: [],
      source
    }

The current AppView adapter can infer topics from explicit search terms and public hashtags. Communities and projects remain empty unless a future adapter has explicit evidence for them.

## Safety boundary

This implementation does not follow, post, reply, message, introduce, scrape private data, create public personality/inference records, or optimize engagement.

A numeric confidence is uncertainty about Pixie's inference, not a score for a person.

The adapter is intentionally **not** a firehose ingestion system yet. That is the next scale/streaming layer after this smallest viable read path.
