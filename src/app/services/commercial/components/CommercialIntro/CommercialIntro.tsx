"use client";

import { motion } from "framer-motion";
import { fadeInUpFast } from "@/lib/animations";

// Optimized viewport - only animate once for better performance
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function CommercialIntro() {
  return (
    <section className="relative bg-cream z-10 py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={fadeInUpFast}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 xl:p-16 border-4 border-orange/20">
            {/* Decorative quote mark */}
            <div className="absolute top-6 right-6 text-orange/10 text-8xl font-black leading-none select-none">
              "
            </div>

            <p className="relative text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-blue-dk/90 leading-relaxed text-center">
              לקיחת משכנתא היא כנראה{" "}
              <span className="text-orange font-black">העסקה הכלכלית הגדולה ביותר</span>{" "}
              שתעשו בחייכם. בין אם אתם זוג צעיר שרוכש דירה ראשונה בחולון, משפחה שמרגישה לחץ כלכלי כבד מההחזרים החודשיים וזקוקה לאיחוד הלוואות, או משקיעים שמחפשים למקסם תשואה – אתם צריכים מישהו שמדבר את השפה של הבנק, אבל{" "}
              <span className="text-orange font-black">עובד בשבילכם</span>.
            </p>

            {/* Decorative bottom accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-orange to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
