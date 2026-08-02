import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import { BarChart3, MapPin, Target, GraduationCap, PlayCircle, type LucideIcon } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const helpPillars: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: BarChart3,
    title: "Clarity on your ads",
    desc: "I'll show you how to read your own dashboards — so you stop depending on agencies for a summary of your own money.",
  },
  {
    icon: MapPin,
    title: "Local visibility",
    desc: "Google Map Pack, local SEO, GBP optimisation — get found by people near you who are actively searching for what you offer.",
  },
  {
    icon: Target,
    title: "Paid ads that convert",
    desc: "Meta and Google campaigns built around your actual business goals — walk-ins, orders, and leads. Not impressions.",
  },
  {
    icon: GraduationCap,
    title: "Teach you, not replace you",
    desc: "The goal is never dependency. I give you the playbook so you can run it yourself — or watch over whoever runs it for you.",
  },
];

const reels = [
  { title: "How I got a clinic to rank #1 on Google Maps in 60 days", img: "store_front", alt: "Local shopfront on a neighbourhood street" },
  { title: "The Meta Ads mistake that's quietly killing your ROAS", img: "work_charts", alt: "Campaign dashboard showing a performance trend" },
  { title: "Why your ad reports never make sense (and how to fix it)", img: "work_dashboard", alt: "Laptop open on an analytics report" },
];

// Instagram grid — replace with real post exports when the feed is wired up.
const feed: { img: string; alt: string }[] = [
  { img: "work_charts", alt: "Campaign dashboard breakdown post" },
  { img: "clinic_consult", alt: "Clinic lead-generation breakdown post" },
  { img: "rest_dining", alt: "Restaurant local-ads breakdown post" },
  { img: "d2c_textile", alt: "D2C scaling breakdown post" },
  { img: "store_front", alt: "Google Map Pack ranking post" },
  { img: "ent_arcade", alt: "Venue weekend-fill campaign post" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
            <a href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</a> / About
          </div>
          <span className="eyebrow block mb-5">
            Who&apos;s behind this
          </span>
          <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[820px] leading-[1.08]">
            I&apos;m Aditya. Here&apos;s what I can do <span className="text-primary">for you.</span>
          </h1>
          <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[640px] leading-[1.7]">
            Not a credentials dump. Not a timeline. Just the honest answer to: &ldquo;Why should I listen to this guy?&rdquo;
          </p>
        </div>
      </section>

      {/* ══ 1-LINE STORY + HELP PILLARS ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* Left — copy */}
            <div>
              {/* 1-line founder moment */}
              <div className="bg-primary/[.06] border-l-4 border-primary rounded-r-2xl px-6 py-5 mb-10 reveal">
                <span className="text-[10px] tracking-[.1em] uppercase text-primary mb-2 block font-semibold">
                  The 1-line story
                </span>
                <p className="text-[16px] md:text-[18px] font-semibold text-text-primary leading-snug">
                  I watched agencies charge ₹50K/month and hand business owners a PDF full of &ldquo;reach&rdquo; —
                  so I built the clarity they should have given you from day one.
                </p>
              </div>

              <h2 className="text-[clamp(22px,3vw,32px)] font-bold text-text-primary mb-6">
                Here&apos;s exactly how I can help:
              </h2>

              <div className="flex flex-col gap-6 reveal-stagger">
                {helpPillars.map((p) => (
                  <div key={p.title} className="flex items-start gap-4 reveal">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-none mt-0.5">
                      <p.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary text-[16px] mb-1.5">{p.title}</h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <Button href="/contact">Let&apos;s talk</Button>
                <Button href="/resources" variant="secondary">Start with free guides</Button>
              </div>
            </div>

            {/* Right — work imagery.
                The tall card is where a real portrait of Aditya belongs: drop a
                900×1125 (4:5) shot in as /public/images/about-portrait.webp and
                change `src` below. Everything else stays as-is. */}
            {/* NB: the auto-margin lives on the inner block, never on the grid
                item itself — auto margins cancel `justify-self: stretch`, which
                collapses an aspect-ratio box (no intrinsic width) to zero. */}
            <div className="reveal">
              <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] md:max-w-none pb-16 sm:pb-20">
                <Media
                  src="speak_class"
                  alt="Running a live marketing session with business owners"
                  className="aspect-[4/5] rounded-[22px] shadow-card"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
                {/* Overlapping dashboard card */}
                <div className="absolute bottom-0 -left-4 sm:-left-8 w-[62%] rounded-[18px] border-4 border-white shadow-card overflow-hidden">
                  <Media
                    src="work_charts"
                    alt="Live campaign dashboard on screen"
                    className="aspect-[4/3]"
                    sizes="260px"
                  />
                </div>
                {/* Stat chip */}
                <div className="absolute right-3 top-4 bg-white rounded-xl px-4 py-3 shadow-card border border-border">
                  <div className="text-[10px] tracking-[.06em] uppercase text-text-muted">Ad accounts</div>
                  <div className="tabular-nums text-[22px] font-bold text-text-primary mt-0.5">58</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ BEST PERFORMING REELS ═════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14 reveal">
            <span className="eyebrow block mb-4">Best performing reels</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary">
              Marketing, broken down in minutes.
            </h2>
            <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
              Real campaigns. Real numbers. Explained on screen — no theory slides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {reels.map((v) => (
              <div key={v.title} className="flex flex-col gap-3.5 reveal group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
                  <Media
                    src={v.img}
                    alt={v.alt}
                    className="aspect-[16/9]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
                    overlay
                    zoomOnHover
                  />
                  {/* play affordance */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-card transition-transform duration-[250ms] group-hover:scale-110">
                      <PlayCircle className="w-8 h-8 text-primary" strokeWidth={1.75} />
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-[.08em] uppercase font-semibold text-text-primary bg-secondary px-2.5 py-1 rounded-md">
                    Reel
                  </span>
                </div>
                <div className="font-semibold text-[14px] text-text-primary leading-snug">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSTAGRAM FEED ════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14 reveal">
            <div className="max-w-[600px]">
              <span className="eyebrow block mb-4">From the feed</span>
              <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary">
                Free marketing breakdowns, every week.
              </h2>
              <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
                Follow @that.marketingguyy for daily tactics, real campaign screenshots, and no-nonsense advice.
              </p>
            </div>
            <div className="flex-none">
              <Button
                href="https://www.instagram.com/that.marketingguyy/"
                variant="secondary"
              >
                Follow on Instagram →
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 reveal-stagger">
            {feed.map((f, i) => (
              <a
                key={i}
                href="https://www.instagram.com/that.marketingguyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-[250ms] reveal"
              >
                <Media
                  src={`sq/${f.img}`}
                  alt={f.alt}
                  className="aspect-square"
                  sizes="(max-width: 640px) 33vw, 180px"
                  zoomOnHover
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
