"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpFast, scaleIn, staggerContainer, staggerItem, viewportOptions } from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import Link from "next/link";
import LazyMount from "@/components/ui/LazyMount";

const services = [
  {
    title: "איחוד הלוואות – להחזיר את האוויר לנשימה",
    description:
      "זהו השירות המבוקש ביותר שלנו ב\"אבי - הבית למשכנתאות\". אם המינוס לוחץ וההחזרים החודשיים על הלוואות שונות (רכב, אשראי, הלוואות לכל מטרה) מכבידים עליכם – יש פתרון. אנחנו מתמחים במינוף הנכס הקיים כדי לאחד את כל ההלוואות הקטנות והיקרות למשכנתא אחת מסודרת, בפריסה ארוכה ובריבית נמוכה משמעותית. המטרה: להקטין את ההחזר החודשי באלפי שקלים ולהעניק לכם שקט נפשי.",
  },
  {
    title: "מיחזור משכנתא – למה לשלם יותר?",
    description:
      "לקחתם משכנתא לפני מספר שנים? ייתכן שהריביות השתנו או שהסטטוס הכלכלי שלכם השתפר. בדיקת כדאיות למיחזור (שאנו מבצעים ללא עלות!) יכולה לחסוך לכם הון לאורך חיי המשכנתא.",
  },
  {
    title: "משכנתא לזוגות צעירים ולציבור החרדי",
    description:
      "אנו מתמחים בהשגת אחוזי מימון מקסימליים (כולל פתרונות יצירתיים למימון גבוה במקרים המתאימים), ומכירים לעומק את צרכי הציבור החרדי, הן בחולון והמרכז והן בערים כמו נתיבות. הליווי כולל טיפול בתוכניות \"מחיר למשתכן\" וסיוע בקבלת משכנתא ראשונה בתנאים אופטימליים.",
  },
  {
    title: "פתרונות למסורבי בנקים ובעלי דירוג אשראי שלילי",
    description:
      "קיבלתם סירוב מהבנק? זה לא סוף העולם. בזכות ההיכרות המעמיקה עם המערכת, אני יודעים איך לבנות את התיק מחדש ולפנות לגורמי המימון הנכונים כדי להפוך את ה\"לא\" ל\"כן\".",
  },
];

const faqs = [
  {
    question: "באיזה שלב כדאי לפנות ליועץ משכנתאות?",
    answer:
      "מומלץ לפנות עוד לפני החתימה על חוזה הדירה! כך נדע בדיוק מה התקציב שלכם, נוציא אישור עקרוני ונימנע מהפתעות לא נעימות אחרי שכבר התחייבתם למוכר.",
  },
  {
    question: "האם בדיקת כדאיות למיחזור עולה כסף?",
    answer:
      "אצלי ב\"אבי - הבית למשכנתאות\", הבדיקה הראשונית לכדאיות מיחזור היא ללא עלות. אם אין חיסכון – לא נמחזר.",
  },
  {
    question: "האם בחירת הריביות היא הדבר הכי חשוב?",
    answer:
      "זו טעות נפוצה. הריבית היא חשובה, אבל בניית תמהיל נכון (חלוקת המסלולים) והתאמת המשכנתא ליכולת ההחזר העתידית שלכם חשובה אפילו יותר. ריבית נמוכה במסלול לא יציב יכולה לעלות לכם ביוקר בעתיד.",
  },
];

