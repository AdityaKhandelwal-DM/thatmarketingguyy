import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CountUp from "@/components/ui/CountUp";
import Media from "@/components/ui/Media";
import Image from "next/image";
import {
  GoogleAdsLogo,
  AnalyticsLogo,
  GTMLogo,
  SearchConsoleLogo,
  MetaLogo,
  FacebookLogo,
  WhatsAppLogo,
  InstagramLogo,
  YouTubeLogo,
  GBPLogo,
} from "@/components/ui/BrandLogos";
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
  { icon: UtensilsCrossed, title: "Restaurants & bakeries", desc: "Turn nearby phones into tables booked and orders placed.", img: "ind_thali", alt: "Indian thali served across brass bowls" },
  { icon: Package, title: "D2C founders", desc: "Scale ad spend without lighting money on fire.", img: "ind_saree", alt: "Model in a handwoven silk saree" },
  { icon: Store, title: "Local store owners", desc: "Own the Google Map Pack so your shop shows up first.", img: "ind_jaipur", alt: "Hawa Mahal, Jaipur, with autorickshaws on the street below" },
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
    img: "ind_samosa", alt: "Fresh samosas plated at a local kitchen",
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
    img: "ind_amber", alt: "Amber Fort above Jaipur at golden hour",
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

const stack: { logo: React.ComponentType<{ className?: string }>; name: string }[] = [
  { logo: MetaLogo, name: "Meta Ads" },
  { logo: GoogleAdsLogo, name: "Google Ads" },
  { logo: AnalyticsLogo, name: "Google Analytics" },
  { logo: GTMLogo, name: "Tag Manager" },
  { logo: SearchConsoleLogo, name: "Search Console" },
  { logo: GBPLogo, name: "Business Profile" },
  { logo: FacebookLogo, name: "Facebook Ads" },
  { logo: InstagramLogo, name: "Instagram Ads" },
  { logo: WhatsAppLogo, name: "WhatsApp Business" },
  { logo: YouTubeLogo, name: "YouTube Ads" },
];

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

const faqsHome = [
  { q: "How much does a Facebook ads freelancer cost?",
    a: "Rates vary enormously by market — a US or UK freelancer typically charges several times what an India-based one does for the same work — and most price either a flat monthly retainer or a percentage of ad spend. What matters more than the rate is what's included. Ask three things of anyone you consider: who owns the ad account, do you get raw dashboard access, and does the reporting show cost per lead or just impressions." },
  { q: "Do you work with clients outside India?",
    a: "Yes. I work remotely from Jaipur with business owners in the US, UK, UAE, Australia and Singapore. Everything runs over calls and WhatsApp, and clients keep full ownership of their ad accounts — which matters far more than where the person managing them sits. Timezone overlap is a solved problem, and most day-to-day work is async anyway." },
  { q: "Meta ads or Google ads — which one does my business need?",
    a: "It depends on whether demand already exists. Google catches people actively searching for what you sell, so it suits clinics, local services and anything with clear buying intent. Meta creates demand — it works when people don't yet know they want you, which is why restaurants, venues and D2C brands lean on it. Plenty of businesses need both, but if budget is tight, start where the intent already is." },
  { q: "What's the difference between hiring a freelancer and an agency?",
    a: "An agency gives you a team, a documented process and usually an account manager sitting between you and whoever actually touches your campaigns. A freelancer gives you direct access to the person in the account, and lower overhead. The trade-off is capacity — one person can't cover everything an agency can. Neither is automatically better; it depends on how much scale you need and how much distance you're willing to accept." },
  { q: "What size of business does this suit?",
    a: "Small and medium businesses — clinics, restaurants, D2C founders, local stores, venues. If you're spending a few hundred dollars a month, you probably don't need anyone managing it yet; you need the basics and to keep the budget. Paid management starts making sense once spend is large enough that a few percent of waste costs more than the fee does." },
  { q: "How long before ads start working?",
    a: "Meta needs roughly 50 conversion events a week per ad set before its optimisation settles — the learning phase — and judging results before that finishes is the most common mistake I see. On small budgets that usually means two to four weeks before the numbers mean anything. Google Search can show signal sooner, because the intent is already there when someone types the query." },
];

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
              <span className="eyebrow mb-5 block">Meta &amp; Google Ads consultant · remote, worldwide</span>

              <h1 className="text-[clamp(32px,4.8vw,56px)] font-bold text-text-primary leading-[1.08]">
                Your ads are running.<br />
                <span className="text-primary">Are they working?</span>
              </h1>

              <p className="text-[17px] md:text-[18px] text-text-primary/70 mt-6 mb-3 max-w-[540px] leading-[1.7]">
                Most business owners don&apos;t know the answer — and that&apos;s not their fault. Agencies are built to keep it complicated.
              </p>
              <p className="text-[17px] md:text-[18px] text-text-secondary max-w-[540px] leading-[1.7] mb-8">
                I&apos;ve managed 77 ad accounts across clinics, restaurants, D2C, and local stores.{" "}
                <strong className="text-text-primary">I teach you to read the numbers yourself.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/resources">Get 7 free guides</Button>
                <Button href="/results" variant="secondary">See real results →</Button>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
                {[
                  { n: "77", l: "ad accounts managed" },
                  { n: "7",   l: "industries served" },
                  { n: "₹0",  l: "to start learning" },
                ].map((t) => (
                  <div key={t.l} className="flex flex-col">
                    <CountUp value={t.n} className="tabular-nums text-[22px] md:text-[28px] font-bold text-text-primary" />
                    <span className="text-[11px] sm:text-[12.5px] text-text-secondary mt-0.5">{t.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Aditya, clean portrait, no overlays */}
            <div className="order-first md:order-last animate-fadeInUp">
              <div className="relative max-w-[420px] mx-auto md:ml-auto">
                <Media
                  src="hero-aditya"
                  alt="Aditya Khandelwal, performance marketing consultant, Jaipur"
                  className="aspect-[4/5] rounded-[22px] shadow-card"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority
                  unoptimized
                />
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
              { n: "77",     l: "Ad accounts managed" },
              { n: "₹73.5L", l: "Ad spend managed (~$88K)" },
              { n: "49,752", l: "Leads & conversions delivered" },
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

      {/* ══ THE STACK ═════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 reveal">
            <span className="eyebrow justify-center mb-3">The stack</span>
            <h2 className="text-[clamp(20px,2.6vw,30px)] font-bold text-text-primary">
              The tools I work in every single day.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 reveal">
            {stack.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2.5 bg-white border border-border rounded-xl px-4 py-2.5 shadow-card hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-[250ms]"
              >
                <t.logo className="w-5 h-5 flex-none" />
                <span className="text-[13px] font-semibold text-text-primary whitespace-nowrap">{t.name}</span>
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
                  Not a big agency. Just one person, one laptop, and a lot of chai. Here&apos;s the tally —
              and I write up what I learn on <Link href="/blog" className="text-primary font-medium hover:underline">the blog</Link>.
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

      <FAQ items={faqsHome} />
      <Footer />
    </>
  );
}
