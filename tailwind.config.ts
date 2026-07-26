import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',   // Extra small devices
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
        "noto-sans-hebrew": ["var(--font-noto-sans-hebrew)", "sans-serif"],
      },
      // Elevation tinted with the brand navy (#1c3664 = 28,54,100) instead of
      // Tailwind's default black. Black shadows go muddy on the cream canvas.
      // Layered and low-opacity per Monarch/Titan: depth without heaviness.
      boxShadow: {
        button: "0 1px 2px rgba(28, 54, 100, 0.08)",
        card: "0 1px 2px rgba(28, 54, 100, 0.04), 0 10px 15px -3px rgba(28, 54, 100, 0.08), 0 4px 6px -4px rgba(28, 54, 100, 0.06)",
        "card-lg":
          "0 1px 2px rgba(28, 54, 100, 0.05), 0 18px 30px -8px rgba(28, 54, 100, 0.12), 0 8px 12px -6px rgba(28, 54, 100, 0.08)",
        nav: "0 1px 0 rgba(28, 54, 100, 0.08), 0 6px 20px -12px rgba(28, 54, 100, 0.25)",
      },
      spacing: {
        // Section rhythm: Monarch runs 64px between sections, Titan 80px.
        section: "4rem",
        "section-lg": "5rem",
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
        "marquee-back": "marqueeBack 200s linear infinite",
        "marquee-forth": "marqueeForth 210s linear infinite",
      },
      keyframes: {
        banksScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        // The track holds two identical copies of the list, so -50% lands
        // exactly on the start of the second copy and the loop is seamless.
        marqueeBack: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeForth: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
