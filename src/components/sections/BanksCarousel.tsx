"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "@/lib/animations";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

const banks = [
  { name: "Bank Leumi", logo: "/images/bank1.png" },
  { name: "Bank Hapoalim", logo: "/images/bank2.png" },
  { name: "Discount Bank", logo: "/images/bank3.svg" },
  { name: "Mizrahi Tefahot", logo: "/images/bank4.png" },
  { name: "Bank Of Jerusalem", logo: "/images/bank5.png" },
  { name: "Mercantile Bank", logo: "/images/bank6.png" },
  { name: "First International", logo: "/images/bank7.png" },
  { name: "Massad Bank", logo: "/images/bank8.png" },
];

export default function BanksCarousel() {
  const bankLogos = banks.map((bank) => bank.logo);

  return (
    <motion.section
      className="relative py-12 md:py-16 z-0 overflow-hidden"
      style={{ backgroundColor: "#f9f7f4" }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden 
          before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#f9f7f4] before:to-transparent 
          after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#f9f7f4] after:to-transparent">
          
          <InfiniteMarquee
            dataType="image"
            dataArray={bankLogos}
            speed={40} 
            direction="right"
            className="banks-marquee"
          />
          
        </div>
      </div>
    </motion.section>
  );
}