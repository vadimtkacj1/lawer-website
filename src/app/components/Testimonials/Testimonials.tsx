"use client";

import React, { useMemo, memo } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "דניאל לוי",
    image: "/images/client.jpg",
    rating: 5,
    text: 'הגעתי למחזור משכנתא וחשבתי שאני יודע הכל. אבי בנה לי תמהיל חדש שקיצר את תקופת ההחזר ב-5 שנים והוריד את ההחזר החודשי.',
  },
  {
    name: "יוסי ומיכל כהן",
    image: "/images/client.jpg",
    rating: 5,
    text: 'אבי ליווה אותנו ברכישת הדירה הראשונה שלנו. בזכותו חסכנו למעלה מ-150,000 ש"ח בריביות והרגשנו שיש מישהו שנלחם עבורנו.',
  },
  {
    name: "רונית אברהם",
    image: "/images/client.jpg",
    rating: 5,
    text: "מקצוענות נטו. תהליך לקיחת המשכנתא היה שקוף, ברור ומהיר. אבי דאג לכל הבירוקרטיה ואני קיבלתי שקט נפשי ותנאים מעולים.",
  },
  {
    name: "משה דוידוב",
    image: "/images/client.jpg",
    rating: 5,
    text: 'לא האמנתי שאפשר לקבל תנאים כאלה טובים. אבי הצליח להשיג לי ריבית נמוכה משמעותית מהצעות הבנקים. ממליץ בחום!',
  },
  {
    name: "שרה ואבי גולדשטיין",
    image: "/images/client.jpg",
    rating: 5,
    text: 'קנינו דירה שנייה להשקעה ואבי עזר לנו לבנות תמהיל שמשתלם מאוד. השירות היה אישי, זמין ומקצועי לאורך כל הדרך.',
  },
  {
    name: "אילנה ברק",
    image: "/images/client.jpg",
    rating: 5,
    text: "אחרי שכמה בנקים סירבו לי, אבי מצא פתרון יצירתי ועזר לי לממש את החלום של דירה משלי. תודה רבה!",
  },
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div
    /** * UPDATED GRADIENT LOGIC:
     * - Direction: bg-gradient-to-bl (to bottom-left)
     * - Starting color (Top-Right): Your original blue #1c3664
     * - Ending color (Bottom-Left): A much lighter, brighter blue #5da2ff to avoid darkness
     */
    className="flex flex-col justify-between w-[360px] md:w-[500px] h-[280px] md:h-[320px] p-8 md:p-10 bg-gradient-to-bl from-[#1c3664] via-[#2a54a1] to-[#5da2ff] rounded-3xl text-right"
    style={{ 
      boxShadow: '0 15px 40px -12px rgba(28, 54, 100, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)' 
    }}
    dir="rtl"
  >
    <div>
      {/* Star ratings */}
      <div className="flex justify-start gap-1 mb-5 md:mb-6">
        {[...Array(item.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#f26722]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review content */}
      <p className="text-white text-lg md:text-xl font-medium leading-relaxed line-clamp-4 md:line-clamp-3">
        &ldquo;{item.text}&rdquo;
      </p>
    </div>

    {/* Footer: Name and Avatar */}
    <div className="flex items-center gap-4 mt-6">
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-sm">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-base md:text-lg">{item.name}</span>
        <span className="text-white/80 text-xs md:text-sm">לקוח מאומת</span>
      </div>
    </div>
  </div>
);

function TestimonialsSection() {
  const row1 = useMemo(() => [...testimonials, ...testimonials, ...testimonials], []);
  const row2 = useMemo(() => [...testimonials.reverse(), ...testimonials, ...testimonials], []);

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-[#f9f7f4] overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @-webkit-keyframes scroll-left {
          0% {
            -webkit-transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @-webkit-keyframes scroll-right {
          0% {
            -webkit-transform: translateX(-50%);
          }
          100% {
            -webkit-transform: translateX(0);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .mq-container {
          width: 100%;
          direction: ltr;
          position: relative;
        }

        .mq-track {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          padding: 2rem 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        @media (min-width: 768px) {
          .mq-track {
            will-change: transform;
          }
        }

        .animate-left {
          -webkit-animation: scroll-left 65s linear infinite;
          animation: scroll-left 65s linear infinite;
        }

        .animate-right {
          -webkit-animation: scroll-right 70s linear infinite;
          animation: scroll-right 70s linear infinite;
        }

        .mq-track:hover {
          animation-play-state: paused;
          -webkit-animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 mb-10 md:mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-[#1c3664]">מה הלקוחות שלנו אומרים</h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        <div className="mq-container">
          <div className="mq-track animate-left">
            {row1.map((item, i) => (
              <div key={`r1-${i}`} className="flex-shrink-0">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="mq-container">
          <div className="mq-track animate-right">
            {row2.map((item, i) => (
              <div key={`r2-${i}`} className="flex-shrink-0">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);