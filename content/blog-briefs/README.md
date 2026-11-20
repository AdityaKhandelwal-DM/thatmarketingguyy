# Blog briefs — the architecture every post is built on

Each queue row in `content/blog-queue.md` points to a brief here
(`content/blog-briefs/<slug>.md`). The brief is the plan; the writer turns it
into `content/blog/<slug>.md`. These files are never published (the blog only
reads `content/blog/`).

**`RULES.md` comes first:** the topic gates, writing checks, cadence and
"never" list there override everything else in this folder.

Write the post from the brief, not from scratch. If the brief and
`content/blog/README.md` disagree, the README's voice and data rules win; the
brief wins on structure, keywords and links.

## What every brief fixes in advance

| Element | Rule |
|---|---|
| **URL slug** | Short, lowercase, hyphens, contains the primary keyword. Filename = slug. Never change it after publishing. |
| **Meta title** (`metaTitle:`) | ≤ 60 characters including spaces. Primary keyword first or as close to the front as reads naturally. Shown in Google, so it is written for the click. No "\| thatmarketingguy" suffix (the site skips it when `metaTitle` is set). |
| **Meta description** (`description:`) | 140–155 characters. Contains the primary keyword once, says who it's for and what they get, ends with a reason to click. |
| **H1** (`title:`) | One per page, rendered from `title:`. May be longer and more human than the meta title. Contains the primary keyword or its closest natural variant. |
| **Primary keyword** (`keyword:`) | One phrase. Goes in: slug, meta title, meta description, H1, the first 100 words, at least one H2, and the banner alt text (the H1 is used as alt automatically). |
| **Secondary keywords** | 3–6 related phrases and real searcher questions. Each question gets its own H2 or H3 in the searcher's own wording. Use each phrase once or twice; never stuff. |
| **Search intent** | Stated in the brief (commercial investigation / informational-with-hire-intent / local). The opening paragraph must answer that intent immediately. |
| **Featured-snippet answer** | The paragraph straight after the named H2 answers the question in 40–55 words, plainly, before any nuance. Lists of steps use a numbered list. |
| **H2/H3 outline** | Follow the brief's order. H2s are the main questions; H3s split an H2 only when there are 2+ distinct parts. No skipped levels (no H3 straight under H1). |
| **FAQ section** | `## Frequently asked questions`, then 3–4 `### Question?` each followed by a 1–3 sentence answer. Put it just before the closing section. The site turns this into FAQPage structured data automatically, so the questions must be real searcher questions and the answers must stand alone. |
| **Proof points** | Only the figures listed in the brief (all from /results or the homepage). ₹ always with ~$ equivalent. Always say these are Indian campaigns and costs differ abroad. Hypotheticals are labelled "hypothetical". |
| **E-E-A-T** | First person, real experience, one failure or limitation stated honestly, author is Aditya (added automatically). |
| **Internal links** | 4–6 per post, descriptive anchors (never "click here"): the matching service page, /results, /contact, and the related posts the brief names. Every new post must also be linked FROM one older post (the brief names it): add one natural sentence with the link to that older post in the same commit. |
| **External link** | Max one, only to an official source (Google Ads Help, Meta Business Help Centre) when the brief asks for it. |
| **Images** | Banner: `public/images/blog-<slug>.webp`, 1200×630, headline from the brief, platform mark (Meta infinity for Facebook/Instagram, Google Ads mark for Google). 1–2 inline images from `public/images/` with a real-sentence caption that ideally contains a secondary keyword. |
| **CTA** | The closing section points to /results then /contact, in plain words. The site adds the contact box and service button itself; do not duplicate it. |
| **Length & readability** | 900–1,200 words (posts can go to 1,200 when the brief has an FAQ). Paragraphs ≤ 4 sentences, sentences mostly under 20 words, one idea per paragraph, bullets for lists of 3+. |
| **Schema** | Article + BreadcrumbList are automatic. FAQPage comes from the FAQ section. Nothing to add by hand. |
| **Freshness** | When an existing post is meaningfully refreshed, add `updated: YYYY-MM-DD` to its frontmatter (feeds dateModified). |

## Where the topics come from

- **Google Search Console** (property `sc-domain:thatmarketingguyy.com`, read
  as khandelwalla1388@gmail.com): queries the site already gets impressions
  for. Topics where the site sits at position 10–50 are the fastest wins.
- **AnswerThePublic** (free plan, 3 searches/day, EN-US): what buyers ask.
  Raw notes in `../marketing/seo-research/` (outside this repo).
- Goal until ~Mar 2027: hire-intent searches from the US, UK, UAE, Australia
  and Singapore. DIY/how-to topics stay parked.
