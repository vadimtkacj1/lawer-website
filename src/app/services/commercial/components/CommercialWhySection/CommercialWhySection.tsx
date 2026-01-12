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
    <section className="relative bg-cream z-10 py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          {/* Simple Title */}
          <motion.div className="text-center mb-14 lg:mb-20" variants={staggerItem}>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heebo font-black text-blue-dk mb-4 leading-tight">
              למה דווקא{" "}
              <span className="bg-orange text-white px-6 py-2 lg:px-8 lg:py-3 rounded-xl inline-block">
                "אבי - הבית למשכנתאות"
              </span>
              ?
            </h2>
            <p className="text-xl lg:text-3xl font-bold text-blue-dk/70 mt-6">
              היתרון של איש מבפנים
            </p>
          </motion.div>

          {/* Clean Text Blocks */}
          <motion.div className="space-y-8 max-w-4xl mx-auto" variants={staggerItem}>
            {/* Block 1 */}
            <motion.div
              className="p-6 lg:p-10"
              variants={staggerItem}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-2xl lg:text-4xl font-bold text-blue-dk leading-relaxed text-center">
                <span className="text-orange font-black">יועץ הבנק עובד עבור הבנק</span> – אני עובד עבורכם.
                <br />
                <span className="text-xl lg:text-3xl text-blue-dk/70 mt-3 inline-block">
                  זה ההבדל שחוסך לכם <span className="text-orange font-black">עשרות אלפי שקלים</span>.
                </span>
              </p>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              className="p-6 lg:p-10"
              variants={staggerItem}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-2xl lg:text-4xl font-bold text-blue-dk leading-relaxed text-center">
                כיוצא <span className="text-orange font-black">בנק דיסקונט</span>, אני מכיר את ה
                <span className="text-orange font-black">"אותיות הקטנות"</span> – יודע על אילו ריביות להתמקח, איפה ללחוץ, ואיך להגיש תיק שיקבל אישור גם במקרים מורכבים.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
