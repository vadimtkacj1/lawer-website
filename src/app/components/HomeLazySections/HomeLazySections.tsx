"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/ui/LazyMount";

const BankLogos = dynamic(() => import("@/app/components/BankLogos"), { ssr: false });
const ExpertBio = dynamic(() => import("@/app/components/ExpertBio"), { ssr: false });
const Quote = dynamic(() => import("@/components/Quote"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Testimonials = dynamic(() => import("@/app/components/Testimonials"), { ssr: false });
const HowItWorks = dynamic(() => import("@/app/components/HowItWorks"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const MortgageCalculator = dynamic(() => import("@/components/MortgageCalculator"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Widgets = dynamic(() => import("@/components/ui/Widgets"), { ssr: false });

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


