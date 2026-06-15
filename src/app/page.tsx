import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/app/components/Hero";
import HomeLazySections from "@/app/components/HomeLazySections";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "יועץ משכנתאות בחולון והמרכז | אבי - הבית למשכנתאות",
  description:
    "אבי בוקעי, בנקאי לשעבר, בונה משכנתא חכמה ומנהל מו״מ מול הבנקים — חיסכון ממוצע כ-180,000 ₪ למשפחה. ייעוץ משכנתאות אובייקטיבי בחולון והמרכז, פגישת היכרות ללא עלות.",
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
        telephone: "+972544729513",
        logo: {
          "@type": "ImageObject",
          url: "https://avi-mashkanta.com/images/logo.svg",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+972544729513",
          contactType: "customer service",
          areaServed: "IL",
          availableLanguage: "Hebrew",
        },
        founder: { "@id": "https://avi-mashkanta.com/#advisor" },
      },
      {
        "@type": "Person",
        "@id": "https://avi-mashkanta.com/#advisor",
        name: "אבי בוקעי",
        jobTitle: "יועץ משכנתאות",
        description:
          "אבי בוקעי, בנקאי לשעבר ויועץ משכנתאות, מלווה לקוחות בחולון והמרכז בתכנון משכנתא חכמה, מחזור ואיחוד הלוואות.",
        image: "https://avi-mashkanta.com/images/avi_photo.webp",
        url: "https://avi-mashkanta.com/about",
        worksFor: { "@id": "https://avi-mashkanta.com/#organization" },
        knowsAbout: [
          "משכנתאות",
          "מחזור משכנתא",
          "איחוד הלוואות",
          "תכנון פיננסי",
          "דירה בהנחה",
        ],
      },
      {
        "@type": ["FinancialService", "MortgageBroker"],
        "@id": "https://avi-mashkanta.com/#business",
        name: "אבי - הבית למשכנתאות",
        description:
          "ייעוץ משכנתאות מקצועי ואובייקטיבי באזור חולון והמרכז",
        url: "https://avi-mashkanta.com",
        telephone: "+972544729513",
        image: "https://avi-mashkanta.com/images/og-image.jpg",
        founder: { "@id": "https://avi-mashkanta.com/#advisor" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "יהושע חנקין 83",
          addressLocality: "חולון",
          addressRegion: "מחוז תל אביב",
          addressCountry: "IL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.0185696,
          longitude: 34.7787344,
        },
        hasMap: "https://www.google.com/maps/dir/?api=1&destination=32.0185696,34.7787344",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "חולון" },
          { "@type": "City", name: "בת ים" },
          { "@type": "City", name: "ראשון לציון" },
          { "@type": "City", name: "תל אביב" },
        ],
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: 17,
          bestRating: "5",
          worstRating: "1",
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
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <HomeLazySections />
      </main>
      <Footer />
    </>
  );
}
