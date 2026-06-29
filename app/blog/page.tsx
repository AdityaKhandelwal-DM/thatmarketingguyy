import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const posts = [
  { cat: "Meta Ads",   date: "Jun 2025", title: "Why your Meta Ads ROAS drops when you scale — and how to fix it",             desc: "Most accounts see ROAS fall the moment they increase budget. Here's what's happening and the three levers that fix it." },
  { cat: "Local SEO",  date: "May 2025", title: "Google Map Pack in 60 days: the exact process I use for local businesses",    desc: "No ad spend required. Just a systematic approach to GBP, reviews, and on-page signals that the algorithm rewards."    },
  { cat: "Strategy",   date: "May 2025", title: "The one report metric that tells you everything about your campaign",         desc: "Stop reading 14-metric dashboards. If you understand this one number, you'll know whether to scale or pause."          },
  { cat: "Clinics",    date: "Apr 2025", title: "How I got a Jaipur skin clinic from 3 walk-ins/week to 12 — in 90 days",    desc: "A full breakdown: account structure, creative strategy, Map Pack push, and what changed week by week."               },
  { cat: "D2C",        date: "Apr 2025", title: "D2C scaling without ROAS drop: creative testing at each budget tier",        desc: "At ₹20K/month you test. At ₹2L/month you scale. This covers the framework that keeps ROAS stable across tiers."    },
  { cat: "Google Ads", date: "Mar 2025", title: "Performance Max vs Search: which one wins for local businesses in India",    desc: "Real comparison. Not theory — actual ROAS, CPL, and walk-in data from both campaign types."                         },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-14 md:py-20 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">Blog</p>
          <h1 className="font-sans font-extrabold text-text text-[clamp(28px,4.5vw,50px)] leading-tight tracking-tight max-w-[600px]">
            Marketing, without the mystery.
          </h1>
          <p className="text-[16px] text-secondary mt-4 max-w-[440px] leading-relaxed">
            Real tactics from real ad accounts. No theory, no recycled gyan.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col divide-y divide-border">
            {posts.map((p) => (
              <div key={p.title} className="py-6 md:py-7 group cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-semibold tracking-[.08em] uppercase text-muted">{p.cat}</span>
                  <span className="text-[11px] text-muted">·</span>
                  <span className="text-[11px] text-muted">{p.date}</span>
                </div>
                <h3 className="font-sans font-bold text-text text-[17px] md:text-[18px] leading-snug mb-2 group-hover:text-secondary transition-colors">
                  {p.title}
                </h3>
                <p className="text-[13px] text-secondary leading-relaxed max-w-[620px]">{p.desc}</p>
                <p className="text-[12px] text-secondary mt-3 group-hover:text-text transition-colors">Read →</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted mt-6">
            ⚠ Placeholder articles — connect a CMS (Notion, Sanity, or WordPress headless) before publishing.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
