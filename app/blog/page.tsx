import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const posts = [
  { cat: "Meta Ads",   date: "Jun 2025", title: "Why your Meta Ads ROAS drops when you scale — and how to fix it",                              desc: "Most accounts see ROAS fall the moment they increase budget. Here's what's actually happening and the three levers that fix it." },
  { cat: "Local SEO",  date: "May 2025", title: "Google Map Pack in 60 days: the exact process I use for local businesses",                     desc: "No ad spend required. Just a systematic approach to GBP, reviews, and on-page signals that the algorithm actually rewards." },
  { cat: "Strategy",   date: "May 2025", title: "The one report metric that tells you everything about your campaign",                           desc: "Stop reading 14-metric dashboards. If you understand this single number, you'll know whether to scale or pause within seconds." },
  { cat: "Clinics",    date: "Apr 2025", title: "How I got a Jaipur skin clinic from 3 walk-ins/week to 12 — in 90 days",                      desc: "A full breakdown: the account structure, creative strategy, Map Pack push, and what changed week by week." },
  { cat: "D2C",        date: "Apr 2025", title: "D2C scaling without ROAS drop: creative testing at each budget tier",                          desc: "At ₹20K/month you test creatives. At ₹2L/month you scale winners. This covers the framework that keeps ROAS stable across tiers." },
  { cat: "Google Ads", date: "Mar 2025", title: "Performance Max vs Search: which one wins for local businesses in India",                      desc: "Real comparison from real accounts. Not theory — actual ROAS, CPL, and walk-in data from both campaign types." },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-dark text-white py-14 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -left-24 bottom-0 w-[500px] h-[500px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-6">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span className="mx-2 opacity-30">/</span>Blog
          </div>
          <span className="eyebrow-inv block mb-6">No fluff zone</span>
          <h1 className="font-display font-extrabold text-white text-[clamp(36px,5.5vw,68px)] leading-[0.96] tracking-tight max-w-[760px]">
            Marketing, without the mystery.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/50 mt-6 max-w-[520px] leading-relaxed">
            Deep dives on what actually works in performance marketing. Real campaigns, real screenshots, real numbers.
          </p>
        </div>
      </section>

      {/* Posts — editorial list */}
      <section className="bg-cream py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col divide-y divide-dark/10">
            {posts.map((p) => (
              <div
                key={p.title}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-12 py-8 md:py-9 group cursor-pointer"
              >
                {/* Meta */}
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 md:pt-1">
                  <span className="font-mono text-[9px] tracking-[.1em] uppercase bg-ember/[.08] text-ember px-2.5 py-1 rounded-full flex-none">
                    {p.cat}
                  </span>
                  <span className="font-mono text-[11px] text-smoke/50">{p.date}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-extrabold text-dark text-[20px] md:text-[22px] leading-tight mb-2.5 group-hover:text-ember transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-smoke leading-relaxed max-w-[640px]">{p.desc}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-ember/60 group-hover:text-ember transition-colors duration-200">
                    <span className="font-mono text-[12px]">Read article</span>
                    <span className="font-mono text-[12px] group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 font-mono text-[11px] text-smoke/40 border border-dashed border-dark/15 rounded-[14px] px-5 py-4">
            ⚠ Placeholder articles — connect a CMS (Notion, Sanity, or WordPress headless) before publishing.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-night py-14 md:py-20 relative overflow-hidden">
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-ember/[.05] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-xl">
            <span className="eyebrow-inv block mb-5">Want the playbook?</span>
            <h2 className="font-display font-extrabold text-white text-[clamp(26px,4vw,46px)] leading-[1.0] tracking-tight mb-4">
              Get 7 free guides.
            </h2>
            <p className="text-[15px] text-white/45 mb-8 leading-relaxed">
              No signup forms. DM{" "}
              <span className="font-mono text-white/70 bg-white/[.06] px-2 py-0.5 rounded-md">GUIDE</span>{" "}
              on Instagram.
            </p>
            <Button href="/resources">Get the free guides</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
