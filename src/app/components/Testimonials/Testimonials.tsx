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
    text: 'פנינו לרם אחרי תקופה ארוכה שניסינו למכור לבד ללא הצלחה. מהרגע הראשון הרגשנו שיש על מי לסמוך. התהליך נוהל בצורה מסודרת, שקופה ומקצועית ובסוף נמכר במחיר טוב משציפינו.',
    name: 'עידו בר-לב',
  },
  {
    rating: 5,
    text: 'קיבלנו ליווי מלא מהשלב הראשון ועד חתימה. כל שאלה קיבלה מענה במהירות ובסבלנות. רם ידע להרגיע ברגעים מלחיצים ולנווט את העסקה בצורה חכמה.',
    name: 'שירה מלמד',
  },
  {
    rating: 5,
    text: 'עבדנו עם הרבה אנשי מקצוע בעבר, אבל רמת הדיוק, האמינות והיחס האישי שקיבלנו כאן הייתה מעל הכל. דאג לאינטרסים שלנו ולא לחץ לשום החלטה.',
    name: 'תומר כהנא',
  },
  {
    rating: 5,
    text: 'השכרנו דירה דרך רם והוא מצא שוכרים איכותיים בזמן קצר מאוד. ההתנהלות הייתה נעימה וברורה לאורך כל הדרך.',
    name: 'מאיה הדרי',
  },
  {
    rating: 5,
    text: 'ניהול נכס ברמה גבוהה. לא היינו צריכים להתעסק עם כלום — טיפול בתקלות, חוזים ושוכרים הכל עבר דרכו בצורה חלקה.',
    name: 'יובל פרקש',
  },
  {
    rating: 5,
    text: 'מקצוען אמיתי. בדק את השוק לעומק, תימחר נכון והביא קונים רציניים בלבד. חסך לנו המון זמן והתעסקות.',
    name: 'דנה קסטן',
  },
  {
    rating: 5,
    text: 'לא רק מתווך אלא יועץ. הסביר כל שלב בתהליך והיה זמין תמיד. הרגשנו שיש מי שמייצג אותנו באמת.',
    name: 'אוראל סויסה',
  },
  {
    rating: 5,
    text: 'העסקה הייתה מורכבת מאוד, אבל רם ניהל משא ומתן בצורה חכמה והצליח לגשר בין הצדדים. שירות ברמה גבוהה.',
    name: 'נטלי רוזן',
  },
  {
    rating: 5,
    text: 'שילוב של מקצועיות ואנושיות. תמיד בגובה העיניים ובלי משחקים. בדיוק מה שצריך בעולם הנדל״ן.',
    name: 'אלון שמואלי',
  },
  {
    rating: 5,
    text: 'מהפגישה הראשונה ידענו שאנחנו בידיים טובות. מכר את הדירה במהירות ובמחיר מצוין. ממליצה בחום.',
    name: 'הילה בר-און',
  },
  {
    rating: 5,
    text: 'חיים ליווה אותנו ברכישת דירה ראשונה. הסביר הכל בסבלנות, בדק פרטים שלא חשבנו עליהם ונתן ביטחון לאורך כל הדרך.',
    name: 'נועם רפאלי',
  },
  {
    rating: 5,
    text: 'מקצועיות יוצאת דופן. הבין בדיוק את הצרכים שלנו והתאים נכס בצורה מדויקת. חסך לנו חודשים של חיפושים.',
    name: 'אורי גלילי',
  },
  {
    rating: 5,
    text: 'ניהל עבורנו השכרת נכס — הכל נעשה מסודר, חוזים ברורים ושוכרים מצוינים. ראש שקט אמיתי.',
    name: 'לירון ברקאי',
  },
  {
    rating: 5,
    text: 'משא ומתן חכם והוגן לשני הצדדים. הרגשנו שמדובר באדם ישר שמכבד גם מוכרים וגם קונים.',
    name: 'גל סער',
  },
  {
    rating: 5,
    text: 'היה זמין תמיד גם מעבר לשעות העבודה. כל התהליך עבר בצורה נעימה וללא הפתעות.',
    name: 'רוני אבידן',
  },
  {
    rating: 5,
    text: 'חיים ידע להעריך נכון את שווי הדירה ולהביא קונים מתאימים בלבד. מכירה מהירה ומדויקת.',
    name: 'עדן שלו',
  },
  {
    rating: 5,
    text: 'שירות אישי ואכפתי. הרגשנו שהוא באמת רוצה שנעשה עסקה נכונה ולא סתם לסגור עסקה.',
    name: 'בר פלד',
  },
  {
    rating: 5,
    text: 'עברנו כמה מתווכים לפניו — ההבדל היה משמעותי. סדר, ארגון ותחושת ביטחון מהרגע הראשון.',
    name: 'מיכל דרור',
  },
  {
    rating: 5,
    text: 'העסקה נראתה תקועה אבל חיים הצליח לפתור את המחלוקות ולהוביל לחתימה. מקצוען אמיתי.',
    name: 'איתן מורג',
  },
  {
    rating: 5,
    text: 'אדם נעים, ישר והגון. בדיוק מי שרוצים לידכם בעסקת נדל״ן. ממליץ לכל מי שמחפש תיווך איכותי.',
    name: 'רותם כנפי',
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
  // Use a 3x duplication strategy to ensure the line is always filled during infinite transit.
  // We animate from 0% to -33.33% (the first full set of items).
  const tripleItems = useMemo(() => [...items, ...items, ...items], [items]);
  
  return (
    <div className="flex w-full overflow-hidden" style={{ direction: 'ltr' }}>
      <motion.div
        key={`testimonials-marquee-${direction}-${duration}`}
        className="flex gap-6 md:gap-8 py-4"
        initial={{ x: direction === "left" ? "0%" : "-33.33%" }}
        animate={{ x: direction === "left" ? "-33.33%" : "0%" }}
        transition={{
          duration: isMobile ? duration * 1.8 : duration, // Much slower on mobile for better performance
          ease: "linear",
          repeat: Infinity,
        }}
        // FIX: 'whileHover' on mobile triggers a permanent pause upon the first touch.
        // We disable it for mobile users.
        whileHover={!isMobile ? { animationPlayState: "paused" } : {}}
      >
        {tripleItems.map((item, i) => (
          <TestimonialCard key={`testimonial-card-${direction}-${i}`} item={item} />
        ))}
      </motion.div>
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