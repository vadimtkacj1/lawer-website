"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider() {
  useEffect(() => {
    let rafId: number | null = null;
    let isScrolling = false;

    // Enhanced smooth scroll with performance optimizations
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (anchor && anchor.getAttribute('href') !== '#') {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const id = href.slice(1);
          const element = document.getElementById(id);

          if (element) {
            // Cancel any ongoing scroll animation
            if (rafId !== null) {
              cancelAnimationFrame(rafId);
            }

            // Get initial positions
            const startPosition = window.pageYOffset;
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 90;
            const finalPosition = targetPosition - headerOffset;
            const distance = finalPosition - startPosition;
            const duration = Math.min(Math.abs(distance) * 0.5, 800); // Max 800ms
            let startTime: number | null = null;

            // Easing function for smooth animation
            const easeInOutCubic = (t: number): number => {
              return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            // Animation function
            const animateScroll = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / duration, 1);
              const ease = easeInOutCubic(progress);

              window.scrollTo(0, startPosition + distance * ease);

              if (progress < 1) {
                rafId = requestAnimationFrame(animateScroll);
              } else {
                rafId = null;
                isScrolling = false;
              }
            };

            isScrolling = true;
            rafId = requestAnimationFrame(animateScroll);
          }
        }
      }
    };

    // Optimize scroll performance with passive listener
    const optimizeScroll = () => {
      // Add will-change on scroll start
      if (!isScrolling) {
        document.documentElement.style.willChange = 'scroll-position';
      }
    };

    const resetOptimization = () => {
      // Remove will-change after scroll ends
      if (!isScrolling) {
        document.documentElement.style.willChange = 'auto';
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      optimizeScroll();
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(resetOptimization, 150);
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}