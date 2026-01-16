"use client";

import { motion } from "framer-motion";
import { fadeInUpFast } from "@/lib/animations";

/**
 * Optimized viewport settings for smoother scroll triggers
 */
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function Quote() {
  return (
    <section className="relative bg-cream z-10 py-12 lg:py-24 overflow-hidden">
      {/* Background glow - centered precisely */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-orange/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={fadeInUpFast}
        >
          <motion.div 
            className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] sm:rounded-[3rem] shadow-xl p-7 sm:p-12 lg:p-16 border border-orange/10 overflow-hidden transition-all duration-500 hover:shadow-orange/10 hover:border-orange/20 group"
            whileHover={{ y: -5 }}
          >
            {/* Refined Quote Mark: 
               Positioned to avoid visual imbalance on small screens 
            */}
            <div className="absolute top-[-1rem] right-4 sm:right-10 text-orange/5 text-[7rem] sm:text-[12rem] font-serif leading-none select-none group-hover:text-orange/10 transition-colors duration-500 pointer-events-none">
              ”
            </div>

            {/* Text Wrapper: 
               Using mx-auto and max-w to ensure the centered text block looks "straight" 
            */}
            <div className="max-w-3xl mx-auto relative z-10">
              <p 
                className="text-[1.1rem] sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-dk/90 leading-[1.6] sm:leading-[1.8] text-center font-noto-sans-hebrew" 
                dir="rtl"
              >
                לקיחת משכנתא היא כנראה{" "}
                <span className="relative inline-block text-orange font-black">
                  העסקה הכלכלית הגדולה ביותר
                  {/* Highlight bar adjusted for better symmetry */}
                  <span className="absolute bottom-1.5 left-0 w-full h-1.5 sm:h-2 bg-orange/10 -z-10 rounded-full"></span>
                </span>{" "}
                שתעשו בחייכם. בין אם אתם זוג צעיר שרוכש דירה ראשונה בחולון, משפחה שמרגישה לחץ כלכלי כבד מההחזרים החודשיים וזקוקה לאיחוד הלוואות, או משקיעים שמחפשים למקסם תשואה – אתם צריכים מישהו שמדבר את השפה של הבנק, אבל{" "}
                <span className="text-orange font-black">עובדת בשבילכם</span>.
              </p>
            </div>

            {/* Bottom decorative line - perfectly centered */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <div className="w-24 sm:w-48 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-orange to-transparent opacity-40 group-hover:opacity-70 group-hover:w-64 transition-all duration-700"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}