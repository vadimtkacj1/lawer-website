"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider() {
  useEffect(() => {
    // Enhanced smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add smooth scroll with custom easing
    const style = document.createElement("style");
    style.textContent = `
      * {
        scroll-behavior: smooth !important;
      }
      
      html {
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch;
      }
      
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth !important;
        }
        
        * {
          scroll-behavior: smooth !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
