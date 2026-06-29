"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const whyUsBenefits = [
  { 
    t: "בדיקת אלטרנטיבות זולות", 
    d: "לפני שמתחייבים למשכנתא הפוכה, נבדוק אם ניתן למחזר משכנתא קיימת או לקחת משכנתא רגילה בתנאים טובים יותר, מה שיכול לחסוך עשרות אלפי שקלים בריביות." 
  },
  { 
    t: "הגנה על הירושה", 
    d: "העסקה בנויה כך שתפגע כמה שפחות בנכס שתשאירו לילדים." 
  },
  { 
    t: "בירוקרטיה מינימלית", 
    d: "בגיל השלישי, אין צורך לרוץ בין פקידים ושמאים – אנחנו מטפלים בהכל עבורכם." 
  }
];

export default function ReverseMortgageBenefits() {
  return (
    <section className="py-24 lg:py-44 bg-[#FAF7F2] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <m.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          {/* תיקון כותרת: הגדלת leading למניעת חפיפה וסידור שבירה במובייל */}
          <div className="mb-12 flex flex-col items-start">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-5xl lg:text-7xl text-[#1c3664] mb-6 leading-[1.15] md:leading-[1.1] max-w-5xl">
              למה לקחת משכנתא <br className="md:hidden" /> הפוכה דווקא איתנו?
            </h2>
            <div className="h-1.5 w-24 bg-[#F1662A] rounded-full" />
          </div>
          
          {/* פסקת הסבר מודגשת */}
          <div className="text-xl lg:text-3xl text-[#1c3664]/80 font-light leading-[1.4] max-w-4xl mb-24">
            משכנתא הפוכה מוצעת על ידי חברות ביטוח וגופים פיננסיים רבים. האינטרס שלהם ברור – למכור לכם הלוואה. 
            <span className="font-bold block mt-6 text-[#1c3664] border-r-4 border-[#F1662A] pr-6 leading-tight">
              היתרון שלנו כיועצים פרטיים: אנחנו רואים את התמונה המלאה שלכם ומתכננים את העסקה כך שתשרת אתכם באמת.
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {whyUsBenefits.map((benefit, i) => (
              <m.div key={i} variants={staggerItem} className="flex flex-col items-start group">
                
                {/* מספרים כתומים גדולים בשקיפות */}
                <span className="text-7xl lg:text-9xl font-black text-[#F1662A]/20 mb-6 group-hover:text-[#F1662A]/40 transition-colors duration-500 select-none">
                  0{i+1}
                </span>

                {/* תוכן היתרון עם יישור מושלם לימין */}
                <div className="border-r-2 border-[#1c3664]/10 pr-8 transition-all duration-500 group-hover:border-[#F1662A] text-right">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1c3664] mb-4 leading-tight">
                    {benefit.t}
                  </h3>
                  <p className="text-lg lg:text-xl text-[#1c3664]/70 font-light leading-relaxed">
                    {benefit.d}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}