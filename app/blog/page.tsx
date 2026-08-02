import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Media from "@/components/ui/Media";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Ads & Local SEO Blog — Real Tactics, Real Accounts",
  description:
    "What actually works in Meta Ads, Google Ads and the Map Pack — taken from live ad accounts, explained in plain English.",
  alternates: { canonical: "/blog" },
};

const fmt = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
            <Link href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</Link> / Blog
          </div>
          <span className="eyebrow block mb-5">Marketing, made clear</span>
          <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
            Real tactics from real ad accounts.
          </h1>
          <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[620px] leading-[1.7]">
            Plain-English breakdowns of what actually works in Meta Ads, Google Ads
            and the Map Pack — no theory, no recycled gyan. A new post every third day.
          </p>
        </div>
      </section>

      {/* ══ POSTS ═════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 reveal">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <Card className="p-0 overflow-hidden hover:-translate-y-1 hover:border-primary/25 transition-all duration-[250ms]">
                  <div className="flex flex-col md:flex-row">
                  <Media
                    src={p.image}
                    alt={p.title}
                    className="w-full md:w-[280px] h-[180px] md:h-auto md:self-stretch flex-none"
                    sizes="(max-width: 768px) 100vw, 280px"
                    zoomOnHover
                  />
                  <div className="p-6 md:p-7 flex-1">
                  <div className="flex items-center gap-3 text-[12px] text-text-muted mb-2">
                    <span>{fmt(p.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.readMinutes} min read</span>
                  </div>
                  <h2 className="text-[19px] md:text-[22px] font-bold text-text-primary leading-snug group-hover:text-primary transition-colors duration-[250ms]">
                    {p.title}
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-text-secondary mt-2 leading-relaxed max-w-[720px]">
                    {p.description}
                  </p>
                  <span className="inline-block text-[13px] font-semibold text-primary mt-4">
                    Read the breakdown →
                  </span>
                  </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
