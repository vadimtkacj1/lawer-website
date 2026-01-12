import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import CommercialHero from "@/app/services/commercial/components/CommercialHero";
import CommercialIntro from "@/app/services/commercial/components/CommercialIntro";
import CommercialAbout from "@/app/services/commercial/components/CommercialAbout";
import CommercialWhySection from "@/app/services/commercial/components/CommercialWhySection";
import CommercialServicesSection from "@/app/services/commercial/components/CommercialServicesSection";

// Lazy load components for better performance
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
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

