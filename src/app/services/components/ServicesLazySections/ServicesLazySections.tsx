"use client";

import dynamic from "next/dynamic";
import LazyMount from "@/components/ui/LazyMount";

const Contact = dynamic(() => import("@/components/Contact"), {});
const Footer = dynamic(() => import("@/components/Footer"), {});
const Widgets = dynamic(() => import("@/components/ui/Widgets"), {});

export default function ServicesLazySections() {
  return (
    <>
      <LazyMount>
        <Contact />
      </LazyMount>
      <LazyMount rootMargin="1000px 0px">
        <Footer />
      </LazyMount>
      <Widgets />
    </>
  );
}


