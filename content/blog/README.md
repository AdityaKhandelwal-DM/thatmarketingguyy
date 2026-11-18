# Blog posts — rules for the writing agent

One `.md` file per post. Filename = slug: `kebab-case-title.md` (no date prefix).

## Frontmatter

```
---
title: Why Are My Facebook Ads Not Working? 9 Fixes From 80 Real Ad Accounts
metaTitle: Why Are My Facebook Ads Not Working? 9 Fixes
description: Meta description, 140–155 chars, plainspoken, includes the target keyword.
date: 2026-08-02
keyword: why are my facebook ads not working
image: work_dashboard
---
```

`title` (the H1), `description`, `date`, `keyword` and `image` are required.
`metaTitle` is the `<title>` Google shows: ≤60 characters, copied from the
brief; when it is set the site does not add "| thatmarketingguy". `updated:
YYYY-MM-DD` is optional and only for meaningful refreshes of an older post.

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
  logo or a look-alike of its interface/colours). For anything Facebook or
  Instagram, use the current **Meta** logo (blue infinity mark, #0081FB), never
  the old Facebook "f". For Google, use the Google Ads mark. The words can
  still say "Facebook ads" (that's what people search); only the logo is Meta.
  The site's own brand colours stay as they are.
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
- 900–1,200 words. Every post links to the matching service page
  (/facebook-ads-expert for Meta topics, /google-ads-expert for Google topics,
  both for comparison posts) using natural anchor text such as "hire a
  Facebook ads expert", plus /results (proof) and /contact near the end. Link one related earlier post when any exist. Do NOT link /learn or
  /resources for now (the learning offer starts ~Apr 2027).
- Topics + target keywords: follow `content/blog-queue.md`. Take the first
  `todo` row that has no open PR yet. If the row links a brief
  (`content/blog-briefs/<slug>.md`), build the post from it: use its slug,
  metaTitle, description, H1, outline, FAQ, proof points, links and banner
  text, and follow `content/blog-briefs/README.md`. Older rows without a
  brief: use the target keyword in the title, description and first
  paragraph, and answer each "Also answer" question under its own H2 or H3
  using the searcher's wording. Mark the row `done YYYY-MM-DD` in the same
  commit.
- FAQ: when the brief has one, add `## Frequently asked questions` before the
  closing section, each question as `### Question?` followed by a short
  standalone answer. The site turns it into FAQPage structured data.
- Link back: the brief names one older post that should link TO the new one.
  Add one natural sentence with that link to the older post in the same
  commit.

## Publishing

Adding the file is enough — the blog index, post page, sitemap and metadata
are generated from it at build. Commit with message `Blog: <title>` and push
to main; Vercel deploys automatically.
