"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Media from "@/components/ui/Media";
import CountUp from "@/components/ui/CountUp";

/* ─────────────────────────────────────────────────────────────────────────────
   All figures below are pulled from live Meta Ads reporting (all-time, per
   campaign) across the ad accounts we manage. Client names are withheld —
   the numbers are not. Last synced: 2 Aug 2026.
   ───────────────────────────────────────────────────────────────────────── */

const filters = [
  "All",
  "Education",
  "Resort & Farmstay",
  "Restaurant & Lounge",
  "D2C",
  "Entertainment",
  "Clinic",
  "Retail",
];

const portfolio = [
  { k: "Ad spend managed", v: "₹29L+" },
  { k: "Form leads delivered", v: "10,239" },
  { k: "Campaigns run", v: "364" },
  { k: "Ad accounts", v: "58" },
];

const cases = [
  {
    cat: "Education", name: "Career Institute — Jaipur", img: "edu_students", alt: "Students working through a course together",
    struggle: "Admission enquiries flat, cost per lead climbing every intake.",
    action: "Video-first lead ads with creative rotation across MBA + hospitality courses.",
    metrics: [
      { k: "Leads", v: "2,766", highlight: true },
      { k: "Cost / lead", v: "₹34", highlight: true },
      { k: "Reach", v: "16.4L" },
      { k: "Spend", v: "₹93K" },
    ],
  },
  {
    cat: "Resort & Farmstay", name: "Farm Stay — Jaipur", img: "resort_farm", alt: "Farm stay pool and gardens on a clear day",
    struggle: "Weekend slots unsold, enquiries drying up midweek.",
    action: "Creator-led video lead ads plus a broad all-rounder audience build.",
    metrics: [
      { k: "Leads", v: "1,442", highlight: true },
      { k: "Cost / lead", v: "₹45", highlight: true },
      { k: "CTR", v: "1.79%" },
      { k: "Reach", v: "3.4L" },
    ],
  },
  {
    cat: "D2C", name: "D2C Home Textiles", img: "d2c_textile", alt: "Hand-blocked textiles hanging on a rail",
    struggle: "Spend scaling but ROAS sliding under breakeven.",
    action: "CBO restructure, city-tier split, lookalike stack on top buyers.",
    metrics: [
      { k: "ROAS", v: "4.26×", highlight: true },
      { k: "CTR", v: "8.42%", highlight: true },
      { k: "Spend", v: "₹2.6L" },
      { k: "Campaigns", v: "8" },
    ],
  },
  {
    cat: "Entertainment", name: "Family Entertainment Centre", img: "ent_arcade", alt: "Arcade machines lit up inside a family venue",
    struggle: "Footfall stuck to weekends only, weekdays dead.",
    action: "Always-on WhatsApp conversation ads running at city scale.",
    metrics: [
      { k: "Cost / chat", v: "₹18", highlight: true },
      { k: "Reach", v: "37.8L", highlight: true },
      { k: "Clicks", v: "1.2L" },
      { k: "Spend", v: "₹2.6L" },
    ],
  },
  {
    cat: "Restaurant & Lounge", name: "Rooftop Lounge — Airport Rd", img: "rest_lounge", alt: "Rooftop lounge bar set up for evening service",
    struggle: "Table reservations relying entirely on walk-ins.",
    action: "Instant-form reservation ads replacing generic traffic pushes.",
    metrics: [
      { k: "Leads", v: "382", highlight: true },
      { k: "Cost / lead", v: "₹38", highlight: true },
      { k: "CTR", v: "1.82%" },
      { k: "Spend", v: "₹15K" },
    ],
  },
  {
    cat: "Resort & Farmstay", name: "Boutique Retreat", img: "resort_hotel", alt: "Boutique retreat deck at golden hour",
    struggle: "New property opened with zero booking pipeline.",
    action: "Instant-form booking ads with tight geo and interest layering.",
    metrics: [
      { k: "Cost / lead", v: "₹25", highlight: true },
      { k: "CTR", v: "3.61%", highlight: true },
      { k: "Leads", v: "142" },
      { k: "Spend", v: "₹3.5K" },
    ],
  },
  {
    cat: "Resort & Farmstay", name: "Farmhouse — Event Venue", img: "venue_event", alt: "Banquet hall laid out ahead of an event",
    struggle: "Enquiry cost too high to justify running always-on.",
    action: "One scaled WhatsApp campaign, creative refreshed the moment it fatigued.",
    metrics: [
      { k: "Cost / chat", v: "₹6.36", highlight: true },
      { k: "CPC", v: "₹1.46", highlight: true },
      { k: "Reach", v: "8.9L" },
      { k: "Spend", v: "₹32K" },
    ],
  },
  {
    cat: "Clinic", name: "Hair Transplant Clinic", img: "clinic_consult", alt: "Clinician talking a patient through a consult",
    struggle: "High-ticket consults buried under unqualified enquiries.",
    action: "Conversation ads with creative tuned for intent instead of volume.",
    metrics: [
      { k: "Cost / chat", v: "₹33", highlight: true },
      { k: "Was", v: "₹93" },
      { k: "Reach", v: "12.5L" },
      { k: "Spend", v: "₹92K" },
    ],
  },
  {
    cat: "Restaurant & Lounge", name: "Banquet & Restaurant", img: "rest_interior", alt: "Restaurant and banquet floor ready for guests",
    struggle: "Banquet enquiries expensive, creator spend completely unmeasured.",
    action: "Creator content routed into conversation ads with a tracked cost per enquiry.",
    metrics: [
      { k: "Cost / chat", v: "₹9.92", highlight: true },
      { k: "Reach", v: "4.5L", highlight: true },
      { k: "CTR", v: "1.24%" },
      { k: "Spend", v: "₹14K" },
    ],
  },
  {
    cat: "Resort & Farmstay", name: "Wedding Resort", img: "venue_wedding", alt: "Wedding tables dressed at a resort venue",
    struggle: "Wedding enquiries seasonal, unpredictable and unbudgeted.",
    action: "Always-on wedding lead ads with a daycation package layer for the off-season.",
    metrics: [
      { k: "Leads", v: "562", highlight: true },
      { k: "Cost / lead", v: "₹138" },
      { k: "Reach", v: "1.8L" },
      { k: "Spend", v: "₹78K" },
    ],
  },
  {
    cat: "Restaurant & Lounge", name: "Restaurant — Party Bookings", img: "rest_dining", alt: "Restaurant dining room set for a private party",
    struggle: "Party and event bookings handled ad-hoc, no pipeline at all.",
    action: "Instant-form party enquiry ads built per outlet, not per brand.",
    metrics: [
      { k: "Leads", v: "301", highlight: true },
      { k: "Cost / lead", v: "₹77", highlight: true },
      { k: "CTR", v: "2.03%" },
      { k: "Spend", v: "₹23K" },
    ],
  },
  {
    cat: "Retail", name: "Tiles & Sanitaryware Showroom", img: "retail_shop", alt: "Retail showroom aisles stocked for walk-ins",
    struggle: "Showroom footfall depended entirely on dealer referrals.",
    action: "Brand-partner led conversation ads running across two cities.",
    metrics: [
      { k: "Cost / chat", v: "₹37", highlight: true },
      { k: "Reach", v: "2.4L" },
      { k: "CTR", v: "1.13%" },
      { k: "Spend", v: "₹16K" },
    ],
  },
  {
    cat: "Restaurant & Lounge", name: "Café — Local Awareness", img: "rest_cafe", alt: "Neighbourhood café filling up in the morning",
    struggle: "New café, nobody in the neighbourhood knew it existed.",
    action: "Local reach ads held at frequency 1.0 for maximum unique coverage.",
    metrics: [
      { k: "CPM", v: "₹1.61", highlight: true },
      { k: "Reach", v: "2.1L", highlight: true },
      { k: "Frequency", v: "1.0×" },
      { k: "Spend", v: "₹336" },
    ],
  },
];

