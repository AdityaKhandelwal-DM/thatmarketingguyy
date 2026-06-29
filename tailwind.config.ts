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
        // ── Primary palette ───────────────────────────────────────
        cream:      "#F4F0E8",       // warm parchment — primary bg
        "cream-alt":"#EAE6DE",       // slightly deeper — alternate sections
        dark:       "#0D0D0D",       // near-black — primary dark + dark section bg
        night:      "#090C15",       // very deep navy — for dramatic dark sections
        ember:      "#FF4500",       // signal orange — primary accent
        sage:       "#00C880",       // dashboard green — data/positive
        ink:        "#1A1A1A",       // body text
        smoke:      "#6E6E6E",       // muted/secondary text

        // ── Aliases so secondary pages keep working ───────────────
        navy:       "#0D0D0D",       // → dark
        "navy-700": "#1A1A1A",       // → ink
        orange:     "#FF4500",       // → ember
        "orange-700": "#e03d00",     // → ember darker
        mint:       "#00C880",       // → sage
        "mint-soft": "rgba(0,200,128,0.10)", // → sage/10
        warm:       "#F4F0E8",       // → cream
        canvas:     "#EAE6DE",       // → cream-alt
        muted:      "#6E6E6E",       // → smoke
      },
      fontFamily: {
        sans:    ["var(--font-inter)",    "system-ui", "sans-serif"],
        display: ["var(--font-syne)",     "sans-serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card:      "0 1px 3px rgba(13,13,13,.04),0 6px 24px rgba(13,13,13,.06)",
        "card-lg": "0 4px 20px rgba(13,13,13,.08),0 20px 56px rgba(13,13,13,.07)",
        ember:     "0 4px 24px rgba(255,69,0,.32)",
        "ember-lg":"0 8px 40px rgba(255,69,0,.25)",
      },
    },
  },
  plugins: [],
};

export default config;
