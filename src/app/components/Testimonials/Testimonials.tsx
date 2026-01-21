"use client";

import React, { useMemo, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

/**
 * Static data for testimonials.
 */
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
    text: "אחרי שכמה בנקים סירבו לי, אבי מצא פתרון יצירתי ועזר לי לממש את החלום של диרה משלי. תודה רבה!",
  },
];

/**
 * Individual Testimonial Card Component.
 */
const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div
    className="flex flex-col justify-between w-[320px] md:w-[500px] h-[260px] md:h-[320px] p-6 md:p-10 bg-gradient-to-bl from-[#1c3664] via-[#2a54a1] to-[#5da2ff] rounded-3xl text-right shrink-0"
    style={{ 
      boxShadow: '0 15px 40px -12px rgba(28, 54, 100, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)' 
    }}
    dir="rtl"
  >
    <div>
      {/* Star Ratings */}
      <div className="flex justify-start gap-1 mb-4 md:mb-6">
        {[...Array(item.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 md:w-6 md:h-6 fill-[#f26722]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-white text-base md:text-xl font-medium leading-relaxed line-clamp-4">
        &ldquo;{item.text}&rdquo;
      </p>
    </div>

    {/* User Info Footer */}
    <div className="flex items-center gap-4 mt-4">
      <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/20 shrink-0 shadow-sm">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm md:text-lg leading-none mb-1">{item.name}</span>
        <span className="text-white/80 text-[10px] md:text-sm">Verified Client</span>
      </div>
    </div>
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
        className="flex gap-6 md:gap-8 py-4"
        initial={{ x: direction === "left" ? "0%" : "-33.33%" }}
        animate={{ x: direction === "left" ? "-33.33%" : "0%" }}
        transition={{
          duration: isMobile ? duration * 1.3 : duration, // Slightly slower on mobile for performance
          ease: "linear",
          repeat: Infinity,
        }}
        // FIX: 'whileHover' on mobile triggers a permanent pause upon the first touch.
        // We disable it for mobile users.
        whileHover={!isMobile ? { animationPlayState: "paused" } : {}}
      >
        {tripleItems.map((item, i) => (
          <TestimonialCard key={i} item={item} />
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
          What Our Clients Say
        </h2>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        {/* Row 1: Scrolling Left */}
        <MarqueeRow 
          items={testimonials} 
          direction="left" 
          duration={50} 
          isMobile={isMobile} 
        />
        
        {/* Row 2: Scrolling Right */}
        <MarqueeRow 
          items={reversedTestimonials} 
          direction="right" 
          duration={55} 
          isMobile={isMobile} 
        />
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);