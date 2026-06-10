import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "@/components/Header";
import CommercialHero from "@/app/about/components/CommercialHero";
import CommercialAbout from "@/app/about/components/CommercialAbout";
import StorySection from "@/app/about/components/StorySection";
import CommercialWhySection from "@/app/about/components/CommercialWhySection";
import CommercialServicesSection from "@/app/about/components/CommercialServicesSection";
import AboutFAQ from "@/app/about/components/AboutFAQ";
import AboutCTA from "@/app/about/components/AboutCTA";

// Lazy load components for better performance
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

export const metadata: Metadata = {
  title: "אבי - הבית למשכנתאות | יועץ משכנתאות מקצועי",
  description:
    "הכירו את אבי, יועץ משכנתאות בעל ניסיון עשיר של עשרות תיקים מוצלחים. בואו לקרוא על הדרך, המקצועיות והמחויבות האישית להשיג עבורכם את המשכנתא המשתלמת ביותר.",
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
  alternates: {
    canonical: "https://avi-mashkanta.com/about",
  },
  openGraph: {
    url: "https://avi-mashkanta.com/about",
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
};

// JSON-LD Structured Data for Commercial Service
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://avi-mashkanta.com/about#service",
        name: "יועץ משכנתאות בחולון והמרכז",
        description: "איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים ובעלי דירוג אשראי שלילי",
        provider: {
          "@id": "https://avi-mashkanta.com/#organization"
        },
        areaServed: [
          { "@type": "City", name: "חולון" },
          { "@type": "City", name: "בת ים" },
          { "@type": "City", name: "ראשון לציון" },
          { "@type": "City", name: "תל אביב" }
        ],
        serviceType: "Financial Service",
        category: "Mortgage Consultation"
      },
      {
        "@type": "WebPage",
        "@id": "https://avi-mashkanta.com/about#webpage",
        url: "https://avi-mashkanta.com/about",
        name: "יועץ משכנתאות בחולון והמרכז | אבי - הבית למשכנתאות",
        description: "איחוד הלוואות, מיחזור משכנתא, פתרונות למסורבי בנקים",
        inLanguage: "he-IL",
        isPartOf: { "@id": "https://avi-mashkanta.com/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "דף הבית",
              item: "https://avi-mashkanta.com"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "אודות",
              item: "https://avi-mashkanta.com/about"
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function CommercialPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <CommercialHero />
        <CommercialAbout />
        <StorySection />
        <CommercialWhySection />
        <CommercialServicesSection />

        {/* Certificates Section */}
        <section className="relative bg-cream py-24 lg:py-40">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              {/* Title Section */}
              <div className="text-center mb-24 lg:mb-40">
                <h2 className="text-5xl lg:text-8xl font-noto-sans-hebrew font-black text-blue-dk leading-tight">
                  תעודות <span className="text-orange">והסמכות</span>
                </h2>

                {/* Orange Line */}
                <div className="mt-10 w-32 h-2.5 bg-orange mx-auto rounded-full shadow-sm" />
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="relative aspect-[3/4]">
                    <Image
                      src={`/images/cert${num}.jpeg`}
                      alt={`תעודה ${num}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AboutCTA />
        <Contact />
        <AboutFAQ />
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

