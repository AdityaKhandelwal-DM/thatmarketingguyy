# Blog rules — what we write, how often, and what we never do

These rules keep the blog on the right side of Google's spam policies
(especially "scaled content abuse": many pages made mainly to rank, not to
help). They apply to every new post, every brief and every queue row, whether
a person or the cloud routine writes it. When a rule says "skip", skipping is
the correct result: an empty day is better than a weak post.

## 0. The three kinds of post

| Type (`type:` in frontmatter) | What it is | Length | Ending |
|---|---|---|---|
| `post` (default) | Answers a question someone asks **before hiring** (cost, agency vs freelancer, red flags, not working…). | 600–1,200 words | Normal contact box. |
| `guide` | **Industry playbook:** "Facebook ads for [business]" / "Google Ads for [business]". Written to help the owner run ads themselves, step by step, for that kind of business. | 1,200–2,000 words | One quiet line offering help (the site renders it). No sales pitch in the body. |
| `case-study` | **Breakdown of real businesses that grew with Meta or Google ads**, built from published, citable sources, plus Aditya's own analysis and one comparable campaign of his. | 1,000–1,600 words | One quiet line offering help (the site renders it). |

Guides and case studies exist to help first. The only link to hiring Aditya
inside the body is at most one natural sentence near the end (e.g. "if you'd
rather hand this over, that's what I do", linked to the service page); the
site adds a quiet line under the post automatically.

## 1. Choosing a topic: all seven gates must pass

1. **Real, measurable demand (high search intent).** Every topic must be
   worth ranking for, not just searched by someone:
   - The primary keyword, or the cluster of close variants the post targets,
     has **at least 100 average monthly searches** in Google Keyword Planner
     for the target markets combined (US + UK + Australia + Singapore + UAE),
     **or** Search Console shows the site already at position 30 or better for
     it. Record the numbers in the brief ("Search volume" row).
   - Pick the variant with the most volume as the primary keyword and put the
     smaller variants in the secondary list (e.g. "instagram ads cost" 2,900
     rather than "are instagram ads worth it" 170).
   - AnswerThePublic, "People also ask" and autocomplete find the questions
     and angles; Keyword Planner decides whether the topic gets a post.
   - Prefer commercial or hire-adjacent intent (cost, management, "for
     [business]", agency, worth it) over purely informational queries.
   - Below 100 and not in Search Console: the topic goes on `hold`, or its
     questions become a section/FAQ in a related post.
2. **Right reader.** The searcher is a small-business owner (US, UK, UAE,
   Australia, Singapore) deciding whether or whom to hire for Meta or Google
   Ads. For `guide` posts the reader may also be an owner who wants to run ads
   for their own type of business. Generic platform tutorials ("how to use
   Ads Manager", ad sizes, Keyword Planner) stay parked until ~Apr 2027.
3. **One question, one page.** The post answers a search intent no existing
   post already answers. Before adding a row, list every existing post's
   `keyword:` and H2s (`grep -h '^keyword:\|^## ' content/blog/*.md`). If the
   new primary keyword, or two or more of its main questions, are already
   covered, **update the existing post instead** (add a section or FAQ, set
   `updated:`) and do not create a new one.
4. **We can prove it.**
   - `post`: at least one verified figure from /results or the homepage in
     the same category, or a directly transferable one labelled as such.
   - `guide`: preferred when /results has a case in that industry. Without
     one, the guide is allowed only if the brief lists sources for the
     industry-specific advice (official Meta/Google help pages or the case
     studies below) and the post says plainly that Aditya hasn't run that
     industry, using transferable campaigns, clearly labelled, as examples.
   - `case-study`: every outside figure comes from a published source whose
     URL is in the brief (official Meta/Google success stories first), is
     quoted exactly, is linked in the post, and is called self-reported where
     the source says so. Never present another business as Aditya's client.
5. **Something new to say.** The brief states in one line what this post
   gives that the current top Google results don't: first-hand numbers, a
   failure and what it taught, or a specific method Aditya uses. If that line
   can't be written, skip the topic.
6. **Balance.** Google and Meta alternate; never two posts on the same
   platform in a row. No more than two posts in the same cluster (e.g.
   "hiring", "cost", "not working", one industry, Meta case studies, Google case studies)
   in any 30 days.
7. **Not a doorway page.** Never make near-copies that only swap a city,
   country, industry or year ("Google Ads consultant London / Paris /
   Sydney…"). One honest page covers all locations. An industry gets its own
   `guide` only when the brief lists **at least three ways the setup really
   differs** for that industry (offer, targeting rules, conversion action,
   sales cycle, policy, seasonality…). If it can't, group it with similar
   businesses (e.g. plumbers + HVAC + electricians = home services).

## 2. Writing: every post must pass these checks

- **No template feel.** The opening paragraph must not reuse the opening of
  any of the last 10 posts. Vary how Aditya is introduced; don't start every
  post with "I'm Aditya, a solo…".
- **Vary the proof.** The portfolio totals line ({{accounts}} accounts, {{spend}}… — always written as tokens, see content/blog/README.md) appears
  at most once per post and not in the first paragraph of two posts in a row.
  Prefer the case studies most relevant to this topic over the same headline
  numbers.
- **One first-hand detail** that no other post on the site uses: a specific
  case, a mistake, a step Aditya actually takes.
- **Length fits the question and the type** (see section 0). Never pad to hit a count;
  never stretch a one-paragraph answer into a post (that one belongs in an
  FAQ on an existing post).
- **Truth.** Only verified numbers; hypotheticals labelled; no platform
  facts (fees, policies, specs) unless certain they're current; no claims of
  offices, registrations or clients that don't exist.
- **Written for the reader.** Keywords appear where the brief says, naturally,
  never stuffed. Headings are real questions people ask.
- **A person approves.** Every new post goes out as a PR that Aditya approves
  before it reaches the live site. Nothing auto-publishes.

- **Case studies:** write the story in your own words; never copy sentences
  from the source beyond a short quote in quotation marks. Don't use the
  other business's logo or photos. Each case study adds what the source
  doesn't: why it worked, what a reader's business could copy, and one of
  Aditya's own comparable campaigns.

## 3. Cadence

- **Ceiling, not quota:** at most **one new post per day**. If no queue row
  passes the gates on a given day, write nothing and say so (open or update
  the GitHub issue "No qualifying blog topic today").
- **Refresh too:** for every 6 new posts, refresh one existing post that
  Search Console shows at position 8–50 (more answers, better title,
  `updated:` date).
- **Health check every 2 weeks** in Search Console → Pages: if more than 20%
  of the posts published in the last 30 days are "Crawled – currently not
  indexed" or "Discovered – currently not indexed" three weeks after
  publishing, slow down to one post every 2 days and improve or merge the
  weak ones before adding more.
- Keep at least 10 rows in the queue that pass all gates; research more when
  it drops below that.

## 4. Never

- Pages made for search engines instead of people, or posts that rewrite a
  competitor's article.
- Location-, industry- or year-swapped copies of the same post.
- Fabricated stats, reviews, client names or results.
- Keyword-stuffed titles, hidden text, or posts written mainly to carry links.
- Publishing without Aditya's approval.
