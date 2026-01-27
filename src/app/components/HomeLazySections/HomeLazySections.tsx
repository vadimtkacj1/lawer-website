"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/ui/LazyMount";

const BankLogos = dynamic(() => import("@/app/components/BankLogos"), {});
const ExpertBio = dynamic(() => import("@/app/components/ExpertBio"), {});
const Quote = dynamic(() => import("@/components/Quote"), {});
const WhyChooseAvi = dynamic(() => import("@/app/components/WhyChooseAvi"), {});
const Services = dynamic(() => import("@/components/Services"), {});
const Testimonials = dynamic(() => import("@/app/components/Testimonials"), {});
const HowItWorks = dynamic(() => import("@/app/components/HowItWorks"), {});
const Contact = dynamic(() => import("@/components/Contact"), {});
const MortgageCalculator = dynamic(() => import("@/components/MortgageCalculator"), {});
const FAQ = dynamic(() => import("@/components/FAQ"), {});
const Footer = dynamic(() => import("@/components/Footer"), {});
const Widgets = dynamic(() => import("@/components/ui/Widgets"), {});

export default function HomeLazySections() {
  return (
    <>
      <LazyMount rootMargin="800px 0px">
        <BankLogos />
      </LazyMount>
      <LazyMount rootMargin="600px 0px">
        <ExpertBio />
      </LazyMount>
      <LazyMount>
        <Quote />
      </LazyMount>
      <LazyMount>
        <WhyChooseAvi />
      </LazyMount>
      <LazyMount>
        <Services />
      </LazyMount>
      <LazyMount>
        <Testimonials />
      </LazyMount>
      <LazyMount>
        <HowItWorks />
      </LazyMount>
      <LazyMount>
        <Contact />
      </LazyMount>
      <LazyMount>
        <MortgageCalculator />
      </LazyMount>
      <LazyMount>
        <FAQ />
      </LazyMount>
      <LazyMount rootMargin="1000px 0px">
        <Footer />
      </LazyMount>
      <Widgets />
    </>
  );
}


