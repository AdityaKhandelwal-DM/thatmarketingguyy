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
        navy: "#0F172A",        // Midnight Slate — authority anchor
        "navy-700": "#1E293B",  // Rich Gunmetal — slightly lighter for cards
        orange: "#F97316",      // Signal Orange — conversion driver
        "orange-700": "#ea6c0a",
        mint: "#10B981",        // Dashboard Green — ROI indicator
        "mint-soft": "#ECFDF5", // Light green tint for badges/bg
        warm: "#F8FAFC",        // Crisp Ghost White — digital canvas
        canvas: "#F1F5F9",      // Slate-100 — alternate section bg
        ink: "#1E293B",         // Rich Gunmetal — body text
        muted: "#64748B",       // Slate-500 — secondary text
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,.04),0 8px 24px rgba(15,23,42,.07)",
        "card-lg": "0 12px 40px rgba(15,23,42,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
