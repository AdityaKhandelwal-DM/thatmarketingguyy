import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { BarChart3, MapPin, Target, GraduationCap, ImageIcon, PlayCircle, type LucideIcon } from "lucide-react";

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
  { title: "How I got a clinic to rank #1 on Google Maps in 60 days" },
  { title: "The Meta Ads mistake that's quietly killing your ROAS" },
  { title: "Why your ad reports never make sense (and how to fix it)" },
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

            {/* Right — photo placeholder */}
            <div className="max-w-[360px] sm:max-w-[420px] mx-auto md:max-w-none reveal">
              <div className="aspect-[4/5] rounded-[22px] bg-bg-light flex items-center justify-center text-text-muted text-[12px] flex-col gap-2 shadow-card border border-border">
                <ImageIcon className="w-9 h-9 text-text-muted" strokeWidth={1.5} />
                <span>Working photo coming soon</span>
                <span className="text-[11px] opacity-60">~800 × 1000px (4:5)</span>
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
              <div key={v.title} className="flex flex-col gap-3.5 reveal">
                <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden bg-white border border-border shadow-card flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-text-muted">
                    <PlayCircle className="w-9 h-9" strokeWidth={1.5} />
                    <span className="text-[12px]">Video coming soon</span>
                  </div>
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
                Follow @thatmarketingguy for daily tactics, real campaign screenshots, and no-nonsense advice.
              </p>
            </div>
            <div className="flex-none">
              <Button href="#" variant="secondary">Follow on Instagram →</Button>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 reveal-stagger">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-bg-light border border-border flex items-center justify-center text-text-muted flex-col gap-1 hover:border-primary/30 hover:shadow-card transition-all duration-[250ms] cursor-pointer reveal"
              >
                <ImageIcon className="w-6 h-6" strokeWidth={1.5} />
                <span className="text-[9px]">600×600</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
