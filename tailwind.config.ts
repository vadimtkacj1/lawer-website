import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',  // Full HD screens
      '4xl': '2560px',  // 2K screens
      '5xl': '3000px',  // 3K screens
    },
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
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
          '3xl': '6rem',
          '4xl': '8rem',
          '5xl': '10rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          '3xl': '1800px',  // Slightly less than 1920px to prevent edge-to-edge
          '4xl': '2400px',  // Slightly less than 2560px
          '5xl': '2800px',  // Slightly less than 3000px
        },
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
