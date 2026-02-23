"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/ui/LazyMount";

// Optimized dynamic imports with loading states for better UX
const BankLogos = dynamic(() => import("@/app/components/BankLogos"), {
  loading: () => <div className="h-32" />, // Placeholder height
});
const ExpertBio = dynamic(() => import("@/app/components/ExpertBio"), {
  loading: () => <div className="h-96" />,
});
const Quote = dynamic(() => import("@/components/Quote"), {
  loading: () => <div className="h-64" />,
});
const WhyChooseAvi = dynamic(() => import("@/app/components/WhyChooseAvi"), {
  loading: () => <div className="h-96" />,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-96" />,
});
const Testimonials = dynamic(() => import("@/app/components/Testimonials"), {
  loading: () => <div className="h-96" />,
});
const HowItWorks = dynamic(() => import("@/app/components/HowItWorks"), {
  loading: () => <div className="h-96" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-96" />,
});
const MortgageCalculator = dynamic(() => import("@/components/MortgageCalculator"), {
  loading: () => <div className="h-96" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-96" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32" />,
});
const Widgets = dynamic(() => import("@/components/ui/Widgets"), {
  ssr: false, // Widgets don't need SSR
});

export default function HomeLazySections() {
  return (
    <>
      <LazyMount rootMargin="400px 0px">
        <BankLogos />
      </LazyMount>
      <LazyMount rootMargin="400px 0px">
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


