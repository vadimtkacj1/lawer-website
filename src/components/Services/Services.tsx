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
import SettingsIcon from "@/components/icons/SettingsIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import ReceiptPercentIcon from "@/components/icons/ReceiptPercentIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";
import CitySkylineBackground from "@/components/icons/backgrounds/CitySkylineBackground";

const services = [
  {
    href: "/services/mortgage-for-purchase",
    Icon: HomeIcon,
    title: "משכנתא לרכישת דירה",
    description: "ליווי לדירה ראשונה, להשקעה או דירה חליפית בתכנון נכון",
  },
  {
    href: "/services/dira-behanacha-mortgage",
    Icon: BuildingIcon,
    title: "מחיר למשתכן",
    description: "ליווי ייעודי עם היכרות מעמיקה של המסלולים וההתאמות",
  },
  {
    href: "/services/loan-consolidation",
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
    href: "/services/mortgage-refused",
    Icon: ChartIcon,
    title: "מסורבי בנקים ומורכבות",
    description: "פתרונות יצירתיים לעסקאות מורכבות גם כשהבנק אמר 'לא'",
  },
  {
    href: "/services/renovation-mortgage",
    Icon: SettingsIcon,
    title: "משכנתא לשיפוץ",
    description: "מימון שיפוץ בתנאי משכנתא ובתהליך יעיל ומהיר",
  },
  {
    href: "/services/foreign-mortgages",
    Icon: GlobeIcon,
    title: "משכנתא לתושבי חוץ",
    description: "פתרונות מימון לרכישת נכס בישראל עבור תושבי חוץ ומשקיעים זרים",
  },
  {
    href: "/services/debt-consolidation",
    Icon: ReceiptPercentIcon,
    title: "משכנתא לכל מטרה",
    description: "הפיכת הלוואות יקרות לתשלום חודשי אחד נמוך ומשתלם על ידי פריסה מחדש בתוך המשכנתא",
  },
];

export default function Services() {
  const { shouldDisableAnimations, isMobile } = usePerformanceSettings();

  const renderServiceCard = (service: any, index: number, isAnimated: boolean) => {
    const content = (
      <Link href={service.href} className="group block h-full relative">
        <div className="flex flex-col items-center justify-center p-3 sm:p-4 xl:p-6 min-h-[220px] sm:min-h-[250px] 3xl:min-h-[320px] transition-all duration-300 hover:bg-orange/[0.03] text-center relative">
          {/* ICON: larger on mobile (w-12 h-12), same as before on sm+ */}
          <div className="text-orange mb-3 transition-transform duration-300 group-hover:scale-110">
            <service.Icon className="w-12 h-12 sm:w-10 sm:h-10 3xl:w-14 3xl:h-14" />
          </div>

          {/* TITLE: slightly larger on mobile */}
          <h3 className="text-blue-dk font-black text-xs sm:text-xs xl:text-sm 3xl:text-lg text-center leading-tight transition-colors duration-300 group-hover:text-orange mb-2 font-noto-sans-hebrew">
            {service.title}
          </h3>

          {/*
            DESCRIPTION:
            - Mobile (default): always visible, no height animation
            - sm and above: hidden by default, revealed on hover (original behaviour)
          */}
          <div className="
            /* Mobile: always visible */
            h-auto opacity-100
            /* sm+: hidden, revealed on hover */
            sm:h-0 sm:opacity-0 sm:group-hover:h-20 3xl:sm:group-hover:h-24 sm:group-hover:opacity-100
            sm:overflow-hidden sm:transition-all sm:duration-300
          ">
            <p className="text-blue-dk/70 text-[11px] sm:text-xs 3xl:text-base text-center leading-snug px-1 font-noto-sans-hebrew">
              {service.description}
            </p>
          </div>

          {/* ARROW: always visible on mobile, hover-only on desktop */}
          <div className="mt-2 text-orange opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
            <ArrowIcon className="w-4 h-4 rotate-180" />
          </div>
        </div>
      </Link>
    );

    const commonClasses = "relative bg-white border border-blue-dk/5 md:border-0 shadow-sm md:shadow-none transition-all";
    const responsiveClasses = "w-[calc(50%-6px)] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%)] 2xl:flex-1";

    if (!isAnimated) {
      return (
        <div key={service.href} className={`${commonClasses} ${responsiveClasses} rounded-2xl`}>
          {content}
        </div>
      );
    }

    return (
      <motion.div
        key={`service-${service.href}`}
        variants={staggerItem}
        className={`${commonClasses} ${responsiveClasses} md:rounded-none`}
      >
        {content}
        {index !== services.length - 1 && (
          <div className="hidden 2xl:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[40%] bg-blue-dk/10" />
        )}
      </motion.div>
    );
  };

  if (isMobile || shouldDisableAnimations) {
    return (
      <section id="services" dir="rtl" className="relative py-12 md:py-20 z-0 bg-cream">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-black text-blue-dk mb-10 md:mb-16 font-noto-sans-hebrew">
            השירותים שלנו
          </h2>
          <div className="max-w-[1400px] 3xl:max-w-[2000px] mx-auto">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-0">
              {services.map((s, i) => renderServiceCard(s, i, false))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" dir="rtl" className="relative py-12 md:py-20 z-0 bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <CitySkylineBackground />
      </div>

      <DecorativeShapes variant="services" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          key="services-heading"
          className="section-title text-center text-3xl md:text-5xl lg:text-6xl mb-10 md:mb-16 font-noto-sans-hebrew"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          השירותים שלנו
        </motion.h2>

        <div className="max-w-[1400px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
          <motion.nav
            key="services-nav"
            className="flex flex-wrap justify-center gap-3 md:gap-0 md:bg-white md:shadow-xl md:rounded-3xl md:border border-blue-dk/10 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {services.map((s, i) => renderServiceCard(s, i, true))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}