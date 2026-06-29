import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

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
    result: "↑ 78% more walk-ins", initials: "RS", name: "[Client]", role: "Skin Clinic · Jaipur",
  },
  {
    quote: "No long contracts, no jargon. He fixed our targeting and showed me exactly what changed.",
    result: "↑ 150% more orders", initials: "AK", name: "[Client]", role: "Cloud Kitchen · Jaipur",
  },
  {
    quote: "We were paying an agency for reports nobody could read. Now our ROAS finally makes sense.",
    result: "5.5× ROAS", initials: "DS", name: "[Client]", role: "D2C Skincare",
  },
  {
    quote: "Google Map Pack went from page 3 to Top 3 in under 60 days. Zero ad spend.",
    result: "+300% calls", initials: "MK", name: "[Client]", role: "Local Store · Jaipur",
  },
  {
    quote: "I stopped dreading my ad reports the moment I understood what each number actually meant.",
    result: "ROAS: 4.8×", initials: "PG", name: "[Client]", role: "FunZone · Jaipur",
  },
];

const storyStats = [
  { n: "1,200+", l: "days in the game", icon: "📅" },
  { n: "4,200+", l: "chai/coffee refills", icon: "☕" },
  { n: "50+",    l: "projects shipped",   icon: "🚀" },
  { n: "25+",    l: "clients helped",     icon: "🤝" },
];

const workshops = [
  {
    title: "Meta Ads Masterclass — Live",
    date: "Coming Soon",
    type: "Webinar",
    seats: "Limited seats",
    desc: "A 2-hour live breakdown of what actually works in Meta Ads right now. Real account walkthroughs, no theory slides.",
    free: false,
    cta: "Get notified",
  },
  {
    title: "Google Map Pack Sprint",
    date: "Coming Soon",
    type: "Workshop",
    seats: "Free",
    desc: "Get your local business ranking in the top 3 spots within 60 days. Step-by-step, live Q&A included.",
    free: true,
    cta: "Reserve a spot",
  },
];

const freeResources = [
  { icon: "📊", title: "Stop Wasting Ad Budget — Checklist" },
  { icon: "📍", title: "Google Map Pack Ranking Guide" },
  { icon: "📱", title: "Meta Ads Setup for Beginners" },
  { icon: "🏥", title: "Clinic Lead-Gen Starter Pack" },
  { icon: "🍽️", title: "Restaurant Local-Ads Playbook" },
  { icon: "📦", title: "D2C Scaling Cheat-Sheet" },
  { icon: "🎯", title: "FunZone Weekend-Fill Template" },
];

// ─── Dashboard Illustration ────────────────────────────────────────────────────

