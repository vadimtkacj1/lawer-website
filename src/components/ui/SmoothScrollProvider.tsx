"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider() {
  useEffect(() => {
    // Оптимізований smooth scroll - тільки для anchor links, не для всіх скролів
    // Це значно покращує продуктивність
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor && anchor.getAttribute('href') !== '#') {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const id = href.slice(1);
          const element = document.getElementById(id);
          
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    // Використовуємо smooth scroll тільки для anchor links через JS
    // Видалили глобальний CSS scroll-behavior який викликав лаги
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}