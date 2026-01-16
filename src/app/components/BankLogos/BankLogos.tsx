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
    <section className="relative py-8 md:py-16 bg-cream overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-blue-dk/10" />

      <div className="container mx-auto px-4">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          // "once: true" ensures better performance on mobile devices
          viewport={{ ...viewportOptions, once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="py-2 md:py-4">
            <InfiniteMarquee
              dataType="image"
              dataArray={banks}
              speed={35} // Slightly slower for better readability on small screens
              direction="right"
              preserveColors={true}
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-dk/10" />
    </section>
  );
}