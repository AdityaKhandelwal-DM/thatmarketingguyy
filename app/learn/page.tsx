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
      <section className="bg-navy text-white py-[clamp(54px,7vw,84px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="font-mono text-[12px] tracking-[.06em] text-white/50 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Learn
          </div>
          <span className="eyebrow block mb-3.5" style={{ color: "#CD8D43" }}>Go paid when you&apos;re ready</span>
          <h1 className="text-[clamp(30px,4.2vw,52px)] font-extrabold text-white max-w-[760px]">
            From your first campaign to scaling without an agency.
          </h1>
          <p className="text-[clamp(16px,1.5vw,19px)] text-white/72 mt-4 max-w-[620px]">
            No upsell traps. One-time prices. Yours forever.
          </p>
        </div>
      </section>

      {/* Blueprints */}
      <section className="py-[clamp(58px,7vw,86px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="max-w-[720px] mb-[clamp(34px,4vw,48px)]">
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold text-navy">₹99 industry blueprints</h2>
            <p className="text-[17px] text-muted mt-3.5">
              Step-by-step, copy-paste campaigns built for one specific business type. Pick yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {blueprints.map((b) => (
              <div key={b.title} className="bg-white border border-ink/10 rounded-card p-[clamp(22px,2.5vw,26px)] hover:-translate-y-1 hover:shadow-card hover:border-transparent transition-all duration-200">
                <div className="w-[46px] h-[46px] rounded-[13px] bg-mint-soft flex items-center justify-center text-[22px] mb-4">{b.icon}</div>
                <h3 className="text-[18px] text-navy font-bold mb-1.5">{b.title}</h3>
                <p className="text-[14.5px] text-muted">
                  {b.desc} <strong className="text-navy">₹99</strong>
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/contact" variant="ghost">Buy a blueprint →</Button>
          </div>
        </div>
      </section>

      {/* Masterclass */}
      <section className="py-[clamp(58px,7vw,86px)] bg-canvas">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy rounded-[22px] p-[clamp(26px,3vw,36px)] border-none">
              <span className="eyebrow block mb-3.5" style={{ color: "#CD8D43" }}>The masterclass</span>
              <h3 className="text-[28px] font-extrabold text-white">Zero to Revenue: Scale Without Agency</h3>
              <p className="text-[14.5px] text-white/70 mt-2 mb-6">6 prerecorded modules. Watch at your pace. No upsell, ever.</p>
              <div className="flex items-baseline gap-2.5 mb-6 flex-wrap">
                <span className="font-mono text-[34px] text-white font-medium">₹999</span>
                <s className="text-[18px] text-white/50 font-normal">₹4,999</s>
              </div>
              <Button href="/contact">Join the masterclass</Button>
            </div>

            <div className="bg-white rounded-[22px] p-[clamp(26px,3vw,36px)] border border-ink/10">
              <h3 className="text-2xl font-extrabold text-navy mb-6">What&apos;s inside</h3>
              <div className="flex flex-col gap-3">
                {modules.map((m, i) => (
                  <div key={m} className="flex items-center gap-3 text-[15px] text-ink">
                    <span className="w-6 h-6 rounded-[7px] bg-warm border border-ink/10 flex items-center justify-center text-[13px] font-bold flex-none">{i + 1}</span>
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
