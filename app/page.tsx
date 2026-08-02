import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CountUp from "@/components/ui/CountUp";
import Media from "@/components/ui/Media";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  UtensilsCrossed,
  Package,
  Store,
  Gamepad2,
  Frown,
  Calendar,
  Coffee,
  Rocket,
  Handshake,
  BarChart3,
  MapPin,
  Smartphone,
  Target,
  type LucideIcon,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const niches: { icon: LucideIcon; title: string; desc: string; img: string; alt: string }[] = [
  { icon: HeartPulse, title: "Clinic owners", desc: "Fill your calendar with patient walk-ins, not vanity likes.", img: "clinic_consult", alt: "Doctor consulting a patient in a clinic" },
  { icon: UtensilsCrossed, title: "Restaurants & bakeries", desc: "Turn nearby phones into tables booked and orders placed.", img: "rest_dining", alt: "Warm restaurant dining room set for service" },
  { icon: Package, title: "D2C founders", desc: "Scale ad spend without lighting money on fire.", img: "d2c_textile", alt: "Neutral-toned fabrics on a retail rail" },
  { icon: Store, title: "Local store owners", desc: "Own the Google Map Pack so your shop shows up first.", img: "store_front", alt: "Independent shopfront on a neighbourhood street" },
  { icon: Gamepad2, title: "FunZone & venues", desc: "Pack weekends and slow days with local footfall.", img: "ent_arcade", alt: "Arcade games lit up inside an entertainment venue" },
  { icon: Frown, title: "Burned by agencies", desc: "Finally understand exactly what your money is doing.", img: "work_team", alt: "Team mapping out a plan on a whiteboard" },
];

const cases = [
  {
    name: "Skin Clinic — Jaipur", tag: "Clinic",
    img: "clinic_med", alt: "Clinician checking a phone between appointments",
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
    name: "Cloud Kitchen — Jaipur", tag: "Restaurant",
    img: "rest_cafe", alt: "Bright café interior during a quiet weekday service",
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
    name: "Local Store — Map Pack", tag: "Local / SEO",
    img: "retail_store", alt: "Local retail showroom stocked and ready for customers",
    struggle: "Invisible on Google, no calls.",
    action: "GBP optimisation + local SEO + reviews.",
    metrics: [
      { k: "Calls", v: "+300%", highlight: true },
      { k: "Rank", v: "Top 3", highlight: true },
      { k: "Spend", v: "₹0 ads" },
      { k: "Window", v: "60d" },
    ],
  },
];

// Client attribution intentionally omits names/photos until real permission
// is collected — see the note rendered below the section.
const testimonials = [
  {
    quote: "For the first time I understood where my ad money was going. Walk-ins doubled in two months.",
    result: "↑ 78% more walk-ins", role: "Skin Clinic Owner · Jaipur",
  },
  {
    quote: "No long contracts, no jargon. He fixed our targeting and showed me exactly what changed.",
    result: "↑ 150% more orders", role: "Cloud Kitchen Owner · Jaipur",
  },
  {
    quote: "We were paying an agency for reports nobody could read. Now our ROAS finally makes sense.",
    result: "5.5× ROAS", role: "D2C Skincare Founder",
  },
  {
    quote: "Google Map Pack went from page 3 to Top 3 in under 60 days. Zero ad spend.",
    result: "+300% calls", role: "Local Store Owner · Jaipur",
  },
  {
    quote: "I stopped dreading my ad reports the moment I understood what each number actually meant.",
    result: "ROAS: 4.8×", role: "FunZone Owner · Jaipur",
  },
];

const storyStats: { n: string; l: string; icon: LucideIcon }[] = [
  { n: "1,200+", l: "days in the game", icon: Calendar },
  { n: "4,200+", l: "chai/coffee refills", icon: Coffee },
  { n: "50+",    l: "projects shipped",   icon: Rocket },
  { n: "25+",    l: "clients helped",     icon: Handshake },
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
    img: "work_charts", alt: "Live campaign dashboard showing performance trends",
  },
  {
    title: "Google Map Pack Sprint",
    date: "Coming Soon",
    type: "Workshop",
    seats: "Free",
    desc: "Get your local business ranking in the top 3 spots within 60 days. Step-by-step, live Q&A included.",
    free: true,
    cta: "Reserve a spot",
    img: "seo_phone", alt: "Phone showing maps and social apps on a home screen",
  },
];

