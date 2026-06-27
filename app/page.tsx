import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const niches = [
  { icon: "🏥", title: "Clinic owners", desc: "Fill your calendar with patient walk-ins, not vanity likes." },
  { icon: "🍽️", title: "Restaurants & bakeries", desc: "Turn nearby phones into tables booked and orders placed." },
  { icon: "📦", title: "D2C founders", desc: "Scale ad spend without lighting money on fire." },
  { icon: "🏪", title: "Local store owners", desc: "Own the Google Map Pack so your shop shows up first." },
  { icon: "🎮", title: "FunZone & venues", desc: "Pack weekends and slow days with local footfall." },
  { icon: "😤", title: "Burned by agencies", desc: "Finally understand exactly what your money is doing." },
];

const cases = [
  {
    name: "Skin Clinic — Jaipur", tag: "Clinic",
    struggle: "Empty appointment book, low walk-ins.",
    action: "Meta lead ads + Google Map Pack push.",
    metrics: [
      { k: "Walk-ins", v: "+78%", color: "mint" },
      { k: "ROAS", v: "5.0×", color: "orange" },
      { k: "Spend", v: "₹8L+" },
      { k: "Window", v: "90d" },
    ],
  },
  {
    name: "Cloud Kitchen — Jaipur", tag: "Restaurant",
    struggle: "Weekday orders flat, high CPO.",
    action: "Geo-fenced Meta ads + offer testing.",
    metrics: [
      { k: "Orders", v: "+150%", color: "mint" },
      { k: "ROAS", v: "6.0×", color: "orange" },
      { k: "Spend", v: "₹6.4L" },
      { k: "CPO", v: "−41%" },
    ],
  },
  {
    name: "Local Store — Map Pack", tag: "Local / SEO",
    struggle: "Invisible on Google, no calls.",
    action: "GBP optimisation + local SEO + reviews.",
    metrics: [
      { k: "Calls", v: "+300%", color: "mint" },
      { k: "Rank", v: "Top 3", color: "orange" },
      { k: "Spend", v: "₹0 ads" },
      { k: "Window", v: "60d" },
    ],
  },
];

const testimonials = [
  {
    quote: "For the first time I understood where my ad money was going. Walk-ins doubled in two months.",
    result: "↑ 78% more walk-ins", initials: "RS", name: "[Client name]", role: "Skin Clinic · Jaipur",
  },
  {
    quote: "No long contracts, no jargon. He fixed our targeting and showed me exactly what changed.",
    result: "↑ 150% more orders", initials: "AK", name: "[Client name]", role: "Cloud Kitchen · Jaipur",
  },
  {
    quote: "We were paying an agency for reports nobody could read. Now our ROAS finally makes sense.",
    result: "5.5× ROAS", initials: "DS", name: "[Client name]", role: "D2C Skincare",
  },
];

