import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BarChart3, Target, MapPin, GraduationCap, PlayCircle } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   August 2026 managed-spend snapshot. Numbers are exact; client names are
   WITHHELD (anonymised to sector), matching the /results page discipline.
   Sources:
     - Meta Ads: account-level insights, pulled 20 Aug 2026 (₹2,26,611.25).
     - Google Ads: campaign report export, manager account (₹1,12,733.70;
       manager-account total incl. one un-itemised sub-account ₹1,13,317.51).
   Window: 2–20 Aug 2026 inclusive (19 days), not timezone-normalised. Meta
   spend provisional until billing finalises. No conversion/ROAS on the Meta
   side — CTR/CPM only. Do NOT restore real client names to this page.
   ───────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "August 2026 — Managed Ad Spend Snapshot",
  description:
    "A transparent, anonymised snapshot of ad spend managed across Google and Meta for SME clients, 2–20 August 2026. Real numbers, client names withheld.",
};

const combined = [
  { k: "Total ad spend managed", v: "₹3.39L", sub: "2–20 Aug 2026 · 19 days" },
  { k: "Active ad accounts", v: "37", sub: "29 Meta · 8 Google" },
  { k: "Impressions", v: "8.9M", sub: "reach 4.72M" },
  { k: "Clicks", v: "89,961", sub: "blended CTR ~1.0%" },
];

const platforms = [
  { name: "Meta Ads", spend: "₹2,26,611", share: 66.8, note: "Facebook + Instagram · the reach engine · 0.81% CTR" },
  { name: "Google Ads", spend: "₹1,12,734", share: 33.2, note: "Search + Performance Max · higher intent · 5.41% CTR" },
];

const sectors = [
  "Restaurants, cafés, lounges & bars",
  "Hotels, resorts, villas & farmstays",
  "Entertainment & event venues",
  "D2C & local retail",
  "Clinics & healthcare",
  "Education",
  "Beauty & personal care",
  "Building materials",
];

const insights: { icon: typeof BarChart3; title: string; body: string }[] = [
  {
    icon: BarChart3,
    title: "One venue drove ~27% of all Meta spend",
    body: "A single entertainment venue was the largest line in the window. Concentration like this is fine when it converts — the risk is when one account's fatigue drags the whole blended cost.",
  },
  {
    icon: Target,
    title: "The clearest waste line: 0.046% CTR",
    body: "A rooftop lounge spent ₹2,686 for 334 clicks on 724,000 impressions. Delivery works; engagement doesn't — usually a reach objective on an account that should be driving action, or exhausted creative.",
  },
  {
    icon: MapPin,
    title: "Local ads convert; the web funnel leaks",
    body: "A dry-fruit retailer's Google store-visit campaigns converted at ₹17–24 each, while its web/shopping campaigns spent ₹3,200+ for two conversions. The gap is the website, not the ads.",
  },
  {
    icon: GraduationCap,
    title: "Zero-tracking spend still happens",
    body: "A hospitality account ran a Google search campaign that spent ₹3,524 for zero tracked conversions — no conversion tag firing. Always the first thing to fix before judging performance.",
  },
];

function Stat({ k, v, sub }: { k: string; v: string; sub?: string }) {
  return (
    <div className="rounded-card border border-border bg-white shadow-card p-6 sm:p-7">
      <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-2">{k}</div>
      <div className="font-sans font-bold text-[40px] leading-none text-text-primary">{v}</div>
      {sub && <div className="mt-2 text-sm text-text-secondary">{sub}</div>}
    </div>
  );
}

