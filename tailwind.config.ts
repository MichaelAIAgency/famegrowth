import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Brand accent — vivid pink/crimson (#ef0b50).
        brand: {
          50: "#fff0f4",
          100: "#ffdce7",
          200: "#ffb3ca",
          300: "#fb7aa0",
          400: "#f54078",
          500: "#ef0b50",
          600: "#d10745",
          700: "#ad063a",
          800: "#8a0a31",
          900: "#710c2a",
        },
        // Primary black for hero dashboard, footer, dark sections, text.
        ink: {
          DEFAULT: "#0a0a0a",
          700: "#262626",
          800: "#171717",
          900: "#000000",
        },
        // Near-white neutral for subtle section separation (reads as white).
        cream: "#f5f5f6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(7,13,11,0.04), 0 12px 32px -12px rgba(7,13,11,0.12)",
        glow: "0 0 0 1px rgba(239,11,80,0.18), 0 24px 60px -20px rgba(239,11,80,0.45)",
        card: "0 1px 0 rgba(7,13,11,0.03), 0 8px 28px -14px rgba(7,13,11,0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
