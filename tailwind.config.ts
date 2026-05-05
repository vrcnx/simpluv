import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inst)", "ui-sans-serif", "system-ui", "sans-serif"],
        label: ["var(--font-jura)", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        ink: "#0A0A0A",
        warm: "#F5F5F3",
        warm2: "#FAFAF8",
        rule: "#D8D8D8",
        rule2: "#ECECEC",
        text: "#0A0A0A",
        textmid: "#333333",
        textdim: "#666666",
        textfaint: "#AAAAAA",
        sky: "#89CFF0",
        ice: "#D6EAF8",
        navy: "#0F2040",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
