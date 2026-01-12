"use client";

import { motion } from "framer-motion";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { fadeInUpFast, viewportOptions } from "@/lib/animations";

const banks = [
  "/images/bank1.png",
  "/images/bank2.png",
  "/images/bank3.svg",
  "/images/bank4.png",
  "/images/bank5.png",
  "/images/bank6.png",
  "/images/bank7.png",
  "/images/bank8.png",
];

export default function BankLogos() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-cream via-white to-cream overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-dk/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.h2
          className="text-center text-3xl md:text-5xl lg:text-6xl mb-10 md:mb-16 font-heebo font-black text-blue-dk"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpFast}
        >
          שותפים
        </motion.h2>

        {/* Bank Logos Carousel - with original colors */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="py-4">
            <InfiniteMarquee
              dataType="image"
              dataArray={banks}
              speed={40}
              direction="right"
              preserveColors={true}
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-dk/20 to-transparent" />
    </section>
  );
}
