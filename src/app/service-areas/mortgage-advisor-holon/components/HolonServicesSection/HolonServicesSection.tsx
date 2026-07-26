"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    t: "משכנתא לרכישת דירה",
    d: "ליווי מלא מקצה לקצה לזוגות צעירים ומשפרי דיור, משלב האישור העקרוני ועד קבלת המפתח לדירה החדשה שלכם בחולון.",
  },
  {
    t: 'משכנתא ל"דירה בהנחה" (מחיר למשתכן)',
    d: "זכיתם בהגרלה? נבנה תמהיל חכם שינצל את הטבת שווי השוק, ויגן עליכם מפני הקפיצות של מדד תשומות הבנייה עד האכלוס.",
  },
  {
    t: "מחזור משכנתא בחולון",
    d: "ערך הנכס שלכם בעיר כנראה עלה משמעותית בשנים האחרונות. זה בדיוק הזמן לבדוק את המשכנתא הישנה שלכם, למחזר אותה ולשפר תנאים מול הבנק.",
  },
  {
    t: "איחוד הלוואות",
    d: "מרגישים שהמינוס וההלוואות הקטנות והיקרות חונקים אתכם? ניקח את כל ההתחייבויות שלכם, נבצע איחוד הלוואות מקצועי לתוך המשכנתא של הבית בהחזר חודשי נמוך, ונחזיר לכם את האוויר לנשימה.",
  },
  {
    t: "משכנתא לכל מטרה כנגד הנכס",
    d: "הבית שלכם בחולון שווה כסף. צריכים לעזור לילדים לקנות דירה משלהם? מעוניינים להשקיע? נשתמש בנכס הקיים כדי להשיג לכם מימון זול וארוך טווח.",
  },
  {
    t: "משכנתא הפוכה לגיל השלישי",
    d: "בני 60 ומעלה ובבעלותכם דירה בחולון או הסביבה? קבלו סכום כסף נזיל לכל מטרה (לשמירה על רמת החיים, עזרה לנכדים או טיפולים רפואיים) – ללא החזר חודשי שוטף!",
  },
  {
    t: "משכנתא לתושבי חוץ ומשקיעים",
    d: 'גרים בחו"ל ורוצים לקנות נכס באזור המרכז? אני אהיה הנציג האישי שלכם בישראל, אנהל את הבירוקרטיה מול הבנקים ואדאג לעסקה חלקה ומשתלמת מרחוק.',
  },
  {
    t: "משכנתא למסורבים",
    d: "קיבלתם סירוב מהבנק? אל תתייאשו. בזכות הניסיון שלי כבנקאי לשעבר, אני יודע לנתח מורכבויות, להסביר חריגות ב-BDI, ולהגיש את התיק מחדש להצלחה.",
  },
];

export default function HolonServicesSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-40 bg-cream overflow-hidden" dir="rtl">
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-holon-services" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-holon-services)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px 200px 0px" }} variants={staggerContainer}>
          <m.div variants={staggerItem} className="mb-12 md:mb-20 max-w-5xl">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight mb-6">
              שירותי המשכנתא שלנו{" "}
              <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block">
                לתושבי חולון והסביבה
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-[#1c3664]/90 font-medium leading-relaxed">
              {`כיועץ משכנתאות מומלץ בעל תואר אקדמי בנדל"ן וניסיון עשיר מבפנים, "אבי - הבית למשכנתאות" מעניק מעטפת פיננסית מלאה לכל צורך:`}
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-20 items-start">
            {services.map((item, i) => (
              <m.div key={i} variants={staggerItem} className="relative pt-8 md:pt-14">
                <span className="absolute top-0 right-0 font-black text-[5rem] md:text-[8rem] lg:text-[10rem] text-orange opacity-[0.18] z-0 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10 pr-5 md:pr-8 border-r-4 border-orange">
                  <h3 className="font-noto-sans-hebrew font-bold text-xl md:text-2xl lg:text-3xl text-[#1c3664] mb-3">
                    {item.t}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-[#1c3664]/80 font-light leading-relaxed">
                    {item.d}
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
