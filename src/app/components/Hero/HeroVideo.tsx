"use client";

import { useEffect, useState } from "react";

// Renders the hero background video ONLY on desktop (>=768px) and only after
// mount. Mobile therefore never downloads the ~210KB video, which previously
// competed with the LCP poster image + fonts over slow connections (display:none
// alone does NOT stop the browser from fetching a <video> source). Mobile shows
// the static poster <img> rendered in Hero; desktop loads the video just after
// first paint so it doesn't gate LCP.
export default function HeroVideo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const id = window.setTimeout(() => setShow(true), 150);
    return () => window.clearTimeout(id);
  }, []);

  if (!show) return null;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="relative z-[1] w-full h-full object-cover scale-[1.05] sm:scale-100 lg:scale-100 object-top lg:object-center transition-transform duration-700"
      style={{
        transformOrigin: "top center",
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <source src="/images/new-expert-optimized.mp4" type="video/mp4" />
    </video>
  );
}
