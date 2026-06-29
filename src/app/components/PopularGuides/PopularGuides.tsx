import Link from "next/link";
import { getArticleBySlug } from "@/app/blog/data";
import type { Article } from "@/app/blog/data/types";

// Server-rendered internal-link block: surfaces the highest-intent guides on the
// homepage so they receive top-level internal links (helps crawl/indexation and
// distributes authority), and adds crawlable, keyword-rich content to the page.
// Titles/excerpts are pulled from the article data so they never go stale.
const FEATURED_SLUGS = [
  "mortgage-advisor-cost",
  "mehir-lamishtaken-2026",
  "mortgage-interest-rates-2026",
  "private-advisor-vs-bank-banker",
  "fixed-vs-variable-mortgage-rate",
  "mortgage-tracks-explained",
];

export default function PopularGuides() {
  const articles = FEATURED_SLUGS.map((s) => getArticleBySlug(s)).filter(
    (a): a is Article => Boolean(a)
  );
  if (!articles.length) return null;

  return (
    <section className="bg-cream py-20 lg:py-28" dir="rtl">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <h2 className="font-noto-sans-hebrew font-black text-3xl lg:text-5xl text-blue-dk mb-3 text-center leading-tight">
          מדריכי משכנתא <span className="text-orange">מומלצים</span>
        </h2>
        <p className="text-center text-blue-dk/65 text-base lg:text-lg font-semibold mb-12 max-w-2xl mx-auto">
          כל מה שחשוב לדעת לפני שלוקחים משכנתא — מהעלות של יועץ משכנתאות ועד בחירת
          התמהיל הנכון לסביבת הריבית של 2026.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="block bg-white rounded-2xl p-6 border border-blue-dk/10 hover:shadow-md transition-shadow h-full"
            >
              <span className="text-orange font-bold text-xs">{a.category}</span>
              <h3 className="font-noto-sans-hebrew font-black text-lg text-blue-dk mt-2 mb-2 leading-snug">
                {a.title}
              </h3>
              <p className="text-blue-dk/65 text-sm font-semibold leading-relaxed">
                {a.excerpt}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block text-blue-dk font-bold hover:text-orange transition-colors underline underline-offset-4"
          >
            לכל מדריכי המשכנתא ←
          </Link>
        </div>
      </div>
    </section>
  );
}
