"use client";

import { motion } from "framer-motion";
import { fadeInUpFast } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function CommercialIntro() {
  return (
    <section className="relative bg-cream z-10 py-16 lg:py-24 overflow-hidden">
      {/* Мягкий фоновый декор (еле заметное свечение) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={fadeInUpFast}
        >
          <motion.div 
            className="relative bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-2xl p-8 sm:p-12 lg:p-16 border border-orange/10 overflow-hidden transition-all duration-500 hover:shadow-orange/5 hover:border-orange/30 group"
            whileHover={{ y: -5 }}
          >
            {/* Стилизованная кавычка в углу */}
            <div className="absolute top-0 right-8 text-orange/5 text-[12rem] font-serif leading-none select-none group-hover:text-orange/10 transition-colors duration-500">
              ”
            </div>

            <p className="relative z-10 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-dk/90 leading-[1.8] text-center font-heebo" dir="rtl">
              לקיחת משכנתא היא כנראה{" "}
              <span className="relative inline-block text-orange font-black">
                העסקה הכלכלית הגדולה ביותר
                <span className="absolute bottom-1 left-0 w-full h-2 bg-orange/10 -z-10 rounded-full"></span>
              </span>{" "}
              שתעשו בחייכם. בין אם אתם זוג צעיר שרוכש דירה ראשונה בחולון, משפחה שמרגישה לחץ כלכלי כבד מההחזרים החודשיים וזקוקה לאיחוד הלוואות, או משקיעים שמחפשים למקסם תשואה – אתם צריכים מישהו שמדבר את השפה של הבנק, אבל{" "}
              <span className="text-orange font-black">עובד בשבילכם</span>.
            </p>

            {/* Декоративная линия снизу с градиентом */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
              <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-orange to-transparent opacity-60 group-hover:w-64 transition-all duration-700"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}