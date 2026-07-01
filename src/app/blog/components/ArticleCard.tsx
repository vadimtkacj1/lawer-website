import Link from "next/link";
import Image from "next/image";
import type { Article } from "../data";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group h-full">
      <Link
        href={`/blog/${article.slug}`}
        className="flex flex-col h-full rounded-2xl overflow-hidden bg-white-card border border-blue-dk/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative aspect-[1200/630] w-full overflow-hidden bg-blue-dk/5">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col flex-grow p-5 sm:p-6">
          <span className="self-start bg-orange/10 text-orange text-xs font-bold px-3 py-1 rounded-full mb-3">
            {article.category}
          </span>
          <h2 className="text-lg sm:text-xl font-black text-blue-dk leading-snug mb-2 group-hover:text-orange transition-colors">
            {article.title}
          </h2>
          <p className="text-sm sm:text-base text-blue-dk/70 font-medium leading-7 flex-grow">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-blue-dk/10">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-blue-dk/60 font-semibold">
              <ClockIcon className="w-4 h-4" />
              {article.readingTime} דק׳ קריאה
            </span>
            <span className="flex items-center gap-1.5 text-sm font-bold text-orange group-hover:gap-2.5 transition-all">
              קראו עוד
              <ArrowIcon className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