// What got killed. Published on purpose — the cuts are the job.
const cuts = [
  {
    what: "D2C skincare — serum launch",
    signal: "0.11× ROAS",
    call: "Paused at ₹4.7K. Offer was wrong, not the targeting — funnel rebuilt before respending.",
  },
  {
    what: "Webinar funnel — low-ticket course",
    signal: "0.07× ROAS",
    call: "Killed at ₹4.2K. Price point could not carry paid acquisition at all.",
  },
  {
    what: "Nightlife venue — lead campaign",
    signal: "₹2,264 / lead",
    call: "Restructured to a conversation objective; form leads were never being called back.",
  },
  {
    what: "Venue campaign on the wrong objective",
    signal: "₹21,691 / lead",
    call: "Optimising for sales, not leads. Rebuilt as instant-form — cost per lead landed at ₹45.",
  },
];

// ─── Metric Card ──────────────────────────────────────────────────────────────

function MetricCard({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="bg-text-primary rounded-xl px-3 py-2.5 min-w-0">
      <div className="text-[10px] tracking-[.06em] uppercase text-white/50">{k}</div>
      <div className={`tabular-nums text-base md:text-lg mt-0.5 font-semibold ${highlight ? "text-secondary" : "text-white/85"}`}>
        <CountUp value={v} />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResultsPage() {
  const [active, setActive] = useState("All");
  const visible = cases.filter((c) => active === "All" || c.cat === active);

  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
            <a href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</a> / Results
          </div>
          <span className="eyebrow block mb-5">The receipts</span>
          <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[820px] leading-[1.08]">
            Real campaigns. Real numbers. No screenshots from gurus.
          </h1>
          <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[640px] leading-[1.7]">
            Every figure below is pulled straight from live Meta Ads reporting — all-time,
            per campaign. Client names stay private. The numbers don&apos;t.
          </p>

          {/* Portfolio strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-9 max-w-[820px]">
            {portfolio.map((p) => (
              <div key={p.k} className="bg-white border border-border rounded-xl px-4 py-3.5">
                <div className="text-[10px] tracking-[.06em] uppercase text-text-muted">{p.k}</div>
                <div className="tabular-nums text-[22px] md:text-[26px] font-bold text-text-primary mt-1">
                  <CountUp value={p.v} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-text-muted mt-3">
            Meta Ads, all-time. Last synced 2 Aug 2026.
          </p>
        </div>
      </section>

      {/* ══ CASE STUDIES — leaderboard rows, deliberately not a card grid ═══════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          {/* Filter chips — scrollable on mobile */}
          <div className="flex gap-2 flex-wrap mb-8 md:mb-10 reveal">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[12px] sm:text-[13px] font-medium px-4 py-2 rounded-full border transition-all duration-[250ms] ${
                  active === f
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-text-primary border-border hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* `reveal` lives on this always-present container only. ScrollReveal scans
              once per pathname, so cards remounted by the filter would never receive
              `.in` and stay invisible — do not add `reveal` to individual cards. */}
          <div className="flex flex-col gap-4 reveal">
            {visible.map((c) => (
              <Card key={c.name} className="p-0 overflow-hidden hover:-translate-y-1 hover:border-primary/25 transition-all duration-[250ms] group">
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 p-6 md:p-7">
                  <Media
                    src={c.img}
                    alt={c.alt}
                    className="w-full lg:w-[132px] h-[150px] lg:h-[104px] flex-none rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 132px"
                    zoomOnHover
                  />
                  <div className="lg:w-[250px] flex-none">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-bold text-text-primary text-[16px] leading-tight">{c.name}</span>
                      <span className="text-[10px] tracking-[.06em] uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-lg flex-none">
                        {c.cat}
                      </span>
                    </div>
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      <span className="text-text-muted">Struggle:</span> {c.struggle}
                    </p>
                    <p className="text-[13px] text-text-secondary leading-relaxed mt-1">
                      <span className="text-text-muted">Fix:</span> {c.action}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1">
                    {c.metrics.map((m) => (
                      <MetricCard key={m.k} {...m} />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE CUT ═══════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <span className="eyebrow block mb-4">Also the receipts</span>
          <h2 className="text-[clamp(22px,3vw,36px)] font-bold text-text-primary max-w-[720px] leading-[1.15]">
            The campaigns we killed
          </h2>
          <p className="text-[15px] md:text-[16px] text-text-secondary mt-4 max-w-[620px] leading-[1.7]">
            Anyone can show you winners. Knowing when to stop spending is the part
            that actually protects your budget — so here are four we shut down.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-9 reveal">
            {cuts.map((c) => (
              <Card key={c.what} className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <span className="font-semibold text-text-primary text-[15px] leading-snug">{c.what}</span>
                  <span className="tabular-nums text-[12px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-lg flex-none whitespace-nowrap">
                    {c.signal}
                  </span>
                </div>
                <p className="text-[13.5px] text-text-secondary leading-relaxed">{c.call}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
