import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const helpPillars = [
  {
    icon: "📊",
    title: "Clarity on your ads",
    desc: "I'll show you how to read your own dashboards — so you stop depending on agencies for a summary of your own money.",
  },
  {
    icon: "📍",
    title: "Local visibility",
    desc: "Google Map Pack, local SEO, GBP optimisation — get found by people near you who are actively searching for what you offer.",
  },
  {
    icon: "🎯",
    title: "Paid ads that convert",
    desc: "Meta and Google campaigns built around your actual business goals — walk-ins, orders, and leads. Not impressions.",
  },
  {
    icon: "🎓",
    title: "Teach you, not replace you",
    desc: "The goal is never dependency. I give you the playbook so you can run it yourself — or watch over whoever runs it for you.",
  },
];

const reels = [
  {
    id: "REEL_ID_1",
    title: "How I got a clinic to rank #1 on Google Maps in 60 days",
  },
  {
    id: "REEL_ID_2",
    title: "The Meta Ads mistake that's quietly killing your ROAS",
  },
  {
    id: "REEL_ID_3",
    title: "Why your ad reports never make sense (and how to fix it)",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-navy text-white py-14 md:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-[400px] h-[400px] rounded-full bg-orange/8 blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a> / About
          </div>
          <span className="eyebrow block mb-5" style={{ color: "#F97316" }}>
            Who&apos;s behind this
          </span>
          <h1 className="text-[clamp(28px,4.5vw,60px)] font-extrabold text-white max-w-[820px] leading-[1.08]">
            I&apos;m Aditya. Here&apos;s what I can do <span className="text-orange">for you.</span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/60 mt-5 max-w-[640px] leading-relaxed">
            Not a credentials dump. Not a timeline. Just the honest answer to: &ldquo;Why should I listen to this guy?&rdquo;
          </p>
        </div>
      </section>

      {/* ══ 1-LINE STORY + HELP PILLARS ═══════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* Left — copy */}
            <div>
              {/* 1-line founder moment */}
              <div className="bg-orange/[.06] border-l-4 border-orange rounded-r-2xl px-6 py-5 mb-10">
                <span className="font-mono text-[10px] tracking-[.1em] uppercase text-orange mb-2 block">
                  The 1-line story
                </span>
                <p className="text-[16px] md:text-[18px] font-semibold text-navy leading-snug">
                  I watched agencies charge ₹50K/month and hand business owners a PDF full of &ldquo;reach&rdquo; —
                  so I built the clarity they should have given you from day one.
                </p>
              </div>

              <h2 className="text-[clamp(22px,3vw,36px)] font-extrabold text-navy mb-6">
                Here&apos;s exactly how I can help:
              </h2>

              <div className="flex flex-col gap-6">
                {helpPillars.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center text-xl flex-none mt-0.5">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-navy text-[16px] mb-1.5">{p.title}</h3>
                      <p className="text-[14px] text-muted leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <Button href="/contact">Let&apos;s talk</Button>
                <Button href="/resources" variant="ghost">Start with free guides</Button>
              </div>
            </div>

            {/* Right — photo placeholder */}
            <div className="max-w-[360px] sm:max-w-[420px] mx-auto md:max-w-none">
              <div className="aspect-[4/5] rounded-[22px] bg-canvas flex items-center justify-center text-muted font-mono text-[12px] flex-col gap-2 shadow-card-lg border border-ink/10">
                <span className="text-4xl">📷</span>
                <span>Add a working photo</span>
                <span className="text-[11px] opacity-60">~800 × 1000px (4:5)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ BEST PERFORMING REELS ═════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-28 bg-canvas">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="eyebrow block mb-4">Best performing reels</span>
            <h2 className="text-[clamp(22px,3.3vw,44px)] font-extrabold text-navy">
              Marketing, broken down in minutes.
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              Real campaigns. Real numbers. Explained on screen — no theory slides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map((v) => (
              <div key={v.id} className="flex flex-col gap-3.5">
                <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden bg-navy shadow-card">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <div className="font-display font-bold text-[14px] text-navy leading-snug">{v.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <div className="text-[12px] text-muted font-mono bg-white border border-dashed border-ink/20 rounded-xl px-4 py-3 inline-block">
              ⚠ Replace <strong className="text-navy">REEL_ID_1</strong> etc. with actual YouTube video IDs before publishing.
            </div>
          </div>
        </div>
      </section>

      {/* ══ INSTAGRAM FEED ════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="max-w-[600px]">
              <span className="eyebrow block mb-4">From the feed</span>
              <h2 className="text-[clamp(22px,3.3vw,44px)] font-extrabold text-navy">
                Free marketing breakdowns, every week.
              </h2>
              <p className="text-[15px] md:text-[17px] text-muted mt-3">
                Follow @thatmarketingguy for daily tactics, real campaign screenshots, and no-nonsense advice.
              </p>
            </div>
            <div className="flex-none">
              <Button href="#" variant="ghost">Follow on Instagram →</Button>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-canvas border border-ink/10 flex items-center justify-center text-muted font-mono text-[10px] flex-col gap-1 hover:border-orange/30 hover:shadow-card transition-all duration-200 cursor-pointer"
              >
                <span className="text-2xl">📷</span>
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