export default function ReportsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-bg-light border-b border-border">
          <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20">
            <div className="inline-flex items-center gap-2 rounded-btn bg-secondary text-text-primary text-[13px] font-bold uppercase tracking-[0.06em] px-3 py-1.5 mb-5">
              <PlayCircle className="w-4 h-4" /> August 2026 snapshot
            </div>
            <h1 className="font-sans font-bold text-[38px] sm:text-h1 leading-[1.08] text-text-primary max-w-[820px]">
              What ₹3.39 lakh of managed ad spend looks like — <span className="text-primary">in the open</span>.
            </h1>
            <p className="mt-5 text-lg text-text-secondary max-w-[680px] leading-relaxed">
              A transparent snapshot across Google and Meta for SME clients, 2–20 August 2026. Real numbers,
              pulled from the platforms. Client names withheld — the point is the reading, not the roster.
            </p>
          </div>
        </section>

        {/* Combined stats */}
        <section className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {combined.map((s) => <Stat key={s.k} {...s} />)}
          </div>
        </section>

        {/* Platform split */}
        <section className="bg-bg-light border-y border-border">
          <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
            <h2 className="font-sans font-bold text-h3 sm:text-h2 text-text-primary mb-3">Where the spend went</h2>
            <p className="text-text-secondary max-w-[680px] mb-8">
              Meta carried roughly two-thirds of the budget as the volume-and-reach engine; Google took the
              higher-intent third through Search and Performance Max.
            </p>
            <div className="flex flex-col gap-5">
              {platforms.map((p) => (
                <div key={p.name} className="rounded-card border border-border bg-white shadow-card p-6 sm:p-7">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <div className="font-sans font-bold text-h4 text-text-primary">{p.name}</div>
                    <div className="font-sans font-bold text-h4 text-primary">{p.spend}</div>
                  </div>
                  <div className="h-3 rounded-full bg-bg-light border border-border overflow-hidden mb-3">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${p.share}%` }} />
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-text-secondary">{p.note}</span>
                    <span className="font-semibold text-text-primary">{p.share}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
          <h2 className="font-sans font-bold text-h3 sm:text-h2 text-text-primary mb-3">Industries in the mix</h2>
          <p className="text-text-secondary max-w-[680px] mb-8">
            37 accounts across eight sectors carried live delivery in the window — mostly local, service-led
            businesses that live or die on walk-ins, calls, orders and bookings.
          </p>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span key={s} className="rounded-btn border border-border bg-white shadow-card px-4 py-2.5 text-[15px] font-medium text-text-primary">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="bg-bg-light border-y border-border">
          <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
            <h2 className="font-sans font-bold text-h3 sm:text-h2 text-text-primary mb-3">What the numbers actually say</h2>
            <p className="text-text-secondary max-w-[680px] mb-8">
              Read off spend, CTR and delivery — no conversion or ROAS data is included here, so these are
              signals to investigate, not verdicts on profit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {insights.map((it) => {
                const Icon = it.icon;
                return (
                  <div key={it.title} className="rounded-card border border-border bg-white shadow-card p-6 sm:p-7">
                    <div className="w-11 h-11 rounded-btn bg-bg-light border border-border flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                    </div>
                    <div className="font-sans font-bold text-h4 text-text-primary mb-2">{it.title}</div>
                    <p className="text-text-secondary leading-relaxed">{it.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20">
          <div className="rounded-card bg-text-primary text-white p-8 sm:p-12 text-center">
            <h2 className="font-sans font-bold text-h3 sm:text-h2 mb-3">Want this clarity on your own account?</h2>
            <p className="text-white/70 max-w-[560px] mx-auto mb-7">
              I read the dashboards you already pay for and tell you, in plain language, what's working and what's
              burning money. No jargon, no agency retainer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-btn bg-primary hover:bg-primary-dark transition-colors text-white font-semibold px-6 py-3">
                Work with me
              </Link>
              <Link href="/results" className="inline-flex items-center justify-center rounded-btn border-2 border-white/30 hover:border-white/60 transition-colors text-white font-semibold px-6 py-3">
                See client results
              </Link>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 pb-16">
          <p className="text-[13px] leading-relaxed text-text-muted max-w-[820px]">
            Method — Meta figures: account-level insights pulled 20 Aug 2026. Google figures: campaign report
            export, manager account. Window 2–20 Aug 2026 inclusive (19 days), each account in its own timezone,
            not normalised. Meta spend is provisional until billing finalises. Nine Meta accounts could not be
            queried and are excluded. Client names withheld; numbers unmodified.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
