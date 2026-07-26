"use client";

import React, { useMemo, memo } from "react";
import { m } from "framer-motion";
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
    text: 'היינו צריכים ליווי שיידע לקחת בחשבון תשלומים עתידיים ושינויים בדרך. קיבלנו תכנון מדויק וחשיבה קדימה, בלי הפתעות. הרגשנו בטוחים גם בהחלטות הגדולות וגם בפרטים הקטנים.',
    name: 'קרן וליאור אדרי – רכישת דירה מקבלן',
  },
  {
    rating: 5,
    text: 'פניתי רק כדי לבדוק אם בכלל יש טעם למחזר. קיבלתי תשובה כנה ומנומקת, בלי לנסות "למכור" תהליך מיותר. בסוף כן בוצע מחזור נקודתי שנתן שיפור אמיתי בתנאים.',
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
    text: 'לא האמנתי שאפשר לשפר תנאים בלי לעבור בנק, אבל אחרי בדיקה יסודית וניהול מו״מ מדויק מול הבנק, בוצע מחזור חלקי שהוזיל משמעותית את הריביות. התהליך היה ענייני, מהיר ומבוסס על מספרים ולא על הבטחות. קיבלתי פתרון חכם שמתאים למצב הקיים שלי וחיסכון שמורגש מהחודש הראשון.',
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

/**
 * Individual Testimonial Card Component.
 */
const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div
    className="flex flex-col justify-center w-[320px] md:w-[500px] min-h-[220px] md:min-h-[280px] p-6 md:p-10 bg-gradient-to-bl from-[#1c3664] via-[#2a54a1] to-[#5da2ff] rounded-3xl text-right shrink-0"
    style={{
      boxShadow: '0 15px 40px -12px rgba(28, 54, 100, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}
    dir="rtl"
  >
    {/* Star Ratings */}
    <div className="flex justify-start gap-1 mb-4 md:mb-6">
      {[...Array(item.rating)].map((_, i) => (
        <svg key={i} className="w-4 h-4 md:w-6 md:h-6 fill-[#f26722]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    {/* Testimonial Text */}
    <p className="text-white text-base md:text-xl font-medium leading-relaxed mb-4 md:mb-6">
      &ldquo;{item.text}&rdquo;
    </p>

    {/* Name */}
    {item.name && (
      <div className="mt-auto pt-4 border-t border-white/20">
        <p className="text-white text-sm md:text-base font-semibold">
          {item.name}
        </p>
      </div>
    )}
  </div>
);

/**
 * Marquee Row Component utilizing Framer Motion for high-performance looping.
 */
const MarqueeRow = ({ 
  items, 
  direction = "left", 
  duration = 60,
  isMobile = false 
}: { 
  items: typeof testimonials, 
  direction?: "left" | "right", 
  duration?: number,
  isMobile?: boolean 
}) => {
  // 2x duplication — one full copy animates off-screen and loops seamlessly.
  // We animate from 0% to -50% (left) or -50% to 0% (right).
  const doubleItems = useMemo(() => [...items, ...items], [items]);

  // Same edge mask as InfiniteMarquee: without it the cards are chopped
  // mid-word against the viewport edge instead of fading out.
  const edgeFade = 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)';

  return (
    <div
      className="flex w-full overflow-hidden"
      style={{
        direction: 'ltr',
        maskImage: edgeFade,
        WebkitMaskImage: edgeFade,
      }}
    >
      <m.div
        key={`testimonials-marquee-${direction}-${duration}`}
        className="flex gap-6 md:gap-8 py-4"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: isMobile ? duration * 1.8 : duration, // Much slower on mobile for better performance
          ease: "linear",
          repeat: Infinity,
        }}
        // FIX: 'whileHover' on mobile triggers a permanent pause upon the first touch.
        // We disable it for mobile users.
        whileHover={!isMobile ? { animationPlayState: "paused" } : {}}
      >
        {doubleItems.map((item, i) => (
          <TestimonialCard key={`testimonial-card-${direction}-${i}`} item={item} />
        ))}
      </m.div>
    </div>
  );
};



/**
 * Main Testimonials Section with a Cream background (#f9f7f4).
 */
function TestimonialsSection() {
  const { isMobile } = usePerformanceSettings();
  
  // Creating a reversed array for the second row to create visual contrast
  const reversedTestimonials = useMemo(() => [...testimonials].reverse(), []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#f9f7f4] overflow-hidden">
      <div className="container mx-auto px-4 mb-10 md:mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-[#1c3664]">
לקוחות ממליצים        </h2>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        {/* Row 1: Scrolling Left */}
        <MarqueeRow
          items={testimonials}
          direction="left"
          duration={200}
          isMobile={isMobile}
        />

        {/* Row 2: Scrolling Right */}
        <MarqueeRow
          items={reversedTestimonials}
          direction="right"
          duration={205}
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);