"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const filters = ["All", "Clinic", "Restaurant", "D2C", "Local / SEO", "FunZone"];

const cases = [
  { cat: "Clinic",     name: "Skin Clinic — Jaipur",    struggle: "Empty appointment book, low walk-ins.",     action: "Meta lead ads + Google Map Pack push.",         metrics: [{ k: "Walk-ins", v: "+78%",  hi: "sage" }, { k: "ROAS", v: "5.0×", hi: "ember" }, { k: "Spend", v: "₹8L+"  }, { k: "Window", v: "90d" }] },
  { cat: "Restaurant", name: "Cloud Kitchen — Jaipur",  struggle: "Weekday orders flat, high CPO.",            action: "Geo-fenced Meta ads + offer testing.",          metrics: [{ k: "Orders",  v: "+150%", hi: "sage" }, { k: "ROAS", v: "6.0×", hi: "ember" }, { k: "Spend", v: "₹6.4L" }, { k: "CPO",    v: "−41%" }] },
  { cat: "D2C",        name: "D2C Skincare",            struggle: "Spend scaling, ROAS dropping.",             action: "Creative testing + audience restructure.",      metrics: [{ k: "Revenue", v: "+320%", hi: "sage" }, { k: "ROAS", v: "5.5×", hi: "ember" }, { k: "Spend", v: "₹8.5L" }, { k: "Window", v: "120d"}] },
  { cat: "Local / SEO",name: "Local Store — Map Pack",  struggle: "Invisible on Google, no calls.",            action: "GBP optimisation + local SEO + reviews.",       metrics: [{ k: "Calls",   v: "+300%", hi: "sage" }, { k: "Rank",  v: "Top 3", hi: "ember" }, { k: "Spend", v: "₹0"    }, { k: "Window", v: "60d" }] },
  { cat: "FunZone",    name: "FunZone — Weekend Fill",  struggle: "Slow weekdays, empty slots.",               action: "Local awareness + family-offer campaigns.",     metrics: [{ k: "Footfall",v: "+90%",  hi: "sage" }, { k: "ROAS", v: "4.0×", hi: "ember" }, { k: "Spend", v: "₹3.5L" }, { k: "Window", v: "75d" }] },
  { cat: "Clinic",     name: "Wellness Clinic",         struggle: "Specific centres not performing.",          action: "Centre-level budgets + landing page fix.",      metrics: [{ k: "Leads",   v: "+210%", hi: "sage" }, { k: "ROAS", v: "7.0×", hi: "ember" }, { k: "Spend", v: "₹7L+"  }, { k: "Window", v: "90d" }] },
];

export default function ResultsPage() {
  const [active, setActive] = useState("All");
  const visible = cases.filter((c) => active === "All" || c.cat === active);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-dark text-white py-14 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-6">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span className="mx-2 opacity-30">/</span>Results
          </div>
          <span className="eyebrow-inv block mb-6">The receipts</span>
          <h1 className="font-display font-extrabold text-white text-[clamp(36px,5.5vw,68px)] leading-[0.96] tracking-tight max-w-[760px]">
            Real campaigns. Real numbers. No screenshots from gurus.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/50 mt-6 max-w-[560px] leading-relaxed">
            Filter by industry. Every entry shows the problem, what changed, what was spent, and the return.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-cream py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">

          {/* Filter chips */}
          <div className="flex gap-2 flex-wrap mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-[11px] tracking-[.08em] uppercase px-4 py-2 rounded-full border transition-all duration-150 ${
                  active === f
                    ? "bg-dark text-white border-dark"
                    : "bg-cream text-smoke border-dark/20 hover:border-dark/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Editorial rows */}
          <div className="flex flex-col divide-y divide-dark/10">
            {visible.map((c, i) => (
              <div
                key={c.name}
                className="grid grid-cols-1 md:grid-cols-[72px_1fr_1fr] gap-6 md:gap-10 lg:gap-16 py-8 md:py-10 group"
              >
                {/* Index + tag */}
                <div className="flex md:flex-col items-center md:items-start gap-3">
                  <span className="font-mono text-[11px] text-smoke/35">0{i + 1}</span>
                  <span className="font-mono text-[9px] tracking-[.1em] uppercase bg-ember/[.08] text-ember px-2.5 py-1 rounded-full">
                    {c.cat}
                  </span>
                </div>

                {/* Name + story */}
                <div>
                  <h3 className="font-display font-extrabold text-dark text-[20px] md:text-[22px] mb-2 group-hover:text-ember transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-[13px] text-smoke italic mb-3">&ldquo;{c.struggle}&rdquo;</p>
                  <div className="flex items-start gap-2">
                    <span className="text-ember text-[13px] flex-none">→</span>
                    <span className="text-[13px] text-ink">{c.action}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="font-mono text-[9px] tracking-[.1em] uppercase text-smoke/50 mb-1.5">{m.k}</div>
                      <div className={`font-mono font-medium text-[clamp(20px,2.5vw,28px)] leading-none ${
                        m.hi === "sage"  ? "text-sage"  :
                        m.hi === "ember" ? "text-ember" :
                        "text-dark"
                      }`}>
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 font-mono text-[11px] text-smoke/40 border border-dashed border-dark/15 rounded-[14px] px-5 py-4">
            ⚠ <strong className="text-ember">Sample data.</strong> Every number is a placeholder. Replace with your real, verified figures before publishing.
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
