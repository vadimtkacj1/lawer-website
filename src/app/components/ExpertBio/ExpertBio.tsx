"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Award } from "lucide-react";
import { fadeInUpFast, fadeInRight, staggerContainer, staggerItem, viewportOptions } from "@/lib/animations";

/**
 * EXPERT BIO COMPONENT
 * Primary branding color used: #0f3244
 * Focus: Professionalism and trust for financial/legal services.
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

export default function ExpertBio() {
  return (
    <section id="about-expert" dir="rtl" className="relative py-12 md:py-24 overflow-hidden bg-[#f9f7f4]">
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* IMAGE SECTION: Portrait with white border and shadow */}
          <motion.div
            key="expert-bio-image"
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none flex-1 mx-auto lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >
            <Image
              src="/images/second_expert.jpeg"
              alt="Avi Bukai - Professional Bio"
              width={500}
              height={625}
              priority
              className="w-full aspect-[4/5] object-cover object-top rounded-[40px] shadow-2xl border-8 border-white"
            />
          </motion.div>

          {/* CONTENT SECTION: Text and Call to Action */}
          <div className="flex-[1.4] text-center lg:text-right w-full">
            
            {/* Header: Applied color #0f3244 */}
            <motion.h2
              key="expert-bio-heading"
              className="font-noto-sans-hebrew font-black text-[#0f3244] mb-10 leading-[1.05] text-4xl sm:text-6xl lg:text-7xl"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpFast}
            >
              כשניסיון בנקאי פוגש <br />
              <span className="text-orange">ידע אקדמי</span>
            </motion.h2>

            {/* Paragraph: Applied color #0f3244 */}
            <motion.p
              key="expert-bio-description"
              className="text-lg sm:text-2xl font-medium text-[#0f3244] leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpFast}
            >
א יבא ,יעקוב אצוי תכרעמה תיאקנבה לעבו ראות ימדקא להנמב םיקסע םע שגד לע .ן"לדנ ינא ןאכ ידכ 
תוולל םכתא דעצ-דעצ תוריחבב תוילכלכה תובושחה ,םכלש ךוסחלו םכל תא היטרקוריבה ףסכהו קנבהש 
אל הצור .וכסחתש            </motion.p>

            {/* HIGHLIGHTS: List with custom icon containers */}
            <div className="flex justify-center lg:justify-start mb-12">
              <motion.ul
                key="expert-bio-highlights-list"
                className="inline-flex flex-col items-start space-y-6 text-right"
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
              >
                {highlights.map((item, index) => (
                  <motion.li key={`expert-bio-highlight-${index}`} className="flex items-center gap-5 text-lg sm:text-xl font-bold group" variants={staggerItem}>
                    {/* Icon container with hover state switching to brand color #0f3244 */}
                    <span className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white shadow-md text-orange rounded-2xl transition-all duration-300 group-hover:bg-[#0f3244] group-hover:text-white">
                      {item.icon}
                    </span>
                    <span className="text-[#0f3244]">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* CALL TO ACTION: Button with updated color #0f3244 */}
            <motion.div
              key="expert-bio-cta"
              className="flex justify-center lg:justify-start"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpFast}
            >
              <Link
                href="/about"
                className="relative inline-flex items-center justify-center gap-3 bg-[#1c3664] text-white px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl font-extrabold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
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