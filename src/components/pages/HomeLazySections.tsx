"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/ui/LazyMount";

const BankLogos = dynamic(() => import("@/components/sections/BankLogos"), { ssr: false });
const ExpertBio = dynamic(() => import("@/components/sections/ExpertBio"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });
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
        <Services />
      </LazyMount>
      <LazyMount>
        <Testimonials />
      </LazyMount>
      <LazyMount>
        <Contact />
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


