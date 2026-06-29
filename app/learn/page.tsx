import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const blueprints = [
  { icon: "🏥", title: "Clinic blueprint",     desc: "Lead ads + Map Pack to fill appointments.", price: "₹99" },
  { icon: "🧁", title: "Bakery blueprint",     desc: "Local awareness + offers that drive footfall.", price: "₹99" },
  { icon: "🎮", title: "FunZone blueprint",    desc: "Weekend-fill campaigns for venues.", price: "₹99" },
  { icon: "📦", title: "D2C blueprint",        desc: "Creative testing + scaling without ROAS drop.", price: "₹99" },
  { icon: "🍽️", title: "Restaurant blueprint", desc: "Geo-fenced ads + offer testing.", price: "₹99" },
  { icon: "📍", title: "Local SEO blueprint",  desc: "Rank in the Map Pack without ad spend.", price: "₹99" },
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
      <section className="py-14 md:py-20 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">Learn</p>
          <h1 className="font-sans font-extrabold text-text text-[clamp(28px,4.5vw,50px)] leading-tight tracking-tight max-w-[640px]">
            From your first campaign to scaling — without an agency.
          </h1>
          <p className="text-[16px] text-secondary mt-4 max-w-[480px] leading-relaxed">
            No upsell traps. One-time prices. Yours forever.
          </p>
        </div>
      </section>

      {/* Blueprints */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[520px] mb-8">
            <p className="eyebrow mb-4">₹99 blueprints</p>
            <h2 className="font-sans font-bold text-text text-[clamp(20px,3vw,30px)] leading-tight tracking-tight">
              Step-by-step campaigns for your industry.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {blueprints.map((b) => (
              <div
                key={b.title}
                className="bg-surface border border-border rounded-card px-5 py-4 hover:border-border-strong transition-colors"
              >
                <span className="text-xl mb-3 block">{b.icon}</span>
                <h3 className="font-sans font-semibold text-text text-[14px] mb-1">{b.title}</h3>
                <p className="text-[13px] text-secondary leading-relaxed">{b.desc}</p>
                <p className="font-sans font-bold text-text text-[14px] mt-2">{b.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Button href="/contact" variant="ghost">Buy a blueprint →</Button>
          </div>
        </div>
      </section>

      {/* Masterclass */}
      <section className="py-12 md:py-16 bg-surface-alt border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-text rounded-xl p-7 md:p-8">
              <p className="eyebrow-inv mb-4">The masterclass</p>
              <h3 className="font-sans font-bold text-white text-[clamp(20px,2.8vw,28px)] leading-tight mb-2">
                Zero to Revenue: Scale Without Agency
              </h3>
              <p className="text-[14px] text-white/55 mt-2 mb-6 leading-relaxed">
                6 prerecorded modules. Watch at your pace. No upsell, ever.
              </p>
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-sans font-bold text-white text-[32px] leading-none">₹999</span>
                <s className="text-[16px] text-white/30">₹4,999</s>
              </div>
              <Button href="/contact" variant="light" fullWidth>Join the masterclass</Button>
            </div>

            <div className="bg-surface border border-border rounded-xl p-7 md:p-8">
              <h3 className="font-sans font-bold text-text text-[18px] mb-5">What&apos;s inside</h3>
              <div className="flex flex-col divide-y divide-border">
                {modules.map((m, i) => (
                  <div key={m} className="flex items-center gap-4 py-3">
                    <span className="text-[11px] text-muted w-5 flex-none">{i + 1}</span>
                    <span className="text-[14px] text-secondary">{m}</span>
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
