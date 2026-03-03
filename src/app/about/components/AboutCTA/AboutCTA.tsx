"use client";

import Link from "next/link";
import { PHONE_NUMBER_RAW, PHONE_NUMBER } from "@/lib/phone";

export default function AboutCTA() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#1e3a5f" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* כותרת */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 md:mb-8 leading-tight">
            גרים בחולון, בת ים או באיזור המרכז?
            <span className="block text-orange mt-2">בואו ניפגש</span>
          </h2>

          {/* טקסט */}
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/90 leading-relaxed mb-8 md:mb-10 space-y-4">
            <p>
              אני מאמין בליווי אישי, בגובה העיניים, ומעטפת שחורגת מעבר לציפיות – בדיוק כמו שהייתי רוצה שיטפלו במשכנתא שלי.
            </p>
            <p>
              רוצים לחסוך זמן, כסף ובירוקרטיה? השאירו פרטים בטופס למטה או חייגו אלינו לשיחת ייעוץ ראשונית.
            </p>
            <p className="text-orange font-black text-xl sm:text-2xl md:text-3xl">
              אני אדאג שאת המשכנתא הבאה שלכם תיקחו בראש שקט.
            </p>
          </div>

          {/* כפתורים */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-black
                       bg-orange text-white rounded-full hover:bg-orange/90 transition-all duration-300
                       hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl w-full sm:w-auto"
              aria-label="השאירו פרטים - מעבר לטופס יצירת קשר"
            >
              השאירו פרטים
            </Link>
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-black
                       bg-white text-blue-dk rounded-full hover:bg-white/90 transition-all duration-300
                       hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
