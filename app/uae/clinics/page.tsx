import Image from "next/image";
import Mark from "@/components/lp/Mark";
import StickyCta from "@/components/lp/StickyCta";
import CountUp from "@/components/ui/CountUp";
import { whatsappUrl } from "@/lib/contact";
import {
  CalendarCheck,
  MessageCircle,
  PhoneCall,
  LineChart,
  Search,
  FileText,
  Check,
  X,
} from "lucide-react";

// ─── Config ───────────────────────────────────────────────────────────────────
// TODO(aditya): when the Google Calendar appointment link exists, set
// BOOKING_URL to it. Until then "Book your free audit" opens WhatsApp with a
// booking message, so no button on the page is ever broken. The WhatsApp
// number itself lives only in lib/contact.ts and is never shown as text.
const BOOKING_URL = whatsappUrl(
  "Hi Aditya, I run a clinic in the UAE and I'd like to book the free 15-minute Google Ads audit."
);
const WHATSAPP_URL = whatsappUrl(
  "Hi Aditya, I run a clinic in the UAE and saw your ad about patient calls."
);

// ─── Data ────────────────────────────────────────────────────────────────────

const trustStats = [
  { n: "85", l: "clinic & SME ad accounts managed" },
  { n: "AED 370K+", l: "ad spend managed to date" },
  { n: "72,837", l: "leads & conversions delivered" },
];

const steps = [
  {
    icon: Search,
    n: "01",
    title: "The free 15-minute audit",
    body:
      "We open your Google Ads account together on a call. If you are not running ads yet, we look at what your competitors in Dubai are bidding on instead. You leave knowing where the money is leaking, whether or not you hire me.",
  },
  {
    icon: PhoneCall,
    n: "02",
    title: "Call Ads and Store Visit campaigns",
    body:
      "Not a generic search campaign. Campaign types built so the phone rings and people walk in — call extensions on every ad, location targeting tight around your clinic, and ad scheduling around the hours your front desk actually answers.",
  },
  {
    icon: FileText,
    n: "03",
    title: "A weekly WhatsApp report you can read",
    body:
      "Every week, in plain English: what was spent, how many calls came in, what each call cost. No 40-page PDF, no impressions dashboard. If you cannot explain your own numbers back to me, I have not done my job.",
  },
];

const caseMetrics = [
  { k: "Walk-ins", v: "+78%", highlight: true },
  { k: "ROAS", v: "5.0×", highlight: true },
  { k: "Ad spend", v: "₹8L+" },
  { k: "Window", v: "90 days" },
];

const included = [
  "Google Ads account build or full rebuild",
  "Call Ads + Store Visit campaign structure",
  "Call tracking, so every lead is attributed",
  "Google Business Profile optimisation",
  "Weekly WhatsApp report in plain language",
  "Direct access to me — no account manager",
];

const excluded = [
  "Your ad budget (paid straight to Google, never through me)",
  "A 12-month contract",
  "Percentage-of-spend fees that grow when your budget does",
];

const testimonials = [
  {
    quote:
      "For the first time I understood where my ad money was going. Walk-ins doubled in two months.",
    result: "+78% walk-ins",
    role: "Skin Clinic Owner",
  },
  {
    quote:
      "No long contracts, no jargon. He fixed our targeting and showed me exactly what changed.",
    result: "−41% cost per lead",
    role: "Multi-speciality Clinic Owner",
  },
  {
    quote:
      "Google Map Pack went from page 3 to Top 3 in under 60 days. Zero ad spend.",
    result: "+300% calls",
    role: "Local Practice Owner",
  },
];

