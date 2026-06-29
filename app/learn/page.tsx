import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const blueprints = [
  { icon: "🏥", title: "Clinic blueprint", desc: "Lead ads + Map Pack to fill appointments." },
  { icon: "🧁", title: "Bakery blueprint", desc: "Local awareness + offers that drive footfall." },
  { icon: "🎮", title: "FunZone blueprint", desc: "Weekend-fill campaigns for venues." },
  { icon: "📦", title: "D2C blueprint", desc: "Creative testing + scaling without ROAS drop." },
  { icon: "🍽️", title: "Restaurant blueprint", desc: "Geo-fenced ads + offer testing." },
  { icon: "📍", title: "Local SEO blueprint", desc: "Rank in the Map Pack without ad spend." },
];

const modules = [
  "Account setup & pixel done right",
  "Reading the dashboard like a pro",
  "Building campaigns that convert",
  "Creative testing without waste",
  "Scaling spend while holding ROAS",
  "Google Business Profile + local SEO",
];

export default function LearnPage() {
  return (
    <>
      <Header />
      <section className="bg-navy text-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-3">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Learn
          </div>
          <span className="eyebrow block mb-3" style={{ color: "#F97316" }}>Go paid when you&apos;re ready</span>
          <h1 className="text-[clamp(26px,4.2vw,52px)] font-extrabold text-white max-w-[760px] leading-tight">
            From your first campaign to scaling without an agency.
          </h1>
          <p className="text-base md:text-lg text-white/70 mt-3 max-w-[620px]">
            No upsell traps. One-time prices. Yours forever.
          </p>
        </div>
      </section>

      {/* Blueprints */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[720px] mb-8 md:mb-12">
            <h2 className="text-[clamp(22px,3.2vw,38px)] font-extrabold text-navy">₹99 industry blueprints</h2>
            <p className="text-base md:text-[17px] text-muted mt-3">
              Step-by-step, copy-paste campaigns built for one specific business type. Pick yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blueprints.map((b) => (
              <div key={b.title} className="bg-white border border-ink/10 rounded-card p-5 md:p-6 hover:-translate-y-1 hover:shadow-card hover:border-transparent transition-all duration-200">
                <div className="w-11 h-11 rounded-xl bg-mint-soft flex items-center justify-center text-xl mb-3.5">{b.icon}</div>
                <h3 className="text-[17px] text-navy font-bold mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted">
                  {b.desc} <strong className="text-navy">₹99</strong>
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-7">
            <Button href="/contact" variant="ghost">Buy a blueprint →</Button>
          </div>
        </div>
      </section>

      {/* Masterclass */}
      <section className="py-12 md:py-16 lg:py-20 bg-canvas">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-navy rounded-[22px] p-6 md:p-8">
              <span className="eyebrow block mb-3" style={{ color: "#F97316" }}>The masterclass</span>
              <h3 className="text-2xl md:text-[28px] font-extrabold text-white leading-snug">Zero to Revenue: Scale Without Agency</h3>
              <p className="text-sm text-white/70 mt-2 mb-5">6 prerecorded modules. Watch at your pace. No upsell, ever.</p>
              <div className="flex items-baseline gap-2.5 mb-6 flex-wrap">
                <span className="font-mono text-3xl text-white font-medium">₹999</span>
                <s className="text-lg text-white/50 font-normal">₹4,999</s>
              </div>
              <Button href="/contact" fullWidth className="sm:w-auto">Join the masterclass</Button>
            </div>

            <div className="bg-white rounded-[22px] p-6 md:p-8 border border-ink/10">
              <h3 className="text-xl font-extrabold text-navy mb-5">What&apos;s inside</h3>
              <div className="flex flex-col gap-3">
                {modules.map((m, i) => (
                  <div key={m} className="flex items-center gap-3 text-[14px] text-ink">
                    <span className="w-6 h-6 rounded-lg bg-warm border border-ink/10 flex items-center justify-center text-[13px] font-bold flex-none">{i + 1}</span>
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
