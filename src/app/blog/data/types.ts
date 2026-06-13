// Shared types for blog articles
// Text fields in `p`, `ul`, `ol`, `tip` support a minimal markdown subset:
// **bold** and [link text](/internal/path)

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; title: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  /** H1 on the article page */
  title: string;
  /** <title> tag — keep under ~60 chars */
  metaTitle: string;
  /** meta description — keep under ~155 chars */
  description: string;
  keywords: string[];
  category: string;
  /** ISO date, e.g. "2026-06-12" */
  datePublished: string;
  dateModified: string;
  /** minutes */
  readingTime: number;
  /** public path, e.g. /images/blog/slug.svg */
  image: string;
  imageAlt: string;
  /** short text for the blog index card */
  excerpt: string;
  content: ContentBlock[];
  faq: ArticleFaq[];
  /** slugs of related articles */
  related: string[];
}
