"use client";

import { useEffect, useState } from "react";

/**
 * Client-side only Accessibility Widget component
 * Prevents hydration mismatch by only rendering on client
 */
export default function AccessibilityWidget() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Initialize Sienna Accessibility Widget
    const initWidget = () => {
      if (typeof window !== "undefined" && (window as any).SiennaAccessibility) {
        (window as any).SiennaAccessibility.init({
          language: "he",
        });
      }
    };

    // Try to initialize immediately if script is loaded
    if ((window as any).SiennaAccessibility) {
      initWidget();
    } else {
      // Otherwise wait for script to load
      window.addEventListener("load", initWidget);
      return () => window.removeEventListener("load", initWidget);
    }
  }, []);

  // Don't render anything during SSR
  if (!isMounted) {
    return null;
  }

  return null; // Sienna creates its own DOM elements
}
