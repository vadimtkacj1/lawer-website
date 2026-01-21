"use client";

import { useEffect, useState } from "react";

export default function FullScreenLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      setTimeout(() => setShouldRender(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#f9f7f4] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Только один кружок */}
      <div className="loader-circle"></div>

      <style jsx>{`
        .loader-circle {
          width: 60px;
          height: 60px;
          border: 5px solid rgba(15, 35, 68, 0.1); /* Цвет подложки (blue-dk) */
          border-top: 5px solid #F1662A; /* Цвет самой крутилки (orange) */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}