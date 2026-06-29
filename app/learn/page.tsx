import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const blueprints = [
  { icon: "🏥", title: "Clinic blueprint",    desc: "Lead ads + Map Pack to fill appointments." },
  { icon: "🧁", title: "Bakery blueprint",    desc: "Local awareness + offers that drive footfall." },
  { icon: "🎮", title: "FunZone blueprint",   desc: "Weekend-fill campaigns for venues." },
  { icon: "📦", title: "D2C blueprint",       desc: "Creative testing + scaling without ROAS drop." },
  { icon: "🍽️", title: "Restaurant blueprint",desc: "Geo-fenced ads + offer testing." },
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

      {/* Hero */}
      <section className="bg-dark text-white py-14 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -left-24 top-0 w-[500px] h-[500px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-6">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span className="mx-2 opacity-30">/</span>Learn
          </div>
          <span className="eyebrow-inv block mb-6">Go paid when you&apos;re ready</span>
          <h1 className="font-display font-extrabold text-white text-[clamp(36px,5.5vw,68px)] leading-[0.96] tracking-tight max-w-[800px]">
            From your first campaign to scaling — without an agency.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/50 mt-6 max-w-[520px] leading-relaxed">
            No upsell traps. One-time prices. Yours forever.
          </p>
        </div>
      </section>

      {/* Blueprints */}
      <section className="bg-cream py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="eyebrow block mb-5">₹99 blueprints</span>
            <h2 className="font-display font-extrabold text-dark text-[clamp(28px,4vw,48px)] leading-[1.0] tracking-tight">
              Step-by-step, copy-paste campaigns for your industry.
            </h2>
            <p className="text-[15px] text-smoke mt-4 leading-relaxed">
              Pick the blueprint for your business type. One-time ₹99. Yours to keep.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blueprints.map((b) => (
              <div
                key={b.title}
                className="bg-cream-alt border border-dark/10 rounded-card p-6 hover:-translate-y-px hover:shadow-card hover:border-ember/20 transition-all duration-200 group"
              >
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="font-display font-extrabold text-dark text-[18px] mb-1.5 group-hover:text-ember transition-colors">
                  {b.title}
                </h3>
                <p className="text-[13px] text-smoke leading-relaxed">
                  {b.desc}{" "}
                  <strong className="text-dark font-semibold">— ₹99</strong>
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
      <section className="bg-cream-alt py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Masterclass card — dark */}
            <div className="bg-dark rounded-[20px] p-7 md:p-8">
              <span className="eyebrow-inv block mb-4">The masterclass</span>
              <h3 className="font-display font-extrabold text-white text-[clamp(22px,3vw,34px)] leading-tight tracking-tight mb-2">
                Zero to Revenue:<br />Scale Without Agency
              </h3>
              <p className="text-[14px] text-white/50 mt-2 mb-6 leading-relaxed">
                6 prerecorded modules. Watch at your pace. No upsell, ever.
              </p>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-mono text-[36px] text-white font-medium leading-none">₹999</span>
                <s className="text-[18px] text-white/30 font-normal">₹4,999</s>
              </div>
              <Button href="/contact" fullWidth>Join the masterclass</Button>
            </div>

            {/* Modules card */}
            <div className="bg-cream rounded-[20px] p-7 md:p-8 border border-dark/10">
              <h3 className="font-display font-extrabold text-dark text-[20px] mb-6">What&apos;s inside</h3>
              <div className="flex flex-col divide-y divide-dark/8">
                {modules.map((m, i) => (
                  <div key={m} className="flex items-center gap-4 py-3.5">
                    <span className="font-mono text-[11px] text-smoke/35 w-5 flex-none">{i + 1}</span>
                    <span className="text-[14px] text-ink">{m}</span>
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
