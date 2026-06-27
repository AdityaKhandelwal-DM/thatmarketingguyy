"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const filters = ["All", "Clinic", "Restaurant", "D2C", "Local / SEO", "FunZone"];

const cases = [
  { cat: "Clinic", name: "Skin Clinic — Jaipur", struggle: "Empty appointment book, low walk-ins.", action: "Meta lead ads + Google Map Pack push.", metrics: [{ k: "Walk-ins", v: "+78%", color: "mint" }, { k: "ROAS", v: "5.0×", color: "orange" }, { k: "Spend", v: "₹8L+" }, { k: "Window", v: "90d" }] },
  { cat: "Restaurant", name: "Cloud Kitchen — Jaipur", struggle: "Weekday orders flat, high CPO.", action: "Geo-fenced Meta ads + offer testing.", metrics: [{ k: "Orders", v: "+150%", color: "mint" }, { k: "ROAS", v: "6.0×", color: "orange" }, { k: "Spend", v: "₹6.4L" }, { k: "CPO", v: "−41%" }] },
  { cat: "D2C", name: "D2C Skincare", struggle: "Spend scaling, ROAS dropping.", action: "Creative testing + audience restructure.", metrics: [{ k: "Revenue", v: "+320%", color: "mint" }, { k: "ROAS", v: "5.5×", color: "orange" }, { k: "Spend", v: "₹8.5L" }, { k: "Window", v: "120d" }] },
  { cat: "Local / SEO", name: "Local Store — Map Pack", struggle: "Invisible on Google, no calls.", action: "GBP optimisation + local SEO + reviews.", metrics: [{ k: "Calls", v: "+300%", color: "mint" }, { k: "Rank", v: "Top 3", color: "orange" }, { k: "Spend", v: "₹0 ads" }, { k: "Window", v: "60d" }] },
  { cat: "FunZone", name: "FunZone — Weekend Fill", struggle: "Slow weekdays, empty slots.", action: "Local awareness + family-offer campaigns.", metrics: [{ k: "Footfall", v: "+90%", color: "mint" }, { k: "ROAS", v: "4.0×", color: "orange" }, { k: "Spend", v: "₹3.5L" }, { k: "Window", v: "75d" }] },
  { cat: "Clinic", name: "Wellness Clinic", struggle: "Specific centres not performing.", action: "Centre-level budgets + landing page fix.", metrics: [{ k: "Leads", v: "+210%", color: "mint" }, { k: "ROAS", v: "7.0×", color: "orange" }, { k: "Spend", v: "₹7L+" }, { k: "Window", v: "90d" }] },
];

export default function ResultsPage() {
  const [active, setActive] = useState("All");
  const visible = cases.filter((c) => active === "All" || c.cat === active);

  return (
    <>
      <Header />

      {/* Page hero */}
      <section className="bg-navy text-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-3">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Results
          </div>
          <span className="eyebrow block mb-3" style={{ color: "#F97316" }}>The receipts</span>
          <h1 className="text-[clamp(26px,4.2vw,52px)] font-extrabold text-white max-w-[760px] leading-tight">
            Real campaigns. Real numbers. No screenshots from gurus.
          </h1>
          <p className="text-base md:text-lg text-white/70 mt-3 max-w-[620px]">
            Filter by industry. Every card shows the problem, what changed, what was spent, and the return.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          {/* Filter chips — scrollable on mobile */}
          <div className="flex gap-2 flex-wrap mb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-[12px] sm:text-[13px] px-3.5 py-2 rounded-full border transition-all ${
                  active === f
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy border-ink/20 hover:border-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((c) => (
              <div key={c.name} className="bg-white border border-ink/10 rounded-card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-card-lg transition-all duration-200">
                <div className="px-4 py-4 border-b border-ink/10 flex items-center justify-between gap-2">
                  <span className="font-display font-bold text-navy text-[15px] leading-tight">{c.name}</span>
                  <span className="font-mono text-[10px] tracking-[.06em] uppercase text-orange bg-orange/10 px-2 py-1 rounded-md flex-none">{c.cat}</span>
                </div>
                <div className="px-4 py-4 flex flex-col gap-3 flex-1">
                  <div>
                    <div className="font-mono text-[10px] tracking-[.05em] uppercase text-muted">Struggle</div>
                    <div className="text-sm text-ink font-medium mt-0.5">{c.struggle}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[.05em] uppercase text-muted">What we did</div>
                    <div className="text-sm text-ink font-medium mt-0.5">{c.action}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-auto pt-3 border-t border-dashed border-ink/20">
                    {c.metrics.map((m) => (
                      <div key={m.k} className="bg-navy rounded-xl px-3 py-2.5 min-w-0">
                        <div className="font-mono text-[10px] tracking-[.06em] uppercase text-white/50">{m.k}</div>
                        <div className={`font-mono text-base mt-0.5 ${m.color === "mint" ? "text-mint" : m.color === "orange" ? "text-orange" : "text-white"}`}>{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[12px] text-muted font-mono bg-white border border-dashed border-ink/20 rounded-xl px-4 py-3">
            ⚠ <strong className="text-orange">Sample data.</strong> Every number is a placeholder. Replace with your real, verified figures before publishing.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