function DashboardIllustration() {
  return (
    <svg
      viewBox="0 0 460 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="460" height="380" rx="24" fill="#F1F5F9" />

      {/* Top header bar */}
      <rect x="16" y="16" width="428" height="44" rx="12" fill="white" />
      <circle cx="40" cy="38" r="8" fill="#F97316" />
      <rect x="58" y="31" width="84" height="11" rx="4" fill="#E2E8F0" />
      <rect x="58" y="46" width="52" height="8" rx="3" fill="#F97316" opacity="0.2" />
      <rect x="354" y="27" width="90" height="22" rx="11" fill="#F97316" />
      <rect x="366" y="35" width="66" height="6" rx="3" fill="white" opacity="0.75" />

      {/* Main chart panel */}
      <rect x="16" y="72" width="268" height="180" rx="14" fill="white" />
      <rect x="32" y="88" width="76" height="10" rx="3" fill="#E2E8F0" />
      <rect x="32" y="102" width="46" height="16" rx="5" fill="#F97316" opacity="0.15" />

      {/* Bar chart — rising left to right */}
      <rect x="38"  y="224" width="22" height="18"  rx="3" fill="#F97316" opacity="0.20" />
      <rect x="68"  y="208" width="22" height="34"  rx="3" fill="#F97316" opacity="0.36" />
      <rect x="98"  y="189" width="22" height="53"  rx="3" fill="#F97316" opacity="0.55" />
      <rect x="128" y="165" width="22" height="77"  rx="3" fill="#F97316" opacity="0.75" />
      <rect x="158" y="141" width="22" height="101" rx="3" fill="#F97316" />
      <rect x="188" y="119" width="22" height="123" rx="3" fill="#10B981" />
      <rect x="218" y="98"  width="22" height="144" rx="3" fill="#10B981" />
      <rect x="248" y="80"  width="22" height="162" rx="3" fill="#10B981" />

      {/* Trend line */}
      <polyline
        points="49,224 79,203 109,184 139,160 169,136 199,114 229,93 259,75"
        stroke="#F97316"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="49"  cy="224" r="3.5" fill="white" stroke="#F97316"  strokeWidth="2" />
      <circle cx="109" cy="184" r="3.5" fill="white" stroke="#F97316"  strokeWidth="2" />
      <circle cx="169" cy="136" r="3.5" fill="white" stroke="#F97316"  strokeWidth="2" />
      <circle cx="229" cy="93"  r="3.5" fill="white" stroke="#10B981"  strokeWidth="2" />
      <circle cx="259" cy="75"  r="5"   fill="#10B981" stroke="white"  strokeWidth="2" />

      {/* Right metric cards */}
      <rect x="298" y="72"  width="146" height="68" rx="14" fill="white" />
      <rect x="314" y="90"  width="52"  height="9"  rx="3" fill="#E2E8F0" />
      <rect x="314" y="104" width="76"  height="18" rx="5" fill="#F97316" opacity="0.12" />
      <path d="M418 93 L426 85 M426 85 L434 93 M426 85 L426 102" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <rect x="298" y="152" width="146" height="68" rx="14" fill="white" />
      <rect x="314" y="170" width="56"  height="9"  rx="3" fill="#E2E8F0" />
      <rect x="314" y="186" width="62"  height="18" rx="5" fill="#10B981" opacity="0.12" />
      <path d="M420 196 L426 188 L432 196 M426 188 L426 204" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <rect x="298" y="232" width="146" height="68" rx="14" fill="white" />
      <rect x="314" y="250" width="48"  height="9"  rx="3" fill="#E2E8F0" />
      <rect x="314" y="266" width="80"  height="18" rx="5" fill="#10B981" opacity="0.12" />
      <circle cx="424" cy="256" r="8" stroke="#10B981" strokeWidth="2" fill="none" />
      <path d="M430 262 L436 268" stroke="#10B981" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Bottom local SEO panel */}
      <rect x="16" y="264" width="268" height="100" rx="14" fill="white" />
      <circle cx="56" cy="307" r="20" fill="#F97316" opacity="0.07" />
      <path d="M56 291 C47 291 40 298 40 306 C40 316 56 324 56 324 C56 324 72 316 72 306 C72 298 65 291 56 291 Z" fill="#F97316" />
      <circle cx="56" cy="306" r="5" fill="white" />
      <rect x="88" y="284" width="132" height="9" rx="3" fill="#E2E8F0" />
      <rect x="88" y="299" width="164" height="9" rx="3" fill="#E2E8F0" />
      <rect x="88" y="314" width="104" height="9" rx="3" fill="#F97316" opacity="0.35" />
      <rect x="88" y="329" width="124" height="9" rx="3" fill="#E2E8F0" opacity="0.5" />
      <rect x="196" y="311" width="72"  height="20" rx="10" fill="#F97316" opacity="0.1" />
      <rect x="204" y="318" width="56"  height="6"  rx="3" fill="#F97316" opacity="0.55" />
    </svg>
  );
}

// ─── Metric Card ──────────────────────────────────────────────────────────────

