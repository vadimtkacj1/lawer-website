import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/sections/Header";
import CommercialHero from "@/components/sections/CommercialHero";
import CommercialIntro from "@/components/sections/CommercialIntro";
import CommercialAbout from "@/components/sections/CommercialAbout";
import CommercialWhySection from "@/components/sections/CommercialWhySection";
import CommercialServicesSection from "@/components/sections/CommercialServicesSection";

// Lazy load components for better performance
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });
const Widgets = dynamic(() => import("@/components/ui/Widgets"), { ssr: false });

export const metadata: Metadata = {
  title: "יועץ משכנתאות בחולון והמרכז | אבי - הבית למשכנתאות",
  description:
    "יועץ משכנתאות בחולון והמרכז. המומחיות של יוצא מערכת הבנקאות אצלכם בכיס. איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים ובעלי דירוג אשראי שלילי.",
  keywords: [
    "יועץ משכנתאות חולון",
    "יועץ משכנתאות במרכז",
    "יועץ משכנתאות פרטי",
    "איחוד הלוואות",
    "מיחזור משכנתא",
    "מסורבי בנק",
    "משכנתא לזוגות צעירים",
    "משכנתא לציבור החרדי",
    "משכנתא לבעלי דירוג אשראי שלילי",
    "בדיקת כדאיות למיחזור",
  ],
};

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main>
        <CommercialHero />
        <CommercialIntro />
        <CommercialAbout />
        <CommercialWhySection />
        <CommercialServicesSection />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

