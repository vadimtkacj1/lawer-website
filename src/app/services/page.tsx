import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesLazySections from "@/components/pages/ServicesLazySections";

export const metadata: Metadata = {
  title: "שירותים | אבי - הבית למשכנתאות",
  description:
    "יועץ משכנתאות בחולון והמרכז. איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים. המומחיות של יוצא מערכת הבנקאות אצלכם בכיס.",
  keywords: [
    "יועץ משכנתאות חולון",
    "איחוד הלוואות",
    "מיחזור משכנתא",
    "מסורבי בנק",
    "משכנתא לזוגות צעירים",
    "יועץ משכנתאות המרכז",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesLazySections />
      </main>
    </>
  );
}

