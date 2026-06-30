import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { getArticleBySlug, getAllSlugs, getRelatedArticles } from "../data";
import ArticleBody from "../components/ArticleBody";
import BlogFAQ from "../components/BlogFAQ";
import ArticleCard from "../components/ArticleCard";

const Footer = dynamic(() => import("@/components/Footer"));
const Widgets = dynamic(() => import("@/components/ui/Widgets"));

const BASE_URL = "https://avi-mashkanta.com";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "מאמר לא נמצא | אבי - הבית למשכנתאות" };

  const url = `${BASE_URL}/blog/${article.slug}`;
  const img = `${BASE_URL}${article.image.replace(/\.jpg$/, "-og.jpg")}`;

  return {
    title: article.metaTitle,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: "אבי בוקעי" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "אבי - הבית למשכנתאות",
      locale: "he_IL",
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ["אבי בוקעי"],
      images: [{ url: img, width: 1200, height: 630, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [img],
    },
  };
}

function JsonLd({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);
  if (!article) return null;
  const url = `${BASE_URL}/blog/${article.slug}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Defined on-page so the BlogPosting `publisher` @id reference resolves
        // (cross-page @id refs don't resolve; Article rich results need publisher name+logo)
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "אבי - הבית למשכנתאות",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/logo.svg`,
        },
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        url,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "he-IL",
        image: `${BASE_URL}${article.image.replace(/\.jpg$/, "-og.jpg")}`,
        articleSection: article.category,
        keywords: article.keywords.join(", "),
        author: {
          "@type": "Person",
          name: "אבי בוקעי",
          url: `${BASE_URL}/about`,
        },
        publisher: { "@id": `${BASE_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        isPartOf: { "@id": `${BASE_URL}/blog#blog` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "דף הבית", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "בלוג", item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
      ...(article.faq.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: article.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

function formatHebrewDate(iso: string): string {
  const months = [
    "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
    "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ב${months[m - 1]} ${y}`;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);
  const breadcrumbItems = [
    { label: "דף הבית", href: "/" },
    { label: "בלוג", href: "/blog" },
    { label: article.title, href: `/blog/${article.slug}` },
  ];

  return (
    <>
      <JsonLd slug={slug} />
      <Header alwaysWithBackground />
      <main id="main-content" tabIndex={-1} className="bg-cream">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-6 sm:mb-8">
              <Link
                href="/blog"
                className="inline-block text-orange font-bold text-sm mb-3 hover:underline"
              >
                {article.category}
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-dk leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-lg sm:text-xl text-blue-dk/70 font-medium leading-8 mb-5">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-blue-dk/60 font-semibold border-y border-blue-dk/10 py-3">
                <Link
                  href="/about"
                  className="flex items-center gap-1.5 hover:text-orange transition-colors"
                  title="אבי בוקעי — יועץ משכנתאות, בנקאי לשעבר"
                >
                  <span className="w-8 h-8 rounded-full bg-blue-dk text-white flex items-center justify-center text-xs font-black">
                    אב
                  </span>
                  מאת אבי בוקעי
                </Link>
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4" />
                  {formatHebrewDate(article.datePublished)}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4" />
                  {article.readingTime} דק׳ קריאה
                </span>
              </div>
            </header>

            {/* Body */}
            <ArticleBody content={article.content} />

            {/* FAQ */}
            <BlogFAQ faq={article.faq} />

            {/* CTA */}
            <section className="mt-10 sm:mt-14 rounded-3xl bg-gradient-to-br from-orange to-orange-hover text-white p-7 sm:p-10 text-center shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-black mb-3">
                רוצים שאבדוק את המקרה שלכם?
              </h2>
              <p className="text-base sm:text-lg text-white/90 font-medium max-w-xl mx-auto mb-6">
                כל מקרה שונה. ייעוץ ראשוני ללא עלות וללא התחייבות — נבדוק יחד איך
                לחסוך לכם את מירב הכסף על המשכנתא.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+972544729513"
                  className="inline-flex items-center justify-center gap-2 bg-white text-orange font-bold text-lg px-7 py-3.5 rounded-full hover:bg-cream transition-colors shadow-lg"
                >
                  התקשרו: 054-4729513
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-blue-dk text-white font-bold text-lg px-7 py-3.5 rounded-full hover:bg-[#16294d] transition-colors shadow-lg"
                >
                  לכל השירותים
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="bg-white-card border-t border-blue-dk/10 py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
              <h2 className="text-2xl sm:text-3xl font-black text-blue-dk mb-6 sm:mb-8 text-center">
                מאמרים נוספים שיעניינו אתכם
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <Widgets />
    </>
  );
}