const faqs = [
  {
    q: "Why hire someone in India instead of a Dubai agency?",
    a: "Two honest reasons. Cost — Dubai office rent and salaries end up inside your retainer, and SME owners here regularly report agency fees eating a large share of the marketing budget before a single result lands. And access — you get me in your account, not an account manager relaying messages. The time difference is 1.5 hours, so a WhatsApp message during your working day gets answered during mine.",
  },
  {
    q: "What about UAE healthcare advertising rules?",
    a: "Worth being precise here. Medical claims, before-and-after imagery and treatment messaging stay with you and your DHA/MOH approval process — I do not write or approve clinical claims. What I handle is the Google Ads mechanics: campaign structure, bidding, call tracking, landing pages and reporting, built around creative your side has already cleared. If you are unsure whether an ad angle is approvable, we route it through your compliance person before it goes live, not after.",
  },
  {
    q: "Why do you ask for 90 days?",
    a: "Because Google needs real conversion data before its bidding settles, and judging a Call Ads campaign at week three is the most common expensive mistake I see clinic owners make. Ninety days is long enough to know honestly whether this works for your clinic. After that it is month to month, no further commitment. If I promised results in 30 days I would either be lying or pointing you at a number that does not mean anything yet.",
  },
  {
    q: "What if it does not work?",
    a: "Then you stop after the 90 days and you still keep everything — the ad account is yours and stays in your name, the campaign structure stays built, the tracking stays installed. I do not hold accounts hostage. You will also know exactly why it did not work, because you will have been reading the numbers with me every week rather than finding out at the end.",
  },
  {
    q: "How much should I budget for the ads themselves?",
    a: "Separately from my fee, plan on AED 3,000–5,000 a month in ad spend to start. Below that the campaign does not gather enough data to optimise properly and we are both guessing. The UAE has some of the highest costs per click in the world, and healthcare sits in the middle of that range, so an under-funded campaign is the fastest way to waste both our time.",
  },
  {
    q: "Which clinics is this actually for?",
    a: "Dental, aesthetic, dermatology and cosmetic clinics in Dubai, Abu Dhabi and Sharjah — practices where a patient searches, calls and books within days. If you rely almost entirely on insurance networks and referrals, paid search will do less for you and I would rather tell you that on the free call than take a retainer.",
  },
];

// ─── Small pieces ────────────────────────────────────────────────────────────

function BookBtn({
  children = "Book your free 15-minute audit",
  variant = "primary",
  id,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "light";
  id: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "bg-white text-text-primary hover:bg-bg-light";
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={id}
      className={`inline-flex items-center justify-center gap-2.5 font-semibold text-[16px] px-[28px] py-[16px] rounded-btn transition-all duration-[250ms] hover:-translate-y-0.5 ${styles}`}
    >
      <CalendarCheck className="w-[19px] h-[19px]" strokeWidth={2} />
      {children}
    </a>
  );
}

