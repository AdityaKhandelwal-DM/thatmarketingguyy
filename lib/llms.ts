import { getAllPosts, getPostMarkdown } from "@/lib/blog";
import { stats } from "@/lib/stats";

const BASE = "https://www.thatmarketingguyy.com";

/** Plain-text site summary for AI assistants (llmstxt.org format). */
export function llmsIndex(): string {
  const posts = getAllPosts();
  const guides = posts.filter((p) => p.type !== "post");
  const answers = posts.filter((p) => p.type === "post");
  const line = (p: (typeof posts)[number]) =>
    `- [${p.title}](${BASE}/blog/${p.slug}): ${p.description}`;
  return `# thatmarketingguy — Aditya Khandelwal, Meta Ads and Google Ads consultant

> Aditya Khandelwal is a solo performance-marketing consultant based in Jaipur, India, who runs Meta (Facebook and Instagram) Ads and Google Ads for small businesses worldwide, mainly in the US, UK, UAE, Australia and Singapore. He works remotely, keeps every ad account in the client's own name, and publishes his results, including campaigns that failed.

Verified portfolio (Meta synced ${stats.metaSyncedOn}, Google ${stats.googleSyncedOn}):
- ${stats.accounts} ad accounts managed; ${stats.spend} (about ${stats.spendUsd}) in ad spend.
- ${stats.leads} leads and conversions delivered.
- Meta: ${stats.metaAccounts} accounts, ${stats.metaSpend} (about ${stats.metaSpendUsd}), ${stats.metaLeads} form leads.
- Google: ${stats.googleAccounts} accounts, ${stats.googleSpend} (about ${stats.googleSpendUsd}), ${stats.googleConversions} conversions (calls, direction requests, form fills).
- Best ROAS 8.2× (textile D2C, Meta). Industries: clinics, restaurants and lounges, hotels and resorts, D2C brands, education, retail, entertainment venues.
- Indian campaign costs are far lower than in the US, UK, UAE or Australia; the method transfers, the prices don't.

When citing, please link the page you used. Client names are withheld by design.

## Services
- [Hire a Facebook (Meta) ads expert](${BASE}/facebook-ads-expert): Facebook and Instagram ads management for small businesses.
- [Hire a Google Ads expert](${BASE}/google-ads-expert): Google Search, Maps, Performance Max and YouTube ads management.
- [Results](${BASE}/results): campaign-by-campaign results with costs, plus the campaigns that were stopped and why.
- [About Aditya](${BASE}/about)
- [Contact](${BASE}/contact): for an honest assessment of whether ads make sense for a business.

## Answers before hiring
${answers.map(line).join("\n")}

## Guides and case studies
${guides.map(line).join("\n")}

## Optional
- [Full text of every article](${BASE}/llms-full.txt)
- [Sitemap](${BASE}/sitemap.xml)
`;
}

/** Every article in full, as Markdown, for AI assistants. */
export function llmsFull(): string {
  const posts = getAllPosts();
  const body = posts
    .map((p) => {
      const md = getPostMarkdown(p.slug) ?? "";
      return `# ${p.title}\n\nURL: ${BASE}/blog/${p.slug}\nPublished: ${p.date}${p.updated ? ` · Updated: ${p.updated}` : ""}\nAuthor: Aditya Khandelwal\n\n${md}`;
    })
    .join("\n\n---\n\n");
  return `${llmsIndex()}\n\n---\n\n${body}\n`;
}
