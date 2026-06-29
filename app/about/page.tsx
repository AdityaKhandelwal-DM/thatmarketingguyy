import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const helpPillars = [
  { title: "Clarity on your ads",      desc: "I'll show you how to read your own dashboards — so you stop depending on agencies to summarise your own money." },
  { title: "Local visibility",         desc: "Google Map Pack, local SEO, GBP optimisation — get found by people nearby who are actively searching for what you sell." },
  { title: "Paid ads that convert",    desc: "Meta and Google campaigns built around walk-ins, orders, and leads — not impressions." },
  { title: "I teach you, not replace you", desc: "The goal is never dependency. You get the playbook to run it yourself." },
];

const reels = [
  { id: "REEL_ID_1", title: "How I got a clinic to rank #1 on Google Maps in 60 days" },
  { id: "REEL_ID_2", title: "The Meta Ads mistake that's quietly killing your ROAS" },
  { id: "REEL_ID_3", title: "Why your ad reports never make sense (and how to fix it)" },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-14 md:py-20 lg:py-24 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">About</p>
          <h1 className="font-sans font-extrabold text-text text-[clamp(30px,4.5vw,52px)] leading-tight tracking-tight max-w-[640px]">
            I&apos;m Aditya. Here&apos;s what I can do for you.
          </h1>
          <p className="text-[16px] text-secondary mt-4 max-w-[500px] leading-relaxed">
            Not a credentials dump — just the honest answer to &ldquo;why should I listen to this guy?&rdquo;
          </p>
        </div>
      </section>

      {/* Story + pillars */}
      <section className="py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left */}
            <div>
              <div className="border-l-2 border-border-strong pl-5 mb-10">
                <p className="text-[11px] font-semibold tracking-[.1em] uppercase text-muted mb-2">The 1-line story</p>
                <p className="text-[16px] font-semibold text-text leading-snug">
                  I watched agencies charge ₹50K/month and hand business owners a PDF full of &ldquo;reach&rdquo; — so I built the clarity they should have given you from day one.
                </p>
              </div>

              <h2 className="font-sans font-bold text-text text-[20px] mb-6">Here&apos;s exactly how I can help:</h2>

              <div className="flex flex-col divide-y divide-border">
                {helpPillars.map((p) => (
                  <div key={p.title} className="py-4">
                    <h3 className="font-sans font-semibold text-text text-[14px] mb-1">{p.title}</h3>
                    <p className="text-[13px] text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button href="/contact">Let&apos;s talk</Button>
                <Button href="/resources" variant="ghost">Start with free guides</Button>
              </div>
            </div>

            {/* Right — photo placeholder */}
            <div className="max-w-[380px] mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-xl bg-surface-alt border border-border flex items-center justify-center flex-col gap-2 text-muted text-[13px]">
                <span className="text-3xl">📷</span>
                <span>Add a photo here</span>
                <span className="text-[11px] text-muted/60">~800 × 1000px</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reels */}
      <section className="border-t border-border bg-surface-alt py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[520px] mb-10">
            <p className="eyebrow mb-4">Best performing reels</p>
            <h2 className="font-sans font-bold text-text text-[clamp(20px,3vw,30px)] leading-tight tracking-tight">
              Marketing, broken down in minutes.
            </h2>
            <p className="text-[14px] text-secondary mt-2 leading-relaxed">
              Real campaigns, real numbers, explained on screen. No slides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reels.map((v) => (
              <div key={v.id} className="flex flex-col gap-3">
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden bg-surface border border-border">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <p className="text-[13px] font-medium text-secondary leading-snug">{v.title}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted mt-6">
            ⚠ Replace REEL_ID_1/2/3 with actual YouTube video IDs before publishing.
          </p>
        </div>
      </section>

      {/* Instagram */}
      <section className="border-t border-border py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow mb-4">From the feed</p>
              <h2 className="font-sans font-bold text-text text-[clamp(20px,3vw,30px)] leading-tight tracking-tight">
                Free marketing breakdowns, every week.
              </h2>
            </div>
            <Button href="#" variant="ghost">Follow on Instagram →</Button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-surface-alt border border-border flex items-center justify-center hover:border-border-strong transition-colors cursor-pointer"
              >
                <span className="text-2xl text-muted">📷</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
