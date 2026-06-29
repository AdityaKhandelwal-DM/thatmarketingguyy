import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const helpPillars = [
  {
    n: "01",
    title: "Clarity on your ads",
    desc: "I'll show you how to read your own dashboards — so you stop depending on agencies to summarise your own money.",
  },
  {
    n: "02",
    title: "Local visibility",
    desc: "Google Map Pack, local SEO, GBP optimisation — get found by people near you who are actively searching for what you sell.",
  },
  {
    n: "03",
    title: "Paid ads that convert",
    desc: "Meta and Google campaigns built around walk-ins, orders, and leads — not impressions and engagement.",
  },
  {
    n: "04",
    title: "I teach you, not replace you",
    desc: "The goal is never dependency. You get the playbook to run it yourself — or to confidently oversee whoever runs it for you.",
  },
];

const reels = [
  { id: "REEL_ID_1", title: "How I got a clinic to rank #1 on Google Maps in 60 days" },
  { id: "REEL_ID_2", title: "The Meta Ads mistake that's quietly killing your ROAS" },
  { id: "REEL_ID_3", title: "Why your ad reports never make sense (and how to fix it)" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-dark py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute -right-32 top-0 w-[600px] h-[600px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[10px] tracking-[.12em] text-white/30 mb-6 uppercase">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span className="mx-2 opacity-30">/</span>
            About
          </div>
          <span className="eyebrow-inv block mb-8">Who&apos;s behind this</span>
          <h1 className="font-display font-extrabold text-white leading-[0.94] tracking-tight text-[clamp(44px,7vw,82px)] max-w-[820px]">
            I&apos;m Aditya.<br />
            Here&apos;s what I can<br />
            do <span className="text-ember">for you.</span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/50 mt-8 max-w-[580px] leading-relaxed">
            Not a credentials dump. Not a timeline. Just the honest answer to:
            &ldquo;Why should I listen to this guy?&rdquo;
          </p>
        </div>
      </section>

      {/* ══ 1-LINE STORY + HELP PILLARS ═══════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

            {/* Left */}
            <div>
              {/* 1-line founder story */}
              <div className="border-l-[3px] border-ember pl-6 mb-10 md:mb-14">
                <span className="font-mono text-[10px] tracking-[.14em] uppercase text-ember mb-3 block">
                  The 1-line story
                </span>
                <p className="text-[17px] md:text-[19px] font-semibold text-dark leading-snug">
                  I watched agencies charge ₹50K/month and hand business owners a PDF full of
                  &ldquo;reach&rdquo; — so I built the clarity they should have given you from day one.
                </p>
              </div>

              <h2 className="font-display font-extrabold text-dark text-[clamp(26px,3.5vw,40px)] leading-tight tracking-tight mb-8">
                Here&apos;s exactly how I can help:
              </h2>

              <div className="flex flex-col divide-y divide-dark/10">
                {helpPillars.map((p) => (
                  <div key={p.title} className="flex items-start gap-5 py-5 group">
                    <span className="font-mono text-[10px] text-smoke/35 pt-1 flex-none">{p.n}</span>
                    <div>
                      <h3 className="font-display font-extrabold text-dark text-[17px] mb-1.5 group-hover:text-ember transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-[14px] text-smoke leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <Button href="/contact">Let&apos;s talk</Button>
                <Button href="/resources" variant="ghost">Start with free guides</Button>
              </div>
            </div>

            {/* Right — photo */}
            <div className="max-w-[400px] mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-[20px] bg-cream-alt border border-dark/10 flex items-center justify-center text-smoke font-mono text-[12px] flex-col gap-2">
                <span className="text-3xl">📷</span>
                <span>Add a photo here</span>
                <span className="text-[10px] opacity-50">~800 × 1000px (4:5)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ BEST PERFORMING REELS ═════════════════════════════════════════════ */}
      <section className="bg-dark py-16 md:py-24 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-12 md:mb-16">
            <span className="eyebrow-inv block mb-5">Best performing reels</span>
            <h2 className="font-display font-extrabold text-white text-[clamp(28px,4vw,50px)] leading-[1.0] tracking-tight">
              Marketing, broken down in minutes.
            </h2>
            <p className="text-[15px] text-white/40 mt-4 leading-relaxed">
              Real campaigns, real numbers, explained on screen. No theory slides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map((v) => (
              <div key={v.id} className="flex flex-col gap-3.5">
                <div className="relative w-full pt-[56.25%] rounded-[14px] overflow-hidden bg-white/5">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <div className="font-sans font-semibold text-[14px] text-white/70 leading-snug">{v.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="font-mono text-[10px] text-white/20">
              ⚠ Replace REEL_ID_1, REEL_ID_2, REEL_ID_3 with actual YouTube video IDs before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* ══ INSTAGRAM FEED ════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-24 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="eyebrow block mb-5">From the feed</span>
              <h2 className="font-display font-extrabold text-dark text-[clamp(28px,4vw,48px)] leading-[1.0] tracking-tight">
                Free marketing breakdowns,<br />every week.
              </h2>
              <p className="text-[15px] text-smoke mt-4 max-w-[380px] leading-relaxed">
                Follow @thatmarketingguy for daily tactics, real campaign screenshots, no-nonsense advice.
              </p>
            </div>
            <Button href="#" variant="ghost">Follow on Instagram →</Button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-[14px] bg-cream-alt border border-dark/10 flex items-center justify-center flex-col gap-1 hover:border-ember/25 hover:shadow-card transition-all duration-200 cursor-pointer group"
              >
                <span className="text-2xl">📷</span>
                <span className="font-mono text-[9px] text-smoke/40 group-hover:text-ember transition-colors">600×600</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
