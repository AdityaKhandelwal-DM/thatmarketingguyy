# Blog rules — what we write, how often, and what we never do

These rules keep the blog on the right side of Google's spam policies
(especially "scaled content abuse": many pages made mainly to rank, not to
help). They apply to every new post, every brief and every queue row, whether
a person or the cloud routine writes it. When a rule says "skip", skipping is
the correct result: an empty day is better than a weak post.

## 1. Choosing a topic: all seven gates must pass

1. **Real demand.** The topic comes from evidence that people search for it:
   a Google Search Console query with impressions, an AnswerThePublic keyword
   or question, or a Google "People also ask" question. Write the evidence in
   the brief. No topic comes from guessing what "might rank".
2. **Right reader.** The searcher is a small-business owner (US, UK, UAE,
   Australia, Singapore) deciding whether or whom to hire for Meta or Google
   Ads. DIY / how-to-run-ads-yourself topics stay parked until ~Apr 2027.
3. **One question, one page.** The post answers a search intent no existing
   post already answers. Before adding a row, list every existing post's
   `keyword:` and H2s (`grep -h '^keyword:\|^## ' content/blog/*.md`). If the
   new primary keyword, or two or more of its main questions, are already
   covered, **update the existing post instead** (add a section or FAQ, set
   `updated:`) and do not create a new one.
4. **We can prove it.** At least one verified figure from /results or the
   homepage in the same category, or a directly transferable one that the
   post labels as such. If Aditya has never done the work the topic is about,
   we don't write it.
5. **Something new to say.** The brief states in one line what this post
   gives that the current top Google results don't: first-hand numbers, a
   failure and what it taught, or a specific method Aditya uses. If that line
   can't be written, skip the topic.
6. **Balance.** Google and Meta alternate; never two posts on the same
   platform in a row. No more than two posts in the same cluster (e.g.
   "hiring", "cost", "not working", one industry) in any 30 days.
7. **Not a doorway page.** Never make near-copies that only swap a city,
   country, industry or year ("Google Ads consultant London / Paris /
   Sydney…"). One honest page covers all locations; an industry gets its own
   post only when the setup and proof genuinely differ.

## 2. Writing: every post must pass these checks

- **No template feel.** The opening paragraph must not reuse the opening of
  any of the last 10 posts. Vary how Aditya is introduced; don't start every
  post with "I'm Aditya, a solo…".
- **Vary the proof.** The portfolio totals line (89 accounts, ₹93.4L…) appears
  at most once per post and not in the first paragraph of two posts in a row.
  Prefer the case studies most relevant to this topic over the same headline
  numbers.
- **One first-hand detail** that no other post on the site uses: a specific
  case, a mistake, a step Aditya actually takes.
- **Length fits the question.** 600–1,200 words. Never pad to hit a count;
  never stretch a one-paragraph answer into a post (that one belongs in an
  FAQ on an existing post).
- **Truth.** Only verified numbers; hypotheticals labelled; no platform
  facts (fees, policies, specs) unless certain they're current; no claims of
  offices, registrations or clients that don't exist.
- **Written for the reader.** Keywords appear where the brief says, naturally,
  never stuffed. Headings are real questions people ask.
- **A person approves.** Every new post goes out as a PR that Aditya approves
  before it reaches the live site. Nothing auto-publishes.

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
