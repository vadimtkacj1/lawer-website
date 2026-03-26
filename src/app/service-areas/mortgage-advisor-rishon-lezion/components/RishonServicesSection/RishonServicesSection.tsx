"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    t: "משכנתא לרכישת דירה",
    d: "ליווי צמוד מקצה לקצה לזוגות צעירים ולמשפרי דיור. החל מהשגת אישור עקרוני ועד קבלת המפתח, בין אם אתם קונים בנחלת יהודה היוקרתית או במערב העיר.",
  },
  {
    t: 'משכנתא ל"דירה בהנחה" (מחיר למשתכן)',
    d: "התמחות מיוחדת באלפי היחידות שנבנו בשכונות נרקיסים ורקפות (בסיס צריפין). אנו בונים משכנתא חכמה המנצלת את הטבות שווי השוק וחוסכת לכם הון עצמי יקר.",
  },
  {
    t: "מחזור משכנתא בראשון לציון",
    d: "שווי הנכסים בראשון קפץ בעשרות אחוזים בשנים האחרונות. ננצל את עליית הערך הזו כדי לבצע מחזור, לשפר דרמטית את התנאים ולהקטין את הריביות שאתם משלמים לבנק.",
  },
  {
    t: "איחוד הלוואות בראשון לציון",
    d: 'סובלים מהחזרים חודשיים חונקים? אנו מבצעים איחוד הלוואות בראשל"צ לתוך המשכנתא, מה שמאפשר לכם להוריד אלפי שקלים מההוצאה החודשית ולהתחיל מחדש בראש שקט.',
  },
  {
    t: "משכנתא לשיפוץ הבית",
    d: "מתגוררים במרכז העיר או במזרח הוותיק ורוצים לשדרג? במקום הלוואות יקרות, נגייס עבורכם משכנתא לשיפוץ בתנאים המשתלמים ביותר בשוק.",
  },
  {
    t: "משכנתא לכל מטרה כנגד הנכס",
    d: 'הבית שלכם בראשון שווה הרבה כסף. נשתמש בו כבטוחה כדי להשיג לכם מימון זול לכל מטרה – מעזרה לילדים ועד השקעות נדל"ן מניבות.',
  },
  {
    t: "משכנתא הפוכה (לגיל השלישי)",
    d: "פתרון ייחודי לבני 60 ומעלה תושבי העיר. קבלת סכום כסף פנוי על חשבון הדירה הקיימת, ללא צורך בהחזר חודשי שוטף, לטובת איכות חיים או עזרה למשפחה.",
  },
  {
    t: "משכנתא לתושבי חוץ ומשקיעים",
    d: "ראשון לציון היא מגנט למשקיעים. אני מנהל עבורכם את כל הבירוקרטיה הישראלית מול הבנקים בארץ, ודואג לעסקה משתלמת גם כשאתם מעבר לים.",
  },
  {
    t: "טיפול במסורבי בנק",
    d: 'הבנק בראשון אמר לכם "לא"? בזכות הניסיון שלי כבנקאי לשעבר, אני יודע איך להציג את התיק שלכם בצורה נכונה, להתגבר על בעיות BDI ולהשיג לכם את האישור המיוחל.',
  },
];

export default function RishonServicesSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-40 bg-cream overflow-hidden" dir="rtl">
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-rishon-services" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1c3664" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-rishon-services)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl 3xl:max-w-[110rem] text-right">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={staggerItem} className="mb-12 md:mb-20 max-w-5xl">
            <h2 className="font-noto-sans-hebrew font-black text-3xl md:text-6xl lg:text-7xl text-[#1c3664] leading-tight mb-6">
              שירותי המשכנתא שלנו{" "}
              <span className="text-orange border-b-4 md:border-b-8 border-orange pb-2 inline-block">
                לתושבי ראשון לציון והסביבה
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-[#1c3664]/90 font-medium leading-relaxed">
              {`כמשרד מוביל המאגד יועצי משכנתאות בראשון לציון, אנו מציעים מעטפת פיננסית מקיפה:`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-20 items-start">
            {services.map((item, i) => (
              <motion.div key={i} variants={staggerItem} className="relative pt-8 md:pt-14">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
