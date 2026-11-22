/**
 * Portfolio numbers shown across the site and the blog. This is the ONLY place
 * they live: pages import `stats`, and blog Markdown uses {{tokens}} (see
 * `fillStats`). The numbers-sync agent updates the `raw` block after each pull.
 *
 * Method (aggregates only; the per-account working file stays outside this
 * public repo, in marketing/ads-data/):
 * - Meta: Ads API, all-time (date_preset=maximum) spend at ad-account level,
 *   plus accounts no longer readable carried at their last-known figure.
 * - Google: all-time cost and conversions for every account under the manager
 *   account (MCC).
 * - Pre-2023: two engagements from the owner's records (accounts no longer
 *   shared), fixed.
 */

const raw = {
  metaSpendInr: 5_527_932,
  metaAccounts: 73,
  metaLeads: 12_550, // Meta form leads
  googleSpendInr: 2_110_800,
  googleAccounts: 14,
  googleConversions: 66_662, // calls, direction requests, form fills
  pre2023SpendInr: 1_700_000,
  pre2023Accounts: 2,
  inrPerUsd: 83.4, // rate used for the $ figures at the last sync
  metaSyncedOn: "30 Oct 2026",
  googleSyncedOn: "5 Nov 2026",
};

/** ₹ in lakh with one decimal, e.g. 93,38,732 → "₹93.4L". */
const lakh = (inr: number) => `₹${(inr / 100_000).toFixed(1)}L`;
/** $ in thousands, rounded, e.g. 111,975 → "$112K". */
const usdK = (inr: number) => `$${Math.round(inr / raw.inrPerUsd / 1000)}K`;
const num = (n: number) => n.toLocaleString("en-US");

const totalSpendInr = raw.metaSpendInr + raw.googleSpendInr + raw.pre2023SpendInr;

export const stats = {
  raw,
  spend: lakh(totalSpendInr), // ₹93.4L
  spendUsd: usdK(totalSpendInr), // $112K
  leads: num(raw.metaLeads + raw.googleConversions), // 79,212
  accounts: String(raw.metaAccounts + raw.googleAccounts + raw.pre2023Accounts), // 89
  metaSpend: lakh(raw.metaSpendInr),
  metaSpendUsd: usdK(raw.metaSpendInr),
  metaAccounts: String(raw.metaAccounts),
  metaLeads: num(raw.metaLeads),
  googleSpend: lakh(raw.googleSpendInr),
  googleSpendUsd: usdK(raw.googleSpendInr),
  googleAccounts: String(raw.googleAccounts),
  googleConversions: num(raw.googleConversions),
  metaSyncedOn: raw.metaSyncedOn,
  googleSyncedOn: raw.googleSyncedOn,
};

export type StatKey = Exclude<keyof typeof stats, "raw">;

/**
 * Replace {{key}} tokens (e.g. {{spend}}, {{leads}}) in blog Markdown and
 * frontmatter with the current figures. Unknown tokens are left as-is so a
 * typo shows up on the page instead of silently disappearing.
 */
export function fillStats(text: string): string {
  return text.replace(/\{\{(\w+)\}\}/g, (m, k: string) =>
    k in stats && k !== "raw" ? String(stats[k as StatKey]) : m
  );
}
