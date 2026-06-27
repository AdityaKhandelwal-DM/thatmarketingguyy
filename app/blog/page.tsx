import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const posts = [
  { cat: "Meta Ads", title: "Why your cost-per-lead is high (and the 3 fixes)", excerpt: "The usual culprits behind expensive leads — and how to cut them this week." },
  { cat: "Local SEO", title: "How to rank in the Google Map Pack", excerpt: "A simple checklist any local business can follow without paying an agency." },
  { cat: "D2C", title: "The ROAS drop nobody warns you about when scaling", excerpt: "What breaks when you raise budgets — and how to scale without it." },
  { cat: "Clinics", title: "Lead ads vs. boosted posts for clinics", excerpt: "Which one fills appointments — and which one just burns money." },
  { cat: "Restaurants", title: "Filling slow weekdays with geo-fenced ads", excerpt: "A repeatable offer-testing loop for restaurants and cloud kitchens." },
  { cat: "Strategy", title: "How to read your ad dashboard in 5 minutes", excerpt: "The only four numbers you need to check, and what they actually mean." },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <section className="bg-navy text-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-3">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Blog
          </div>
          <span className="eyebrow block mb-3" style={{ color: "#CD8D43" }}>Marketing, made clear</span>
          <h1 className="text-[clamp(26px,4.2vw,52px)] font-extrabold text-white max-w-[760px] leading-tight">
            Plain-English breakdowns of what actually works.
          </h1>
          <p className="text-base md:text-lg text-white/70 mt-3 max-w-[620px]">
            Real tactics from real ad accounts — no theory, no recycled gyan.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p) => (
              <article key={p.title} className="bg-white border border-ink/10 rounded-card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-card-lg transition-all duration-200">
                <div className="aspect-video bg-canvas flex items-center justify-center text-muted font-mono text-[11px] flex-col gap-1">
                  <span className="text-xl">📷</span>
                  <span>1200×675</span>
                </div>
                <div className="p-4 md:p-5 flex flex-col gap-2 flex-1">
                  <span className="font-mono text-[10px] tracking-[.06em] uppercase text-orange">{p.cat}</span>
                  <h3 className="text-[16px] font-bold text-navy leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted flex-1">{p.excerpt}</p>
                  <span className="font-display font-bold text-sm text-navy mt-1">Read →</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 text-[12px] text-muted font-mono bg-white border border-dashed border-ink/20 rounded-xl px-4 py-3">
            💡 <strong className="text-orange">Tip:</strong> A blog is best run on a CMS (WordPress or Framer CMS) so you can publish without touching code.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
