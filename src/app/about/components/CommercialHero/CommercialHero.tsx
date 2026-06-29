"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { fadeInUpFast, staggerContainer, staggerItem } from "@/lib/animations";
import CityBackgroundSVG from "@/components/CityBackgroundSVG";

// Optimized viewport - only animate once for better performance
const optimizedViewport = {
  once: true,
  margin: "0px",
  amount: 0.2,
};

const commercialServices = [
  {
    title: "איחוד הלוואות",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
      </svg>
    ),
  },
  {
    title: "מיחזור משכנתא",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
      </svg>
    ),
  },
  {
    title: "משכנתא ראשונה",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
      </svg>
    ),
  },
  {
    title: "פתרונות מורכבים",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z" />
        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z" />
        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
      </svg>
    ),
  },
  {
    title: "ייעוץ מקצועי",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
      </svg>
    ),
  },
];

export default function CommercialHero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Анимация текста при скролле - уходит вверх
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Функция для плавного скролла вниз
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-cream z-10 py-16 lg:py-24 overflow-hidden">
      {/* Animated Background with City Theme */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
        <CityBackgroundSVG />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-20">
        <m.div
          className="w-full max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={optimizedViewport}
          variants={staggerContainer}
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="w-full text-center space-y-6 lg:space-y-8">
            <m.h1
              className="font-noto-sans-hebrew font-black leading-[1.1]
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         text-blue-dk
                         mb-6 sm:mb-8
                         [text-shadow:_0_2px_20px_rgb(249_245_231_/_90%),_0_4px_40px_rgb(249_245_231_/_70%)]
                         relative px-4 py-2"
              variants={staggerItem}
            >
              אודות אבי בוקעי –<br/>
יועץ משכנתאות מומחה ומתכנן פיננסי אישי
            </m.h1>
          </div>
        </m.div>
      </div>

{/* --- NEW LARGER CENTERED SCROLL BUTTON --- */}
      <m.div
        initial={{ opacity: 1 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-6 left-0 right-0 flex flex-col items-center cursor-pointer z-30 group"
        onClick={scrollToNext}
      >
        {/* Larger Text Label */}
        <m.span 
          animate={{ opacity: [0.8, 1, 0.8], y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-noto-sans-hebrew font-bold text-blue-dk text-xl sm:text-2xl mb-4 group-hover:text-orange-600 transition-colors"
        >
          המשך לקרוא
        </m.span>
        
        <div className="relative flex items-center justify-center">
          {/* Animated Glow Halo */}
          <m.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            className="absolute w-16 h-16 bg-orange-600/30 rounded-full"
          />

          {/* Big Bouncing Arrow */}
          <m.div
            animate={{ 
                y: [0, 20, 0], 
                scaleY: [1, 0.85, 1.15, 1] 
            }}
            transition={{ 
                repeat: Infinity, 
                duration: 1.6, 
                ease: "easeInOut" 
            }}
            className="text-orange-600 drop-shadow-[0_5px_15px_rgba(241,102,42,0.4)]"
          >
            <svg 
              width="65" 
              height="65" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C12.5523 2 13 2.44772 13 3V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V3C11 2.44772 11.4477 2 12 2Z" />
            </svg>
          </m.div>
        </div>
      </m.div>
    </section>
  );
}