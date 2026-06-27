import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const videos = [
  { id: "VIDEO_ID_1", title: "How I cut a clinic's cost-per-lead in half" },
  { id: "VIDEO_ID_2", title: "The Google Map Pack trick most stores miss" },
  { id: "VIDEO_ID_3", title: "Why your D2C ROAS drops when you scale" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="bg-navy text-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-3">
            <a href="/" className="hover:text-white transition-colors">Home</a> / About
          </div>
          <span className="eyebrow block mb-3" style={{ color: "#CD8D43" }}>Who&apos;s behind this</span>
          <h1 className="text-[clamp(26px,4.2vw,52px)] font-extrabold text-white max-w-[760px] leading-tight">
            I&apos;m Aditya. I run real ad accounts — and I&apos;ll teach you to do the same.
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div>
              <p className="text-base md:text-[17px] text-muted">
                For years I watched business owners hand agencies ₹50,000 a month and get back a PDF full of &ldquo;reach&rdquo; and &ldquo;impressions.&rdquo; No revenue. No clarity.{" "}
                <strong className="text-orange">That&apos;s the gap I close.</strong>
              </p>
              <p className="text-base md:text-[17px] text-muted mt-4">
                I&apos;ve managed 50+ ad accounts across clinics, restaurants, D2C, and local businesses. Now I package exactly what works into guides, blueprints, and a masterclass — in plain English anyone can follow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button href="/contact" fullWidth className="sm:w-auto">Work with me</Button>
                <Button href="/resources" variant="ghost" fullWidth className="sm:w-auto">Start free</Button>
              </div>
            </div>
            <div className="max-w-[340px] sm:max-w-[400px] mx-auto md:max-w-none">
              <div className="aspect-[4/5] rounded-[18px] bg-canvas flex items-center justify-center text-muted font-mono text-[12px] flex-col gap-1 shadow-card-lg">
                <span className="text-2xl">📷</span>
                Add a working photo
                <span className="text-[11px] opacity-70">~800 × 1000px (4:5)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-12 md:py-16 lg:py-20 bg-canvas">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-8 md:mb-12">
            <span className="eyebrow block mb-3">Watch me break it down</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-extrabold text-navy">No theory. Real campaigns, explained on screen.</h2>
            <p className="text-sm md:text-base text-muted mt-3">
              YouTube → Share → Embed → copy the ID after{" "}
              <span className="font-mono bg-navy text-white px-1.5 py-0.5 rounded-md text-[12px]">/embed/</span>{" "}
              and replace <span className="font-mono bg-navy text-white px-1.5 py-0.5 rounded-md text-[12px]">VIDEO_ID</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((v) => (
              <div key={v.id} className="flex flex-col gap-3">
                <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden bg-black shadow-card">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <div className="font-display font-bold text-[14px] text-navy">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feed */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-8 md:mb-12">
            <span className="eyebrow block mb-3">From the feed</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-extrabold text-navy">Free marketing breakdowns, every week.</h2>
            <p className="text-sm md:text-base text-muted mt-3">
              Drop in 6 of your best posts or dashboard screenshots (square, ~600×600px).
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-canvas flex items-center justify-center text-muted font-mono text-[10px] flex-col gap-0.5">
                <span className="text-lg">📷</span>
                <span>600×600</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
