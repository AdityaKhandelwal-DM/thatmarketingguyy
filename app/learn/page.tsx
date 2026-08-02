import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Media from "@/components/ui/Media";
import {
  HeartPulse,
  Croissant,
  Gamepad2,
  Package,
  UtensilsCrossed,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const blueprints: { icon: LucideIcon; title: string; desc: string; img: string; alt: string }[] = [
  { icon: HeartPulse, title: "Clinic blueprint", desc: "Lead ads + Map Pack to fill appointments.", img: "clinic_med", alt: "Clinician checking a phone between patients" },
  { icon: Croissant, title: "Bakery blueprint", desc: "Local awareness + offers that drive footfall.", img: "rest_bakery", alt: "Fresh sourdough loaves on a bakery counter" },
  { icon: Gamepad2, title: "FunZone blueprint", desc: "Weekend-fill campaigns for venues.", img: "ent_arcade", alt: "Arcade floor lit up on a busy evening" },
  { icon: Package, title: "D2C blueprint", desc: "Creative testing + scaling without ROAS drop.", img: "d2c_cosmetics", alt: "D2C beauty products styled for a product shoot" },
  { icon: UtensilsCrossed, title: "Restaurant blueprint", desc: "Geo-fenced ads + offer testing.", img: "rest_dining", alt: "Restaurant dining room ready for evening covers" },
  { icon: MapPin, title: "Local SEO blueprint", desc: "Rank in the Map Pack without ad spend.", img: "store_front", alt: "Independent storefront on a local high street" },
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

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
            <a href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</a> / Learn
          </div>
          <span className="eyebrow block mb-5">Go paid when you&apos;re ready</span>
          <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
            From your first campaign to scaling without an agency.
          </h1>
          <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[620px] leading-[1.7]">
            No upsell traps. One-time prices. Yours forever.
          </p>
        </div>
      </section>

      {/* ══ ₹99 INDUSTRY BLUEPRINTS ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14 reveal">
            <span className="eyebrow block mb-4">One-time, no subscriptions</span>
            <h2 className="text-[clamp(24px,3.4vw,42px)] font-bold text-text-primary">₹99 industry blueprints</h2>
            <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
              Step-by-step, copy-paste campaigns built for one specific business type. Pick yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger">
            {blueprints.map((b) => (
              <Card
                key={b.title}
                className="p-0 overflow-hidden hover:-translate-y-1 hover:border-primary/25 transition-all duration-[250ms] group reveal"
              >
                <div className="relative">
                  <Media
                    src={b.img}
                    alt={b.alt}
                    className="aspect-[16/10]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    zoomOnHover
                  />
                  <span className="absolute top-3 right-3 text-[12px] font-bold text-text-primary bg-secondary px-2.5 py-1 rounded-md shadow-card">
                    ₹99
                  </span>
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-2xl bg-white border border-border shadow-card flex items-center justify-center">
                    <b.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-6 pt-9">
                  <h3 className="text-[17px] text-text-primary font-bold mb-1.5">{b.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{b.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/contact" variant="secondary">Buy a blueprint →</Button>
          </div>
        </div>
      </section>

      {/* ══ THE MASTERCLASS ═══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal-stagger">
            <div className="bg-text-primary rounded-[22px] p-6 md:p-8 reveal">
              <span className="eyebrow block mb-3" style={{ color: "#FDEA6F" }}>The masterclass</span>
              <h3 className="text-2xl md:text-[28px] font-bold text-white leading-snug">Zero to Revenue: Scale Without Agency</h3>
              <p className="text-[14px] text-white/70 mt-2 mb-5">6 prerecorded modules. Watch at your pace. No upsell, ever.</p>
              <div className="flex items-baseline gap-2.5 mb-6 flex-wrap">
                <span className="text-3xl text-white font-bold tabular-nums">₹999</span>
                <s className="text-lg text-white/50 font-normal">₹4,999</s>
              </div>
              <Button href="/contact" fullWidth className="sm:w-auto">Join the masterclass</Button>
            </div>

            <Card className="p-0 overflow-hidden reveal">
              <Media
                src="speak_workshop"
                alt="Working through campaign builds screen by screen"
                className="aspect-[21/9]"
                sizes="(max-width: 768px) 100vw, 560px"
              />
              <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-text-primary mb-5">What&apos;s inside</h3>
              <div className="flex flex-col gap-3">
                {modules.map((m, i) => (
                  <div key={m} className="flex items-center gap-3 text-[14px] text-text-primary">
                    <span className="w-6 h-6 rounded-lg bg-primary/10 border border-border flex items-center justify-center text-[13px] font-bold text-primary flex-none">
                      {i + 1}
                    </span>
                    {m}
                  </div>
                ))}
              </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
