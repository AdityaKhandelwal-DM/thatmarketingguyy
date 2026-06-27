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
        navy: "#242526",
        "navy-700": "#34353b",
        orange: "#CD8D43",
        "orange-700": "#b3742f",
        mint: "#C99A52",
        "mint-soft": "#ECEDF2",
        warm: "#F8F7F4",
        canvas: "#E1E4EC",
        ink: "#242526",
        muted: "#6A6F78",
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
        card: "0 1px 2px rgba(36,37,38,.04),0 8px 24px rgba(36,37,38,.07)",
        "card-lg": "0 12px 40px rgba(36,37,38,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
