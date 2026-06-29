"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

type Intent = "owner" | "learner";

const intents = [
  { key: "owner",   icon: "🏢", title: "I own a business",        desc: "I want more leads or customers — without an agency." },
  { key: "learner", icon: "🎓", title: "I want to learn marketing", desc: "I want to run ads myself or build a career in marketing." },
] as { key: Intent; icon: string; title: string; desc: string }[];

const channels = [
  { icon: "📸", label: "Instagram", handle: "@thatmarketingguy",    cta: "DM us",         href: "#" },
  { icon: "📧", label: "Email",     handle: "hello@tmg.in",         cta: "Send an email",  href: "#" },
  { icon: "💬", label: "WhatsApp",  handle: "+91 XXXXX XXXXX",      cta: "Chat directly",  href: "#" },
];

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>("owner");

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-dark text-white py-14 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -right-24 top-0 w-[500px] h-[500px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-6">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span className="mx-2 opacity-30">/</span>Contact
          </div>
          <span className="eyebrow-inv block mb-6">Let&apos;s talk</span>
          <h1 className="font-display font-extrabold text-white text-[clamp(36px,5.5vw,68px)] leading-[0.96] tracking-tight max-w-[760px]">
            What brings you here?
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/50 mt-6 max-w-[440px] leading-relaxed">
            Tell me in one line. I&apos;ll point you to the fastest path.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-cream py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[.9fr_1.1fr] gap-6 md:gap-10 items-start">

            {/* Left — intent + channels */}
            <div className="flex flex-col gap-4">
              {/* Intent selector */}
              {intents.map((b) => (
                <button
                  key={b.key}
                  onClick={() => setIntent(b.key)}
                  className={`text-left rounded-[18px] px-5 py-4 border transition-all duration-150 flex gap-4 items-start ${
                    intent === b.key
                      ? "bg-dark text-white border-dark"
                      : "bg-cream-alt border-dark/15 hover:border-dark/40 text-ink"
                  }`}
                >
                  <span className="text-2xl flex-none">{b.icon}</span>
                  <div>
                    <h4 className={`font-display font-extrabold text-[16px] ${intent === b.key ? "text-white" : "text-dark"}`}>
                      {b.title}
                    </h4>
                    <p className={`text-[13px] mt-0.5 leading-relaxed ${intent === b.key ? "text-white/55" : "text-smoke"}`}>
                      {b.desc}
                    </p>
                  </div>
                </button>
              ))}

              {/* Direct channels */}
              <div className="mt-2">
                <div className="font-mono text-[10px] tracking-[.1em] uppercase text-smoke/40 mb-3">
                  Or reach me directly
                </div>
                <div className="flex flex-col gap-2">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center gap-4 bg-cream-alt rounded-[14px] px-5 py-4 border border-dark/10 hover:border-ember/25 hover:shadow-card transition-all duration-150 group"
                    >
                      <span className="text-xl flex-none">{c.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-[10px] tracking-[.08em] uppercase text-smoke/40">{c.label}</div>
                        <div className="font-semibold text-[14px] text-dark group-hover:text-ember transition-colors truncate">{c.handle}</div>
                      </div>
                      <span className="text-smoke/30 group-hover:text-ember transition-colors text-[14px] flex-none">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-cream-alt border border-dark/10 rounded-[22px] p-6 md:p-8">
              <h3 className="font-display font-extrabold text-dark text-[22px] mb-6">
                {intent === "owner" ? "Tell me about your business" : "What do you want to learn?"}
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-[.1em] uppercase text-smoke/60 mb-1.5">Your name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rohan Sharma"
                    className="w-full px-4 py-3 bg-cream border border-dark/15 rounded-[14px] font-sans text-[15px] text-ink focus:outline-none focus:border-ember focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[.1em] uppercase text-smoke/60 mb-1.5">WhatsApp / Email</label>
                  <input
                    type="text"
                    placeholder="So I can reach you"
                    className="w-full px-4 py-3 bg-cream border border-dark/15 rounded-[14px] font-sans text-[15px] text-ink focus:outline-none focus:border-ember focus:bg-white transition-colors"
                  />
                </div>
                {intent === "owner" && (
                  <div>
                    <label className="block font-mono text-[10px] tracking-[.1em] uppercase text-smoke/60 mb-1.5">Business &amp; city</label>
                    <input
                      type="text"
                      placeholder="e.g. Dental clinic, Jaipur"
                      className="w-full px-4 py-3 bg-cream border border-dark/15 rounded-[14px] font-sans text-[15px] text-ink focus:outline-none focus:border-ember focus:bg-white transition-colors"
                    />
                  </div>
                )}
                <div>
                  <label className="block font-mono text-[10px] tracking-[.1em] uppercase text-smoke/60 mb-1.5">What do you need?</label>
                  <textarea
                    placeholder="Tell me in one line — the simpler the better."
                    rows={4}
                    className="w-full px-4 py-3 bg-cream border border-dark/15 rounded-[14px] font-sans text-[15px] text-ink focus:outline-none focus:border-ember focus:bg-white transition-colors resize-none"
                  />
                </div>
                <Button
                  fullWidth
                  onClick={() => alert("Connect this to Formspree or a WhatsApp link before going live.")}
                >
                  Send message
                </Button>
                <p className="font-mono text-[10px] text-smoke/40 text-center">
                  Wire to ConvertKit / Formspree / WhatsApp before launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
