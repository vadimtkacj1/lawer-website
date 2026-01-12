"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpFast, fadeInLeft, staggerContainer } from "@/lib/animations";

const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

export default function CommercialAbout() {
  return (
    <section className="relative bg-cream z-10 py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Image Section */}
            <motion.div
              className="flex-1 w-full max-w-[500px] lg:max-w-none"
              variants={fadeInLeft}
            >
              <div className="relative">
                <Image
                  src="/images/expert.jpeg"
                  alt="אבי בוקעי - יועץ משכנתאות"
                  width={500}
                  height={600}
                  className="w-full aspect-[5/6] object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="flex-1 text-center lg:text-right"
              variants={fadeInUpFast}
              dir="rtl"
            >
              <div className="inline-block bg-orange/10 px-4 py-1.5 rounded-lg mb-4 sm:mb-6">
                <span className="text-orange font-black text-sm sm:text-base">
                  נעים להכיר
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heebo font-black text-blue-dk mb-6 leading-tight">
                אבי בוקעי
              </h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-dk/90 leading-relaxed">
                  בעלים של{" "}
                  <span className="font-black text-orange">"אבי - הבית למשכנתאות"</span>
                  . עם ניסיון של{" "}
                  <span className="font-black text-blue-dk">מעל 7 שנים</span>{" "}
                  ותואר במנהל עסקים בהתמחות נדל"ן.
                </p>

                <p className="text-base sm:text-lg lg:text-xl font-bold text-blue-dk/80 leading-relaxed">
                  <span className="font-black text-orange">יוצא בנק דיסקונט</span> –{" "}
                  מכיר את האותיות הקטנות ועובד בשבילכם להשיג את התנאים הטובים ביותר.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}