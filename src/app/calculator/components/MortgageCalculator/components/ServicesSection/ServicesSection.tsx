"use client";

import React from "react";
import { m } from "framer-motion";
import Link from "next/link";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";
import BuildingIcon from "@/components/icons/BuildingIcon";
import ReceiptPercentIcon from "@/components/icons/ReceiptPercentIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";

const services = [
  { href: "/services/dira-behanacha-mortgage", Icon: BuildingIcon, title: "מחיר למשתכן", desc: "ליווי ייעודי עם היכרות מעמיקה של המסלולים וההתאמות" },
  { href: "/services/debt-consolidation", Icon: ReceiptPercentIcon, title: "משכנתא לכל מטרה", desc: "הפיכת הלוואות יקרות לתשלום חודשי אחד נמוך ומשתלם" }
];

export default function ServicesSection() {
  return (
    <m.div
      className="w-full max-w-7xl px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUpFast}
      dir="rtl"
    >
      <div className="text-center pb-12">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-dk pb-4">
          עוד מאמרים ופתרונות באתר
        </h3>
        <p className="text-lg md:text-xl text-blue-dk/70 max-w-3xl mx-auto">
          קראו על סוגי משכנתאות, מיחזור, איחוד הלוואות ועוד — הכל במקום אחד.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group block h-full"
          >
            <div className="bg-white rounded-2xl p-8 shadow-md border border-blue-dk/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">
              <div className="text-orange mb-4 transition-transform duration-300 group-hover:scale-110">
                <service.Icon className="w-14 h-14" />
              </div>
              <h4 className="text-lg md:text-xl font-black text-blue-dk group-hover:text-orange mb-3 transition-colors duration-300 leading-tight">
                {service.title}
              </h4>
              <p className="text-sm text-blue-dk/70 leading-relaxed mb-4 flex-grow">
                {service.desc}
              </p>
              <div className="text-orange opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <ArrowIcon className="w-5 h-5 rotate-180" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-dk hover:bg-blue-dk/90 text-white px-8 py-4 rounded-xl text-lg font-black shadow-xl transition-all hover:scale-105"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </m.div>
  );
}