function WhatsAppBtn({ id, dark = false }: { id: string; dark?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={id}
      className={`inline-flex items-center justify-center gap-2.5 font-semibold text-[16px] px-[28px] py-[16px] rounded-btn border-2 transition-all duration-[250ms] hover:-translate-y-0.5 ${
        dark
          ? "border-white/30 text-white hover:bg-white hover:text-text-primary"
          : "border-primary text-primary hover:bg-primary hover:text-white"
      }`}
    >
      <MessageCircle className="w-[19px] h-[19px]" strokeWidth={2} />
      Or message me on WhatsApp
    </a>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function UaeClinicsLanding() {
  return (
    <>
      {/* ══ HEADER — logo only. No nav: nothing on this page competes with the CTA ══ */}
      <header className="border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <span className="font-bold text-[18px] text-text-primary">
            thatmarketing<b className="text-primary">guy</b>
          </span>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="header-booking"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-white font-semibold text-[14px] px-5 py-2.5 rounded-btn hover:bg-primary-dark transition-colors duration-[250ms]"
          >
            Book a free audit
          </a>
        </div>
      </header>

      {/* ══ HERO — deliberately bare. This is the ad, continued. ═══════════════ */}
      <section className="pt-14 pb-12 md:pt-24 md:pb-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[860px] animate-fadeInUp">
            <span className="eyebrow mb-6 block">Clinic owners in Dubai</span>

            <h1 className="text-[clamp(34px,6vw,64px)] font-bold text-text-primary leading-[1.06]">
              Your Google Ads are getting clicks.
              <br />
              Are they getting{" "}
              <Mark delay={260}>patient calls</Mark>?
            </h1>

            <p className="text-[18px] md:text-[21px] text-text-primary/80 mt-7 leading-[1.65] max-w-[680px]">
              One clinic I worked with got{" "}
              <strong className="font-semibold text-text-primary">
                <Mark delay={900}>78% more walk-ins in 90 days</Mark>
              </strong>
              . Not a promise — a number from the account, which I will show you on the call.
            </p>

            <p className="text-[16px] md:text-[17px] text-text-secondary mt-5 leading-[1.7] max-w-[620px]">
              I run Call Ads and Store Visit campaigns for dental and aesthetic clinics.
              Flat monthly fee. You keep the ad account. No agency in between.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <BookBtn id="hero-booking" />
              <WhatsAppBtn id="hero-whatsapp" />
            </div>

            <p className="text-[13.5px] text-text-muted mt-5">
              <Mark delay={1320}>Free 15 minutes</Mark>. No pitch — you leave with the numbers
              either way.
            </p>
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ═════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light border-y border-border py-9 md:py-11">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
            {trustStats.map((s, i) => (
              <div key={s.l} className={`px-1 md:px-2 ${i > 0 ? "border-l border-border" : ""}`}>
                <CountUp
                  value={s.n}
                  className="block tabular-nums text-[clamp(19px,3.4vw,36px)] font-bold text-text-primary"
                />
                <div className="text-[10.5px] sm:text-[12px] md:text-[13px] text-text-secondary mt-1.5 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE PROBLEM ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-9 lg:gap-14 items-center">
            <div className="reveal max-w-[760px]">
              <span className="eyebrow block mb-5">Why the phone stays quiet</span>
              <h2 className="text-[clamp(25px,3.6vw,44px)] font-bold text-text-primary leading-[1.12]">
                Clicks are easy to buy. Calls are the only thing that fills a chair.
              </h2>
              <div className="mt-7 flex flex-col gap-4 text-[16px] md:text-[17.5px] text-text-secondary leading-[1.75]">
                <p>
                  Most clinic campaigns in the UAE are set up to win the click and stop
                  there. Broad keywords, no call tracking, a landing page that asks for a
                  form fill when the patient wanted to dial. The report comes back full of
                  impressions and clicks, and the front desk phone rings exactly as often
                  as it did before.
                </p>
                <p>
                  The UAE has among the highest costs per click in the world. On a
                  campaign built like that, you are paying premium prices for traffic that
                  was never going to book.
                </p>
                <p className="text-text-primary font-medium">
                  A Call Ads campaign inverts it. The ad is built so the fastest thing a
                  patient can do is <Mark>press call</Mark> — and every one of those calls
                  is tracked, so you know what a booked patient actually costs you.
                </p>
              </div>
            </div>

            <figure className="reveal m-0">
              <Image
                src="/images/clinic_med.webp"
                alt="A doctor holding a phone between appointments"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 400px"
                quality={92}
                className="block w-full h-auto rounded-card shadow-card bg-bg-light"
              />
              <figcaption className="text-[13px] text-text-muted mt-3 leading-relaxed">
                The whole campaign is judged on one thing: whether this phone rings.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[700px] mb-9 md:mb-14 reveal">
            <span className="eyebrow block mb-5">How this runs</span>
            <h2 className="text-[clamp(25px,3.6vw,44px)] font-bold text-text-primary leading-[1.12]">
              Three steps. The first one is free and you keep what you learn.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 reveal-stagger">
            {steps.map((s) => (
              <div
                key={s.n}
                className="reveal bg-white border border-border rounded-card shadow-card p-7 md:p-8 flex flex-col hover:-translate-y-1 hover:border-primary/30 transition-all duration-[250ms]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-[22px] h-[22px] text-primary" strokeWidth={2} />
                  </div>
                  <span className="tabular-nums text-[30px] font-bold text-border leading-none">
                    {s.n}
                  </span>
                </div>
                <h3 className="text-[19px] md:text-[20px] font-bold text-text-primary leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-[14.5px] md:text-[15px] text-text-secondary leading-[1.75]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE RECEIPT ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[700px] mb-9 md:mb-12 reveal">
            <span className="eyebrow block mb-5">The receipt</span>
            <h2 className="text-[clamp(25px,3.6vw,44px)] font-bold text-text-primary leading-[1.12]">
              The <Mark>78%</Mark> number, and where it came from.
            </h2>
          </div>

          {/*
            Report-extract card. When you have the anonymised Google Ads
            screenshot exported, drop it in /public/images and render it above
            this grid — the numbers below should always match the screenshot.
          */}
          <div className="bg-text-primary rounded-card overflow-hidden shadow-card reveal">
            <div className="px-6 md:px-9 py-5 md:py-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="text-white font-bold text-[17px] md:text-[19px]">
                  Skin &amp; aesthetics clinic — single location
                </div>
                <div className="text-white/50 text-[13px] mt-1">
                  Google Search + Map Pack + Meta · 90-day window
                </div>
              </div>
              <span className="self-start sm:self-auto text-[10px] tracking-[.08em] uppercase font-semibold text-text-primary bg-secondary px-3 py-1.5 rounded-lg">
                Verified from account
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {caseMetrics.map((m) => (
                <div key={m.k} className="bg-text-primary px-6 md:px-9 py-7 md:py-9">
                  <div className="text-[10.5px] tracking-[.07em] uppercase text-white/45 mb-2">
                    {m.k}
                  </div>
                  <div
                    className={`tabular-nums text-[clamp(26px,3.4vw,38px)] font-bold leading-none ${
                      m.highlight ? "text-secondary" : "text-white/85"
                    }`}
                  >
                    {m.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 md:px-9 py-5 md:py-6 border-t border-white/10">
              <p className="text-[14px] md:text-[15px] text-white/65 leading-[1.7] max-w-[70ch]">
                Empty appointment book, almost no walk-ins. We rebuilt the account around
                calls and map-pack visibility instead of clicks. This clinic is in India, so
                the ad costs differ — the campaign structure is what transfers, and it is the
                same structure I would build for a Dubai clinic.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 reveal-stagger">
            {testimonials.map((t) => (
              <div
                key={t.role}
                className="reveal bg-white border border-border rounded-card shadow-card p-6 flex flex-col"
              >
                <div className="text-secondary text-[13px] tracking-[2px] mb-3">★★★★★</div>
                <p className="text-[14.5px] text-text-primary leading-[1.7] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="self-start text-[11.5px] font-medium text-primary bg-primary/10 px-2.5 py-1.5 rounded-lg mt-4">
                  {t.result}
                </span>
                <div className="pt-4 mt-4 border-t border-border text-[12.5px] text-text-secondary">
                  {t.role}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[12.5px] text-text-muted mt-5 max-w-[70ch]">
            Client names are withheld until each case study is published with written
            permission. On the call I screen-share the live account so you can see the
            numbers yourself.
          </p>
        </div>
      </section>

      {/* ══ PRICING ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[700px] mb-9 md:mb-12 reveal">
            <span className="eyebrow block mb-5">What it costs</span>
            <h2 className="text-[clamp(25px,3.6vw,44px)] font-bold text-text-primary leading-[1.12]">
              The price is on the page, because you should not have to book a call to
              hear it.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 md:gap-6 items-start">
            <div className="bg-white border-2 border-primary/25 rounded-card shadow-card p-7 md:p-9 reveal">
              <div className="text-[12px] tracking-[.09em] uppercase font-semibold text-primary mb-4">
                Clinic Google Ads management
              </div>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <span className="text-[13px] text-text-secondary">from</span>
                <span className="tabular-nums text-[clamp(36px,5vw,52px)] font-bold text-text-primary leading-none">
                  AED 2,500
                </span>
                <span className="text-[15px] text-text-secondary">/ month</span>
              </div>
              <p className="text-[14.5px] text-text-secondary leading-[1.75] mt-5">
                Flat fee, billed monthly. Not a percentage of your ad spend — my fee does
                not grow just because your budget does. Larger or multi-location clinics
                sit at AED 3,500.
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <span className="flex-none mt-0.5 w-9 h-9 rounded-xl bg-secondary/40 flex items-center justify-center">
                    <LineChart className="w-[18px] h-[18px] text-text-primary" strokeWidth={2} />
                  </span>
                  <p className="text-[14.5px] text-text-secondary leading-[1.7]">
                    <strong className="text-text-primary font-semibold">
                      90-day minimum, then month to month.
                    </strong>{" "}
                    Google needs real conversion data before its bidding settles. Ninety
                    days is how long it takes to know honestly whether this works — not a
                    lock-in, a learning curve.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <BookBtn id="pricing-booking">Book your free 15-minute audit</BookBtn>
                <p className="text-[12.5px] text-text-muted text-center">
                  Your ad budget is paid directly to Google, separately from this fee.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-white border border-border rounded-card shadow-card p-7 md:p-8 reveal">
                <h3 className="text-[16px] font-bold text-text-primary mb-5">
                  What is included
                </h3>
                <ul className="flex flex-col gap-3">
                  {included.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="w-[18px] h-[18px] text-primary flex-none mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-[14.5px] text-text-secondary leading-[1.6]">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-border rounded-card shadow-card p-7 md:p-8 reveal">
                <h3 className="text-[16px] font-bold text-text-primary mb-5">
                  What you are not paying for
                </h3>
                <ul className="flex flex-col gap-3">
                  {excluded.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X
                        className="w-[18px] h-[18px] text-text-muted flex-none mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-[14.5px] text-text-secondary leading-[1.6]">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO YOU ARE TALKING TO ════════════════════════════════════════════ */}
      <section className="py-12 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-9 md:gap-14 items-center max-w-[980px]">
            {/* Full-length portrait (860×1075, ~193K) rather than the 700×700
                square crop, which is compressed to 34K and visibly soft.
                Intrinsic width/height, not `fill`: a fill image needs its parent
                to resolve a height first, and inside a centred grid item that
                height can compute to zero and the photo silently disappears.
                `unoptimized` skips next/image re-encoding, which softens faces. */}
            <div className="reveal w-[260px] md:w-full mx-auto md:mx-0">
              <Image
                src="/images/hero-aditya.webp"
                alt="Aditya Khandelwal, performance marketing consultant"
                width={860}
                height={1075}
                sizes="(max-width: 768px) 260px, 340px"
                unoptimized
                className="block w-full h-auto rounded-card shadow-card bg-bg-light"
              />
            </div>

            <div className="reveal">
              <span className="eyebrow block mb-5">Who you are actually talking to</span>
              <h2 className="text-[clamp(23px,3.2vw,36px)] font-bold text-text-primary leading-[1.15]">
                You get me. Not an account manager.
              </h2>
              <p className="text-[15.5px] md:text-[17px] text-text-secondary leading-[1.75] mt-5">
                I am Aditya Khandelwal. For five years I have run Meta and Google Ads for
                small businesses — 85 ad accounts across clinics, restaurants, retail and
                D2C, and 72,837 leads and conversions delivered. I work out of Jaipur,
                which is why my fee is a fraction of a Dubai agency retainer and why you
                get the person in the account instead of a layer of people around it.
              </p>
              <p className="text-[15.5px] md:text-[17px] text-text-secondary leading-[1.75] mt-4">
                I have run Google Ads projects for clients in Ontario and the UK. The UAE
                is where I am now taking on clinics directly — which means I have every
                reason to make the first few work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[700px] mb-9 md:mb-12 reveal">
            <span className="eyebrow block mb-5">Straight answers</span>
            <h2 className="text-[clamp(25px,3.6vw,44px)] font-bold text-text-primary leading-[1.12]">
              The questions clinic owners actually ask me.
            </h2>
          </div>

          <div className="max-w-[860px] grid grid-cols-1 md:grid-cols-2 gap-4 reveal-stagger">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="reveal bg-white border border-border rounded-card shadow-card p-6 md:p-7"
              >
                <h3 className="text-[15.5px] md:text-[16px] font-bold text-text-primary leading-snug mb-3">
                  {f.q}
                </h3>
                <p className="text-[14px] md:text-[14.5px] text-text-secondary leading-[1.75]">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════════════════ */}
      <section className="bg-text-primary py-14 md:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 text-center reveal">
          <span className="eyebrow justify-center mb-6 block" style={{ color: "#FDEA6F" }}>
            Fifteen minutes
          </span>
          <h2 className="text-[clamp(27px,4.2vw,52px)] font-bold text-white leading-[1.1] max-w-[820px] mx-auto">
            Bring your Google Ads account. I will show you where the money is going.
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/60 mt-6 max-w-[560px] mx-auto leading-[1.7]">
            No slide deck, no pitch. We open the account, I tell you what I would change,
            and you decide what to do with that.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-9">
            <BookBtn id="final-booking" variant="light" />
            <WhatsAppBtn id="final-whatsapp" dark />
          </div>
        </div>
      </section>

      {/* ══ FOOTER — minimal by design ════════════════════════════════════════ */}
      <footer className="bg-text-primary border-t border-white/10 py-8 pb-24 md:pb-8">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row sm:justify-between gap-2 text-[12.5px] text-white/45">
          <span>© {new Date().getFullYear()} thatmarketingguy · Aditya Khandelwal · Jaipur, India</span>
          <span>www.thatmarketingguyy.com</span>
        </div>
      </footer>

      <StickyCta bookingUrl={BOOKING_URL} whatsappUrl={WHATSAPP_URL} />
    </>
  );
}
