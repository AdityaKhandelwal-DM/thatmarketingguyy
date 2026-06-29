import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const niches = [
  { n: "01", title: "Clinic owners",       desc: "Fill your calendar with walk-ins, not vanity likes." },
  { n: "02", title: "Restaurants & bakeries", desc: "Turn nearby phones into tables booked and orders placed." },
  { n: "03", title: "D2C founders",        desc: "Scale ad spend without lighting money on fire." },
  { n: "04", title: "Local store owners",  desc: "Own the Google Map Pack so your shop shows up first." },
  { n: "05", title: "FunZone & venues",    desc: "Pack weekends and slow days with local footfall." },
  { n: "06", title: "Burned by agencies",  desc: "Finally understand exactly where your money is going." },
];

const cases = [
  {
    n: "01", tag: "Clinic",
    name: "Skin Clinic — Jaipur",
    struggle: "Empty appointment book, low walk-ins.",
    action: "Meta lead ads + Google Map Pack push.",
    metrics: [
      { k: "Walk-ins", v: "+78%",  hi: "sage"  },
      { k: "ROAS",     v: "5.0×",  hi: "ember" },
      { k: "Ad Spend", v: "₹8L+"  },
      { k: "Window",   v: "90 days" },
    ],
  },
  {
    n: "02", tag: "Restaurant",
    name: "Cloud Kitchen — Jaipur",
    struggle: "Weekday orders flat, CPO too high.",
    action: "Geo-fenced Meta ads + offer testing.",
    metrics: [
      { k: "Orders",   v: "+150%", hi: "sage"  },
      { k: "ROAS",     v: "6.0×",  hi: "ember" },
      { k: "Ad Spend", v: "₹6.4L" },
      { k: "CPO",      v: "−41%"  },
    ],
  },
  {
    n: "03", tag: "Local / SEO",
    name: "Local Store — Map Pack",
    struggle: "Invisible on Google. Zero calls.",
    action: "GBP optimisation + local SEO + reviews.",
    metrics: [
      { k: "Calls",    v: "+300%", hi: "sage"  },
      { k: "Rank",     v: "Top 3", hi: "ember" },
      { k: "Ad Spend", v: "₹0"   },
      { k: "Window",   v: "60 days" },
    ],
  },
];

const testimonials = [
  { quote: "For the first time I understood where my ad money was going. Walk-ins doubled in two months.",
    result: "↑ 78% walk-ins",  initials: "RS", role: "Skin Clinic · Jaipur" },
  { quote: "No long contracts, no jargon. He fixed our targeting and showed me exactly what changed.",
    result: "↑ 150% orders",   initials: "AK", role: "Cloud Kitchen · Jaipur" },
  { quote: "We were paying an agency for reports nobody could read. Now our ROAS finally makes sense.",
    result: "5.5× ROAS",       initials: "DS", role: "D2C Skincare" },
  { quote: "Google Map Pack went from page 3 to Top 3 in 60 days. Zero ad spend.",
    result: "+300% calls",     initials: "MK", role: "Local Store · Jaipur" },
  { quote: "I stopped dreading my ad reports the moment I understood what each number meant.",
    result: "4.8× ROAS",       initials: "PG", role: "FunZone · Jaipur" },
];

const storyStats = [
  { n: "1,200+", l: "days in the game",    icon: "📅" },
  { n: "4,200+", l: "chai/coffee refills", icon: "☕" },
  { n: "50+",    l: "projects shipped",    icon: "🚀" },
  { n: "25+",    l: "clients helped",      icon: "🤝" },
];

