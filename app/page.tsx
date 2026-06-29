import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { n: "50+",  l: "ad accounts managed" },
  { n: "5.8×", l: "average ROAS"        },
  { n: "25+",  l: "clients helped"      },
  { n: "6",    l: "industries"          },
];

const niches = [
  { title: "Clinic owners",          desc: "Fill your calendar with walk-ins, not vanity likes."    },
  { title: "Restaurants & bakeries", desc: "Turn nearby phones into tables booked and orders placed." },
  { title: "D2C founders",           desc: "Scale ad spend without burning your margin."             },
  { title: "Local store owners",     desc: "Own the Google Map Pack so your shop shows up first."    },
  { title: "FunZone & venues",       desc: "Pack weekends and slow days with local footfall."        },
  { title: "Burned by agencies",     desc: "Finally understand exactly where every rupee is going."  },
];

const cases = [
  {
    label: "Clinic · Jaipur",
    name: "Skin Clinic",
    problem: "Empty appointment book, low walk-ins.",
    action: "Meta lead ads + Google Map Pack.",
    metrics: [
      { k: "Walk-ins", v: "+78%",    green: true },
      { k: "ROAS",     v: "5.0×"                 },
      { k: "Spend",    v: "₹8L+"                 },
      { k: "Timeline", v: "90 days"               },
    ],
  },
  {
    label: "Restaurant · Jaipur",
    name: "Cloud Kitchen",
    problem: "Weekday orders flat, CPO too high.",
    action: "Geo-fenced Meta ads + offer testing.",
    metrics: [
      { k: "Orders",   v: "+150%",   green: true },
      { k: "ROAS",     v: "6.0×"                 },
      { k: "Spend",    v: "₹6.4L"                },
      { k: "CPO",      v: "−41%"                  },
    ],
  },
  {
    label: "Local Store · Jaipur",
    name: "Map Pack Growth",
    problem: "Invisible on Google. Zero calls from search.",
    action: "GBP optimisation + local SEO + review strategy.",
    metrics: [
      { k: "Calls",    v: "+300%",   green: true },
      { k: "Rank",     v: "Top 3"                 },
      { k: "Spend",    v: "₹0"                   },
      { k: "Timeline", v: "60 days"               },
    ],
  },
];

const testimonials = [
  {
    quote: "For the first time I understood where my ad money was going. Walk-ins doubled in two months.",
    by: "Clinic owner · Jaipur",
    result: "↑ 78% walk-ins",
  },
  {
    quote: "No long contracts, no jargon. He fixed our targeting and showed me exactly what changed.",
    by: "Cloud kitchen owner · Jaipur",
    result: "↑ 150% orders",
  },
  {
    quote: "We were paying an agency ₹50K for reports nobody could read. This was different.",
    by: "D2C skincare founder",
    result: "5.5× ROAS",
  },
];

