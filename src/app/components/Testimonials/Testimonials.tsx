"use client";

import { useMemo, memo } from "react";

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

const StarIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Edge definition only — no drop shadow. The cards sit in two tight rows, so
// any cast shadow pooled in the gaps and read as grey mush against the cream.
// A lit top edge plus a hairline ring gives the card its form on its own.
const CARD_ELEVATION = [
  "inset 0 1px 0 rgba(255, 255, 255, 0.22)",
  "inset 0 0 0 1px rgba(255, 255, 255, 0.10)",
].join(", ");

/**
 * Individual Testimonial Card Component.
 */
const TestimonialCard = ({ item, className = "" }: { item: typeof testimonials[0]; className?: string }) => {
  // Every entry is authored as "Name – service", so the two halves can carry
  // different typographic weight instead of running together on one line.
  const [author, service] = item.name.split(" – ");

  return (
    <figure
      className={`relative flex flex-col w-[320px] md:w-[500px] min-h-[240px] md:min-h-[300px] shrink-0 mr-6 md:mr-8 p-6 md:p-10 rounded-3xl overflow-hidden bg-gradient-to-bl from-[#1c3664] via-[#2a54a1] to-[#5da2ff] ${className}`}
      style={{ boxShadow: CARD_ELEVATION }}
      dir="rtl"
    >
      {/* Oversized quote mark — the card reads as a quote before a word is read.
          Parked on the left because the stars already own the top-right in RTL. */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1 left-5 text-[7rem] leading-[0.8] font-black text-white/[0.09]"
      >
        &rdquo;
      </span>

      <div
        className="flex gap-1 mb-4 md:mb-6"
        role="img"
        aria-label={`דירוג ${item.rating} מתוך 5 כוכבים`}
      >
        {[...Array(item.rating)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#f26722]" />
        ))}
      </div>

      {/* The gradient runs light toward the bottom-left corner; a navy text shadow
          keeps the white copy crisp where it passes over #5da2ff. */}
      <blockquote className="relative text-white text-base md:text-lg font-medium leading-[1.75] text-pretty [text-shadow:_0_1px_2px_rgba(28,54,100,0.45)]">
        {item.text}
      </blockquote>

      {item.name && (
        <figcaption className="relative mt-auto pt-5 md:pt-7">
          <div className="h-px w-full bg-white/20 mb-4" />
          <p className="text-white font-bold text-sm md:text-base leading-snug">
            {author}
          </p>
          {service && (
            <p className="text-white/70 font-medium text-xs md:text-sm leading-snug mt-1">
              {service}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
};

/**
 * Marquee Row Component. Driven by a CSS keyframe rather than Framer Motion:
 * the transform is composited off the main thread, and `animation-play-state`
 * gives a hover pause that actually works — the previous Framer `whileHover`
 * set a CSS animation property on an element that had no CSS animation, so
 * the row never paused. Card gaps live on the cards as margin-inline so the
 * -50% keyframe lands exactly on the second copy.
 */
const MarqueeRow = ({
  items,
  direction = "left",
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
}) => {
  const doubleItems = useMemo(() => [...items, ...items], [items]);

  // No edge mask here on purpose: the cards carry a strong gradient, and any
  // fade at the viewport edge washed them out into the cream background.
  // They simply run off the edge instead.
  return (
    <div
      className="marquee-viewport flex w-full overflow-hidden py-4 motion-reduce:overflow-x-auto"
      style={{ direction: 'ltr' }}
    >
      {/* No `will-change: transform` here. The track is thousands of pixels
          wide, and pinning it as a permanently-promoted compositor layer costs
          tens of megabytes of GPU texture per row — under memory pressure the
          browser evicts and re-rasterises it, which is visible as blinking
          while scrolling. The animation composites fine without the hint. */}
      <div
        className={`marquee-track flex w-max hover:[animation-play-state:paused] motion-reduce:animate-none ${
          direction === "left" ? "animate-marquee-back" : "animate-marquee-forth"
        }`}
      >
        {doubleItems.map((item, i) => (
          <TestimonialCard
            key={`testimonial-card-${direction}-${i}`}
            item={item}
            // The second copy exists only so the -50% keyframe can loop
            // seamlessly. On touch the animation is off and the row is swiped
            // instead, so the duplicate is dead weight — and hiding it halves
            // the width of the layer the compositor has to hold.
            className={i >= items.length ? "marquee-dup" : ""}
          />
        ))}
      </div>
    </div>
  );
};



/**
 * Main Testimonials Section with a Cream background (#f9f7f4).
 */
function TestimonialsSection() {
  // Split across the two rows rather than showing the same 17 twice. Halving
  // the cards per row halves the width of each animated track, which is what
  // the compositor has to hold as a texture — the full list produced an
  // 18000px-wide layer per row.
  const [rowOne, rowTwo] = useMemo(() => {
    const half = Math.ceil(testimonials.length / 2);
    return [testimonials.slice(0, half), testimonials.slice(half)];
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 md:py-24 bg-[#f9f7f4] overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-10 md:mb-14 text-center">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-5xl lg:text-6xl font-noto-sans-hebrew font-black text-blue-dk leading-tight tracking-[-0.02em] text-balance"
        >
          לקוחות <span className="text-orange">ממליצים</span>
        </h2>

        <p className="mt-4 md:mt-6 mx-auto max-w-2xl text-base md:text-lg text-blue-dk/70 leading-relaxed text-pretty">
          רכישה, מחזור ואיחוד הלוואות — מה שלקוחות מספרים אחרי שהתהליך נסגר.
        </p>

        {/* Visible counterpart to the AggregateRating in the page's JSON-LD:
            the rating a crawler reads is now the rating a visitor can see. */}
        <div className="mt-6 md:mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 ring-1 ring-blue-dk/10 shadow-[0_2px_10px_rgba(28,54,100,0.08)]">
          <span className="flex gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-[#f26722]" />
            ))}
          </span>
          <span className="font-bold text-sm md:text-base text-blue-dk">5.0</span>
          <span className="h-4 w-px bg-blue-dk/15" aria-hidden="true" />
          <span className="font-medium text-sm md:text-base text-blue-dk/70">
            {testimonials.length} המלצות מלקוחות
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        {/* Row 1: Scrolling Left */}
        <MarqueeRow items={rowOne} direction="left" />

        {/* Row 2: Scrolling Right */}
        <MarqueeRow items={rowTwo} direction="right" />
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);