const freeResources: { icon: LucideIcon; title: string }[] = [
  { icon: BarChart3, title: "Stop Wasting Ad Budget — Checklist" },
  { icon: MapPin, title: "Google Map Pack Ranking Guide" },
  { icon: Smartphone, title: "Meta Ads Setup for Beginners" },
  { icon: HeartPulse, title: "Clinic Lead-Gen Starter Pack" },
  { icon: UtensilsCrossed, title: "Restaurant Local-Ads Playbook" },
  { icon: Package, title: "D2C Scaling Cheat-Sheet" },
  { icon: Target, title: "FunZone Weekend-Fill Template" },
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
      <rect width="460" height="380" rx="24" fill="#F8FAFC" />

      {/* Top header bar */}
      <rect x="16" y="16" width="428" height="44" rx="12" fill="white" />
      <circle cx="40" cy="38" r="8" fill="#036D9A" />
      <rect x="58" y="31" width="84" height="11" rx="4" fill="#E5E7EB" />
      <rect x="58" y="46" width="52" height="8" rx="3" fill="#036D9A" opacity="0.2" />
      <rect x="354" y="27" width="90" height="22" rx="11" fill="#036D9A" />
      <rect x="366" y="35" width="66" height="6" rx="3" fill="white" opacity="0.75" />

      {/* Main chart panel */}
      <rect x="16" y="72" width="268" height="180" rx="14" fill="white" />
      <rect x="32" y="88" width="76" height="10" rx="3" fill="#E5E7EB" />
      <rect x="32" y="102" width="46" height="16" rx="5" fill="#036D9A" opacity="0.15" />

      {/* Bar chart — rising left to right */}
      <rect x="38"  y="224" width="22" height="18"  rx="3" fill="#036D9A" opacity="0.20" />
      <rect x="68"  y="208" width="22" height="34"  rx="3" fill="#036D9A" opacity="0.36" />
      <rect x="98"  y="189" width="22" height="53"  rx="3" fill="#036D9A" opacity="0.55" />
      <rect x="128" y="165" width="22" height="77"  rx="3" fill="#036D9A" opacity="0.75" />
      <rect x="158" y="141" width="22" height="101" rx="3" fill="#036D9A" />
      <rect x="188" y="119" width="22" height="123" rx="3" fill="#FDEA6F" />
      <rect x="218" y="98"  width="22" height="144" rx="3" fill="#FDEA6F" />
      <rect x="248" y="80"  width="22" height="162" rx="3" fill="#FDEA6F" />

      {/* Trend line */}
      <polyline
        points="49,224 79,203 109,184 139,160 169,136 199,114 229,93 259,75"
        stroke="#036D9A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="49"  cy="224" r="3.5" fill="white" stroke="#036D9A"  strokeWidth="2" />
      <circle cx="109" cy="184" r="3.5" fill="white" stroke="#036D9A"  strokeWidth="2" />
      <circle cx="169" cy="136" r="3.5" fill="white" stroke="#036D9A"  strokeWidth="2" />
      <circle cx="229" cy="93"  r="3.5" fill="white" stroke="#02587A"  strokeWidth="2" />
      <circle cx="259" cy="75"  r="5"   fill="#02587A" stroke="white"  strokeWidth="2" />

      {/* Right metric cards */}
      <rect x="298" y="72"  width="146" height="68" rx="14" fill="white" />
      <rect x="314" y="90"  width="52"  height="9"  rx="3" fill="#E5E7EB" />
      <rect x="314" y="104" width="76"  height="18" rx="5" fill="#036D9A" opacity="0.12" />
      <path d="M418 93 L426 85 M426 85 L434 93 M426 85 L426 102" stroke="#036D9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <rect x="298" y="152" width="146" height="68" rx="14" fill="white" />
      <rect x="314" y="170" width="56"  height="9"  rx="3" fill="#E5E7EB" />
      <rect x="314" y="186" width="62"  height="18" rx="5" fill="#02587A" opacity="0.12" />
      <path d="M420 196 L426 188 L432 196 M426 188 L426 204" stroke="#02587A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <rect x="298" y="232" width="146" height="68" rx="14" fill="white" />
      <rect x="314" y="250" width="48"  height="9"  rx="3" fill="#E5E7EB" />
      <rect x="314" y="266" width="80"  height="18" rx="5" fill="#02587A" opacity="0.12" />
      <circle cx="424" cy="256" r="8" stroke="#02587A" strokeWidth="2" fill="none" />
      <path d="M430 262 L436 268" stroke="#02587A" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Bottom local SEO panel */}
      <rect x="16" y="264" width="268" height="100" rx="14" fill="white" />
      <circle cx="56" cy="307" r="20" fill="#036D9A" opacity="0.07" />
      <path d="M56 291 C47 291 40 298 40 306 C40 316 56 324 56 324 C56 324 72 316 72 306 C72 298 65 291 56 291 Z" fill="#036D9A" />
      <circle cx="56" cy="306" r="5" fill="white" />
      <rect x="88" y="284" width="132" height="9" rx="3" fill="#E5E7EB" />
      <rect x="88" y="299" width="164" height="9" rx="3" fill="#E5E7EB" />
      <rect x="88" y="314" width="104" height="9" rx="3" fill="#036D9A" opacity="0.35" />
      <rect x="88" y="329" width="124" height="9" rx="3" fill="#E5E7EB" opacity="0.5" />
      <rect x="196" y="311" width="72"  height="20" rx="10" fill="#036D9A" opacity="0.1" />
      <rect x="204" y="318" width="56"  height="6"  rx="3" fill="#036D9A" opacity="0.55" />
    </svg>
  );
}

