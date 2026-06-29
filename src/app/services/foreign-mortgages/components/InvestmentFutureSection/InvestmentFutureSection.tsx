"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function InvestmentFutureSection() {
  return (
    /* MAIN SECTION: Solid deep blue background */
    <section className="relative py-20 md:py-32 bg-[#1c3664] overflow-hidden" dir="rtl">
      
      {/* Visual Depth: Subtle radial gradient in the background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Main Container: RTL for Hebrew layout */}
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 2xl:max-w-[95rem]">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
        >
          
          {/* RIGHT COLUMN: Headlines and Main Text */}
          <div className="lg:col-span-7">
            <m.div variants={staggerItem} className="space-y-8 md:space-y-10">
              <h2 className="font-noto-sans-hebrew font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1]">
                משקיעים בעתיד <br />
                <span className="text-orange border-b-[6px] md:border-b-[10px] border-orange pb-2 inline-block">
                  בישראל
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-4xl">
                אל תתנו למרחק הפיזי למנוע מכם לבצע עסקה חכמה בארץ. בין אם אתם בניו יורק, לונדון או פריז – אני כאן בחולון כדי לדאוג לאינטרסים שלכם מול הבנקים הישראליים ולדאוג שתקבלו את התנאים הטובים ביותר.
              </p>
            </m.div>
          </div>

          {/* LEFT COLUMN: Featured Quote with Orange Sidebar */}
          <div className="lg:col-span-5">
            <m.div 
              variants={staggerItem}
              className="relative pr-8 md:pr-12 border-r-[6px] md:border-r-[8px] border-orange"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold italic leading-tight">
                "אני הזרוע הביצועית שלכם בישראל, מוודא שכל שקל מושקע בתנאים הטובים ביותר."
              </p>
              
              {/* Optional: Small orange dot at the bottom of the line for a finished look */}
              <div className="absolute -right-[11px] md:-right-[13px] bottom-0 w-4 h-4 bg-orange rounded-full border-4 border-[#1c3664]" />
            </m.div>
          </div>

        </m.div>
      </div>
    </section>
  );
}