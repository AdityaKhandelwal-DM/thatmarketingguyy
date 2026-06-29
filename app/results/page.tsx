"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const filters = ["All", "Clinic", "Restaurant", "D2C", "Local / SEO", "FunZone"];

const cases = [
  { cat: "Clinic",      name: "Skin Clinic — Jaipur",   problem: "Empty appointment book, low walk-ins.",    action: "Meta lead ads + Google Map Pack push.",        metrics: [{ k: "Walk-ins", v: "+78%",  g: true }, { k: "ROAS",    v: "5.0×" }, { k: "Spend",  v: "₹8L+"  }, { k: "Window", v: "90d"   }] },
  { cat: "Restaurant",  name: "Cloud Kitchen — Jaipur", problem: "Weekday orders flat, CPO too high.",        action: "Geo-fenced Meta ads + offer testing.",         metrics: [{ k: "Orders",   v: "+150%", g: true }, { k: "ROAS",    v: "6.0×" }, { k: "Spend",  v: "₹6.4L" }, { k: "CPO",    v: "−41%"  }] },
  { cat: "D2C",         name: "D2C Skincare",           problem: "Spend scaling, ROAS dropping.",             action: "Creative testing + audience restructure.",     metrics: [{ k: "Revenue",  v: "+320%", g: true }, { k: "ROAS",    v: "5.5×" }, { k: "Spend",  v: "₹8.5L" }, { k: "Window", v: "120d"  }] },
  { cat: "Local / SEO", name: "Local Store — Map Pack", problem: "Invisible on Google, no calls.",            action: "GBP optimisation + local SEO + reviews.",     metrics: [{ k: "Calls",    v: "+300%", g: true }, { k: "Rank",    v: "Top 3"}, { k: "Spend",  v: "₹0"    }, { k: "Window", v: "60d"   }] },
  { cat: "FunZone",     name: "FunZone — Weekend Fill", problem: "Slow weekdays, empty slots.",               action: "Local awareness + family-offer campaigns.",    metrics: [{ k: "Footfall", v: "+90%",  g: true }, { k: "ROAS",    v: "4.0×" }, { k: "Spend",  v: "₹3.5L" }, { k: "Window", v: "75d"   }] },
  { cat: "Clinic",      name: "Wellness Clinic",        problem: "Specific centres not performing.",          action: "Centre-level budgets + landing page fix.",     metrics: [{ k: "Leads",    v: "+210%", g: true }, { k: "ROAS",    v: "7.0×" }, { k: "Spend",  v: "₹7L+"  }, { k: "Window", v: "90d"   }] },
];

export default function ResultsPage() {
  const [active, setActive] = useState("All");
  const visible = cases.filter((c) => active === "All" || c.cat === active);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-14 md:py-20 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">Results</p>
          <h1 className="font-sans font-extrabold text-text text-[clamp(28px,4.5vw,50px)] leading-tight tracking-tight max-w-[640px]">
            Real campaigns. Real numbers. No screenshots from gurus.
          </h1>
          <p className="text-[16px] text-secondary mt-4 max-w-[480px] leading-relaxed">
            Filter by industry. Every entry shows the problem, what changed, what was spent, and the return.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">

          {/* Filters */}
          <div className="flex gap-2 flex-wrap mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[13px] px-3.5 py-1.5 rounded-lg border transition-colors ${
                  active === f
                    ? "bg-text text-white border-text"
                    : "bg-surface text-secondary border-border hover:border-border-strong hover:text-text"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {visible.map((c) => (
              <div key={c.name} className="bg-surface border border-border rounded-card p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold tracking-[.1em] uppercase text-muted mb-1">{c.cat}</p>
                    <h3 className="font-sans font-bold text-text text-[16px] mb-1">{c.name}</h3>
                    <p className="text-[13px] text-secondary italic">&ldquo;{c.problem}&rdquo;</p>
                    <p className="text-[13px] text-secondary mt-0.5">→ {c.action}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-3 flex-none">
                    {c.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="text-[10px] font-medium tracking-[.08em] uppercase text-muted mb-0.5">{m.k}</div>
                        <div className={`font-sans font-bold text-[17px] leading-none ${m.g ? "text-sage" : "text-text"}`}>
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-muted mt-5">
            ⚠ Placeholder data — replace with verified client numbers before publishing.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
