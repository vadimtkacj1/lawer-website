"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Award, BadgeCheck } from "lucide-react";
import { fadeInUpFast, fadeInRight, staggerContainer, staggerItem, viewportOptions } from "@/lib/animations";

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

const credentials = [
  { text: "בוגר תואר ראשון במנהל עסקים, התמחות בנדל\"ן ותשתיות", offset: "0px" },
  { text: "יוצא מערכת הבנקאות", offset: "20px" }, 
  { text: "חבר התאחדות יועצי המשכנתאות", offset: "10px" }
];

export default function ExpertBio() {
  return (
    <section id="about-expert" dir="rtl" className="relative py-12 md:py-24 overflow-hidden bg-[#f9f7f4]">
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Центрирующий контейнер для всей секции */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* --- ПРАВАЯ СТОРОНА: ФОТО (Чуть больше, центрировано в своей колонке) --- */}
          <motion.div
            className="relative w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[520px] flex-1 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >
            <div className="relative inline-block w-full">
              {/* Mobile Image - Optimized */}
              <div className="lg:hidden">
                <Image
                  src="/images/avi_photo.webp"
                  alt="Avi Bukai - Professional Bio"
                  width={520} 
                  height={650}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 520px"
                  className="w-full h-auto"
                />
              </div>
              {/* Desktop Image - Original Quality */}
              <div className="hidden lg:block">
                <Image
                  src="/images/avi_photo.png"
                  alt="Avi Bukai - Professional Bio"
                  width={520} 
                  height={650}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 520px"
                  className="w-full h-auto"
                  quality={100}
                />
              </div>

              {/* Плашки на фото */}
              <motion.div
                className="hidden lg:flex flex-col gap-3 absolute right-5 bottom-10 z-20 items-start"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {credentials.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUpFast}
                    style={{ marginRight: item.offset }}
                    className="flex items-center bg-white/95 backdrop-blur-md p-3  rounded-xl shadow-lg w-auto"
                  >
                    <BadgeCheck className="w-5 h-5 text-[#F1662A] flex-shrink-0" />
                    <span className="text-[#0f3244] font-bold text-sm md:text-base whitespace-nowrap">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* --- ЛЕВАЯ СТОРОНА: ТЕКСТ (Выровнен по правому краю внутри своей колонки) --- */}
          <div className="flex-[1.2] flex flex-col items-center lg:items-start text-center lg:text-right w-full"> 
            
            <motion.h2
              className="font-noto-sans-hebrew font-black text-[#0f3244] mb-6 leading-[1.1] text-4xl sm:text-5xl lg:text-6xl w-full"
              variants={fadeInUpFast}
              initial="hidden"
              whileInView="visible"
            >
              כשניסיון בנקאי פוגש <br />
              <span className="text-[#F1662A]">ידע אקדמי</span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl font-medium text-[#0f3244] leading-relaxed mb-8 max-w-[600px]"
              variants={fadeInUpFast}
              initial="hidden"
              whileInView="visible"
            >
              אני אבי בוקעי, יוצא המערכת הבנקאית ובעל תואר אקדמי במנהל עסקים עם דגש על נדל"ן. אני כאן כדי ללוות אתכם צעד-צעד בבחירות הכלכליות החשובות שלכם.
            </motion.p>

            {/* Список преимуществ */}
            <div className="flex justify-center lg:justify-start w-full mb-10"> 
              <motion.ul
                className="inline-flex flex-col items-start space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {highlights.map((item, index) => (
                  <motion.li key={index} className="flex items-center gap-4 text-lg font-bold group" variants={staggerItem}>
                    <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white shadow-md text-[#F1662A] rounded-xl transition-all duration-300 group-hover:bg-[#0f3244] group-hover:text-white">
                      {item.icon}
                    </span>
                    <span className="text-[#0f3244]">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={fadeInUpFast} initial="hidden" whileInView="visible" className="w-full lg:w-auto">
              <Link
                href="/about"
                className="relative inline-flex items-center justify-center gap-3 bg-[#1B365D] text-white px-12 py-4 text-xl font-extrabold shadow-lg hover:bg-[#0f3244] transition-all rounded-lg"
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