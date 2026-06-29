"use client";

import { m } from "framer-motion";
import { fadeInUpFast } from "@/lib/animations";

/**
 * Optimized viewport settings for scroll-trigger animations
 */
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function Quote() {
  return (
    <section className="relative bg-cream z-10 py-16 lg:py-32 overflow-hidden">
      
      {/* --- ENHANCED BACKGROUND SVG ELEMENTS --- */}
      
      {/* 1. Expressive Technical Compass/Circular SVG (Top-Left) */}
      <svg 
        className="absolute top-0 left-0 w-[45%] h-auto text-blue-dk/10 pointer-events-none -z-10 translate-x-[-10%] translate-y-[-10%]" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Thicker strokes and more visible patterns */}
        <circle cx="200" cy="200" r="195" stroke="currentColor" strokeWidth="2" strokeDasharray="15 15" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="1.5" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="1.5" />
        <path d="M60 60L340 340" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
        <path d="M340 60L60 340" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
      </svg>

      {/* 2. Defined Blueprint Grid Pattern (Full Background) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none -z-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="mainGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Major grid lines */}
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#003366" strokeWidth="2"/>
              {/* Minor grid lines */}
              <path d="M 50 0 L 50 100 M 0 50 L 100 50" fill="none" stroke="#003366" strokeWidth="0.5" strokeDasharray="4 4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mainGrid)" />
        </svg>
      </div>

      {/* 3. Bold Geometric House/Draft SVG (Bottom-Right) */}
      <svg 
        className="absolute bottom-0 right-0 w-[40%] h-auto text-orange/15 pointer-events-none -z-10 translate-x-[15%] translate-y-[15%]" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 190L100 10L190 190H10Z" stroke="currentColor" strokeWidth="2.5" />
        <rect x="55" y="100" width="90" height="90" stroke="currentColor" strokeWidth="2" />
        <line x1="55" y1="145" x2="145" y2="145" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* 4. Subtle Ambient Glow to separate card from background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* --- MAIN CONTENT CARD --- */}
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <m.div
          key="quote-container"
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={fadeInUpFast}
        >
          <m.div
            key="quote-card" 
            /* Premium Dark Shadow:
               - Neutral shadow for a professional, clean aesthetic.
               - Multi-layered depth for a realistic 'floating' effect.
            */
            className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] sm:rounded-[4rem] 
                       shadow-[0_40px_100px_rgba(0,0,0,0.12)] 
                       p-8 sm:p-14 lg:p-20 border border-white 
                       overflow-hidden transition-all duration-700 
                       hover:shadow-[0_60px_130px_rgba(0,0,0,0.18)] 
                       hover:border-blue-dk/10 group"
            whileHover={{ y: -12 }}
          >
            {/* Decorative Quote Mark */}
            <div className="absolute top-[-2rem] right-6 sm:right-12 text-blue-dk/5 text-[10rem] sm:text-[16rem] font-serif leading-none select-none group-hover:text-orange/10 transition-colors duration-700 pointer-events-none">
              ”
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
              <p 
                className="text-[1.15rem] sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-dk/90 leading-[1.6] sm:leading-[1.7] text-center font-noto-sans-hebrew" 
                dir="rtl"
              >
                בעולם של משכנתאות, לקיחת משכנתא היא כנראה{" "}
                <span className="relative inline-block text-orange font-black">
                  העסקה הכלכלית הגדולה ביותר
                  {/* Underline highlight */}
                  <span className="absolute bottom-1.5 left-0 w-full h-2 sm:h-3 bg-orange/10 -z-10 rounded-full"></span>
                </span>{" "}
               בין אם אתם זוג צעיר, משפחה שזקוקה לאיחוד הלוואות, או משקיעים – בתהליך של ייעוץ משכנתאות אתם צריכים מישהו שמדבר את השפה של הבנק, אבל{" "}
                <span className="text-orange font-black">עובד בשבילכם</span>.
              </p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <div className="w-32 sm:w-64 h-2 bg-gradient-to-r from-transparent via-orange/40 to-transparent opacity-40 group-hover:opacity-100 group-hover:w-full transition-all duration-1000"></div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}