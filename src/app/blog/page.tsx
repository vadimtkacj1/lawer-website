import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { articles } from "./data";
import ArticleCard from "./components/ArticleCard";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

const BASE_URL = "https://avi-mashkanta.com";

export const metadata: Metadata = {
  title: "בלוג משכנתאות | טיפים, מדריכים וחדשות ריבית | אבי - הבית למשכנתאות",
  description:
    "כל מה שצריך לדעת על משכנתאות במקום אחד: מדריכים לדירה ראשונה, מחזור משכנתא, ריביות 2026, טעויות נפוצות וטיפים שחוסכים מאות אלפי שקלים. בלוג המשכנתאות של אבי בוקעי.",
  keywords: [
    "בלוג משכנתאות",
    "טיפים למשכנתא",
    "מדריך משכנתא",
    "ריבית משכנתא 2026",
    "מחזור משכנתא",
    "משכנתא לדירה ראשונה",
    "יועץ משכנתאות חולון",
  ],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    url: `${BASE_URL}/blog`,
    siteName: "אבי - הבית למשכנתאות",
    locale: "he_IL",
    type: "website",
    title: "בלוג משכנתאות | מדריכים, ריביות וטיפים לחיסכון",
    description:
      "מדריכים מקצועיים על משכנתאות: דירה ראשונה, מחזור, ריביות 2026, עצמאים, השקעות ועוד. ידע שחוסך כסף.",
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "בלוג המשכנתאות של אבי - הבית למשכנתאות",
      },
    ],
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${BASE_URL}/blog#blog`,
        url: `${BASE_URL}/blog`,
        name: "בלוג משכנתאות | אבי - הבית למשכנתאות",
        description:
          "מדריכים, טיפים וחדשות בעולם המשכנתאות, הריביות והנדל\"ן בישראל.",
        inLanguage: "he-IL",
        publisher: { "@id": `${BASE_URL}/#organization` },
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting",
          headline: a.title,
          url: `${BASE_URL}/blog/${a.slug}`,
          datePublished: a.datePublished,
          dateModified: a.dateModified,
          image: `${BASE_URL}${a.image.replace(/\.jpg$/, "-og.jpg")}`,
          author: { "@type": "Person", name: "אבי בוקעי" },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "דף הבית", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "בלוג", item: `${BASE_URL}/blog` },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function BlogIndexPage() {
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "בלוג", href: "/blog" },
  ];

  const [featured, ...rest] = articles;

  return (
    <>
      <JsonLd />
      <Header alwaysWithBackground />
      <main id="main-content" tabIndex={-1} className="bg-cream min-h-screen">
        {/* Hero */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10 bg-gradient-to-b from-blue-dk to-[#16294d] text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
            <span className="inline-block text-orange font-bold text-sm sm:text-base uppercase tracking-wider mb-3">
              בלוג המשכנתאות
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              הידע שחוסך לכם מאות אלפי שקלים
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed">
              מדריכים מקצועיים, טיפים מהשטח וחדשות הריבית — כל מה שצריך לדעת לפני
              שלוקחים, ממחזרים או מתכננים משכנתא. כתוב בשפה פשוטה על ידי אבי בוקעי,
              יועץ משכנתאות ויוצא המערכת הבנקאית.
            </p>
          </div>
        </section>

        <Breadcrumbs items={breadcrumbItems} />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14">
          {/* Featured article */}
          <FeaturedCard article={featured} />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
            {rest.map((article, i) => (
              <ArticleCard key={article.slug} article={article} priority={i < 2} />
            ))}
          </div>

          {/* CTA band */}
          <div className="mt-14 sm:mt-20 rounded-3xl bg-blue-dk text-white p-8 sm:p-12 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              יש לכם שאלה על המשכנתא שלכם?
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium max-w-2xl mx-auto mb-6">
              מעבר לכל המאמרים, אני כאן כדי לבדוק את המקרה הספציפי שלכם — ייעוץ
              ראשוני ללא התחייבות ובלי עלות.
            </p>
            <a
              href="tel:+972544729513"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              דברו עם אבי: 054-4729513
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <Widgets />
    </>
  );
}

// Featured hero card for the newest article
function FeaturedCard({ article }: { article: import("./data").Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white-card border border-blue-dk/10 shadow-md hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden bg-cream">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <span className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          הכי חדש · {article.category}
        </span>
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-dk leading-tight mb-3 group-hover:text-orange transition-colors">
          {article.title}
        </h2>
        <p className="text-base sm:text-lg text-blue-dk/75 font-medium leading-8 mb-5">
          {article.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-orange font-bold text-lg group-hover:gap-3 transition-all">
          לקריאת המאמר המלא
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
