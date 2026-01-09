"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

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
    <div className="flex gap-1 justify-center text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-current" : "text-gray-300"}`}
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

  // Number of cards to show per slide based on screen size
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
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
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: "#f9f7f4" }}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">לקוחות מספרים</h2>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10
                       w-12 h-12 rounded-full bg-blue-dk shadow-lg
                       flex items-center justify-center
                       text-white hover:bg-orange
                       transition-all duration-300"
            aria-label="הקודם"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10
                       w-12 h-12 rounded-full bg-blue-dk shadow-lg
                       flex items-center justify-center
                       text-white hover:bg-orange
                       transition-all duration-300"
            aria-label="הבא"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8 md:mx-12">
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
                  <div className={`grid gap-6 ${
                    cardsPerSlide === 1
                      ? 'grid-cols-1'
                      : cardsPerSlide === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-3'
                  }`}>
                    {testimonials
                      .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                      .map((testimonial, index) => (
                        <article
                          key={index}
                          className="p-8 rounded-2xl
                                     transition-all duration-300 hover:-translate-y-1
                                     text-center"
                        >
                          {/* Client Image */}
                          <div className="mb-4">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={85}
                              height={85}
                              className="w-[85px] h-[85px] rounded-full mx-auto object-cover
                                         border-3 border-blue-dk"
                            />
                          </div>

                          {/* Name */}
                          <h3 className="font-black text-blue-dk text-xl mb-2">
                            {testimonial.name}
                          </h3>

                          {/* Rating */}
                          <div className="mb-4">
                            <StarRating rating={testimonial.rating} />
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-lg font-bold text-blue-dk/80 leading-relaxed">
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
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                           ${currentSlide === index
                             ? 'bg-orange w-8'
                             : 'bg-blue-dk/30 hover:bg-blue-dk/50'
                           }`}
                aria-label={`עבור לדף ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-blue-dk/60 text-sm">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>
      </div>
    </section>
  );
}
