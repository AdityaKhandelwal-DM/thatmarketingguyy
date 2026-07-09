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
        primary: "#036D9A",         // Bice Blue — CTAs, links, icons, active states
        "primary-dark": "#02587A",  // hover state for primary
        secondary: "#FDEA6F",       // Maize — badges, stat highlights
        accent: "#CF0000",          // errors / urgency only
        "bg-light": "#F8FAFC",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        "text-muted": "#94A3B8",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        h1: ["56px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["42px", { lineHeight: "1.15", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        h4: ["24px", { lineHeight: "1.25", fontWeight: "600" }],
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        card: "18px",
        btn: "10px",
      },
      boxShadow: {
        card: "0 10px 40px rgba(0,0,0,.08)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
    },
  },
  plugins: [],
};

export default config;
