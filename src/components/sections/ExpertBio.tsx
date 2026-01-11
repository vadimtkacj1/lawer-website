"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUpFast,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportOptions,
} from "@/lib/animations";

const highlights = [
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
      </svg>
    ),
    text: "ליווי משפטי מלא לאורך כל תהליך לקיחת המשכנתא",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
        />
      </svg>
    ),
    text: 'התמחיות בתיקי "מסורבי בנק" ועסקאות מורכבות',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.613 6l-.248-1.506 1.086-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
      </svg>
    ),
    text: "מעל 1,000 משפחות שחסכו מאות אלפי שקלים",
  },
];

export default function ExpertBio() {
  return (
    <section id="about-expert" className="py-12 md:py-20 lg:py-24" style={{ backgroundColor: "#f9f7f4" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInRight}
          >
            <Image
              src="/images/lawyer-photo.jpg"
              alt="אבי - עורך דין ומשפטן פיננסי"
              width={500}
              height={600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-[40px] shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-[1.2] text-center lg:text-right">
            <motion.h2
              className="font-heebo font-black text-blue-dk mb-4 md:mb-6 leading-tight text-center lg:text-right"
              style={{ fontSize: "clamp(28px, 6vw, 62px)" }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={fadeInUpFast}
            >
              הכוח המשפטי מאחורי המשכנתא שלכם
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-bold text-blue-dk/90 leading-relaxed mb-6 md:mb-8 text-center lg:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >
              שלום, אני אבי. כמשפטן פיננסי המתמחה בדיני בנקאות, אני לא רק בונה
              לכם תמהיל חסכוני — אני מוודא שכל אות בחוזה משרתת את האינטרסים שלכם.
              הניסיון שלי מול המערכות הבנקאיות מאפשר לי להשיג עבורכם תנאים
              שיועצים רגילים פשוט לא יכולים להגיע אליהם.
            </motion.p>

            <motion.ul
              className="space-y-4 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={staggerContainer}
            >
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-xl font-black
                             justify-center lg:justify-start"
                  variants={staggerItem}
                >
                  <span className="text-orange">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >
              <Link
                href="/about"
                className="inline-block px-10 py-4 bg-blue-dk text-white
                           text-xl font-black rounded-xl transition-all duration-300
                           shadow-lg hover:bg-blue-dk/90 hover:-translate-y-0.5 hover:shadow-xl"
              >
                קראו עוד על הניסיון שלי
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
