import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary palette ──────────────────────────────────────
        bg:        "#F8FAFC",   // page background  (slate-50)
        surface:   "#FFFFFF",   // card background
        "surface-alt": "#F1F5F9", // alternate section (slate-100)
        border:    "#E2E8F0",   // default border    (slate-200)
        "border-strong": "#CBD5E1", // stronger border (slate-300)
        text:      "#0F172A",   // primary text      (slate-900)
        secondary: "#475569",   // secondary text    (slate-600)
        muted:     "#94A3B8",   // muted text        (slate-400)
        dark:      "#0F172A",   // CTA section bg    (slate-900)
        sage:      "#059669",   // positive / data   (emerald-600)

        // ── Backward-compat aliases ───────────────────────────────
        cream:       "#F8FAFC",
        "cream-alt": "#F1F5F9",
        night:       "#0F172A",
        ember:       "#0F172A",
        orange:      "#0F172A",
        "orange-700":"#1E293B",
        ink:         "#0F172A",
        smoke:       "#475569",
        navy:        "#0F172A",
        "navy-700":  "#1E293B",
        warm:        "#F8FAFC",
        canvas:      "#F1F5F9",
        mint:        "#059669",
        "mint-soft": "rgba(5,150,105,0.08)",
        "mint-100":  "rgba(5,150,105,0.08)",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:    ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      maxWidth: {
        site: "1100px",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card:    "0 1px 2px rgba(15,23,42,.04), 0 4px 16px rgba(15,23,42,.05)",
        "card-lg": "0 2px 8px rgba(15,23,42,.06), 0 12px 32px rgba(15,23,42,.08)",
        ember:   "none",
      },
    },
  },
  plugins: [],
};

export default config;
