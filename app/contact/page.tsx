"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

type Intent = "owner" | "learner";

const intents = [
  { key: "owner",   icon: "🏢", title: "I own a business",         desc: "I want more leads or customers — without an agency." },
  { key: "learner", icon: "🎓", title: "I want to learn marketing", desc: "I want to run ads myself or build a career in marketing." },
] as { key: Intent; icon: string; title: string; desc: string }[];

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>("owner");

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-14 md:py-20 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="font-sans font-extrabold text-text text-[clamp(28px,4.5vw,50px)] leading-tight tracking-tight max-w-[560px]">
            What brings you here?
          </h1>
          <p className="text-[16px] text-secondary mt-4 max-w-[420px] leading-relaxed">
            Tell me in one line — I&apos;ll point you to the fastest path.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-5 md:gap-8">

            {/* Intent + channels */}
            <div className="flex flex-col gap-3">
              {intents.map((b) => (
                <button
                  key={b.key}
                  onClick={() => setIntent(b.key)}
                  className={`text-left rounded-xl px-5 py-4 border transition-colors flex gap-3 items-start ${
                    intent === b.key
                      ? "bg-text text-white border-text"
                      : "bg-surface text-text border-border hover:border-border-strong"
                  }`}
                >
                  <span className="text-xl flex-none">{b.icon}</span>
                  <div>
                    <h4 className={`font-sans font-semibold text-[14px] ${intent === b.key ? "text-white" : "text-text"}`}>
                      {b.title}
                    </h4>
                    <p className={`text-[12px] mt-0.5 leading-relaxed ${intent === b.key ? "text-white/60" : "text-secondary"}`}>
                      {b.desc}
                    </p>
                  </div>
                </button>
              ))}

              <div className="mt-2 flex flex-col gap-2">
                <p className="text-[11px] font-semibold tracking-[.08em] uppercase text-muted mb-1">Or reach me directly</p>
                {[
                  { icon: "📸", label: "Instagram", handle: "@thatmarketingguy" },
                  { icon: "📧", label: "Email",     handle: "hello@tmg.in"      },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3 bg-surface border border-border rounded-xl px-4 py-3">
                    <span>{c.icon}</span>
                    <div>
                      <div className="text-[10px] text-muted">{c.label}</div>
                      <div className="text-[13px] font-medium text-text">{c.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-7">
              <h3 className="font-sans font-bold text-text text-[18px] mb-5">
                {intent === "owner" ? "Tell me about your business" : "What do you want to learn?"}
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-secondary mb-1.5">Your name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rohan Sharma"
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-[14px] text-text focus:outline-none focus:border-border-strong transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-secondary mb-1.5">WhatsApp / Email</label>
                  <input
                    type="text"
                    placeholder="So I can reach you"
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-[14px] text-text focus:outline-none focus:border-border-strong transition-colors"
                  />
                </div>
                {intent === "owner" && (
                  <div>
                    <label className="block text-[12px] font-semibold text-secondary mb-1.5">Business &amp; city</label>
                    <input
                      type="text"
                      placeholder="e.g. Dental clinic, Jaipur"
                      className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-[14px] text-text focus:outline-none focus:border-border-strong transition-colors"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-[12px] font-semibold text-secondary mb-1.5">What do you need?</label>
                  <textarea
                    placeholder="Tell me in one line."
                    rows={4}
                    className="w-full px-4 py-2.5 bg-bg border border-border rounded-lg text-[14px] text-text focus:outline-none focus:border-border-strong transition-colors resize-none"
                  />
                </div>
                <Button
                  fullWidth
                  onClick={() => alert("Connect this to Formspree or a WhatsApp link before going live.")}
                >
                  Send message
                </Button>
                <p className="text-[11px] text-muted text-center">
                  Wire to Formspree / WhatsApp before launch.
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
