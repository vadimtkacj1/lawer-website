"use client";

import { useState } from "react";

const MAP_SRC = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent("Yehoshua Hankin 83, Holon, Israel")}&zoom=15&language=he`
  : "https://maps.google.com/maps?q=32.0185696,34.7787344&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function MapFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height="200"
        style={{ border: 0, borderRadius: "8px" }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        title="מיקום המשרד - יהושע חנקין 83, חולון"
        className="shadow-lg"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="w-full h-[200px] bg-white/10 rounded-lg border border-white/20 flex flex-col items-center justify-center gap-2 hover:bg-white/15 transition-colors cursor-pointer"
      aria-label="טען מפה - יהושע חנקין 83, חולון"
    >
      <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="text-white/80 text-sm font-semibold">יהושע חנקין 83, חולון</span>
      <span className="text-white/50 text-xs">לחץ לטעינת המפה</span>
    </button>
  );
}