// ─── Metric Card ──────────────────────────────────────────────────────────────

function MetricCard({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="bg-text-primary rounded-xl px-3 py-2.5 min-w-0">
      <div className="text-[10px] tracking-[.06em] uppercase text-white/50">{k}</div>
      <div className={`tabular-nums text-base md:text-lg mt-0.5 font-semibold ${highlight ? "text-secondary" : "text-white/85"}`}>
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
            <div className="animate-fadeInUp">
              <span className="eyebrow mb-5 block">Performance marketing · without the mystery</span>

              <h1 className="text-[clamp(32px,4.8vw,56px)] font-bold text-text-primary leading-[1.08]">
                Your ads are running.<br />
                <span className="text-primary">Are they working?</span>
              </h1>

              <p className="text-[17px] md:text-[18px] text-text-primary/70 mt-6 mb-3 max-w-[540px] leading-[1.7]">
                Most business owners don&apos;t know the answer — and that&apos;s not their fault. Agencies are built to keep it complicated.
              </p>
              <p className="text-[17px] md:text-[18px] text-text-secondary max-w-[540px] leading-[1.7] mb-8">
                I&apos;ve managed 50+ ad accounts across clinics, restaurants, D2C, and local stores.{" "}
                <strong className="text-text-primary">I teach you to read the numbers yourself.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/resources">Get 7 free guides</Button>
                <Button href="/results" variant="secondary">See real results →</Button>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
                {[
                  { n: "50+", l: "ad accounts managed" },
                  { n: "6",   l: "industries served" },
                  { n: "₹0",  l: "to start learning" },
                ].map((t) => (
                  <div key={t.l} className="flex flex-col">
                    <CountUp value={t.n} className="tabular-nums text-[22px] md:text-[28px] font-bold text-text-primary" />
                    <span className="text-[11px] sm:text-[12.5px] text-text-secondary mt-0.5">{t.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — working photo with the dashboard laid over it.
                To swap in a real portrait: replace /public/images/hero-desk.webp
                with a 900×1125 (4:5) shot. Nothing else needs to change. */}
            <div className="order-first md:order-last animate-fadeInUp">
              <div className="relative max-w-[420px] mx-auto md:ml-auto pb-20 md:pb-24">
                <Media
                  src="hero-desk"
                  alt="Laptop, notebook and coffee on a desk mid-campaign review"
                  className="aspect-[4/5] rounded-[22px] shadow-card"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority
                />

                {/* Dashboard card, overlapping the photo */}
                <div className="absolute -bottom-1 -left-4 sm:-left-8 w-[72%] bg-white rounded-[18px] shadow-card border border-border p-2.5">
                  <DashboardIllustration />
                </div>

                {/* Floating ROAS badge */}
                <div className="absolute right-3 top-5 bg-text-primary text-white rounded-2xl px-4 py-3 shadow-card">
                  <div className="text-[10px] tracking-[.06em] uppercase text-white/55">Avg ROAS</div>
                  <div className="tabular-nums text-[22px] text-secondary mt-0.5 font-bold">5.8×</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ QUOTE BAND ════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-16 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative max-w-3xl mx-auto text-center reveal">
            <span className="absolute -top-6 -left-2 md:-left-10 text-[90px] md:text-[120px] text-primary/15 font-bold leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            <p className="text-[clamp(20px,2.8vw,32px)] font-bold text-text-primary leading-snug relative z-10 px-6 md:px-10">
              Marketing isn&apos;t about being seen everywhere.{" "}
              <span className="text-primary">It&apos;s about being found by the right person at the right moment.</span>
            </p>
            <span className="text-[13px] text-text-secondary mt-8 block">
              — Aditya Khandelwal · thatmarketingguy
            </span>
          </div>
        </div>
      </section>

      {/* ══ PROOF BAR ═════════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-border py-10 md:py-12">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { n: "50+",   l: "Ad accounts across India" },
              { n: "—",     l: "Ad spend managed (updating)" },
              { n: "5.8×",  l: "Average ROAS delivered" },
            ].map((c, i) => (
              <div key={i} className={`px-2 relative ${i > 0 ? "border-l border-border" : ""}`}>
                <CountUp
                  value={c.n}
                  className="block tabular-nums text-xl sm:text-2xl md:text-[clamp(26px,3.2vw,40px)] font-bold text-text-primary"
                />
                <div className="text-[11px] sm:text-[13px] text-text-secondary mt-1">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STORY STATS ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">

            {/* Working photo */}
            <div className="reveal order-last lg:order-first">
              <Media
                src="work_desk"
                alt="Reviewing campaign numbers together over a laptop"
                className="aspect-[4/3] rounded-card shadow-card"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>

            <div>
              <div className="max-w-[640px] mb-8 md:mb-10 reveal">
                <span className="eyebrow block mb-4">A small backstory</span>
                <h2 className="text-[clamp(24px,3.4vw,42px)] font-bold text-text-primary">
                  This is what 5+ years of showing up every day looks like.
                </h2>
                <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
                  Not a big agency. Just one person, one laptop, and a lot of chai. Here&apos;s the tally.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 reveal-stagger">
                {storyStats.map((s) => (
                  <Card
                    key={s.l}
                    className="p-5 md:p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-[250ms] reveal"
                  >
                    <s.icon className="w-7 h-7 text-primary mb-2.5" strokeWidth={2} />
                    <CountUp value={s.n} className="tabular-nums text-[clamp(22px,2.6vw,32px)] font-bold text-text-primary" />
                    <span className="text-[12.5px] text-text-secondary mt-1 leading-snug">{s.l}</span>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ WHO THIS IS FOR ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14 reveal">
            <span className="eyebrow block mb-4">Is this for you?</span>
            <h2 className="text-[clamp(24px,3.4vw,42px)] font-bold text-text-primary">
              I speak walk-ins, orders, and ROAS — not &ldquo;impressions.&rdquo;
            </h2>
            <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
              If you&apos;ve been burned by an agency or just want to understand what your money is doing — this is for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger">
            {niches.map((n) => (
              <Card
                key={n.title}
                className="p-0 overflow-hidden hover:-translate-y-1 hover:border-primary/25 transition-all duration-[250ms] group reveal"
              >
                <div className="relative">
                  <Media
                    src={n.img}
                    alt={n.alt}
                    className="aspect-[16/10]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    zoomOnHover
                  />
                  {/* icon chip straddling the image edge */}
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-2xl bg-white border border-border shadow-card flex items-center justify-center">
                    <n.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-6 md:p-7 pt-9">
                  <h3 className="text-[18px] text-text-primary font-bold mb-2">{n.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{n.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDIES — leaderboard rows, deliberately not a card grid ═══════ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14 reveal">
            <span className="eyebrow block mb-4">The receipts</span>
            <h2 className="text-[clamp(24px,3.4vw,42px)] font-bold text-text-primary">
              Real campaigns. Real numbers. No retouching.
            </h2>
            <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
              A few below — the full portfolio lives on the Results page.
            </p>
          </div>
          <div className="flex flex-col gap-4 reveal-stagger">
            {cases.map((c) => (
              <Card key={c.name} className="p-0 overflow-hidden reveal group">
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 p-6 md:p-7">
                  <Media
                    src={c.img}
                    alt={c.alt}
                    className="w-full lg:w-[132px] h-[150px] lg:h-[104px] flex-none rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 132px"
                    zoomOnHover
                  />
                  <div className="lg:w-[260px] flex-none">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-text-primary text-[16px] leading-tight">{c.name}</span>
                      <span className="text-[10px] tracking-[.06em] uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-lg flex-none">
                        {c.tag}
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
          <div className="text-center mt-10">
            <Button href="/results" variant="secondary">See all results →</Button>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS — manual horizontal scroll, no auto-marquee ═══════════ */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 mb-8 md:mb-10 reveal">
          <span className="eyebrow block mb-4">What clients say</span>
          <h2 className="text-[clamp(24px,3.4vw,42px)] font-bold text-text-primary">
            The proof isn&apos;t my words. It&apos;s theirs.
          </h2>
        </div>

        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[280px] md:w-[320px] flex-none bg-white border border-border rounded-card p-6 flex flex-col shadow-card snap-start"
              >
                <div className="text-secondary text-[13px] tracking-[2px] mb-3">★★★★★</div>
                <p className="text-[14px] text-text-primary leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <span className="self-start text-[11px] text-primary bg-primary/10 px-2.5 py-1.5 rounded-lg mt-4 font-medium">
                  {t.result}
                </span>
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="text-[12px] text-text-secondary">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 mt-6">
          <p className="text-[12px] text-text-muted">
            Client names and photos are withheld until each case study is published with permission.
          </p>
        </div>
      </section>

      {/* ══ WORKSHOPS & WEBINARS ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14 reveal">
            <span className="eyebrow block mb-4">What&apos;s coming up</span>
            <h2 className="text-[clamp(24px,3.4vw,42px)] font-bold text-text-primary">
              Live workshops &amp; webinars.
            </h2>
            <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
              Where theory stops and real strategy begins. Show up, ask questions, leave with a plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal-stagger">
            {workshops.map((w) => (
              <Card key={w.title} className="p-0 overflow-hidden hover:-translate-y-1 transition-transform duration-[250ms] flex flex-col reveal group">
                <Media
                  src={w.img}
                  alt={w.alt}
                  className="aspect-[21/9]"
                  sizes="(max-width: 768px) 100vw, 560px"
                  zoomOnHover
                />
                <div className="p-7 md:p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`text-[10px] tracking-[.08em] uppercase px-2.5 py-1.5 rounded-md font-semibold ${
                      w.free ? "bg-secondary/25 text-text-primary" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {w.type}
                  </span>
                  <span className="text-[12px] text-text-muted">{w.date}</span>
                </div>
                <h3 className="font-bold text-text-primary text-[20px] md:text-[22px] leading-tight">{w.title}</h3>
                <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed flex-1">{w.desc}</p>
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-border">
                  <span className="text-[13px] font-semibold text-primary">
                    {w.seats}
                  </span>
                  <Button href="/contact" variant={w.free ? "secondary" : "primary"} className="text-[13px] px-5 py-2.5">
                    {w.cta}
                  </Button>
                </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FREE RESOURCES ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14 reveal">
            <div className="max-w-[600px]">
              <span className="eyebrow block mb-4">Free value, no strings</span>
              <h2 className="text-[clamp(24px,3.4vw,42px)] font-bold text-text-primary">
                7 guides. Zero cost. Just DM me.
              </h2>
              <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
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
                className="bg-white border border-border rounded-card p-5 flex items-start gap-4 hover:-translate-y-1 hover:border-primary/30 transition-all duration-[250ms] group shadow-card"
              >
                <r.icon className="w-6 h-6 text-primary flex-none" strokeWidth={2} />
                <div>
                  <span className="text-[9px] tracking-[.08em] uppercase text-primary mb-1 block font-semibold">PDF</span>
                  <span className="text-[13px] font-semibold text-text-primary group-hover:text-primary transition-colors duration-[250ms] leading-snug">
                    {r.title}
                  </span>
                </div>
              </Link>
            ))}
            <Link
              href="/resources"
              className="bg-primary rounded-card p-5 flex items-center justify-center gap-2 text-white font-semibold text-[15px] hover:bg-primary-dark hover:-translate-y-1 transition-all duration-[250ms]"
            >
              View all 7 →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA — the one dark band on this page ════════════════════════════ */}
      <section className="relative py-16 md:py-24 lg:py-28 bg-text-primary overflow-hidden">
        {/* Photo sits behind a heavy wash so the type keeps AA contrast */}
        <Image
          src="/images/band-workshop.webp"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-cover opacity-[.18]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-text-primary via-text-primary/90 to-text-primary/70"
          aria-hidden="true"
        />
        <div className="relative w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 text-center reveal">
          <span className="eyebrow justify-center mb-5 block" style={{ color: "#FDEA6F" }}>
            Ready when you are
          </span>
          <h2 className="text-[clamp(26px,3.8vw,52px)] font-bold text-white mb-4">
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