export default function ServicesHero() {
  return (
    <>
    <section className="relative min-h-screen lg:h-screen overflow-hidden bg-cream z-10 rtl">
      <DecorativeShapes variant="hero" />

      {/* --- Mobile View --- */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src="/images/expert-jpeg.webp"
          alt="אבי - יועץ משכנתאות מומחה"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* More opaque gradient for better text visibility on mobile */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cream/30 via-cream/10 to-blue-dk/85" />
      </div>

      {/* --- Desktop & Main Layout --- */}
      <div className="relative flex flex-col lg:flex-row h-full min-h-screen">
        
        {/* 1. Блок с текстом */}
        <div className="w-full lg:w-1/2 flex items-start justify-end relative z-20 px-4 sm:px-6 lg:pr-12 xl:pr-20 pt-24 lg:pt-48 pb-12 overflow-x-hidden">
          <div className="w-full max-w-2xl text-right">
            <div className="flex flex-col items-end w-full">
              
              <motion.h1
                className="font-noto-sans-hebrew font-black leading-[1.1] mb-3 sm:mb-4 md:mb-3 lg:mb-2
                           text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl
                           text-white lg:text-blue-dk
                           text-center lg:text-right
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] lg:drop-shadow-none
                           w-full break-words overflow-wrap-anywhere relative z-20"
                initial="hidden"
                animate="visible"
                variants={fadeInUpFast}
                style={{
                  marginRight: '-10%',
                }}
              >
                <span className="text-white lg:text-blue-dk">יועץ משכנתאות בחולון והמרכז:</span>{" "}
                <span className="bg-blue-dk text-white px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5 rounded-md inline-block">
                  המומחיות של יוצא מערכת הבנקאות אצלכם בכיס
                </span>
              </motion.h1>
            </div>
          </div>
        </div>

        {/* 2. Блок с экспертом (Desktop) */}
        <motion.div
          className="hidden lg:block w-1/2 relative"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <div 
            className="relative h-full w-full"
            style={{
              WebkitMaskImage: `
                linear-gradient(to right, black 75%, transparent 100%), 
                linear-gradient(to top, transparent 0%, black 15%)
              `,
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect',
            }}
          >
            <Image
              src="/images/expert.jpeg"
              alt="אבי - יועץ משכנתאות מומחה"
              fill
              priority
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: 'center 5%' }}
              quality={100}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cream/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>

    </section>

    {/* Main Content Section */}
    <LazyMount rootMargin="500px 0px">
      <section className="relative bg-cream z-10 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={staggerContainer}
            >
              {/* Introduction */}
              <motion.div
                className="mb-12 lg:mb-16 text-right"
                variants={staggerItem}
              >
                <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed mb-6">
                  לקיחת משכנתא היא כנראה העסקה הכלכלית הגדולה ביותר שתעשו בחייכם. בין אם אתם זוג צעיר שרוכש דירה ראשונה בחולון, משפחה שמרגישה לחץ כלכלי כבד מההחזרים החודשיים וזקוקה לאיחוד הלוואות, או משקיעים שמחפשים למקסם תשואה – אתם צריכים מישהו שמדבר את השפה של הבנק, אבל עובד בשבילכם.
                </p>
                <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed mb-6">
                  נעים להכיר, אני אבי בוקעי, הבעלים של "אבי - הבית למשכנתאות". עם ניסיון של מעל 7 שנים, תואר ראשון במנהל עסקים (התמחות בנדל"ן ותשתיות) ורקע כיוצא המערכת הבנקאית, אני כאן כדי להפוך את הבירוקרטיה המורכבת לחיסכון של עשרות ואף מאות אלפי שקלים.
                </p>
              </motion.div>

              {/* Why Section */}
              <motion.div
                className="mb-12 lg:mb-16 text-right"
                variants={staggerItem}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-blue-dk mb-6">
                  למה דווקא "אבי - הבית למשכנתאות"? היתרון של איש מבפנים
                </h2>
                <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed mb-4">
                  <span className="font-black text-blue-dk">יועץ הבנק עובד עבור הבנק – אני עובד עבורכם.</span> זה ההבדל שחוסך לכם עשרות אלפי שקלים.
                </p>
                <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed">
                  כיוצא בנק דיסקונט, אני מכיר את <span className="font-black text-orange">"האותיות הקטנות"</span> – יודע על אילו ריביות להתמקח, איפה ללחוץ, ואיך להגיש תיק שיקבל אישור גם במקרים מורכבים.
                </p>
              </motion.div>

              {/* Services */}
              <motion.div
                className="mb-12 lg:mb-16"
                variants={staggerItem}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-blue-dk mb-8 text-right">
                  השירותים שלנו: פתרונות פיננסיים מתקדמים
                </h2>
                <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed mb-8 text-right">
                  המשרד שלי מספק מעטפת מלאה לתושבי חולון, בת ים, ראשון לציון, תל אביב והסביבה (וגם ללקוחות בפריסה ארצית). השירותים המובילים שלנו כוללים:
                </p>
                
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/80 md:bg-white/70 rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-dk/10"
                      variants={staggerItem}
                    >
                      <h3 className="text-2xl lg:text-3xl font-black text-blue-dk mb-4 text-right">
                        {index + 1}. {service.title}
                      </h3>
                      <p className="text-base lg:text-lg text-blue-dk/80 leading-relaxed text-right">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                className="mb-12 lg:mb-16"
                variants={staggerItem}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-blue-dk mb-8 text-right">
                  שאלות נפוצות – אבי עונה
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/80 md:bg-white/70 rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-dk/10"
                      variants={staggerItem}
                    >
                      <h3 className="text-xl lg:text-2xl font-black text-blue-dk mb-3 text-right">
                        "{faq.question}"
                      </h3>
                      <p className="text-base lg:text-lg text-blue-dk/80 leading-relaxed text-right">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="text-center lg:text-right bg-gradient-to-r from-orange/10 via-orange/5 to-transparent rounded-3xl p-8 lg:p-12"
                variants={staggerItem}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-blue-dk mb-6">
                  גרים בחולון, בת ים או באיזור המרכז? בואו ניפגש
                </h2>
                <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed mb-8">
                  אני מאמין בליווי אישי, בגובה העיניים, ומעטפת שחורגת מעבר לציפיות – בדיוק כמו שהייתי רוצה שיטפלו במשכנתא שלי.
                </p>
                <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed mb-8">
                  רוצים לחסוך זמן, כסף ובירוקרטיה? השאירו פרטים בטופס למטה או חייגו אלינו לשיחת ייעוץ ראשונית. אני אדאג שאת המשכנתא הבאה שלכם תיקחו בראש שקט.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-blue-dk text-white px-8 py-4 lg:px-12 lg:py-5 text-xl lg:text-2xl font-black shadow-lg transition-[brightness,transform] duration-200 hover:brightness-110 hover:scale-105"
                >
                  צרו קשר
                  <svg className="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
      </section>
    </LazyMount>
    </>
  );
}

