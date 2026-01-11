"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpFast, scaleIn, staggerContainer, staggerItem, viewportOptions } from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import Link from "next/link";

const benefits = [
  {
    title: "מימון מקסימלי עד 90%",
    description:
      "אנו מתמחים בהשגת אחוזי מימון מקסימליים עבור זוגות צעירים, כולל פתרונות יצירתיים למימון גבוה במקרים המתאימים.",
  },
  {
    title: "תוכניות 'מחיר למשתכן'",
    description:
      "ליווי מלא בהגשה ובטיפול בתוכניות 'מחיר למשתכן' לסיוע בקבלת משכנתא ראשונה בתנאים אופטימליים.",
  },
  {
    title: "תנאים מועדפים",
    description:
      "בזכות הקשרים שלנו עם הבנקים השונים, נוכל להשיג עבורכם תנאים מועדפים וריביות אטרקטיביות.",
  },
  {
    title: "ליווי מלא לאורך כל התהליך",
    description:
      "מרגע הפנייה ועד קבלת המשכנתא – אנחנו איתכם בכל שלב, מטפלים בכל הבירוקרטיה ומוודאים שכל דבר נעשה בצורה נכונה.",
  },
];

const steps = [
  {
    number: "1",
    title: "פגישת היכרות ויעוץ ראשוני",
    description: "נבין יחד את הצרכים שלכם, את התקציב ואת האפשרויות העומדות בפניכם.",
  },
  {
    number: "2",
    title: "הכנת תיק משכנתא",
    description: "נרכיב את כל המסמכים הנדרשים וניצור תיק מקצועי ומסודר.",
  },
  {
    number: "3",
    title: "יצירת קשר עם הבנקים",
    description: "נפנה לבנקים המתאימים וננהל משא ומתן מקצועי לטובתכם.",
  },
  {
    number: "4",
    title: "קבלת אישור עקרוני",
    description: "נקבל עבורכם אישור עקרוני ונלווה אתכם עד לחתימה הסופית.",
  },
];

export default function FirstHomeHero() {
  return (
    <>
    <section className="relative min-h-screen lg:h-screen overflow-hidden bg-cream z-10 rtl">
      <DecorativeShapes variant="hero" />

      {/* --- Mobile View --- */}
      <div className="lg:hidden absolute inset-0">
        <Image
          src="/images/expert.jpeg"
          alt="אבי - יועץ משכנתאות מומחה"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cream/20 via-transparent to-blue-dk/70" />
      </div>

      {/* --- Desktop & Main Layout --- */}
      <div className="relative flex flex-col lg:flex-row h-full min-h-screen">
        
        {/* 1. Блок с текстом */}
        <div className="w-full lg:w-1/2 flex items-start justify-end relative z-20 px-4 sm:px-6 lg:pr-12 xl:pr-20 pt-24 lg:pt-48 pb-12 overflow-x-hidden">
          <div className="w-full max-w-2xl text-right">
            <div className="flex flex-col items-end w-full">
              
              <motion.h1
                className="font-heebo font-black leading-[1.05] mb-6
                           text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
                           text-white lg:text-blue-dk
                           text-center lg:text-right
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] lg:drop-shadow-none
                           w-full relative z-10
                           lg:-ml-24 xl:-ml-32"
                initial="hidden"
                animate="visible"
                variants={fadeInUpFast}
              >
                משכנתא לדירה ראשונה
              </motion.h1>

              <motion.p
                className="font-bold leading-relaxed mb-8
                           text-base sm:text-lg lg:text-xl xl:text-2xl
                           text-white/95 lg:text-blue-dk/80
                           text-center lg:text-right
                           drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] lg:drop-shadow-none
                           w-full"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
                  },
                }}
              >
                ליווי מלא לזוגות צעירים ורוכשי דירה ראשונה עם תנאים מועדפים
              </motion.p>
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
              className="object-cover"
              style={{ objectPosition: 'center 5%' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cream/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>

    {/* Main Content Section */}
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
              רכישת דירה ראשונה היא צעד משמעותי בחיים, והמשכנתא היא כלי מרכזי שמאפשר לכם לממש את החלום הזה. אנחנו ב"אבי - הבית למשכנתאות" מתמחים בליווי זוגות צעירים ורוכשי דירה ראשונה, ומכירים לעומק את כל התוכניות וההטבות העומדות לרשותכם.
            </p>
            <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed">
              בין אם אתם זוג צעיר שמחפש דירה ראשונה בחולון, בת ים, ראשון לציון או בכל אזור המרכז, אני כאן כדי להדריך אתכם בתהליך ולעזור לכם לקבל את המשכנתא הטובה ביותר עבורכם.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="mb-12 lg:mb-16"
            variants={staggerItem}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-blue-dk mb-8 text-right">
              למה לבחור בנו למשכנתא לדירה ראשונה?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 md:bg-white/70 rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-dk/10"
                  variants={staggerItem}
                >
                  <h3 className="text-xl lg:text-2xl font-black text-blue-dk mb-3 text-right">
                    {benefit.title}
                  </h3>
                  <p className="text-base lg:text-lg text-blue-dk/80 leading-relaxed text-right">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            className="mb-12 lg:mb-16"
            variants={staggerItem}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-blue-dk mb-8 text-right">
              איך זה עובד? התהליך שלנו
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 md:gap-6 items-start bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-dk/10"
                  variants={staggerItem}
                >
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-orange rounded-full flex items-center justify-center">
                    <span className="text-2xl lg:text-3xl font-black text-white">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-xl lg:text-2xl font-black text-blue-dk mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base lg:text-lg text-blue-dk/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
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
              מוכנים להתחיל?
            </h2>
            <p className="text-lg lg:text-xl text-blue-dk/90 leading-relaxed mb-8">
              צרו קשר עוד היום לשיחת ייעוץ ראשונית ללא התחייבות. נעזור לכם להבין את כל האפשרויות העומדות בפניכם ונשיג עבורכם את המשכנתא הטובה ביותר לדירה הראשונה שלכם.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-orange text-white px-8 py-4 lg:px-12 lg:py-5 text-xl lg:text-2xl font-black rounded-md shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-105"
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
    </>
  );
}

