import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const videos = [
  { id: "VIDEO_ID_1", title: "How I cut a clinic's cost-per-lead in half" },
  { id: "VIDEO_ID_2", title: "The Google Map Pack trick most stores miss" },
  { id: "VIDEO_ID_3", title: "Why your D2C ROAS drops when you scale" },
];

const feedSlots = [1, 2, 3, 4, 5, 6];

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="bg-navy text-white py-[clamp(54px,7vw,84px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="font-mono text-[12px] tracking-[.06em] text-white/50 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a> / About
          </div>
          <span className="eyebrow block mb-3.5" style={{ color: "#CD8D43" }}>Who&apos;s behind this</span>
          <h1 className="text-[clamp(30px,4.2vw,52px)] font-extrabold text-white max-w-[760px]">
            I&apos;m Aditya. I run real ad accounts — and I&apos;ll teach you to do the same.
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-[clamp(58px,7vw,86px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(34px,5vw,50px)] items-center">
            <div>
              <p className="text-[17px] text-muted">
                For years I watched business owners hand agencies ₹50,000 a month and get back a PDF full of &ldquo;reach&rdquo; and &ldquo;impressions.&rdquo; No revenue. No clarity.{" "}
                <strong className="text-orange">That&apos;s the gap I close.</strong>
              </p>
              <p className="text-[17px] text-muted mt-4">
                I&apos;ve managed 50+ ad accounts across clinics, restaurants, D2C, and local businesses. Now I package exactly what works into guides, blueprints, and a masterclass — in plain English anyone can follow.
              </p>
              <div className="flex gap-3.5 flex-wrap mt-7">
                <Button href="/contact">Work with me</Button>
                <Button href="/resources" variant="ghost">Start free</Button>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-[18px] bg-canvas flex items-center justify-center text-muted font-mono text-[12.5px] flex-col gap-1 shadow-card-lg">
              <span className="text-2xl">📷</span>
              Add a working photo
              <span className="text-[11px] opacity-70">~800 × 1000px (4:5)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-[clamp(58px,7vw,86px)] bg-canvas">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="max-w-[680px] mb-[clamp(34px,4vw,46px)]">
            <span className="eyebrow block mb-3.5">Watch me break it down</span>
            <h2 className="text-[clamp(27px,3.3vw,42px)] font-extrabold text-navy">No theory. Real campaigns, explained on screen.</h2>
            <p className="text-[clamp(15px,1.4vw,17px)] text-muted mt-3.5">
              To embed your videos: YouTube → Share → Embed → copy the ID after{" "}
              <span className="font-mono bg-navy text-white px-2 py-0.5 rounded-md text-[13px]">/embed/</span>{" "}
              and replace <span className="font-mono bg-navy text-white px-2 py-0.5 rounded-md text-[13px]">VIDEO_ID</span> below.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <div className="font-display font-bold text-[15px] text-navy">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feed */}
      <section className="py-[clamp(58px,7vw,86px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="max-w-[680px] mb-[clamp(34px,4vw,46px)]">
            <span className="eyebrow block mb-3.5">From the feed</span>
            <h2 className="text-[clamp(27px,3.3vw,42px)] font-extrabold text-navy">Free marketing breakdowns, every week.</h2>
            <p className="text-[clamp(15px,1.4vw,17px)] text-muted mt-3.5">
              Drop in 6 of your best posts or dashboard screenshots (square, ~600×600px).
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {feedSlots.map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-canvas flex items-center justify-center text-muted font-mono text-[11px] flex-col gap-1 overflow-hidden">
                <span className="text-xl">📷</span>
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
