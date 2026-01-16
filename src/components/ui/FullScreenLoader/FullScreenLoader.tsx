"use client";

import { useEffect, useState } from "react";

export default function FullScreenLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader when page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#f9f7f4] flex items-center justify-center overflow-hidden">
      {/* Simple spinner - no background dots */}
      <div className="fullscreen-spinner"></div>
    </div>
  );
}
