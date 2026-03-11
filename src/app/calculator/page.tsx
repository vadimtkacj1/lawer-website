import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import MortgageCalculator from "./components/MortgageCalculator";

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32" />,
});

// Page metadata
export const metadata: Metadata = {
  title: "מחשבון משכנתא",
  description:
    "מחשבון משכנתא מתקדם - חשבו החזר חודשי, משכורת נדרשת ומקדמה נדרשת. קבלו ייעוץ חינם מאבי - מומחה למשכנתאות.",
  keywords: [
    "מחשבון משכנתא",
    "חישוב משכנתא",
    "החזר חודשי משכנתא",
    "משכורת נדרשת למשכנתא",
    "מקדמה למשכנתא",
    "יועץ משכנתאות",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com/calculator",
  },
  openGraph: {
    title: "מחשבון משכנתא | אבי - הבית למשכנתאות",
    description:
      "מחשבון משכנתא מתקדם - חשבו החזר חודשי, משכורת נדרשת ומקדמה נדרשת. קבלו ייעוץ חינם מאבי - מומחה למשכנתאות.",
    url: "https://avi-mashkanta.com/calculator",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <div className="bg-cream min-h-screen">
        <Header />
        <main className="pt-[90px] md:pt-[110px]">
          <MortgageCalculator />
        </main>
      </div>
      <Footer />
    </>
  );
}
