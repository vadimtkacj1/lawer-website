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
const Widgets = dynamic(() => import("@/components/ui/Widgets"), {
  ssr: false, // Widgets don't need SSR
});

export default function HomeLazySections() {
  return (
    <>
      <LazyMount rootMargin="400px 0px" placeholder={<div className="h-28" />}>
        <BankLogos />
      </LazyMount>
      <LazyMount rootMargin="400px 0px" placeholder={<div className="h-[500px]" />}>
        <ExpertBio />
      </LazyMount>
      <LazyMount placeholder={<div className="h-64" />}>
        <Quote />
      </LazyMount>
      <LazyMount placeholder={<div className="h-[500px]" />}>
        <WhyChooseAvi />
      </LazyMount>
      <LazyMount placeholder={<div className="h-[500px]" />}>
        <Services />
      </LazyMount>
      <LazyMount placeholder={<div className="h-[500px]" />}>
        <Testimonials />
      </LazyMount>
      <LazyMount placeholder={<div className="h-[500px]" />}>
        <HowItWorks />
      </LazyMount>
      <LazyMount placeholder={<div className="h-[500px]" />}>
        <Contact />
      </LazyMount>
      <LazyMount placeholder={<div className="h-[500px]" />}>
        <MortgageCalculator />
      </LazyMount>
      <LazyMount placeholder={<div className="h-[500px]" />}>
        <FAQ />
      </LazyMount>
      <Widgets />
    </>
  );
}


