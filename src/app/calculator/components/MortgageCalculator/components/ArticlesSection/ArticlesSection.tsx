"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";
import HomeIcon from "@/components/icons/HomeIcon";
import RefreshIcon from "@/components/icons/RefreshIcon";
import ChartIcon from "@/components/icons/ChartIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import CurrencyIcon from "@/components/icons/CurrencyIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";

const articles = [
  {
    href: "/services/mortgage-for-purchase",
    Icon: HomeIcon,
    title: "איך בוחרים משכנתא לרכישת דירה?",
    desc: "השלבים, המסלולים והדגשים שכדאי להכיר לפני שמתחייבים."
  },
  {
    href: "/services/loan-consolidation",
    Icon: RefreshIcon,
    title: "מיחזור ואיחוד הלוואות",
    desc: "איך מורידים החזר חודשי ומשפרים תנאים בצורה חכמה."
  },
  {
    href: "/services/mortgage-refused",
    Icon: ChartIcon,
    title: "סורבתם בבנק? יש מה לעשות",
    desc: "מה בודקים, איך מתקנים מסמכים ואיך מעלים סיכויי אישור."
  },
  {
    href: "/services/foreign-mortgages",
    Icon: GlobeIcon,
    title: "משכנתא לתושבי חוץ",
    desc: "מה התהליך כולל, אילו מסמכים צריך ומה ההבדלים בין הבנקים."
  },
  {
    href: "/services/reverse-mortgage",
    Icon: CurrencyIcon,
    title: "משכנתא הפוכה (60+)",
    desc: "איך זה עובד, למי זה מתאים ומה חשוב לבדוק מראש."
  },
  {
    href: "/services/renovation-mortgage",
    Icon: SettingsIcon,
    title: "משכנתא לשיפוץ",
    desc: "מימון שיפוץ בתנאי משכנתא במקום הלוואות יקרות."
  }
];

export default function ArticlesSection() {
  return (
    <motion.div
      className="w-full max-w-7xl px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      dir="rtl"
    >
      <div className="text-center pb-12">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-dk pb-4">
          מאמרים ומדריכים שכדאי לקרוא
        </h3>
        <p className="text-lg md:text-xl text-blue-dk/70 max-w-3xl mx-auto">
          בחרנו עבורכם כמה עמודים שיעשו סדר, יחסכו טעויות יקרות ויעזרו לכם לקבל החלטה נכונה.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item, index) => (
          <Link key={index} href={item.href} className="group block h-full">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-blue-dk/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">
              <div className="text-orange mb-4 transition-transform duration-300 group-hover:scale-110">
                <item.Icon className="w-14 h-14" />
              </div>
              <h4 className="text-lg md:text-xl font-black text-blue-dk group-hover:text-orange mb-3 transition-colors duration-300 leading-tight">
                {item.title}
              </h4>
              <p className="text-sm text-blue-dk/70 leading-relaxed mb-4 flex-grow">
                {item.desc}
              </p>
              <div className="text-orange opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <ArrowIcon className="w-5 h-5 rotate-180" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

