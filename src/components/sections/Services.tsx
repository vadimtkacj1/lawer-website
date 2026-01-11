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

const services = [
  {
    href: "/services/first-home",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
      </svg>
    ),
    title: "משכנתא לדירה ראשונה",
    description: "ליווי מלא לזוגות צעירים ורוכשי דירה ראשונה עם תנאים מועדפים"
  },
  {
    href: "/services/refinance",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
    ),
    title: "מחזור משכנתא",
    description: "שיפור תנאי המשכנתא הקיימת וחיסכון של אלפי שקלים בחודש"
  },
  {
    href: "/services/all-purpose",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
      </svg>
    ),
    title: "משכנתא לכל מטרה",
    description: "מימון גמיש לשיפוצים, השקעות או כל צורך אחר על בסיס הנכס"
  },
  {
    href: "/services/investors",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
      </svg>
    ),
    title: "משכנתא למשקיעים",
    description: "פתרונות מימון מותאמים למשקיעי נדל״ן עם מסלולים ייחודיים"
  },
  {
    href: "/services/commercial",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z" />
        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z" />
        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
      </svg>
    ),
    title: "ליווי עסקאות מורכבות",
    description: "ניהול עסקאות מורכבות עם מספר צדדים ודרישות מיוחדות"
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-10 sm:py-12 md:py-16 lg:py-20 z-0 bg-cream overflow-hidden">
      {/* Simplified city skyline background - optimized for performance */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1600 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified city silhouette - reduced complexity for better performance */}
          <g fill="#1c3664" opacity="0.6">
            <path d="M0 600 L0 450 L40 450 L40 400 L80 400 L80 350 L120 350 L120 320 L160 320 L160 380 L200 380 L200 330 L240 330 L240 420 L280 420 L280 360 L320 360 L320 480 Z" />
            <path d="M320 600 L320 150 L380 150 L380 120 L440 120 L440 140 L500 140 L500 100 L560 100 L560 160 L620 160 L620 80 L680 80 L680 120 L740 120 L740 140 L800 140 L800 100 L860 100 L860 140 L920 140 L920 180 L980 180 L980 120 L1040 120 L1040 160 L1100 160 L1100 200 L1160 200 L1160 140 L1220 140 L1220 180 L1280 180 L1280 220 L1340 220 L1340 160 L1400 160 L1400 200 L1460 200 L1460 240 L1520 240 L1520 200 L1580 200 L1580 600 Z" />
            <path d="M1600 600 L1600 360 L1640 360 L1640 400 L1680 400 L1680 340 L1720 340 L1720 420 L1760 420 L1760 380 L1800 380 L1800 480 L1840 480 L1840 600 Z" />
          </g>
        </svg>
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
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 overflow-hidden rounded-xl md:rounded-2xl shadow-md border border-blue-dk/10"
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
                    className="relative h-[100px] sm:h-[120px] md:h-[140px] lg:h-[150px]
                               bg-white/80 md:bg-white/70
                               transition-all duration-200 ease-out
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
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange group-hover:w-3/4 transition-all duration-300" />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/15 group-hover:to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:rounded-xl" />
                    
                    {/* Card content */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 p-2 sm:p-3 md:p-4 lg:p-5 z-10"
                    >
                      <span className="text-orange drop-shadow-md relative">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 16 16">
                          {service.icon.props.children}
                        </svg>
                      </span>
                      <span className="text-blue-dk font-black text-[11px] sm:text-xs md:text-sm lg:text-[15px] text-center leading-tight transition-colors duration-300 group-hover:text-orange relative">
                        {service.title}
                        {/* Стрелка справа от текста (для RTL слева) для указания ссылки */}
                        <span className="absolute -left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange">
                          ←
                        </span>
                      </span>
                      {/* Description visible on hover for larger screens */}
                      <p className="hidden lg:block text-blue-dk/80 font-semibold text-[10px] xl:text-xs text-center leading-snug opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-2 left-2 right-2 transform translate-y-2 group-hover:translate-y-0">
                        {service.description}
                      </p>
                    </div>

                    {/* Animated border on hover */}
                    <div className="absolute inset-0 border-2 border-orange/0 group-hover:border-orange/40 transition-all duration-300 group-hover:rounded-xl" />
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
