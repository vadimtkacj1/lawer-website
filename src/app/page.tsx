import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import BanksCarousel from "@/components/sections/BanksCarousel";
import ExpertBio from "@/components/sections/ExpertBio";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import FixedWidgets from "@/components/ui/FixedWidgets";

// Page-specific metadata
export const metadata: Metadata = {
  title: "אבי - הבית למשכנתאות | מומחה לייעוץ וחיסכון",
  description:
    "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז. חיסכון ממוצע של 180,000 ש״ח למשפחה. ליווי משפטי מלא, התמחות במסורבי בנק.",
  alternates: {
    canonical: "https://avi-home.co.il",
  },
};

// JSON-LD Structured Data for SEO
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization
      {
        "@type": "Organization",
        "@id": "https://avi-home.co.il/#organization",
        name: "אבי - הבית למשכנתאות",
        url: "https://avi-home.co.il",
        logo: {
          "@type": "ImageObject",
          url: "https://avi-home.co.il/images/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+972-50-000-0000",
          contactType: "customer service",
          areaServed: "IL",
          availableLanguage: "Hebrew",
        },
        sameAs: [
          "https://www.facebook.com/avihome",
          "https://www.instagram.com/avihome",
        ],
      },
      // LocalBusiness
      {
        "@type": "FinancialService",
        "@id": "https://avi-home.co.il/#business",
        name: "אבי - הבית למשכנתאות",
        description:
          "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז",
        url: "https://avi-home.co.il",
        telephone: "+972-50-000-0000",
        email: "office@avi-home.co.il",
        address: {
          "@type": "PostalAddress",
          addressLocality: "חולון",
          addressRegion: "מחוז תל אביב",
          addressCountry: "IL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.0167,
          longitude: 34.7667,
        },
        areaServed: [
          { "@type": "City", name: "חולון" },
          { "@type": "City", name: "בת ים" },
          { "@type": "City", name: "ראשון לציון" },
          { "@type": "City", name: "תל אביב" },
        ],
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "150",
        },
      },
      // WebPage
      {
        "@type": "WebPage",
        "@id": "https://avi-home.co.il/#webpage",
        url: "https://avi-home.co.il",
        name: "אבי - הבית למשכנתאות | מומחה לייעוץ וחיסכון",
        description:
          "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז",
        isPartOf: { "@id": "https://avi-home.co.il/#website" },
        about: { "@id": "https://avi-home.co.il/#business" },
        inLanguage: "he-IL",
      },
      // FAQPage
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "למה אני צריך יועץ משכנתאות?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "יועץ הבנק עובד עבור הבנק. אני עובד עבורכם - מוריד ריביות, בונה תמהיל חסכוני ומגן על האינטרסים שלכם בכל שלב.",
            },
          },
          {
            "@type": "Question",
            name: "כמה כסף אפשר לחסוך?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "בממוצע, הלקוחות שלי חוסכים בין 120,000 ל-250,000 ש״ח לאורך חיי המשכנתא בזכות תכנון נכון ומשא ומתן מקצועי.",
            },
          },
          {
            "@type": "Question",
            name: "כמה זמן לוקח התהליך?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "מרגע קבלת המסמכים ועד אישור עקרוני - כ-10 ימי עבודה. אני מטפל בכל הבירוקרטיה מולכם ומול הבנק.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <BanksCarousel />
        <ExpertBio />
        <Services />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FixedWidgets />
    </>
  );
}