function MetricCard({ k, v, color }: { k: string; v: string; color?: string }) {
  return (
    <div className="bg-navy rounded-xl px-3 py-2.5 min-w-0">
      <div className="font-mono text-[10px] tracking-[.06em] uppercase text-white/50">{k}</div>
      <div
        className={`font-mono text-base md:text-lg mt-0.5 ${
          color === "mint" ? "text-mint" : color === "orange" ? "text-orange" : "text-white"
        }`}
      >
        {v}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <span className="eyebrow mb-5 block">Performance marketing · without the mystery</span>

              <h1 className="text-[clamp(32px,4.8vw,64px)] font-extrabold text-navy leading-[1.08]">
                Your ads are running.<br />
                <span className="text-orange">Are they working?</span>
              </h1>

              <p className="text-[17px] md:text-[19px] text-navy/60 mt-6 mb-3 max-w-[540px] leading-relaxed">
                Most business owners don&apos;t know the answer — and that&apos;s not their fault. Agencies are built to keep it complicated.
              </p>
              <p className="text-[17px] md:text-[19px] text-muted max-w-[540px] leading-relaxed mb-8">
                I&apos;ve managed 50+ ad accounts across clinics, restaurants, D2C, and local stores.{" "}
                <strong className="text-navy">I teach you to read the numbers yourself.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/resources">Get 7 free guides</Button>
                <Button href="/results" variant="ghost">See real results →</Button>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-ink/10">
                {[
                  { n: "50+", l: "ad accounts managed" },
                  { n: "6",   l: "industries served" },
                  { n: "₹0",  l: "to start learning" },
                ].map((t) => (
                  <div key={t.l} className="flex flex-col">
                    <span className="font-mono text-[22px] md:text-[28px] font-bold text-navy">{t.n}</span>
                    <span className="text-[11px] sm:text-[12.5px] text-muted mt-0.5">{t.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — dashboard illustration */}
            <div className="order-first md:order-last">
              <div className="relative max-w-[440px] mx-auto md:ml-auto animate-float">
                <DashboardIllustration />
                {/* Floating ROAS badge */}
                <div className="absolute -left-4 bottom-10 bg-navy text-white rounded-2xl px-4 py-3 shadow-card-lg">
                  <div className="font-mono text-[10px] tracking-[.06em] uppercase text-white/55">Avg ROAS</div>
                  <div className="font-mono text-[22px] text-orange mt-0.5 font-bold">5.8×</div>
                </div>
                {/* Floating walk-ins badge */}
                <div className="absolute -right-2 top-10 bg-mint text-white rounded-xl px-3 py-2 shadow-card">
                  <div className="font-mono text-[10px] text-white/80">Walk-ins</div>
                  <div className="font-mono text-[16px] font-bold">+78%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ QUOTE BOX ═════════════════════════════════════════════════════════ */}
      <section className="bg-navy py-16 md:py-22 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-orange/8 blur-3xl" />
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-orange/5 blur-3xl" />
        </div>
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="absolute -top-6 -left-2 md:-left-10 text-[90px] md:text-[120px] text-orange/20 font-display leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            <p className="text-[clamp(20px,2.8vw,34px)] font-display font-bold text-white leading-snug relative z-10 px-6 md:px-10">
              Marketing isn&apos;t about being seen everywhere.{" "}
              <span className="text-orange">It&apos;s about being found by the right person at the right moment.</span>
            </p>
            <span className="font-mono text-[13px] text-white/40 mt-8 block">
              — Aditya Khandelwal · thatmarketingguy
            </span>
          </div>
        </div>
      </section>

      {/* ══ PROOF BAR ═════════════════════════════════════════════════════════ */}
      <section className="bg-navy-700 text-white py-10 md:py-12">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { n: "50+",   l: "Ad accounts across India" },
              { n: "₹X Cr", l: "Ad spend managed" },
              { n: "5.8×",  l: "Average ROAS delivered" },
            ].map((c, i) => (
              <div key={i} className={`px-2 relative ${i > 0 ? "border-l border-white/10" : ""}`}>
                <div className="font-mono text-xl sm:text-2xl md:text-[clamp(26px,3.2vw,40px)] font-bold">
                  <b className="text-mint">{c.n}</b>
                </div>
                <div className="text-[11px] sm:text-[13px] text-white/55 mt-1">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STORY STATS ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-orange/[.04]">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-10 md:mb-14">
            <span className="eyebrow block mb-4">A small backstory</span>
            <h2 className="text-[clamp(24px,3.4vw,44px)] font-extrabold text-navy">
              This is what 5+ years of showing up every day looks like.
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              Not a big agency. Just one person, one laptop, and a lot of chai. Here&apos;s the tally.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {storyStats.map((s) => (
              <div
                key={s.l}
                className="bg-white border border-ink/10 rounded-card p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200 shadow-card"
              >
                <span className="text-4xl mb-3">{s.icon}</span>
                <span className="font-mono text-[clamp(24px,3vw,38px)] font-bold text-orange">{s.n}</span>
                <span className="text-[13px] text-muted mt-1 leading-snug">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO THIS IS FOR ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="eyebrow block mb-4">Is this for you?</span>
            <h2 className="text-[clamp(24px,3.4vw,44px)] font-extrabold text-navy">
              I speak walk-ins, orders, and ROAS — not &ldquo;impressions.&rdquo;
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              If you&apos;ve been burned by an agency or just want to understand what your money is doing — this is for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {niches.map((n) => (
              <div
                key={n.title}
                className="bg-white border border-ink/10 rounded-card p-6 md:p-7 hover:-translate-y-1 hover:shadow-card hover:border-orange/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-orange/15 transition-colors">
                  {n.icon}
                </div>
                <h3 className="text-[18px] text-navy font-extrabold mb-2">{n.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDIES ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-canvas">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="eyebrow block mb-4">The receipts</span>
            <h2 className="text-[clamp(24px,3.4vw,44px)] font-extrabold text-navy">
              Real campaigns. Real numbers. No retouching.
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              A few below — the full portfolio lives on the Results page.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-ink/10 rounded-card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-card-lg transition-all duration-200"
              >
                <div className="px-5 py-4 border-b border-ink/10 flex items-center justify-between gap-2">
                  <span className="font-display font-bold text-navy text-[15px] leading-tight">{c.name}</span>
                  <span className="font-mono text-[10px] tracking-[.06em] uppercase text-orange bg-orange/10 px-2.5 py-1 rounded-lg flex-none">
                    {c.tag}
                  </span>
                </div>
                <div className="px-5 py-5 flex flex-col gap-3.5 flex-1">
                  <div>
                    <div className="font-mono text-[10px] tracking-[.05em] uppercase text-muted mb-1">Struggle</div>
                    <div className="text-[14px] text-ink font-semibold">{c.struggle}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[.05em] uppercase text-muted mb-1">What we did</div>
                    <div className="text-[14px] text-ink font-semibold">{c.action}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-auto pt-4 border-t border-dashed border-ink/15">
                    {c.metrics.map((m) => (
                      <MetricCard key={m.k} {...m} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/results" variant="ghost">See all results →</Button>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS MARQUEE ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 mb-10 md:mb-12">
          <span className="eyebrow block mb-4">What clients say</span>
          <h2 className="text-[clamp(24px,3.4vw,44px)] font-extrabold text-navy">
            The proof isn&apos;t my words. It&apos;s theirs.
          </h2>
        </div>

        {/* Full-bleed scrolling strip */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-5 animate-marquee" style={{ width: "max-content" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[300px] md:w-[340px] flex-none bg-white border border-ink/10 rounded-card p-6 flex flex-col shadow-card"
              >
                <div className="text-orange text-[13px] tracking-[2px] mb-3">★★★★★</div>
                <p className="text-[14px] text-ink leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <span className="self-start font-mono text-[11px] text-[#065f46] bg-mint-soft px-2.5 py-1.5 rounded-lg mt-4">
                  {t.result}
                </span>
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-ink/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy to-navy-700 flex items-center justify-center font-display font-extrabold text-white text-[12px] flex-none">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[13px] text-navy">{t.name}</div>
                    <div className="text-[11px] text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 mt-6">
          <div className="text-[11px] text-muted font-mono bg-canvas border border-dashed border-ink/20 rounded-xl px-4 py-3 inline-block">
            ⚠ <strong className="text-orange">Placeholder testimonials.</strong> Replace with real client quotes before publishing.
          </div>
        </div>
      </section>

      {/* ══ WORKSHOPS & WEBINARS ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-canvas">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="eyebrow block mb-4">What&apos;s coming up</span>
            <h2 className="text-[clamp(24px,3.4vw,44px)] font-extrabold text-navy">
              Live workshops &amp; webinars.
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              Where theory stops and real strategy begins. Show up, ask questions, leave with a plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-card p-7 md:p-8 border border-ink/10 hover:shadow-card-lg hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`font-mono text-[10px] tracking-[.08em] uppercase px-2.5 py-1.5 rounded-md ${
                      w.free ? "bg-mint-soft text-[#065f46]" : "bg-orange/10 text-orange"
                    }`}
                  >
                    {w.type}
                  </span>
                  <span className="font-mono text-[12px] text-muted">{w.date}</span>
                </div>
                <h3 className="font-extrabold text-navy text-[20px] md:text-[22px] leading-tight">{w.title}</h3>
                <p className="text-[14px] md:text-[15px] text-muted leading-relaxed flex-1">{w.desc}</p>
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-ink/10">
                  <span className={`text-[13px] font-mono font-semibold ${w.free ? "text-mint" : "text-orange"}`}>
                    {w.seats}
                  </span>
                  <Button href="/contact" variant={w.free ? "mint" : "primary"} className="text-[13px] px-5 py-2.5">
                    {w.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FREE RESOURCES ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-[600px]">
              <span className="eyebrow block mb-4">Free value, no strings</span>
              <h2 className="text-[clamp(24px,3.4vw,44px)] font-extrabold text-navy">
                7 guides. Zero cost. Just DM me.
              </h2>
              <p className="text-[15px] md:text-[17px] text-muted mt-3">
                You shouldn&apos;t need to pay to understand marketing basics. These are yours — no email gymnastics.
              </p>
            </div>
            <div className="flex-none">
              <Button href="/resources">Get all 7 guides →</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {freeResources.map((r) => (
              <Link
                key={r.title}
                href="/resources"
                className="bg-white border border-ink/10 rounded-card p-5 flex items-start gap-4 hover:-translate-y-1 hover:shadow-card hover:border-orange/25 transition-all duration-200 group"
              >
                <span className="text-2xl flex-none">{r.icon}</span>
                <div>
                  <span className="font-mono text-[9px] tracking-[.08em] uppercase text-orange mb-1 block">PDF</span>
                  <span className="text-[13px] font-semibold text-navy group-hover:text-orange transition-colors leading-snug">
                    {r.title}
                  </span>
                </div>
              </Link>
            ))}
            <Link
              href="/resources"
              className="bg-orange rounded-card p-5 flex items-center justify-center gap-2 text-white font-bold text-[15px] hover:bg-orange-700 hover:-translate-y-1 transition-all duration-200 shadow-[0_6px_18px_rgba(249,115,22,.30)]"
            >
              View all 7 →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28 bg-navy overflow-hidden relative">
        {/* Decorative glow */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-orange/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 bottom-0 w-[320px] h-[320px] rounded-full bg-orange/5 blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <span className="eyebrow justify-center mb-5 block" style={{ color: "#F97316" }}>
            Ready when you are
          </span>
          <h2 className="text-[clamp(26px,3.8vw,52px)] font-extrabold text-white mb-4">
            Stop guessing. Start knowing.
          </h2>
          <p className="text-[15px] md:text-[18px] text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">
            Whether you want the free guides, a live workshop, or a full masterclass — pick where you want to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/resources">Get the free guides</Button>
            <Button href="/learn" variant="light">Explore the courses →</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
