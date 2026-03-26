import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/app/components/Hero";
import HomeLazySections from "@/app/components/HomeLazySections";

export const metadata: Metadata = {
  title: "אבי - הבית למשכנתאות | מומחה לייעוץ וחיסכון",
  description:
    "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז. חיסכון ממוצע של 180,000 ש״ח למשפחה. ליווי משפטי מלא, התמחות במסורבי בנק.",
  keywords: [
    "יועץ משכנתאות",
    "משכנתא",
    "מחזור משכנתא",
    "יועץ משכנתאות חולון",
    "יועץ משכנתאות בת ים",
    "יועץ משכנתאות תל אביב",
    "יועץ משכנתאות ראשון לציון",
    "משכנתא לדירה ראשונה",
    "ייעוץ משכנתאות",
    "חיסכון במשכנתא",
    "משפטן פיננסי",
    "מסורבי בנק",
    "מחזור משכנתא חולון",
    "ייעוץ משכנתאות מקצועי",
  ],
  alternates: {
    canonical: "https://avi-mashkanta.com",
  },
  openGraph: {
    url: "https://avi-mashkanta.com",
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://avi-mashkanta.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "אבי - הבית למשכנתאות - ייעוץ משכנתאות מקצועי",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://avi-mashkanta.com/images/og-image.jpg"],
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://avi-mashkanta.com/#organization",
        name: "אבי - הבית למשכנתאות",
        url: "https://avi-mashkanta.com",
        logo: {
          "@type": "ImageObject",
          url: "https://avi-mashkanta.com/images/logo.svg",
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
      {
        "@type": "FinancialService",
        "@id": "https://avi-mashkanta.com/#business",
        name: "אבי - הבית למשכנתאות",
        description:
          "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז",
        url: "https://avi-mashkanta.com",
        telephone: "+972-50-000-0000",
        email: "assistant@avi-mashkanta.com",
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
      {
        "@type": "WebSite",
        "@id": "https://avi-mashkanta.com/#website",
        url: "https://avi-mashkanta.com",
        name: "אבי - הבית למשכנתאות",
        description: "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז",
        inLanguage: "he-IL",
        publisher: { "@id": "https://avi-mashkanta.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/#webpage",
        url: "https://avi-mashkanta.com",
        name: "אבי - הבית למשכנתאות | מומחה לייעוץ וחיסכון",
        description:
          "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז",
        isPartOf: { "@id": "https://avi-mashkanta.com/#website" },
        about: { "@id": "https://avi-mashkanta.com/#business" },
        inLanguage: "he-IL",
        breadcrumb: { "@id": "https://avi-mashkanta.com/#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://avi-mashkanta.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "דף הבית",
            item: "https://avi-mashkanta.com",
          },
        ],
      },
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

  const jsonString = JSON.stringify(structuredData);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
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
        <HomeLazySections />
      </main>
    </>
  );
}