const workshops = [
  {
    title: "Meta Ads Masterclass — Live",
    date: "Coming Soon", type: "Webinar",
    desc: "A 2-hour live breakdown of what actually works in Meta Ads right now. Real account walkthroughs, no theory slides.",
    free: false,
  },
  {
    title: "Google Map Pack Sprint",
    date: "Coming Soon", type: "Workshop",
    desc: "Get your local business ranking in the top 3 spots within 60 days. Step-by-step, live Q&A included.",
    free: true,
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

const ticker = [
  "Meta Ads", "Google Ads", "Local SEO", "Map Pack", "D2C Scaling",
  "ROAS", "Lead Gen", "Walk-ins", "Revenue Attribution", "Clinic Marketing",
  "Restaurant Ads", "Ad Audits", "Performance Marketing", "Local Business",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">

            {/* Left — headline */}
            <div>
              <span className="eyebrow mb-6 md:mb-8 block">
                Performance marketing · without the mystery
              </span>
              <h1 className="font-display font-extrabold text-dark leading-[0.94] tracking-[-0.02em] text-[clamp(50px,7.8vw,90px)]">
                Your ads<br />
                are running.<br />
                <span className="text-ember">Are they<br />working?</span>
              </h1>
              <p className="text-[17px] md:text-[18px] text-smoke mt-8 mb-3 max-w-[500px] leading-relaxed">
                Most business owners don&apos;t know the answer. Agencies are built to keep it that way.
              </p>
              <p className="text-[17px] md:text-[18px] text-ink max-w-[500px] leading-relaxed mb-10">
                I&apos;ve run 50+ ad accounts. I teach you to{" "}
                <strong className="font-semibold text-dark">own your numbers</strong> — and stop depending on anyone to explain them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/resources">Get 7 free guides</Button>
                <Button href="/results" variant="ghost">See real results →</Button>
              </div>
            </div>

            {/* Right — live data card */}
            <div className="order-first lg:order-last">
              <div className="bg-dark rounded-[24px] p-7 md:p-9 animate-float">
                <p className="font-mono text-[10px] tracking-[.18em] uppercase text-white/25 mb-8">
                  Real results · real accounts
                </p>

                {/* Row 1: ROAS + Walk-ins */}
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-2">
                      Avg ROAS
                    </div>
                    <div className="font-display font-extrabold text-ember text-[clamp(40px,6vw,62px)] leading-none tracking-tight">
                      5.8×
                    </div>
                  </div>
                  <div className="pl-4 border-l border-white/10">
                    <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-2">
                      Walk-ins ↑
                    </div>
                    <div className="font-display font-extrabold text-sage text-[clamp(40px,6vw,62px)] leading-none tracking-tight">
                      78%
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 my-6" />

                {/* Row 2: Accounts + Industries */}
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-2">
                      Accounts run
                    </div>
                    <div className="font-display font-extrabold text-white text-[clamp(40px,6vw,62px)] leading-none tracking-tight">
                      50+
                    </div>
                  </div>
                  <div className="pl-4 border-l border-white/10">
                    <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-2">
                      Industries
                    </div>
                    <div className="font-display font-extrabold text-white text-[clamp(40px,6vw,62px)] leading-none tracking-tight">
                      6
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-6 pt-5 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/25 mb-1">
                      Start for
                    </div>
                    <div className="font-mono text-[22px] text-white/35 leading-none">₹0</div>
                  </div>
                  <div className="text-right font-mono text-[9px] text-white/20 leading-relaxed">
                    thatmarketingguy.in<br />@thatmarketingguy
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ KEYWORD TICKER ════════════════════════════════════════════════════ */}
      <section className="bg-dark py-4 overflow-hidden border-y border-white/5">
        <div className="overflow-hidden w-full">
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {[...ticker, ...ticker].map((kw, i) => (
              <span key={i} className="flex items-center flex-none">
                <span className="font-mono text-[11px] tracking-[.12em] uppercase text-white/35 px-5 whitespace-nowrap">
                  {kw}
                </span>
                <span className="w-1 h-1 rounded-full bg-ember/50 flex-none" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO IT'S FOR ══════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">

            {/* Sticky label */}
            <div className="lg:sticky lg:top-24">
              <span className="eyebrow block mb-5">Is this for you?</span>
              <h2 className="font-display font-extrabold text-dark text-[clamp(30px,4vw,50px)] leading-[1.0] tracking-tight">
                I speak walk-ins, ROAS, and orders.
              </h2>
              <p className="text-[15px] text-smoke mt-5 leading-relaxed">
                Not &ldquo;impressions&rdquo;. Not &ldquo;reach&rdquo;. The numbers that actually pay your rent.
              </p>
            </div>

            {/* List */}
            <div className="flex flex-col divide-y divide-dark/10">
              {niches.map((n) => (
                <div
                  key={n.title}
                  className="flex items-start gap-6 py-6 group cursor-default"
                >
                  <span className="font-mono text-[10px] text-smoke/35 pt-1.5 flex-none">{n.n}</span>
                  <div className="flex-1">
                    <h3 className="font-display font-extrabold text-dark text-[19px] md:text-[21px] mb-1.5 group-hover:text-ember transition-colors duration-200">
                      {n.title}
                    </h3>
                    <p className="text-[14px] text-smoke leading-relaxed">{n.desc}</p>
                  </div>
                  <span className="text-dark/20 group-hover:text-ember transition-all duration-200 pt-1 flex-none text-[18px] group-hover:translate-x-1">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PULLQUOTE ═════════════════════════════════════════════════════════ */}
      <section className="bg-dark py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute -left-24 top-0 w-[700px] h-[700px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-[900px]">
            <span className="eyebrow-inv block mb-10">The pitch, in one line</span>
            <blockquote className="font-display font-extrabold text-white leading-[1.0] tracking-tight text-[clamp(28px,4.8vw,60px)]">
              &ldquo;Marketing isn&apos;t magic.{" "}
              <span className="text-ember">It&apos;s math.</span>{" "}
              I just make sure you can see the math.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 mt-10">
              <div className="w-8 h-px bg-white/20" />
              <span className="font-mono text-[12px] text-white/35">
                Aditya Khandelwal · @thatmarketingguy · Jaipur, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STORY STATS ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-dark/10 border border-dark/10 rounded-[20px] overflow-hidden">
            {storyStats.map((s) => (
              <div key={s.l} className="bg-cream-alt flex flex-col items-center text-center p-8 md:p-10">
                <span className="text-3xl mb-4">{s.icon}</span>
                <span className="font-display font-extrabold text-ember text-[clamp(28px,4vw,46px)] leading-none tracking-tight">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] tracking-[.1em] uppercase text-smoke mt-2 leading-relaxed">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center font-mono text-[11px] text-smoke/45 mt-6">
            Not a big agency. Just one person, one laptop, and a lot of chai.
          </p>
        </div>
      </section>

      {/* ══ CASE STUDIES — EDITORIAL ROWS ════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-10 md:pb-12 border-b border-dark/10">
            <div>
              <span className="eyebrow block mb-5">The receipts</span>
              <h2 className="font-display font-extrabold text-dark text-[clamp(30px,4vw,50px)] leading-[1.0] tracking-tight">
                Real campaigns.<br />Real numbers.<br />No retouching.
              </h2>
            </div>
            <Button href="/results" variant="ghost">See all results →</Button>
          </div>

          <div className="flex flex-col">
            {cases.map((c) => (
              <div
                key={c.name}
                className="grid grid-cols-1 md:grid-cols-[72px_1fr_1fr] gap-6 md:gap-10 lg:gap-16 py-8 md:py-10 border-b border-dark/10 last:border-0 group"
              >
                {/* Index + tag */}
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-3">
                  <span className="font-mono text-[11px] text-smoke/35">{c.n}</span>
                  <span className="font-mono text-[9px] tracking-[.1em] uppercase bg-ember/[.08] text-ember px-2.5 py-1 rounded-full">
                    {c.tag}
                  </span>
                </div>

                {/* Name + story */}
                <div>
                  <h3 className="font-display font-extrabold text-dark text-[20px] md:text-[22px] mb-2 group-hover:text-ember transition-colors duration-200">
                    {c.name}
                  </h3>
                  <p className="text-[13px] text-smoke mb-3 italic leading-relaxed">
                    &ldquo;{c.struggle}&rdquo;
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-ember text-[13px] mt-px flex-none">→</span>
                    <span className="text-[13px] text-ink">{c.action}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="font-mono text-[9px] tracking-[.1em] uppercase text-smoke/50 mb-1.5">
                        {m.k}
                      </div>
                      <div
                        className={`font-mono font-medium leading-none text-[clamp(20px,2.5vw,28px)] ${
                          m.hi === "sage"  ? "text-sage"  :
                          m.hi === "ember" ? "text-ember" :
                          "text-dark"
                        }`}
                      >
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════ */}
      <section className="bg-dark py-16 md:py-24 lg:py-28 overflow-hidden">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <span className="eyebrow-inv block mb-10 md:mb-14">What clients say</span>

          {/* Featured quote */}
          <div className="max-w-4xl mb-14 md:mb-20">
            <p className="font-display font-extrabold text-white leading-[1.05] tracking-tight text-[clamp(24px,4vw,50px)]">
              &ldquo;For the first time I understood where my ad money was going.
              Walk-ins <span className="text-sage">doubled</span> in two months.&rdquo;
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <div className="w-9 h-9 rounded-full bg-ember/20 flex items-center justify-center font-display font-extrabold text-ember text-[12px] flex-none">
                RS
              </div>
              <div>
                <div className="font-sans font-semibold text-white text-[14px]">[Client name]</div>
                <div className="font-mono text-[11px] text-white/35">Skin Clinic · Jaipur</div>
              </div>
              <span className="font-mono text-[11px] bg-sage/[.12] text-sage px-3 py-1.5 rounded-full ml-auto">
                ↑ 78% walk-ins
              </span>
            </div>
          </div>

          {/* Secondary testimonials — marquee */}
          <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-10">
            <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-[280px] md:w-[320px] flex-none border border-white/[.08] rounded-card p-5 bg-white/[.03] flex flex-col"
                >
                  <div className="text-ember text-[12px] tracking-[2px] mb-3">★★★★★</div>
                  <p className="text-[13px] text-white/55 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <span className="self-start font-mono text-[10px] text-sage bg-sage/10 px-2.5 py-1 rounded-full mt-4">
                    {t.result}
                  </span>
                  <div className="flex items-center gap-3 pt-4 mt-3 border-t border-white/[.07]">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-white text-[10px] flex-none">
                      {t.initials}
                    </div>
                    <div className="font-mono text-[10px] text-white/35">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="font-mono text-[10px] text-white/20 mt-6">
            ⚠ Placeholder testimonials — replace with real client quotes before publishing.
          </p>
        </div>
      </section>

      {/* ══ WORKSHOPS ═════════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-16 md:py-24 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
            <div>
              <span className="eyebrow block mb-5">What&apos;s coming up</span>
              <h2 className="font-display font-extrabold text-dark text-[clamp(30px,4vw,50px)] leading-[1.0] tracking-tight">
                Live workshops<br />&amp; webinars.
              </h2>
            </div>
            <p className="text-[15px] text-smoke max-w-[300px] leading-relaxed">
              Show up, ask questions, leave with a real plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="bg-cream rounded-card p-7 md:p-8 border border-dark/10 flex flex-col gap-5 hover:-translate-y-px hover:shadow-card transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] tracking-[.12em] uppercase px-3 py-1.5 rounded-full ${
                    w.free ? "bg-sage/10 text-sage" : "bg-ember/10 text-ember"
                  }`}>
                    {w.type}
                  </span>
                  <span className="font-mono text-[11px] text-smoke">{w.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-extrabold text-dark text-[20px] md:text-[22px] leading-tight mb-3">
                    {w.title}
                  </h3>
                  <p className="text-[14px] text-smoke leading-relaxed">{w.desc}</p>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-dark/10">
                  <span className={`font-mono text-[12px] font-medium ${w.free ? "text-sage" : "text-ember"}`}>
                    {w.free ? "Free to join" : "Limited seats"}
                  </span>
                  <Button href="/contact" variant={w.free ? "sage" : "primary"} className="text-[13px] px-5 py-2.5">
                    {w.free ? "Reserve spot" : "Get notified"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FREE RESOURCES ════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-24 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="eyebrow block mb-5">Free, no strings</span>
              <h2 className="font-display font-extrabold text-dark text-[clamp(30px,4vw,50px)] leading-[1.0] tracking-tight">
                7 guides. Zero cost.<br />Just DM me.
              </h2>
            </div>
            <Button href="/resources">Get all 7 guides →</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {freeResources.map((r) => (
              <Link
                key={r.title}
                href="/resources"
                className="bg-cream-alt border border-dark/10 rounded-card p-5 flex items-start gap-4 hover:-translate-y-px hover:shadow-card hover:border-ember/20 transition-all duration-200 group"
              >
                <span className="text-xl flex-none mt-px">{r.icon}</span>
                <div>
                  <span className="font-mono text-[9px] tracking-[.1em] uppercase text-ember mb-1 block">PDF</span>
                  <span className="text-[13px] font-medium text-ink group-hover:text-ember transition-colors leading-snug">
                    {r.title}
                  </span>
                </div>
              </Link>
            ))}
            <Link
              href="/resources"
              className="bg-dark rounded-card p-5 flex items-center justify-center text-white font-semibold text-[14px] hover:bg-ember transition-colors duration-200"
            >
              View all 7 →
            </Link>
          </div>
          <p className="font-mono text-[11px] text-smoke/50 mt-5">
            DM <span className="text-ember">GUIDE</span> on Instagram — they land in your inbox instantly.
          </p>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-night py-16 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ember/[.06] blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-[360px] h-[360px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-2xl">
            <span className="eyebrow-inv block mb-8">Ready when you are</span>
            <h2 className="font-display font-extrabold text-white leading-[1.0] tracking-tight text-[clamp(36px,5.5vw,68px)] mb-6">
              Stop guessing.<br />
              <span className="text-ember">Start knowing.</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/45 mb-10 max-w-[420px] leading-relaxed">
              Free guides, live workshops, or a full masterclass — pick where you want to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/resources">Get the free guides</Button>
              <Button href="/learn" variant="ghost-inv">Explore the courses →</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
