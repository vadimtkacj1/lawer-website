"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    t: "משכנתא לרכישת דירה",
    d: "ליווי מלא ואישי לזוגות צעירים ומשפרי דיור, משלב האישור העקרוני לפני החתימה על החוזה ועד קבלת המפתח לדירה החדשה שלכם ברחבי העיר.",
  },
  {
    t: 'משכנתא ל"דירה בהנחה" (מחיר למשתכן)',
    d: "זכיתם בהגרלה באזור המרכז? נבנה תמהיל שמותאם במיוחד לרגולציה הייחודית של הפרויקטים האלו, תוך טיפול חכם במדד תשומות הבנייה כדי לחסוך לכם עשרות אלפי שקלים.",
  },
  {
    t: "מחזור משכנתא בבת ים",
    d: 'מחירי הדירות בעיר קפצו בצורה דרסטית בשנים האחרונות (במיוחד בקרבת הים והרכבת הקלה). משמעות הדבר היא ששווי הנכס שלכם עלה, וזהו תזמון מושלם לבצע מחזור, להקטין את הריביות ולקצר את שנות התשלום.',
  },
  {
    t: "איחוד הלוואות בבת ים",
    d: "אם התשלומים החודשיים על הלוואות קטנות ומינוס בחשבון מעיקים עליכם, אנו נבצע תהליך של איחוד חובות אל תוך המשכנתא. נפרוס את החוב לטווח ארוך בריבית זולה ונוריד משמעותית את ההחזר החודשי שלכם.",
  },
  {
    t: "משכנתא לשיפוץ הבית",
    d: "קניתם דירה ישנה במרכז העיר ואתם רוצים לשדרג אותה? במקום לקחת הלוואות מסחריות יקרות, נגייס עבורכם כסף זול במסגרת משכנתא לשיפוצים.",
  },
  {
    t: "משכנתא לכל מטרה כנגד הנכס",
    d: "שימוש בדירה הקיימת שלכם כבטוחה כדי לקבל הלוואה זולה עבור עזרה לילדים עם הון עצמי, חופשה משפחתית או הקמת עסק.",
  },
  {
    t: "משכנתא הפוכה (לגיל השלישי)",
    d: "פתרון מעולה לבני 60 ומעלה תושבי העיר המחזיקים בנכס. קבלת סכום כסף פנוי על חשבון הדירה, ללא החזר חודשי שוטף, לשמירה על רמת החיים או לעזרה לנכדים.",
  },
  {
    t: "משכנתא לתושבי חוץ ומשקיעים",
    d: 'בת ים מושכת אליה משקיעים מכל העולם (צרפת, ארה"ב, רוסיה ועוד). אני משמש כנציג האישי שלכם בישראל, מנהל את כל הבירוקרטיה מול הבנקים בארץ ודואג לעסקה חלקה גם מרחוק.',
  },
  {
    t: "טיפול במסורבי בנקים",
    d: 'הבנק סירב לכם בגלל BDI שלילי או בעיות אחרות? בזכות ההיכרות שלנו עם המערכת מבפנים, אנחנו יודעים איך לטפל בתיקים מורכבים, לנקות את כתמי העבר ולהפוך את ה"לא" ל"כן".',
  },
];

export default function BatYamServicesSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-40 bg-cream overflow-hidden" dir="rtl">
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-batyam-services" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-batyam-services)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px 0px 200px 0px" }} variants={staggerContainer}>
          <m.div variants={staggerItem} className="mb-12 md:mb-20 max-w-5xl">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight mb-6">
              שירותי המשכנתא שלנו{" "}
              <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block">
                לתושבי בת ים והסביבה
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-[#1c3664]/90 font-medium leading-relaxed">
              {`כצוות של יועצי משכנתאות מנוסים בעלי ידע אקדמי בנדל"ן, אנו מציעים מעטפת פתרונות מלאה:`}
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
