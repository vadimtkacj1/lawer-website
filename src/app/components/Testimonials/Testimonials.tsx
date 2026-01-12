"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  fadeInUpFast,
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/lib/animations";
import DecorativeShapes from "@/components/ui/DecorativeShapes";

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
  {
    name: "יעקב פרץ",
    image: "/images/client.jpg",
    rating: 5,
    text: 'מחזרנו משכנתא ישנה וחסכנו יותר מ-200,000 ש"ח. אבי הסביר הכל בשפה פשוטה ובלי לחץ. שירות ברמה הכי גבוהה.',
  },
  {
    name: "נעמה ורן שפירא",
    image: "/images/client.jpg",
    rating: 5,
    text: "כזוג צעיר בלי ניסיון, הרגשנו אבודים. אבי לקח אותנו יד ביד דרך כל התהליך והיום יש לנו דירה משלנו!",
  },
  {
    name: "חיים מזרחי",
    image: "/images/client.jpg",
    rating: 5,
    text: 'אני עובד עצמאי וידעתי שיהיה קשה לקבל משכנתא. אבי ידע בדיוק איך להציג את התיק ובסוף קיבלתי אישור מלא.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 sm:gap-1 3xl:gap-1.5 4xl:gap-2 justify-center text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 5xl:w-8 5xl:h-8 ${i < rating ? "fill-current" : "text-gray-300"}`}
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const hostRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Number of cards to show per slide based on screen size
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setIsInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else if (window.innerWidth < 1920) {
        setCardsPerSlide(3);
      } else if (window.innerWidth < 3000) {
        setCardsPerSlide(4);
      } else {
        setCardsPerSlide(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      ref={hostRef}
      id="testimonials"
      className="relative py-10 sm:py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: "#f9f7f4" }}
    >
      <DecorativeShapes variant="default" />
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.h2
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 3xl:mb-16 4xl:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          לקוחות מספרים
        </motion.h2>

        <motion.div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-1 sm:right-0 md:right-2 lg:right-4 3xl:right-6 4xl:right-8 z-10
                       w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 3xl:w-14 3xl:h-14 4xl:w-16 4xl:h-16 5xl:w-[72px] 5xl:h-[72px] rounded-full bg-blue-dk shadow-lg
                       flex items-center justify-center
                       text-white hover:bg-orange
                       transition-[background-color] duration-200"
            aria-label="הקודם"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-10 5xl:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-1 sm:left-0 md:left-2 lg:left-4 3xl:left-6 4xl:left-8 z-10
                       w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 3xl:w-14 3xl:h-14 4xl:w-16 4xl:h-16 5xl:w-[72px] 5xl:h-[72px] rounded-full bg-blue-dk shadow-lg
                       flex items-center justify-center
                       text-white hover:bg-orange
                       transition-[background-color] duration-200"
            aria-label="הבא"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 5xl:w-10 5xl:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-6 sm:mx-8 md:mx-12 lg:mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${currentSlide * 100}%)`,
              }}
            >
              {/* All slides */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className={`grid gap-3 sm:gap-4 md:gap-6 3xl:gap-8 4xl:gap-10 5xl:gap-12 ${
                    cardsPerSlide === 1
                      ? 'grid-cols-1'
                      : cardsPerSlide === 2
                        ? 'grid-cols-2'
                        : cardsPerSlide === 3
                          ? 'grid-cols-3'
                          : cardsPerSlide === 4
                            ? 'grid-cols-4'
                            : 'grid-cols-5'
                  }`}>
                    {testimonials
                      .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                      .map((testimonial, index) => (
                        <article
                          key={index}
                          className="p-4 sm:p-5 md:p-6 lg:p-8 3xl:p-10 4xl:p-12 5xl:p-14 rounded-xl sm:rounded-2xl 3xl:rounded-3xl
                                     transition-transform duration-200 hover:-translate-y-1
                                     text-center bg-white/30"
                        >
                          {/* Client Image */}
                          <div className="mb-2 sm:mb-3 md:mb-4 3xl:mb-5 4xl:mb-6">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={85}
                              height={85}
                              sizes="(max-width: 1920px) 85px, (max-width: 3000px) 100px, 120px"
                              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] 3xl:w-[100px] 3xl:h-[100px] 4xl:w-[115px] 4xl:h-[115px] 5xl:w-[130px] 5xl:h-[130px] rounded-full mx-auto object-cover
                                         border-2 sm:border-3 3xl:border-4 border-blue-dk"
                            />
                          </div>

                          {/* Name */}
                          <h3 className="font-black text-blue-dk text-base sm:text-lg md:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl mb-1.5 sm:mb-2 3xl:mb-3 4xl:mb-4">
                            {testimonial.name}
                          </h3>

                          {/* Rating */}
                          <div className="mb-2 sm:mb-3 md:mb-4 3xl:mb-5 4xl:mb-6">
                            <StarRating rating={testimonial.rating} />
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-sm sm:text-base md:text-lg 3xl:text-xl 4xl:text-2xl 5xl:text-3xl font-bold text-blue-dk/80 leading-relaxed">
                            &ldquo;{testimonial.text}&rdquo;
                          </p>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 sm:gap-2 3xl:gap-3 4xl:gap-4 mt-4 sm:mt-6 md:mt-8 3xl:mt-10 4xl:mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 3xl:w-4 3xl:h-4 4xl:w-5 4xl:h-5 rounded-full transition-[background-color,width] duration-200
                           ${currentSlide === index
                             ? 'bg-orange w-5 sm:w-8 3xl:w-10 4xl:w-12 5xl:w-14'
                             : 'bg-blue-dk/30 hover:bg-blue-dk/50'
                           }`}
                aria-label={`עבור לדף ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-2 sm:mt-3 md:mt-4 3xl:mt-5 4xl:mt-6 text-blue-dk/60 text-xs sm:text-sm 3xl:text-base 4xl:text-lg 5xl:text-xl">
            {currentSlide + 1} / {totalSlides}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
