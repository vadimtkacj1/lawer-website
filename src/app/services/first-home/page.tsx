import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import FirstHomeHero from "@/app/services/first-home/components/FirstHomeHero";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Widgets = dynamic(() => import("@/components/ui/Widgets"), { ssr: false });

export const metadata: Metadata = {
  title: "משכנתא לדירה ראשונה | אבי - הבית למשכנתאות",
  description:
    "ליווי מלא לזוגות צעירים ורוכשי דירה ראשונה. מימון מקסימלי, תנאים מועדפים וסיוע בתוכניות 'מחיר למשתכן'. ייעוץ מקצועי בחולון והמרכז.",
  keywords: [
    "משכנתא לדירה ראשונה",
    "זוגות צעירים",
    "מחיר למשתכן",
    "מימון דירה ראשונה",
    "יועץ משכנתאות לזוגות צעירים",
    "משכנתא חולון",
  ],
};

export default function FirstHomePage() {
  return (
    <>
      <Header />
      <main>
        <FirstHomeHero />
        <Contact />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

