"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Media from "@/components/ui/Media";
import { cn } from "@/lib/utils";
import { Building2, GraduationCap, type LucideIcon } from "lucide-react";

type Intent = "owner" | "learner";

const intents: { key: Intent; icon: LucideIcon; title: string; desc: string }[] = [
  { key: "owner", icon: Building2, title: "I own a business", desc: "I want more leads / customers without an agency." },
  { key: "learner", icon: GraduationCap, title: "I want to learn marketing", desc: "I want to run ads myself or build a career." },
];

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>("owner");

  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
                <a href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</a> / Contact
              </div>
              <span className="eyebrow block mb-5">Let&apos;s talk</span>
              <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
                What brings you here?
              </h1>
              <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[640px] leading-[1.7]">
                Pick one so I send you to the right place.
              </p>
            </div>
            <Media
              src="work_desk"
              alt="Talking through campaign numbers across a desk"
              className="aspect-[4/3] rounded-card shadow-card"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══ INTENT + FORM ═════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-6 md:gap-10">
            {/* Intent selector — `reveal` stays on this container only: the buttons'
                className changes on selection, which would wipe the `.in` class and
                leave them stuck invisible. */}
            <div className="flex flex-col gap-3 reveal">
              {intents.map((b) => (
                <button
                  key={b.key}
                  onClick={() => setIntent(b.key)}
                  className={cn(
                    "text-left bg-white border rounded-card p-4 cursor-pointer transition-all duration-[250ms] flex gap-3 items-start",
                    intent === b.key
                      ? "border-primary shadow-[0_4px_18px_rgba(3,109,154,.14)]"
                      : "border-border hover:border-primary"
                  )}
                >
                  <b.icon className="w-6 h-6 text-primary flex-none" strokeWidth={2} />
                  <div>
                    <h4 className="text-[15px] font-bold text-text-primary">{b.title}</h4>
                    <p className="text-[13px] text-text-secondary mt-0.5">{b.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Form */}
            <Card className="p-5 md:p-8 reveal">
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Your name</label>
                <input
                  type="text"
                  placeholder="e.g. Rohan Sharma"
                  className="w-full h-14 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-text-primary mb-1.5">WhatsApp / Email</label>
                <input
                  type="text"
                  placeholder="So I can reach you"
                  className="w-full h-14 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                />
              </div>
              {intent === "owner" && (
                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-text-primary mb-1.5">Your business &amp; city</label>
                  <input
                    type="text"
                    placeholder="e.g. Dental clinic, Jaipur"
                    className="w-full h-14 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                  />
                </div>
              )}
              <div className="mb-5">
                <label className="block text-[13px] font-semibold text-text-primary mb-1.5">What do you need help with?</label>
                <textarea
                  placeholder="Tell me in one line"
                  rows={4}
                  className="w-full min-h-[120px] py-4 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms] resize-y"
                />
              </div>
              <Button
                type="button"
                fullWidth
                onClick={() => alert("Connect this form to ConvertKit, Formspree, or a WhatsApp link before going live.")}
              >
                Send message
              </Button>
              <p className="text-[12px] text-text-muted mt-2.5 text-center">
                Not wired up yet — connect to ConvertKit, Formspree, or WhatsApp before launch.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
