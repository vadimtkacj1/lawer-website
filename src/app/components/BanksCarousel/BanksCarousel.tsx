"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

const bankLogos = [
  "/images/bank1.png",
  "/images/bank2.png",
  "/images/bank3.svg",
  "/images/bank4.png",
  "/images/bank5.png",
  "/images/bank6.png",
  "/images/bank7.png",
  "/images/bank8.png",
];

export default function BanksCarousel() {
  return (
    <section className="relative bg-[#f9f7f4] py-12 md:py-16 lg:py-20 z-0 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Анимируем только заголовок, чтобы он не блокировал карусель */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          // amount: 0.2 гарантирует запуск на маленьких экранах
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-8 md:mb-12 lg:mb-16 text-center"
        >
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-5xl lg:text-6xl font-noto-sans-hebrew font-black text-blue-dk mb-4 md:mb-6 leading-tight"
          >
            <span className="text-orange">שותפינו</span>
          </motion.h2>
          <motion.div
            variants={staggerItem}
            className="w-16 md:w-24 h-1.5 bg-orange mx-auto rounded-full"
          />
        </motion.div>

        {/* Контейнер карусели с принудительным LTR */}
        <div 
          className="max-w-6xl mx-auto" 
          style={{ direction: 'ltr' }} // Важно для корректной математики анимации на мобилках
        >
          <InfiniteMarquee
            dataType="image"
            dataArray={bankLogos}
            speed={35} // Чуть увеличим скорость для наглядности
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}