import type { Article } from "./types";
import { articles1 } from "./articles-1";
import { articles2 } from "./articles-2";
import { articles3 } from "./articles-3";

export type { Article, ContentBlock, ArticleFaq } from "./types";

// All blog articles, newest first
export const articles: Article[] = [...articles1, ...articles2, ...articles3].sort(
  (a, b) => (a.datePublished < b.datePublished ? 1 : -1)
);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  const bySlug = current.related
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => Boolean(a) && a!.slug !== slug);

  if (bySlug.length >= limit) return bySlug.slice(0, limit);

  // Fill remaining slots with same-category articles, then anything else
  const seen = new Set([slug, ...bySlug.map((a) => a.slug)]);
  const fillers = articles.filter(
    (a) => !seen.has(a.slug) && a.category === current.category
  );
  const rest = articles.filter((a) => !seen.has(a.slug) && a.category !== current.category);

  return [...bySlug, ...fillers, ...rest].slice(0, limit);
}

export const categories: string[] = Array.from(
  new Set(articles.map((a) => a.category))
);
