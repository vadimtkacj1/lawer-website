"use client";
import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "@/lib/animations";
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
    <motion.section
      className="relative py-12 md:py-16 z-0 overflow-hidden"
      style={{ backgroundColor: "#f9f7f4" }} // Your section background
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto">
        <InfiniteMarquee
          dataType="image"
          dataArray={bankLogos}
          speed={40}
          direction="right" 
        />
      </div>
    </motion.section>
  );
}