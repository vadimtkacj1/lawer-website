"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Optimized viewport - only animate once for better performance
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function CommercialWhySection() {
  return (
    <section className="relative bg-cream z-10 py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          <motion.h2
            className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heebo font-black text-blue-dk mb-8 lg:mb-12 text-center leading-tight"
            variants={staggerItem}
          >
            למה דווקא{" "}
            <span className="bg-orange text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl inline-block">
              "אבי - הבית למשכנתאות"
            </span>
            ? היתרון של איש מבפנים
          </motion.h2>

          <motion.div
            className="space-y-6 lg:space-y-8 max-w-4xl mx-auto"
            variants={staggerItem}
          >
            <motion.p
              className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-blue-dk/90 leading-relaxed text-center"
              variants={staggerItem}
            >
              <span className="text-blue-dk font-black">
                יועץ הבנק עובד עבור הבנק – אני עובד עבורכם.
              </span>
              {" "}זה ההבדל שחוסך לכם עשרות אלפי שקלים.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-blue-dk/90 leading-relaxed text-center"
              variants={staggerItem}
            >
              כיוצא בנק דיסקונט, אני מכיר את ה<span className="font-black text-orange">"אותיות הקטנות"</span> – יודע על אילו ריביות להתמקח, איפה ללחוץ, ואיך להגיש תיק שיקבל אישור גם במקרים מורכבים.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
