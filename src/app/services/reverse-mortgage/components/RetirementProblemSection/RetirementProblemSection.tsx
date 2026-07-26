"use client";

import { m } from "framer-motion";
/* Ensure these variants exist in your @/lib/animations file */
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RetirementProblemSection() {
  return (
    // Background Cream (#fdfbf7), text color deep blue (#1c3664)
    <section className="relative py-12 md:py-32 bg-[#fdfbf7] overflow-hidden text-[#1c3664]" dir="rtl">
      
      {/* DECORATIVE ELEMENTS: Subtle light orange glows */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[5%] -right-[5%] w-[60%] h-[40%] bg-orange/5 blur-[80px] rounded-full lg:w-[30%]" />
        <div className="absolute bottom-[5%] left-0 w-[50%] h-[30%] bg-orange/5 blur-[60px] rounded-full lg:w-[25%]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "0px 0px 200px 0px" }} 
          variants={staggerContainer}
          // Mobile: stacked with larger gap (gap-y-12), Desktop: 12 columns
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-20 items-start"
        >
          
          {/* 1. MAIN CONTENT AREA (Desktop: 7-8 columns) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8 md:space-y-12 text-right">
            
            {/* HEADLINE: Responsive font sizes for mobile optimization */}
            <m.div variants={staggerItem} className="space-y-4 md:space-y-6">
              <h2 className="font-noto-sans-hebrew font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.2] tracking-tight">
                עם משכנתא הפוכה, הנכס שלכם יכול להניב לכם <br className="hidden md:block" />
                <span className="text-orange">כסף נזיל ולהעניק לכם את הנזילות הפיננסית שאתם צריכים</span>
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#1c3664]/90 leading-relaxed">
                – לשמירה על רמת החיים, סיוע לילדים או מימון הוצאות בלתי צפויות, מבלי לוותר על הבעלות או לעבור דירה.
              </p>
            </m.div>

            {/* BIO: Clean separation for mobile with a subtle top border */}
            <m.div 
              variants={staggerItem}
              className="pt-8 border-t border-[#1c3664]/10 space-y-4 md:space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-orange rounded-full" />
                <span className="text-orange font-bold text-xs md:text-sm tracking-widest uppercase">אבי – הבית למשכנתאות</span>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1c3664]/80 font-light leading-relaxed">
                נעים להכיר, אני אבי בוקעי, הבעלים של "אבי – הבית למשכנתאות". עם ניסיון של מעל 7 שנים ורקע כיוצא המערכת הבנקאית, אני פוגש לא מעט פנסיונרים שיושבים על "מכרה זהב" – הבית שלהם – אך חיים בצמצום.
              </p>
            </m.div>
          </div>

          {/* 2. QUOTE SECTION: Clean mobile impact */}
          <m.div 
            variants={staggerItem}
            className="lg:col-span-5 xl:col-span-4 w-full"
          >
            {/* Quote block: Responsive pr (6 on mobile, 10 on desktop) */}
            <div className="relative p-0 border-r-4 border-orange pr-6 md:pr-10 lg:mt-4">
              
              {/* FIXED SVG: Sizing moved to className to resolve TypeScript error */}
              <div className="absolute -top-6 right-0 text-orange/20">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-10 h-10 md:w-[60px] md:h-[60px]"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12M5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12" />
                </svg>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-orange">הבשורה הטובה: יש פתרון.</h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic leading-tight text-[#1c3664]">
                  "משכנתא הפוכה מאפשרת לכם להשתמש בכסף שצברתם בקירות הבית, <span className="text-orange">מבלי לעבור דירה וללא החזר חודשי."</span>
                </p>
                
                {/* Visual trust element */}
                <div className="pt-4 flex items-center gap-3 text-[#1c3664]/50 text-[13px] md:text-sm font-medium">
                   <div className="w-8 h-[1px] bg-[#1c3664]/20" />
                   <span>הצטרפו למאות משפחות שכבר נהנות מהחופש</span>
                </div>
              </div>
            </div>
          </m.div>

        </m.div>
      </div>

      {/* REFINED BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="dot-pattern-final" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.4" fill="#1c3664" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern-final)" />
        </svg>
      </div>
    </section>
  );
}