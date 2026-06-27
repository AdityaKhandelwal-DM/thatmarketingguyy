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
      <section className="bg-navy text-white py-[clamp(54px,7vw,84px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="font-mono text-[12px] tracking-[.06em] text-white/50 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Blog
          </div>
          <span className="eyebrow block mb-3.5" style={{ color: "#CD8D43" }}>Marketing, made clear</span>
          <h1 className="text-[clamp(30px,4.2vw,52px)] font-extrabold text-white max-w-[760px]">
            Plain-English breakdowns of what actually works.
          </h1>
          <p className="text-[clamp(16px,1.5vw,19px)] text-white/72 mt-4 max-w-[620px]">
            Real tactics from real ad accounts — no theory, no recycled gyan.
          </p>
        </div>
      </section>

      <section className="py-[clamp(58px,7vw,86px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {posts.map((p) => (
              <article key={p.title} className="bg-white border border-ink/10 rounded-card overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-card-lg transition-all duration-200">
                <div className="aspect-video bg-canvas flex items-center justify-center text-muted font-mono text-[12.5px] flex-col gap-1">
                  <span className="text-2xl">📷</span>
                  <span>1200×675</span>
                </div>
                <div className="p-[22px] flex flex-col gap-2.5 flex-1">
                  <span className="font-mono text-[11px] tracking-[.06em] uppercase text-orange">{p.cat}</span>
                  <h3 className="text-[18px] font-bold text-navy leading-snug">{p.title}</h3>
                  <p className="text-[14px] text-muted flex-1">{p.excerpt}</p>
                  <span className="font-display font-bold text-[14px] text-navy mt-1">Read →</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-[13px] text-muted font-mono bg-white border border-dashed border-ink/20 rounded-xl px-4 py-3.5">
            💡 <strong className="text-orange">Tip:</strong> A blog is best run on a CMS (WordPress or Framer CMS) so you can publish posts without touching code. Replace these placeholder cards with real posts.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