function MetricCard({ k, v, color }: { k: string; v: string; color?: string }) {
  return (
    <div className="bg-navy rounded-xl px-3 py-2.5 min-w-0">
      <div className="font-mono text-[10px] tracking-[.06em] uppercase text-white/50">{k}</div>
      <div className={`font-mono text-base md:text-lg mt-0.5 ${color === "mint" ? "text-mint" : color === "orange" ? "text-orange" : "text-white"}`}>
        {v}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.12fr_.88fr] gap-10 md:gap-14 items-center">
            <div>
              <span className="eyebrow mb-3 block">Performance marketing · without the agency</span>
              <h1 className="text-[clamp(30px,4.4vw,58px)] font-extrabold text-navy leading-tight">
                Stop paying agencies to <span className="text-orange">hide the numbers</span> from you.
              </h1>
              <p className="text-base md:text-lg text-muted mt-4 mb-3 max-w-[520px]">
                I teach business owners — clinics, restaurants, D2C, local stores — how to run ads and rank on Google themselves. Real dashboards. Real results. No jargon.
              </p>
              <p className="text-base text-navy opacity-70 mb-2">
                <strong>Marketing, finally made clear.</strong> No agency mystery, just the numbers.
              </p>
              <p className="font-mono text-[12px] tracking-[.04em] text-muted mb-7">
                — Aditya Khandelwal · @thatmarketingguy
              </p>

              {/* CTAs — stacked on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/resources" fullWidth className="sm:w-auto">Download 7 free guides</Button>
                <Button href="/results" variant="ghost" fullWidth className="sm:w-auto">See real results →</Button>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-ink/10">
                {[
                  { n: "50+", l: "ad accounts managed" },
                  { n: "6", l: "industries served" },
                  { n: "₹0", l: "to start learning" },
                ].map((t) => (
                  <div key={t.l} className="flex flex-col">
                    <span className="font-mono text-2xl font-medium text-navy">{t.n}</span>
                    <span className="text-[11px] sm:text-[12.5px] text-muted mt-0.5">{t.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <div className="order-first md:order-last">
              <div className="relative max-w-[340px] sm:max-w-[400px] md:max-w-[430px] mx-auto md:ml-auto">
                <div className="aspect-[4/5] rounded-3xl bg-canvas shadow-card-lg overflow-hidden flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1 text-muted font-mono text-[12px] text-center p-4">
                    <span className="text-2xl mb-1">📷</span>
                    Your portrait here
                    <span className="text-[11px] opacity-70">~800 × 1000px (4:5)</span>
                  </div>
                </div>
                <div className="absolute -left-3 bottom-5 bg-navy text-white rounded-2xl px-3.5 py-3 shadow-card-lg z-10">
                  <div className="font-mono text-[10px] tracking-[.06em] uppercase text-white/55">Avg client ROAS</div>
                  <div className="font-mono text-2xl text-orange mt-0.5">5.8×</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="bg-navy text-white py-10 md:py-12">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { n: "50+", l: "Ad accounts run across India" },
              { n: "₹X Cr", l: "Ad spend managed" },
              { n: "X×", l: "Average ROAS" },
            ].map((c, i) => (
              <div key={i} className={`px-2 relative ${i > 0 ? "border-l border-white/10" : ""}`}>
                <div className="font-mono text-xl sm:text-2xl md:text-[clamp(26px,3.2vw,38px)] font-medium">
                  <b className="text-mint font-medium">{c.n}</b>
                </div>
                <div className="text-[11px] sm:text-[13px] text-white/60 mt-1">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-8 md:mb-12">
            <span className="eyebrow block mb-3">Built for your business</span>
            <h2 className="text-[clamp(24px,3.3vw,42px)] font-extrabold text-navy">
              If you&apos;ve been burned by an agency, this is for you.
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              I don&apos;t speak in &ldquo;impressions&rdquo; and &ldquo;engagement.&rdquo; I speak in walk-ins, calls, orders, and revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {niches.map((n) => (
              <div key={n.title} className="bg-white border border-ink/10 rounded-card p-5 md:p-6 hover:-translate-y-1 hover:shadow-card hover:border-transparent transition-all duration-200">
                <div className="w-11 h-11 rounded-xl bg-mint-soft flex items-center justify-center text-xl mb-3.5">{n.icon}</div>
                <h3 className="text-[17px] text-navy font-bold mb-1.5">{n.title}</h3>
                <p className="text-sm text-muted">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-12 md:py-16 lg:py-20 bg-canvas">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-8 md:mb-12">
            <span className="eyebrow block mb-3">The receipts</span>
            <h2 className="text-[clamp(24px,3.3vw,42px)] font-extrabold text-navy">Real campaigns. Real numbers.</h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">A few results below — the full portfolio lives on the Results page.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cases.map((c) => (
              <div key={c.name} className="bg-white border border-ink/10 rounded-card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-card-lg transition-all duration-200">
                <div className="px-4 py-4 border-b border-ink/10 flex items-center justify-between gap-2">
                  <span className="font-display font-bold text-navy text-[15px] leading-tight">{c.name}</span>
                  <span className="font-mono text-[10px] tracking-[.06em] uppercase text-orange bg-orange/10 px-2 py-1 rounded-md flex-none">{c.tag}</span>
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
                      <MetricCard key={m.k} {...m} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/results" variant="ghost">See all results →</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-8 md:mb-12">
            <span className="eyebrow block mb-3">What clients say</span>
            <h2 className="text-[clamp(24px,3.3vw,42px)] font-extrabold text-navy">The proof isn&apos;t my words. It&apos;s theirs.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.initials} className="bg-white border border-ink/10 rounded-card p-5 md:p-6 flex flex-col hover:-translate-y-1 hover:shadow-card transition-all duration-200">
                <div className="text-orange text-[14px] tracking-[2px] mb-3">★★★★★</div>
                <p className="text-[15px] text-ink leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <span className="self-start font-mono text-[12px] text-[#065f46] bg-mint-soft px-2.5 py-1.5 rounded-lg mt-3">{t.result}</span>
                <div className="flex items-center gap-3 pt-3 mt-3 border-t border-ink/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-700 flex items-center justify-center font-display font-extrabold text-white text-sm flex-none">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-navy">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-[12px] text-muted font-mono bg-white border border-dashed border-ink/20 rounded-xl px-4 py-3">
            ⚠ <strong className="text-orange">Placeholder testimonials and figures.</strong> Replace with real, verified numbers and client quotes before publishing.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-canvas">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-[clamp(24px,3.3vw,42px)] font-extrabold text-navy mb-3">Ready to stop guessing?</h2>
          <p className="text-[15px] md:text-[17px] text-muted mb-7 max-w-lg mx-auto">
            Start with 7 free guides, or jump straight to the masterclass.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/resources" fullWidth className="sm:w-auto">Get the free guides</Button>
            <Button href="/learn" variant="ghost" fullWidth className="sm:w-auto">See the courses →</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
