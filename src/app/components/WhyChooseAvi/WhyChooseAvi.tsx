"use client";

import { motion } from "framer-motion";
import { fadeInUpFast, staggerContainer, staggerItem } from "@/lib/animations";
import ShieldIcon from "@/components/icons/ShieldIcon";
import AwardIcon from "@/components/icons/AwardIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";

/**
 * Optimized viewport settings for scroll-trigger animations
 */
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

const reasons = [
  {
    number: "1",
    icon: ShieldIcon,
    title: "האיש שלכם \"מבפנים\"",
    description: "כיוצא מערכת הבנקאות, אני מכיר את המערכת מבפנים ומבחוץ. אני יודע איפה אפשר ללחוץ, על מה אפשר לוותר, ואיך להגיש תיק בצורה שתאושר מיד. אין \"ניסוי וטעייה\" – יש עבודה יעילה מול מקבלי ההחלטות בסניפים."
  },
  {
    number: "2",
    icon: AwardIcon,
    title: "יתרון אקדמי בנדל\"ן",
    description: "בניגוד ליועצים רבים, אני מגיע עם תואר ראשון במנהל עסקים והתמחות בנדל\"ן ותשתיות. אני רואה את המשכנתא שלכם כחלק מתיק השקעות כולל, ובונה אותה בראייה כלכלית רחבה ואחראית שמסתכלת שנים קדימה."
  },
  {
    number: "3",
    icon: SettingsIcon,
    title: "בירוקרטיה? עלי.",
    description: "אני יודע שאין לכם זמן לרדוף אחרי פקידים. מרגע שיוצאים לדרך, אני הופך ל\"מגן\" שלכם. אני מטפל בניירת, בשמאים, בעורכי הדין ובאישורים, כדי שאתם תגיעו רק לחתימה הסופית."
  }
];

export default function WhyChooseAvi() {
  return (
    <section className="relative bg-gradient-to-b from-cream to-white py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="whyChooseGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#003366" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whyChooseGrid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-dk/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10" dir="rtl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={fadeInUpFast}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-dk mb-4 font-noto-sans-hebrew">
            אז למה לבחור דווקא ב
            <span className="text-orange">אבי - הבית למשכנתאות</span>
            ?
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-dk/5 hover:border-orange/20 h-full flex flex-col">
                  {/* Number badge */}
                  <div className="absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-br from-orange to-orange/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-2xl">{reason.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 text-blue-dk group-hover:text-orange transition-colors duration-300">
                    <reason.icon className="w-12 h-12 lg:w-14 lg:h-14" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-black text-blue-dk mb-4 font-noto-sans-hebrew group-hover:text-orange transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-dk/80 text-base lg:text-lg leading-relaxed font-noto-sans-hebrew flex-grow">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={fadeInUpFast}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
