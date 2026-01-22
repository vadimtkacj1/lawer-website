"use client";

import React from "react";

export default function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-48 bg-cream overflow-hidden border-b border-[#1c3664]/10" dir="rtl">
      
      {/* 1. STRONG BLUEPRINT BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.15]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="bold-blueprint-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1c3664" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2" fill="#1c3664" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bold-blueprint-grid)" />
        </svg>

        {/* Heavy Architectural Markers */}
        <div className="absolute top-1/4 left-[10%] text-[#1c3664] text-6xl font-black">+</div>
        <div className="absolute bottom-1/3 right-[12%] text-[#F1662A] text-5xl font-black">+</div>
        
        {/* Bold Technical Crosshair */}
        <svg className="absolute top-1/2 left-1/4 w-12 h-12 text-[#1c3664] opacity-30" viewBox="0 0 100 100">
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="4" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl text-right">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Title and Description Section (Right) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="font-noto-sans-hebrew font-black text-5xl md:text-7xl lg:text-8xl text-[#1c3664] leading-[1.1]">
                החלום הוא ישראלי, <br />
                <span className="text-[#F1662A] relative inline-block">
                  אבל המציאות מורכבת.
                  <svg className="absolute -bottom-4 left-0 w-full h-2 text-[#1c3664]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 L100,5" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-[#1c3664] font-light leading-relaxed max-w-3xl">
                ההחלטה לקנות דירה בישראל היא צעד כלכלי משמעותי עבור תושבי חו"ל רבים. בין אם אתם מחפשים "דירת מפלט" לחופשות, נכס להשקעה שמניב תשואה שקלית, או מתכננים מגורים עתידיים – שוק הנדל"ן הישראלי מציע הזדמנויות רבות.
              </p>
              <p className="text-xl md:text-2xl text-[#1c3664]/80 font-light leading-relaxed max-w-3xl border-r-2 border-[#F1662A]/30 pr-6">
                אבל אז מגיעה המציאות: הבנקים בישראל עובדים אחרת לגמרי ממה שאתם מכירים בארה"ב, צרפת או אנגליה. השפה שונה, הרגולציה נוקשה, והפרשי השעות הופכים כל בירור קטן למבצע לוגיסטי מורכב.
              </p>
            </div>
          </div>

          {/* Expert Bio - FRAMELESS DESIGN (Left) */}
          <div className="lg:col-span-5 relative lg:mt-12">
            <div className="relative pr-8 border-r-4 border-[#F1662A]">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-[#F1662A] font-bold text-xl tracking-wide italic">נעים להכיר, אני</p>
                  <h3 className="text-4xl md:text-5xl font-black text-[#1c3664]">אבי בוקעי</h3>
                  <p className="text-[#1c3664]/60 font-bold text-lg">הבעלים של "אבי - הבית למשכנתאות"</p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg md:text-xl lg:text-2xl text-[#1c3664] font-medium leading-relaxed">
                    כיוצא המערכת הבנקאית וכמי שמכיר את המערכת הבנקאית הישראלית מבפנים, אני משמש כ"עיניים" של תושבי חוץ רבים שרוצים לקנות נכס באיזור המרכז (חולון, בת ים, ראשון לציון, תל אביב והסביבה).
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl text-[#1c3664]/70 font-light leading-relaxed">
                    אני כאן כדי לגשר על המרחק ולוודא שהעסקה שלכם תעבור חלק, גם אם אתם נמצאים אלפי קילומטרים מכאן.
                  </p>
                </div>

                {/* Minimalist Professional Footer */}
                <div className="pt-10 flex items-center justify-between opacity-40">
                   <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#1c3664] rounded-full" />
                      <div className="w-2 h-2 bg-[#F1662A] rounded-full" />
                   </div>
                   <span className="text-sm font-bold text-[#1c3664] tracking-widest uppercase">אבי - הבית למשכנתאות</span>
                </div>
              </div>
            </div>

            {/* Subtle architectural axis line */}
            <div className="absolute top-0 -left-10 w-px h-full bg-[#1c3664]/10 hidden lg:block" />
          </div>

        </div>
      </div>
    </section>
  );
}