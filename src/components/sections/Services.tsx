"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUpFast,
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import HomeIcon from "@/components/icons/HomeIcon";
import RefreshIcon from "@/components/icons/RefreshIcon";
import CurrencyIcon from "@/components/icons/CurrencyIcon";
import ChartIcon from "@/components/icons/ChartIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import CitySkylineBackground from "@/components/icons/backgrounds/CitySkylineBackground";

const services = [
  {
    href: "/services/first-home",
    Icon: HomeIcon,
    title: "משכנתא לדירה ראשונה",
    description: "ליווי מלא לזוגות צעירים ורוכשי דירה ראשונה עם תנאים מועדפים"
  },
  {
    href: "/services/refinance",
    Icon: RefreshIcon,
    title: "מחזור משכנתא",
    description: "שיפור תנאי המשכנתא הקיימת וחיסכון של אלפי שקלים בחודש"
  },
  {
    href: "/services/all-purpose",
    Icon: CurrencyIcon,
    title: "משכנתא לכל מטרה",
    description: "מימון גמיש לשיפוצים, השקעות או כל צורך אחר על בסיס הנכס"
  },
  {
    href: "/services/investors",
    Icon: ChartIcon,
    title: "משכנתא למשקיעים",
    description: "פתרונות מימון מותאמים למשקיעי נדל״ן עם מסלולים ייחודיים"
  },
  {
    href: "/services/commercial",
    Icon: BuildingIcon,
    title: "ליווי עסקאות מורכבות",
    description: "ניהול עסקאות מורכבות עם מספר צדדים ודרישות מיוחדות"
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-10 sm:py-12 md:py-16 lg:py-20 z-0 bg-cream overflow-hidden">
      {/* Simplified city skyline background - optimized for performance */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <CitySkylineBackground />
      </div>
      
      <DecorativeShapes variant="services" />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <motion.h2
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          השירותים שלנו
        </motion.h2>

        <div className="max-w-[1200px] mx-auto">
          {/* Unified block container with visual separation */}
          <motion.nav
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 overflow-hidden rounded-xl md:rounded-2xl shadow-md border border-blue-dk/10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                className="relative"
                variants={staggerItem}
              >
                <Link
                  href={service.href}
                  className="group block h-full relative overflow-hidden"
                >
                  {/* Unified card with better visual separation */}
                  <div
                    className="relative h-[140px] sm:h-[150px] md:h-[160px] lg:h-[150px]
                               bg-white/80 md:bg-white/70
                               transition-[background-color,transform,box-shadow,border-radius] duration-200 ease-out
                               hover:bg-white/90 hover:shadow-lg
                               hover:scale-[1.02] hover:z-10
                               hover:shadow-xl hover:shadow-orange/15
                               group-hover:rounded-xl
                               cursor-pointer"
                  >
                    {/* Четкий разделитель справа (для RTL) - всегда видимый */}
                    {index < services.length - 1 && (
                      <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-blue-dk/15 via-blue-dk/25 to-blue-dk/15" />
                    )}
                    {/* Подчеркивание снизу для указания что это ссылка */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange group-hover:w-3/4 transition-[width] duration-300" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/15 group-hover:to-transparent transition-[opacity,border-radius] duration-300 opacity-0 group-hover:opacity-100 group-hover:rounded-xl" />
                    
                    {/* Card content */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-2 md:gap-3 p-3 sm:p-3 md:p-4 lg:p-5 z-10"
                    >
                      <span className="text-orange drop-shadow-md relative">
                        <service.Icon className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                      </span>
                      <span className="text-blue-dk font-black text-sm sm:text-xs md:text-sm lg:text-[15px] text-center leading-tight transition-colors duration-300 group-hover:text-orange relative">
                        {service.title}
                        {/* Стрелка справа от текста (для RTL слева) для указания ссылки */}
                        <span className="absolute -left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange">
                          ←
                        </span>
                      </span>
                      {/* Description visible on hover for larger screens */}
                      <p className="hidden lg:block text-blue-dk/80 font-semibold text-[10px] xl:text-xs text-center leading-snug opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 absolute bottom-2 left-2 right-2 transform translate-y-2 group-hover:translate-y-0">
                        {service.description}
                      </p>
                    </div>

                    {/* Animated border on hover */}
                    <div className="absolute inset-0 border-2 border-orange/0 group-hover:border-orange/40 transition-[border-color,border-radius] duration-300 group-hover:rounded-xl" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
