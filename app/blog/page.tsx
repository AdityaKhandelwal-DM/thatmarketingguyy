import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Newspaper } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
            <a href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</a> / Blog
          </div>
          <span className="eyebrow block mb-5">Marketing, made clear</span>
          <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
            Plain-English breakdowns of what actually works.
          </h1>
          <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[620px] leading-[1.7]">
            Real tactics from real ad accounts — no theory, no recycled gyan.
          </p>
        </div>
      </section>

      {/* ══ EMPTY STATE ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[440px] mx-auto text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <Newspaper className="w-7 h-7 text-primary" strokeWidth={2} />
            </div>
            <h2 className="text-[20px] font-bold text-text-primary mb-2">No posts yet</h2>
            <p className="text-[15px] text-text-secondary leading-relaxed">
              This section is still being built out. Check back soon for plain-English breakdowns of real campaigns.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
