"use client";

import { motion } from "framer-motion";
import { SearchCheck, ShieldAlert, Zap } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const aviProfessionalEdge = [
  { 
    t: "בדיקת אלטרנטיבות זולות", 
    d: "לפני שרצים למשכנתא הפוכה יקרה, אבדוק האם ניתן לבצע מיחזור או משכנתא רגילה שתחסוך לכם הון.",
    icon: SearchCheck 
  },
  { 
    t: "הגנה על הירושה", 
    d: "בניית העסקה בצורה טכנית ומדויקת שתפגע כמה שפחות בנכס שאתם משאירים לילדים.",
    icon: ShieldAlert 
  },
  { 
    t: "בירוקרטיה אפס", 
    d: "אנחנו מטפלים בהכל עבורכם - שמאים, פקידים וטפסים. אתם נשארים בראש שקט לגמרי.",
    icon: Zap 
  }
];

export default function AviAdvantageReverse() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
        >
          
          <motion.div variants={staggerItem} className="mb-20 lg:mb-24">
            <h2 className="font-noto-sans-hebrew font-black text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl text-[#1c3664] leading-tight">
              למה לקחת משכנתא הפוכה <br />
              <span className="text-orange">דווקא עם "אבי"?</span>
            </h2>
          </motion.div>

          {/* GRID: Ensures all items take full height of the row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {aviProfessionalEdge.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="flex flex-col items-end">
                
                {/* ICON SECTION */}
                <div className="text-orange mb-8 h-16 lg:h-20 flex items-end">
                  <item.icon className="w-12 h-12 lg:w-16 lg:h-16 3xl:w-24 3xl:h-24" strokeWidth={1.5} />
                </div>
                
                {/* CONTENT BLOCK: flex-1 ensures the border stretches equally */}
                <div className="flex-1 border-r-[6px] md:border-r-[8px] border-orange pr-6 lg:pr-8 flex flex-col">
                  <h3 className="font-noto-sans-hebrew font-black text-2xl lg:text-3xl 3xl:text-5xl text-[#1c3664] mb-4">
                    {item.t}
                  </h3>
                  <p className="text-lg lg:text-xl 3xl:text-3xl text-[#1c3664]/80 font-light leading-relaxed">
                    {item.d}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}