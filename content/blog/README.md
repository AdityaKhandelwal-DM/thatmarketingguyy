# Blog posts — rules for the writing agent

One `.md` file per post. Filename = slug: `kebab-case-title.md` (no date prefix).

## Frontmatter (all required)

```
---
title: Why Are My Facebook Ads Not Working? 9 Fixes From 77 Real Ad Accounts
description: Meta description, ≤155 chars, plainspoken, includes the target keyword.
date: 2026-08-02
keyword: why are my facebook ads not working
---
```

## Markdown subset (the renderer supports ONLY this)

`## H2`, `### H3`, paragraphs, `**bold**`, `*italic*`,
`[link](/learn)`, `- bullet`, `1. numbered`, `> quote`, `---` rule.
No images, tables, code fences, or raw HTML — they will render as plain text.

## Voice rules (from marketing/BRAND.md — non-negotiable)

- First person ("I"), plainspoken, specific numbers. ₹ figures always with ~$ equivalent.
- Banned words: unlock, seamless, cutting-edge, elevate, empower, game-changer,
  revolutionize, delve, "in today's fast-paced world", "take it to the next level".
- No fabricated data. Use only verified numbers from /results or clearly
  hypothetical examples labelled as such.
- 600–1,000 words. Every post links to exactly one of /learn or /resources,
  plus /contact near the end. Link one related earlier post when any exist.
- Topics + target keywords: follow the queue in SEO-KEYWORD-PLAN.md §4 (repo
  root, one level up). Take the next unwritten slot, top to bottom.

## Publishing

Adding the file is enough — the blog index, post page, sitemap and metadata
are generated from it at build. Commit with message `Blog: <title>` and push
to main; Vercel deploys automatically.
