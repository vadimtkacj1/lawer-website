import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f9f7f4",
        "white-card": "#fdfcfb",
        "blue-dk": "#1c3664",
        "blue-muted": "#8e9bb3",
        orange: "#f26722",
        "orange-hover": "#d95a1a",
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
      },
      animation: {
        "banks-scroll": "banksScroll 40s linear infinite",
      },
      keyframes: {
        banksScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
