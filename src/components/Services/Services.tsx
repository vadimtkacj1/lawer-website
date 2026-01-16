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
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";
import HomeIcon from "@/components/icons/HomeIcon";
import RefreshIcon from "@/components/icons/RefreshIcon";
import CurrencyIcon from "@/components/icons/CurrencyIcon";
import ChartIcon from "@/components/icons/ChartIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";
import CitySkylineBackground from "@/components/icons/backgrounds/CitySkylineBackground";

const services = [
  {
    href: "/services/residential",
    Icon: HomeIcon,
    title: "משכנתא לרכישת דירה",
    description: "ליווי לדירה ראשונה, להשקעה או דירה חליפית בתכנון נכון",
  },
  {
    href: "/services/mechir-lamishtaken",
    Icon: BuildingIcon,
    title: "מחיר למשתכן",
    description: "ליווי ייעודי עם היכרות מעמיקה של המסלולים וההתאמות",
  },
  {
    href: "/services/refinance",
    Icon: RefreshIcon,
    title: "מחזור ואיחוד הלוואות",
    description: "שיפור תנאים קיימים והפחתת ההחזר החודשי שלכם",
  },
  {
    href: "/services/reverse-mortgage",
    Icon: CurrencyIcon,
    title: "משכנתא הפוכה",
    description: "פתרונות מימוני יצירתיים ומותאמים לבני 60 ומעלה",
  },
  {
    href: "/services/refused",
    Icon: ChartIcon,
    title: "מסורבי בנקים ומורכבות",
    description: "פתרונות יצירתיים לעסקאות מורכבות גם כשהבנק אמר 'לא'",
  },
  {
    href: "/services/renovation",
    Icon: BuildingIcon,
    title: "משכנתא לשיפוץ",
    description: "מימון שיפוץ בתנאי משכנתא ובתהליך יעיל ומהיר",
  },
  {
    href: "/services/all-purpose",
    Icon: CurrencyIcon,
    title: "משכנתא לכל מטרה",
    description: "מימון מגוון צרכים בפריסה ארוכה באמצעות שעבוד נכס",
  },
];

export default function Services() {
  const { shouldDisableAnimations, isMobile } = usePerformanceSettings();

  // Mobile/Static Version
  if (isMobile || shouldDisableAnimations) {
    return (
      <section id="services" dir="rtl" className="relative py-12 md:py-20 z-0 bg-cream">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-black text-blue-dk mb-10 md:mb-16 font-noto-sans-hebrew">
            השירותים שלנו
          </h2>
          
          <div className="max-w-[1200px] mx-auto">
            {/* Using flex flex-wrap justify-center instead of grid 
              to make sure the 7th item is centered horizontally 
            */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {services.map((service) => (
                <div 
                  key={service.href} 
                  className="bg-white rounded-2xl border border-blue-dk/5 shadow-sm w-[calc(50%-6px)] md:w-[calc(33.333%-12px)] lg:w-[calc(25%-16px)]"
                >
                  <Link href={service.href} className="group block h-full">
                    <div className="flex flex-col items-center justify-center p-4 md:p-6 min-h-[170px] md:min-h-[200px] transition-all duration-300 hover:bg-orange/[0.03] text-center">
                      <div className="text-orange mb-3">
                        <service.Icon className="w-9 h-9 md:w-12 md:h-12" />
                      </div>
                      <h3 className="text-blue-dk font-black text-[13px] md:text-base leading-tight mb-2 font-noto-sans-hebrew">
                        {service.title}
                      </h3>
                      <p className="text-blue-dk/70 text-[11px] md:text-sm leading-snug px-1 opacity-70 font-noto-sans-hebrew">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Animated Desktop Version
  return (
    <section id="services" dir="rtl" className="relative py-12 md:py-20 z-0 bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <CitySkylineBackground />
      </div>

      <DecorativeShapes variant="services" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-title text-center text-3xl md:text-5xl lg:text-6xl mb-10 md:mb-16 font-noto-sans-hebrew"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          השירותים שלנו
        </motion.h2>

        <div className="max-w-[1200px] 3xl:max-w-[1500px] mx-auto">
          <motion.nav
            className="flex flex-wrap justify-center gap-3 md:gap-0 md:bg-white md:shadow-xl md:rounded-3xl md:border border-blue-dk/10 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                variants={staggerItem}
                className="w-[calc(50%-6px)] md:w-1/3 lg:flex-1 bg-white rounded-2xl md:rounded-none
                           relative border border-blue-dk/5 md:border-0 shadow-sm md:shadow-none"
              >
                <Link
                  href={service.href}
                  className="group block h-full relative"
                >
                  <div className="flex flex-col items-center justify-center p-4 sm:p-6 min-h-[170px] sm:min-h-[200px] lg:min-h-[240px] transition-all duration-300 hover:bg-orange/[0.03] text-center relative">
                    <div className="text-orange mb-3 transition-transform duration-300 group-hover:scale-110">
                      <service.Icon className="w-9 h-9 sm:w-12 sm:h-12" />
                    </div>

                    <h3 className="text-blue-dk font-black text-[13px] sm:text-sm md:text-base text-center leading-tight transition-colors duration-300 group-hover:text-orange mb-2 font-noto-sans-hebrew">
                      {service.title}
                    </h3>

                    <p className="text-blue-dk/70 text-[11px] md:text-sm text-center leading-snug opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden px-2 font-noto-sans-hebrew">
                      {service.description}
                    </p>

                    <div className="mt-2 text-orange opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                      <ArrowIcon className="w-5 h-5 rotate-180" />
                    </div>
                  </div>
                </Link>

                {index !== services.length - 1 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[40%] bg-blue-dk/10" />
                )}
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}