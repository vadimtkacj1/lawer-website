"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

export default function SEOIntroduction() {
  return (
    <motion.div
      className="w-full max-w-5xl px-4 md:px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      dir="rtl"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-dk pb-5 md:pb-6 leading-tight">
        מחשבון משכנתא מתקדם - קבלו הערכה ראשונית תוך שניות
      </h1>
      <p className="text-base md:text-lg text-blue-dk/70 leading-relaxed max-w-3xl mx-auto">
        רוצים לדעת כמה תוכלו לקחת במשכנתא? המחשבון שלנו נותן לכם הערכה ראשונית מהירה.
        אבל חשוב לדעת - <span className="font-bold text-orange">כל מקצוע ומצב תעסוקתי מקבלים תנאים שונים לגמרי</span>.
        רופאים, מורים, עובדי מדינה, עצמאים - לכל אחד יש אחוזי ריבית ותנאים ייחודיים.
      </p>
    </motion.div>
  );
}

