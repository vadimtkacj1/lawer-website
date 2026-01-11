"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpFast, fadeInRight, staggerContainer, viewportOptions } from "@/lib/animations";

export default function CommercialAbout() {
  return (
    <section className="relative bg-cream z-10 py-12 lg:py-20 overflow-hidden text-right" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            
            {/* Expert Images Grid */}
            <motion.div
              className="flex-1 w-full max-w-[500px] lg:max-w-none grid grid-cols-2 gap-4"
              variants={fadeInRight}
            >
              <div className="relative">
                <Image
                  src="/images/expert.jpeg"
                  alt="אבי בוקעי - מומחה למשכנתאות"
                  width={400}
                  height={500}
                  className="w-full aspect-[4/5] object-cover object-top rounded-2xl lg:rounded-[30px] shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="relative mt-6 lg:mt-10"> {/* Небольшое смещение для динамики */}
                <Image
                  src="/images/second_expert.jpeg"
                  alt="אבי בוקעי - יועץ משכנתאות"
                  width={400}
                  height={500}
                  className="w-full aspect-[4/5] object-cover object-top rounded-2xl lg:rounded-[30px] shadow-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1.2 text-center lg:text-right"
              variants={fadeInUpFast}
            >
              <div className="inline-block bg-orange/10 px-4 py-1.5 rounded-lg mb-4 sm:mb-6 text-orange font-black text-sm sm:text-base">
                נעים להכיר
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-blue-dk/90 leading-relaxed">
                אני אבי בוקעי, הבעלים של{" "}
                <span className="font-black text-orange">"אבי - הבית למשכנתאות"</span>.
                עם ניסיון של{" "}
                <span className="font-black text-blue-dk">מעל 7 שנים</span>,
                תואר ראשון במנהל עסקים (התמחות בנדל"ן ותשתיות) ורקע כ
                <span className="font-black text-blue-dk">יוצא המערכת הבנקאית</span>,
                אני כאן כדי להפוך את הבירוקרטיה המורכבת ל
                <span className="font-black text-orange">חיסכון של עשרות ואף מאות אלפי שקלים</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}