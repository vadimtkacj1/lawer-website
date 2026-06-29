"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  const [loaded, setLoaded] = useState(false);

  const lat = 32.0185696;
  const lng = 34.7787344;
  const address = "Yehoshua Hankin 83, Holon, Israel";
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const mapUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}&zoom=15&language=he`
    : `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <m.div variants={staggerItem} className={`w-full ${className}`}>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
        {loaded ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            title="מיקום המשרד - יהושע חנקין 83, חולון"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="w-full h-full bg-[#e8e4df] flex flex-col items-center justify-center gap-3 hover:bg-[#dedad5] transition-colors cursor-pointer"
            aria-label="טען מפה - יהושע חנקין 83 חולון"
          >
            <svg className="w-10 h-10 text-[#1c3664]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[#1c3664] font-bold text-base">יהושע חנקין 83, חולון</span>
            <span className="text-[#1c3664]/50 text-sm">לחץ לטעינת המפה</span>
          </button>
        )}

        {loaded && (
          <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 sm:max-w-md bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg" dir="rtl">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-dk shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-blue-dk font-bold text-sm sm:text-base whitespace-nowrap">
                  יהושע חנקין 83, חולון
                </p>
                <span className="text-blue-dk/30 hidden sm:inline">•</span>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-semibold text-sm sm:text-base hover:underline whitespace-nowrap"
                >
                  נווט ←
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </m.div>
  );
}
