"use client";
import React, { useMemo, memo } from "react";
import { motion } from "framer-motion";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

/**
 * Static data for testimonials.
 */
const testimonials = [
  {
    rating: 5,
    text: 'הגענו עם תחושה שאולי כבר מאוחר לשפר משהו, אבל בדיקה מסודרת הראתה אחרת. קיבלנו תמונה ברורה של המסלולים והמספרים, בלי לחץ ובלי סיסמאות. המחזור שבוצע שיפר את הריביות וההחזר החודשי בצורה מורגשת.',
    name: 'רועי וטל מזרחי – מחזור משכנתא',
  },
  {
    rating: 5,
    text: 'באנו בלי ידע מוקדם ועם לא מעט חשש. קיבלנו הכוונה מדויקת כבר מהפגישה הראשונה, בלי סיבובים ובלי הבטחות מיותרות. בסוף התהליך סגרנו משכנתא בריביות טובות והרגשנו שיש מי שמוביל אותנו צעד־צעד עד הסוף.',
    name: 'עידו ובר שרז – רכישת דירה',
  },
  {
    rating: 5,
    text: 'היה לנו חשוב לעבוד עם מישהו זמין וקשוב, וזה בדיוק מה שקיבלנו. כל שאלה נענתה, גם בשעות לא שגרתיות, והכול הוסבר בגובה העיניים. תהליך לא פשוט שהפך להרבה יותר רגוע וברור.',
    name: 'נטלי ונאור יוחנן – רכישת דירה',
  },
  {
    rating: 5,
    text: 'לא האמנתי שאפשר לשנות את המצב בצורה כזו. אחרי בדיקה יסודית ותכנון נכון, הצלחנו למחזר ולאחד הלוואות ולחסוך סכום של מעל 200,000 ש״ח. עבודה מקצועית, עניינית ועם תוצאות שמדברות בעד עצמן.',
    name: 'אלי אלטי – מחזור משכנתא ואיחוד הלוואות',
  },
  {
    rating: 5,
    text: 'עברנו מחזור משכנתא מתוך רצון לשפר תנאים, וקיבלנו ניתוח מלא של המצב והאפשרויות. לא דחפו אותנו לשום כיוון, אלא הציגו את התמונה המלאה ונתנו לנו לבחור. התוצאה – תנאים טובים יותר ושקט נפשי.',
    name: 'ישראל והילה זבאליאנוב – מחזור ושיפור תנאים',
  },
  {
    rating: 5,
    text: 'מה שאהבנו במיוחד זה הסדר והשליטה בפרטים. הכול היה מתוכנן מראש, בלי הפתעות ובלי לחץ. ידענו בכל שלב מה הצעד הבא ומה מצופה מאיתנו. ליווי מדויק שעשה את ההבדל.',
    name: 'משפחת כוכב – משכנתא',
  },
  {
    rating: 5,
    text: 'נכנסנו לתהליך רגיש וחשוב עבורנו. קיבלנו יחס מכבד, סבלנות והסברים ברורים מאוד. הרגשנו שמקשיבים לנו באמת ולא ממהרים. יצאנו מהתהליך עם תחושת ביטחון והחלטה שאנחנו שלמים איתה.',
    name: 'אברהם ונינה כהן – משכנתא הפוכה',
  },
  {
    rating: 5,
    text: 'בתור רוכש ראשון הייתי מלא סימני שאלה. קיבלתי הסברים ברורים על כל שלב, כולל טעויות שכדאי להימנע מהן. התהליך היה מסודר ומדויק, והרגשתי שיש מי שמחזיק את ההגה עד החתימה.',
    name: 'דניאל פרץ – רכישת דירה ראשונה',
  },
  {
    rating: 5,
    text: 'המטרה שלנו הייתה להוריד עומס חודשי בלי להסתבך. נעשתה בדיקה מעמיקה של הנתונים והוצגו כמה אפשרויות, עם יתרונות וחסרונות. בחרנו את הפתרון שהכי מתאים לנו וההקלה מורגשת כבר עכשיו.',
    name: 'מאיה ואור בן־חיים – מיחזור והקטנת החזר חודשי',
  },
  {
    rating: 5,
    text: 'הייתי עם כמה הלוואות במקביל והרגשתי שהכול מתפזר. אחרי ניתוח יסודי נבנתה תוכנית מסודרת שאיחדה הכול למסגרת אחת ברורה. היום ההתנהלות הרבה יותר פשוטה והמספרים סוף סוף עובדים לטובתי.',
    name: 'יואב רז – איחוד הלוואות',
  },
  {
    rating: 5,
    text: 'היינו צריכים ליווי שיידע לקחת בחשבון תשלומים עתידיים ושינויים בדרך. קיבלנו תכנון מדויק וחשיבה קדימה, בלי הפתעות. הרגשנו בטוחים גם בהחלטות הגדולות ובפרטים הקטנים.',
    name: 'קרן וליאור אדרי – רכישת דירה מקבלן',
  },
  {
    rating: 5,
    text: 'פניתי רק כדי לבדוק אם בכלל יש טעם למחזר. קיבלנו תשובה כנה ומנומקת, בלי לנסות "למכור" תהליך מיותר. בסוף כן בוצע מחזור נקודתי שנתן שיפור אמיתי בתנאים.',
    name: 'אלון שביט – בדיקת כדאיות למחזור',
  },
  {
    rating: 5,
    text: 'היה לנו חשוב להבין ולא רק לחתום. כל סעיף הוסבר בצורה פשוטה וברורה, גם כששאלנו שוב. תהליך מורכב שהפך להרבה יותר רגוע בזכות ליווי מסודר וזמין.',
    name: 'נועה וגיא לנדסמן – משכנתא',
  },
  {
    rating: 5,
    text: 'לא חשבתי שאפשר לשפר תנאים בלי לעבור בנק, אבל ניהול מו״מ נכון שינה את התמונה. התהליך היה קצר, ממוקד ומבוסס על נתונים. התוצאה – ריביות טובות יותר בלי כאב ראש מיותר.',
    name: 'אמיר טולדנו – מיחזור בתוך אותו בנק',
  },
  {
    rating: 5,
    text: 'לא האמנתי שאפשר לשפר תנאים בלי לעבור בנק, אבל אחרי בדיקה יסודית וניהול מו״מ מדויק מול הבנק, בוצע מחזור חלקי שהוזיל משמעותית את הריביות. התהליך היה ענייני, מהיר ומבוסס על מספרים ולא על הבטחות. קיבלנו פתרון חכם שמתאים למצב הקיים שלי וחיסכון שמורגש מהחודש הראשון.',
    name: 'שגיא שמעונוב – מחזור חלקי והוזלת ריביות באותו הבנק',
  },
  {
    rating: 5,
    text: 'קיבלנו סקירה מלאה של המצב שלנו ושל האפשרויות, בלי לדחוף לכיוון מסוים. ההחלטה הייתה שלנו, אבל עם כל המידע הנכון. יצאנו עם תחושת שליטה ושקט.',
    name: 'הילה ושחר בן־נון – משכנתא ושיפור תנאים קיימים',
  },
  {
    rating: 5,
    text: 'זה היה תהליך רגיש עבורנו, והיחס שקיבלנו היה סבלני ומכבד. הכול הוסבר לאט ובבהירות, בלי לחץ ובלי קיצורי דרך. קיבלנו החלטה מושכלת שמתאימה לצרכים שלנו.',
    name: 'משפחת רוזנר – משכנתא הפוכה',
  },
];

