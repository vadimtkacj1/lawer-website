import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className="bg-cream/50 py-3 sm:py-4"
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <ol className="flex items-center gap-2 text-sm sm:text-base flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-blue-dk font-semibold">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="text-blue-dk/70 hover:text-orange transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                    <ChevronIcon className="w-4 h-4 text-blue-dk/40" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
