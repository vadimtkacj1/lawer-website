"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Award, BadgeCheck } from "lucide-react";
import { fadeInUpFast, fadeInRight, staggerContainer, staggerItem, viewportOptions } from "@/lib/animations";

/**
 * ExpertBio Component - Lawyer Website Project
 * Layout: Image on the Right, Text Content on the Left.
 * Text alignment: Right (text-align: right) to stay flush with the image.
 */

const highlights = [
  {
    icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />, 
    text: `ליווי מקצועי מלא לאורך כל התהליך`,
  },
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />, 
    text: `התאמת תמהיל משכנתא מדויק לצרכים שלכם`,
  },
  {
    icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />, 
    text: `חיסכון משמעותי בעלויות המשכנתא לאורך השנים`,
  },
];

// Staggered offsets for the badges on the image
const credentials = [
  { text: "בוגר תואר ראשון במנהל עסקים, התמחות בנדל\"ן ותשתיות", offset: "0px" },
  { text: "יוצא מערכת הבנקאות", offset: "35px" }, 
  { text: "חבר התאחדות יועצי המשכנתאות", offset: "15px" }
];

export default function ExpertBio() {
  return (
    <section id="about-expert" dir="rtl" className="relative py-12 md:py-24 overflow-hidden bg-[#f9f7f4]">
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Flex Layout: Image (Right), Content (Left) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* --- RIGHT SIDE: IMAGE SECTION --- */}
          <motion.div
            className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-none flex-1 mx-auto lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >
            <div className="relative inline-block">
              <Image
                src="/images/second_expert.jpeg"
                alt="Avi Bukai - Professional Bio"
                width={550}
                height={680}
                priority
                className="w-full h-auto object-cover rounded-[40px] shadow-2xl border-8 border-white"
              />

              {/* STAGGERED BADGES: Shifted further to the right (left-4) to overlap image correctly */}
              <motion.div
                className="hidden lg:flex flex-col gap-4 absolute left-4 bottom-12 z-20 items-start"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {credentials.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUpFast}
                    style={{ marginRight: item.offset }} // Horizontal stagger
                    className="flex items-center gap-4 bg-white/95 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-xl w-auto"
                  >
                    <BadgeCheck className="w-6 h-6 text-[#F1662A] flex-shrink-0" />
                    <span className="text-[#0f3244] font-bold text-base whitespace-nowrap">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* --- LEFT SIDE: CONTENT SECTION --- */}
          {/* Alignment fixed to text-right and items-start (Right in RTL) */}
          <div className="flex-[1.2] flex flex-col items-center lg:items-start text-center lg:text-right w-full"> 
            
            {/* Header: Aligned Right */}
            <motion.h2
              className="font-noto-sans-hebrew font-black text-[#0f3244] mb-8 leading-[1.1] text-4xl sm:text-6xl lg:text-7xl"
              variants={fadeInUpFast}
              initial="hidden"
              whileInView="visible"
            >
              כשניסיון בנקאי פוגש <br />
              <span className="text-[#F1662A]">ידע אקדמי</span>
            </motion.h2>

            {/* Description Paragraph: text-align: right */}
            <motion.p
              className="text-lg sm:text-2xl font-medium text-[#0f3244] leading-relaxed mb-10 max-w-2xl"
              variants={fadeInUpFast}
              initial="hidden"
              whileInView="visible"
            >
              אני אבי בוקעי, יוצא המערכת הבנקאית ובעל תואר אקדמי במנהל עסקים עם דגש על נדל"ן. אני כאן כדי ללוות אתכם צעד-צעד בבחירות הכלכליות החשובות שלכם.
            </motion.p>

            {/* Highlights List: justify-start keeps it on the right in RTL */}
            <div className="flex justify-center lg:justify-start w-full mb-12"> 
              <motion.ul
                className="inline-flex flex-col items-start space-y-6 text-right"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {highlights.map((item, index) => (
                  <motion.li key={index} className="flex items-center gap-5 text-lg sm:text-xl font-bold group" variants={staggerItem}>
                    <span className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white shadow-md text-[#F1662A] rounded-2xl transition-all duration-300 group-hover:bg-[#0f3244] group-hover:text-white">
                      {item.icon}
                    </span>
                    <span className="text-[#0f3244]">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Button: Aligned to the right edge of the text block */}
            <motion.div variants={fadeInUpFast} initial="hidden" whileInView="visible">
              <Link
                href="/about"
                className="relative inline-flex items-center justify-center gap-3 bg-[#1B365D] text-white px-10 py-4 md:px-14 md:py-5 text-lg md:text-xl font-extrabold shadow-lg hover:bg-[#0f3244] transition-all rounded-lg"
              >
                קראו עוד על הניסיון שלי
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}