const TestimonialCard = memo(({ item }: { item: (typeof testimonials)[0] }) => (
  <div
    dir="rtl"
    className="flex flex-col flex-shrink-0 rounded-2xl p-5 shadow-lg
      w-[280px] sm:w-[320px] md:w-[360px]
      min-h-[200px] h-auto"
    style={{
      background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #1e40af 100%)",
    }}
  >
    {/* Stars */}
    <div className="flex flex-row gap-1 mb-3 justify-end">
      {[...Array(item.rating)].map((_, i) => (
        <span key={i} className="text-orange-400 text-base leading-none">
          ★
        </span>
      ))}
    </div>

    {/* Review text */}
    <p className="text-white text-sm leading-relaxed text-right flex-1 mb-3">
      &quot;{item.text}&quot;
    </p>

    {/* Name */}
    {item.name && (
      <div className="border-t border-blue-400/50 pt-2 mt-auto">
        <p className="text-blue-200 text-xs text-right font-medium">{item.name}</p>
      </div>
    )}
  </div>
));

TestimonialCard.displayName = "TestimonialCard";

const MarqueeRow = memo(
  ({
    items,
    direction = "left",
    duration = 60,
    isMobile = false,
  }: {
    items: typeof testimonials;
    direction?: "left" | "right";
    duration?: number;
    isMobile?: boolean;
  }) => {
    const tripleItems = useMemo(() => [...items, ...items, ...items], [items]);

    return (
      <div className="flex overflow-hidden w-full">
        <motion.div
          className="flex gap-4 flex-nowrap"
          animate={{
            x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
          }}
          transition={{
            duration: isMobile ? duration * 0.8 : duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {tripleItems.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </motion.div>
      </div>
    );
  }
);

MarqueeRow.displayName = "MarqueeRow";

function TestimonialsSection() {
  const { isMobile } = usePerformanceSettings();
  const reversedTestimonials = useMemo(() => [...testimonials].reverse(), []);

  return (
    <section
      dir="rtl"
      className="w-full py-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #e8efff 100%)" }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">לקוחות ממליצים</h2>
      </div>

      <div className="flex flex-col gap-6">
        <MarqueeRow
          items={testimonials}
          direction="left"
          duration={isMobile ? 40 : 60}
          isMobile={isMobile}
        />
        <MarqueeRow
          items={reversedTestimonials}
          direction="right"
          duration={isMobile ? 45 : 70}
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);