const freeGuides = [
  "Stop Wasting Ad Budget — Checklist",
  "Google Map Pack Ranking Guide",
  "Meta Ads Setup for Beginners",
  "Clinic Lead-Gen Starter Pack",
  "Restaurant Local-Ads Playbook",
  "D2C Scaling Cheat-Sheet",
  "FunZone Weekend-Fill Template",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">Performance marketing · Jaipur</p>
          <h1 className="font-sans font-extrabold text-text leading-[1.05] tracking-[-0.025em] text-[clamp(34px,5vw,58px)] max-w-[680px]">
            Your ads are running.<br />Are they working?
          </h1>
          <p className="text-[17px] text-secondary mt-5 max-w-[500px] leading-relaxed">
            Most business owners don&apos;t know the answer. I&apos;ve managed 50+ ad accounts — I teach you to read your own numbers and stop depending on agencies to explain them.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button href="/resources">Get 7 free guides</Button>
            <Button href="/results" variant="ghost">See results →</Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-12 rounded-xl overflow-hidden border border-border">
            {stats.map((s) => (
              <div key={s.l} className="bg-surface px-6 py-5">
                <div className="font-sans font-extrabold text-text text-[clamp(22px,2.8vw,30px)] tracking-tight leading-none">
                  {s.n}
                </div>
                <div className="text-[12px] text-secondary mt-1.5 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO IT'S FOR ══════════════════════════════════════════════════════ */}
      <section className="border-t border-border py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[560px] mb-8">
            <p className="eyebrow mb-4">Who I help</p>
            <h2 className="font-sans font-extrabold text-text text-[clamp(22px,3.2vw,36px)] leading-tight tracking-tight">
              I speak walk-ins, ROAS, and orders — not impressions.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {niches.map((n) => (
              <div key={n.title} className="bg-surface border border-border rounded-card px-5 py-4">
                <h3 className="font-sans font-semibold text-text text-[14px] mb-1">{n.title}</h3>
                <p className="text-[13px] text-secondary leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDIES ══════════════════════════════════════════════════════ */}
      <section className="border-t border-border bg-surface-alt py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow mb-4">Results</p>
              <h2 className="font-sans font-extrabold text-text text-[clamp(22px,3.2vw,36px)] leading-tight tracking-tight">
                Real campaigns. Real numbers.
              </h2>
            </div>
            <Button href="/results" variant="ghost">See all →</Button>
          </div>
          <div className="flex flex-col gap-3">
            {cases.map((c) => (
              <div key={c.name} className="bg-surface border border-border rounded-card p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold tracking-[.1em] uppercase text-muted mb-1">
                      {c.label}
                    </p>
                    <h3 className="font-sans font-bold text-text text-[16px] mb-1">{c.name}</h3>
                    <p className="text-[13px] text-secondary italic">&ldquo;{c.problem}&rdquo;</p>
                    <p className="text-[13px] text-secondary mt-0.5">→ {c.action}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-3 sm:text-right flex-none">
                    {c.metrics.map((m) => (
                      <div key={m.k}>
                        <div className="text-[10px] font-medium tracking-[.08em] uppercase text-muted mb-0.5">{m.k}</div>
                        <div className={`font-sans font-bold text-[17px] leading-none ${m.green ? "text-sage" : "text-text"}`}>
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted mt-4">
            ⚠ Placeholder data — replace with verified client numbers before publishing.
          </p>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════════════ */}
      <section className="border-t border-border py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-8">What clients say</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.quote} className="bg-surface border border-border rounded-card p-5 flex flex-col gap-4">
                <p className="text-[14px] text-text leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <span className="inline-block text-[11px] font-semibold text-sage bg-sage/10 px-2.5 py-1 rounded-full mb-2">
                    {t.result}
                  </span>
                  <p className="text-[12px] text-muted">{t.by}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted mt-4">
            ⚠ Placeholder testimonials — replace with real client quotes.
          </p>
        </div>
      </section>

      {/* ══ FREE GUIDES ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-border bg-surface-alt py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
            <div>
              <p className="eyebrow mb-4">Free, no strings</p>
              <h2 className="font-sans font-extrabold text-text text-[clamp(22px,3vw,34px)] leading-tight tracking-tight">
                7 guides. Zero cost. Just DM me.
              </h2>
            </div>
            <Button href="/resources">Get all 7 →</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {freeGuides.map((g) => (
              <Link
                key={g}
                href="/resources"
                className="flex items-center gap-3 bg-surface border border-border rounded-card px-4 py-3.5 text-[13px] text-secondary hover:text-text hover:border-border-strong transition-colors group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-muted group-hover:bg-sage flex-none transition-colors" />
                {g}
              </Link>
            ))}
          </div>
          <p className="text-[13px] text-secondary mt-4">
            DM <span className="font-semibold text-text">GUIDE</span> on Instagram — lands in your inbox instantly.
          </p>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-text py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-lg">
            <p className="eyebrow-inv mb-5">Ready when you are</p>
            <h2 className="font-sans font-extrabold text-white text-[clamp(24px,3.8vw,42px)] leading-tight tracking-tight mb-4">
              Stop guessing. Start knowing.
            </h2>
            <p className="text-[15px] text-white/60 mb-8 leading-relaxed">
              Free guides, live workshops, or a full masterclass — pick where you want to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/resources" variant="light">Get the free guides</Button>
              <Button href="/learn" variant="ghost-inv">Explore courses →</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
