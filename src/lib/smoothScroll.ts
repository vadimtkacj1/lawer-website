"use client";

/**
 * Smooth scroll utility with custom easing
 */
export function smoothScrollTo(targetY: number, duration: number = 1200) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();

  // Custom easing function - easeInOutCubic with smoother curve
  const easeInOutCubic = (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  function scroll() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startY + diff * ease);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

/**
 * Initialize smooth scroll for anchor links
 */
export function initSmoothScroll() {
  if (typeof window === "undefined") return;

  // Handle all anchor links
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a[href^='#']");

    if (anchor) {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      e.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        const targetY = targetElement.getBoundingClientRect().top + window.scrollY - 80;
        smoothScrollTo(targetY, 1200);

        // Update URL without jumping
        history.pushState(null, "", href);
      }
    }
  });
}
