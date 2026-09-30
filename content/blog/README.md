# Blog posts — rules for the writing agent

One `.md` file per post. Filename = slug: `kebab-case-title.md` (no date prefix).

## Frontmatter (all required)

```
---
title: Why Are My Facebook Ads Not Working? 9 Fixes From 80 Real Ad Accounts
description: Meta description, ≤155 chars, plainspoken, includes the target keyword.
date: 2026-08-02
keyword: why are my facebook ads not working
image: work_dashboard
---
```

`image` is the post's hero/thumbnail. It must be the name (no extension) of a
`.webp` file in `public/images/`. Preferred: a custom banner made in Canva for
this post, saved as `public/images/blog-<slug>.webp` (see "Banner" below). If
no banner could be made, pick the most topical existing file
(`ls public/images/*.webp`; all licence-free). Never hotlink an external image.

## Banner (Canva)

- 1200×630 px, exported PNG, converted to WebP at quality ~82, under 250 KB.
- Brand (marketing/BRAND.md): white or `#F8FAFC` background, Bice Blue
  `#036D9A` as the main colour, Maize `#FDEA6F` only as a small highlight with
  dark text on it, text `#0F172A`. Montserrat only, 600/700 for the headline.
  No emoji, no stock "business handshake" clichés.
- Headline = a short version of the post title (max ~8 words), plus a small
  `thatmarketingguyy.com` mark. Nothing else written on it.
- When the post is about a platform, show that platform recognisably (its real
  logo or a look-alike of its interface/colours: Meta blue for Facebook, the
  Google Ads mark for Google). The site's own brand colours stay as they are.
- Keep text away from the outer 60 px; the card is cropped on some screens.

## Markdown subset (the renderer supports ONLY this)

`## H2`, `### H3`, paragraphs, `**bold**`, `*italic*`,
`[link](/learn)`, `- bullet`, `1. numbered`, `> quote`, `---` rule, and
inline images on their OWN line: `![caption](image_name)` where `image_name`
is a file from `public/images/` (no extension). Use 1–2 inline images per post
at natural section breaks; the caption renders under the image, so make it a
real sentence. No tables, code fences, or raw HTML — they render as plain text.

## Voice rules (from marketing/BRAND.md — non-negotiable)

- Reader: a small-business owner in the US, UK, UAE, Australia or Singapore
  deciding whether (and whom) to hire for Facebook / Google Ads. Write so they
  finish trusting Aditya enough to look at /results and get in touch.
- First person ("I"), plainspoken, specific numbers. ₹ figures always with ~$ equivalent.
- Banned words: unlock, seamless, cutting-edge, elevate, empower, game-changer,
  revolutionize, delve, "in today's fast-paced world", "take it to the next level".
- No fabricated data. Use only verified numbers from /results or clearly
  hypothetical examples labelled as such.
- 600–1,000 words. Every post links to the matching service page
  (/facebook-ads-expert for Meta topics, /google-ads-expert for Google topics,
  both for comparison posts) using natural anchor text such as "hire a
  Facebook ads expert", plus /results (proof) and /contact near the end. Link one related earlier post when any exist. Do NOT link /learn or
  /resources for now (the learning offer starts ~Apr 2027).
- Topics + target keywords: follow `content/blog-queue.md`. Take the first
  `todo` row, use its target keyword in the title, description and first
  paragraph, and answer each "Also answer" question under its own H2 or H3
  using the searcher's wording. Mark the row `done YYYY-MM-DD` in the same
  commit.

## Publishing

Adding the file is enough — the blog index, post page, sitemap and metadata
are generated from it at build. Commit with message `Blog: <title>` and push
to main; Vercel deploys automatically.
