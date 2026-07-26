"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function FinancialControlCTA() {
  return (
    // Explicitly set text-right and dir="rtl" for Hebrew layout
    <section dir="rtl" className="py-24 lg:py-32 bg-[#FAF7F2] overflow-hidden text-right font-noto-sans-hebrew">
      <div className="container mx-auto px-6 max-w-5xl">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "0px 0px 200px 0px" }} 
          variants={staggerContainer}
          // Changed items-center to items-start to keep everything right-aligned on all screens
          className="flex flex-col items-start text-right"
        >
          
          {/* Call to Action Title */}
          <m.div variants={staggerItem} className="mb-8 w-full">
            <h2 className="text-4xl md:text-6xl font-black text-[#1c3664] leading-tight">
              מוכנים להחזיר לעצמכם את <br />
              <span className="text-[#F1662A]">השליטה הכלכלית?</span>
            </h2>
            {/* Removed mx-auto to keep the line strictly to the right */}
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full mt-6" />
          </m.div>

          {/* Explanatory Text */}
          <m.div variants={staggerItem} className="max-w-3xl mb-12">
            <p className="text-xl md:text-2xl text-[#1c3664]/90 leading-relaxed font-light">
              תושבי חולון, בת ים, ראשון לציון, תל אביב והסביבה – אם אתם מרגישים שההתחייבויות חונקות אתכם, אל תחכו שהמצב יחמיר. 
              הגיע הזמן לבדוק כמה באמת תוכלו לחסוך בכל חודש. 
            </p>
            <p className="text-xl md:text-2xl text-[#1c3664] font-bold mt-6 italic">
              אני מזמין אתכם לשיחת אבחון מקצועית שבה נבדוק יחד איך "מנקים את השולחן" ויוצאים לדרך חדשה ובטוחה.
            </p>
          </m.div>

          {/* Button Link */}
          <m.div variants={staggerItem} className="w-full sm:w-auto">
            <a 
              href="#contact" 
              className="inline-block w-full sm:w-auto text-center py-6 px-12 bg-[#1c3664] text-white rounded-2xl font-bold text-xl shadow-xl shadow-[#1c3664]/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              בואו נבדוק כמה תחסכו בחודש הבא
            </a>
            
            {/* Signature Section - aligned to the right */}
            <div className="mt-8 flex flex-col items-start opacity-60">
                <span className="text-lg font-black text-[#1c3664]">אבי בוקעי</span>
                <span className="text-[#1c3664] text-sm font-medium">אבי - הבית למשכנתאות</span>
            </div>
          </m.div>

        </m.div>
      </div>
    </section>
  );
}