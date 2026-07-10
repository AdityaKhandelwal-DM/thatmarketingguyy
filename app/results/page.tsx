"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import CountUp from "@/components/ui/CountUp";

const filters = ["All", "Clinic", "Restaurant", "D2C", "Local / SEO", "FunZone"];

const cases = [
  {
    cat: "Clinic", name: "Skin Clinic — Jaipur",
    struggle: "Empty appointment book, low walk-ins.",
    action: "Meta lead ads + Google Map Pack push.",
    metrics: [
      { k: "Walk-ins", v: "+78%", highlight: true },
      { k: "ROAS", v: "5.0×", highlight: true },
      { k: "Spend", v: "₹8L+" },
      { k: "Window", v: "90d" },
    ],
  },
  {
    cat: "Restaurant", name: "Cloud Kitchen — Jaipur",
    struggle: "Weekday orders flat, high CPO.",
    action: "Geo-fenced Meta ads + offer testing.",
    metrics: [
      { k: "Orders", v: "+150%", highlight: true },
      { k: "ROAS", v: "6.0×", highlight: true },
      { k: "Spend", v: "₹6.4L" },
      { k: "CPO", v: "−41%" },
    ],
  },
  {
    cat: "D2C", name: "D2C Skincare",
    struggle: "Spend scaling, ROAS dropping.",
    action: "Creative testing + audience restructure.",
    metrics: [
      { k: "Revenue", v: "+320%", highlight: true },
      { k: "ROAS", v: "5.5×", highlight: true },
      { k: "Spend", v: "₹8.5L" },
      { k: "Window", v: "120d" },
    ],
  },
  {
    cat: "Local / SEO", name: "Local Store — Map Pack",
    struggle: "Invisible on Google, no calls.",
    action: "GBP optimisation + local SEO + reviews.",
    metrics: [
      { k: "Calls", v: "+300%", highlight: true },
      { k: "Rank", v: "Top 3", highlight: true },
      { k: "Spend", v: "₹0 ads" },
      { k: "Window", v: "60d" },
    ],
  },
  {
    cat: "FunZone", name: "FunZone — Weekend Fill",
    struggle: "Slow weekdays, empty slots.",
    action: "Local awareness + family-offer campaigns.",
    metrics: [
      { k: "Footfall", v: "+90%", highlight: true },
      { k: "ROAS", v: "4.0×", highlight: true },
      { k: "Spend", v: "₹3.5L" },
      { k: "Window", v: "75d" },
    ],
  },
  {
    cat: "Clinic", name: "Wellness Clinic",
    struggle: "Specific centres not performing.",
    action: "Centre-level budgets + landing page fix.",
    metrics: [
      { k: "Leads", v: "+210%", highlight: true },
      { k: "ROAS", v: "7.0×", highlight: true },
      { k: "Spend", v: "₹7L+" },
      { k: "Window", v: "90d" },
    ],
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
            Filter by industry. Every case shows the problem, what changed, what was spent, and the return.
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
              <Card key={c.name} className="p-0 overflow-hidden hover:-translate-y-1 hover:border-primary/25 transition-all duration-[250ms]">
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 p-6 md:p-7">
                  <div className="lg:w-[280px] flex-none">
                    <div className="flex items-center gap-2 mb-2">
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

      <Footer />
    </>
  );
}
