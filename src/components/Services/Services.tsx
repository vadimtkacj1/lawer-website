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
import ArrowIcon from "@/components/icons/ArrowIcon";
import CitySkylineBackground from "@/components/icons/backgrounds/CitySkylineBackground";

const services = [
  {
    href: "/services/first-home",
    Icon: HomeIcon,
    title: "משכנתא לדירה ראשונה",
    description: "ליווי מלא מהיכרות ועד קבלת מפתח",
  },
  {
    href: "/services/refinance",
    Icon: RefreshIcon,
    title: "מחזור משכנתא",
    description: "חיסכון של אלפי שקלים בתשלום החודשי",
  },
  {
    href: "/services/all-purpose",
    Icon: CurrencyIcon,
    title: "משכנתא לכל מטרה",
    description: "פתרונות מימון גמישים לכל צורך",
  },
  {
    href: "/services/investors",
    Icon: ChartIcon,
    title: "משכנתא למשקיעים",
    description: "אסטרטגיות מימון חכמות להשקעה",
  },
  {
    href: "/services/commercial",
    Icon: BuildingIcon,
    title: "ליווי עסקאות מורכבות",
    description: "פתרונות מקצועיים לעסקאות מורכבות",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-12 md:py-20 z-0 bg-cream overflow-hidden">
      {/* Subtle background for depth */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <CitySkylineBackground />
      </div>
      
      <DecorativeShapes variant="services" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="section-title text-center text-3xl md:text-5xl lg:text-6xl mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          השירותים שלנו
        </motion.h2>

        <div className="max-w-[1100px] mx-auto">
          {/* GRID/FLEX WRAPPER:
              - Mobile: Small gap (gap-3) and centered flex items
              - Desktop: Seamless grid (gap-0)
          */}
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
                // Mobile: w-[calc(50%-6px)] makes two equal items per row with gaps.
                // Desktop: lg:flex-1 makes five equal items in one row.
                className="w-[calc(50%-6px)] md:w-1/3 lg:flex-1 bg-white rounded-2xl md:rounded-none
                           border border-blue-dk/5 md:border-0 md:border-l md:border-l-blue-dk/10 md:last:border-l-0
                           shadow-sm md:shadow-none"
              >
                <Link
                  href={service.href}
                  className="group block h-full relative"
                >
                  {/* CARD CONTENT:
                      - Fixed aspect-square or min-height ensures identical size.
                      - Reduced padding for a tighter, cleaner look on mobile.
                  */}
                  <div className="flex flex-col items-center justify-center p-4 sm:p-6 min-h-[140px] sm:min-h-[180px] lg:min-h-[220px] transition-all duration-300 hover:bg-orange/[0.03] relative">

                    {/* Icon scaling on hover */}
                    <div className="text-orange mb-3 transition-transform duration-300 group-hover:scale-110">
                      <service.Icon className="w-9 h-9 sm:w-12 sm:h-12" />
                    </div>

                    {/* Uniform title styling */}
                    <h3 className="text-blue-dk font-black text-[13px] sm:text-sm md:text-base text-center leading-tight transition-colors duration-300 group-hover:text-orange mb-2">
                      {service.title}
                    </h3>

                    {/* Description - показывается при hover */}
                    <p className="text-blue-dk/70 text-xs md:text-sm text-center leading-snug opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                      {service.description}
                    </p>

                    {/* Arrow icon - показывает что это кликабельно */}
                    <div className="mt-2 text-orange opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                      <ArrowIcon className="w-5 h-5 rotate-180" />
                    </div>
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