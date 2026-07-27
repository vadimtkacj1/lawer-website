"use client";

import { m } from "framer-motion";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { fadeInUpFast, slideTransition, viewportOptions } from "@/lib/animations";

const banks = [
  { src: "/images/bank1.png", width: 1200, height: 510, alt: "Bank 1" },
  { src: "/images/bank2.png", width: 200, height: 35, alt: "Bank 2" },
  { src: "/images/bank3.svg", width: 200, height: 50, alt: "Bank 3" },
  { src: "/images/bank4.png", width: 427, height: 118, alt: "Bank 4" },
  { src: "/images/bank5.png", width: 320, height: 209, alt: "Bank 5" },
  { src: "/images/bank6.png", width: 200, height: 80, alt: "Bank 6" },
  { src: "/images/bank7.png", width: 200, height: 60, alt: "Bank 7" },
  { src: "/images/bank8.png", width: 220, height: 110, alt: "Bank 8" },
];

export default function BankLogos() {
  return (
    <section className="relative py-8 md:py-16 bg-cream overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-blue-dk/10" />

      <div className="container mx-auto px-4">
        <m.div
          key="bank-logos-marquee"
          className="relative w-full"
          initial={{ y: 8 }}
          whileInView={{ y: 0 }}
          // "once: true" ensures better performance on mobile devices
          viewport={{ ...viewportOptions, once: true }}
          transition={slideTransition}
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
        </m.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-dk/10" />
    </section>
  );
}