"use client";

import { useEffect, useRef, useState } from "react";

// The hero video is deferred until just after first paint on every device: the
// static poster in Hero is the LCP element and must not compete with the ~210KB
// download. It used to be skipped on phones entirely, which left mobile users
// looking at a still image — at 210KB the file is small enough to play there
// too, so the only devices that stay on the poster now are the ones that asked
// to save data or are on a 2G-class connection.
export default function HeroVideo() {
  const [show, setShow] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const connection = (navigator as any)?.connection;
    const effectiveType: string = connection?.effectiveType ?? "";
    if (connection?.saveData || effectiveType.includes("2g")) return;

    let id = 0;
    // Mount only once the page has finished loading, so the video never
    // competes with the poster, the fonts or the CSS for bandwidth — that
    // competition is why phones were excluded in the first place.
    const start = () => {
      id = window.setTimeout(() => setShow(true), 150);
    };

    if (document.readyState === "complete") {
      start();
      return () => window.clearTimeout(id);
    }

    window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      window.clearTimeout(id);
    };
  }, []);

  // iOS only honours autoplay when the element is muted as a *property*, and
  // Safari ignores the `autoplay` attribute on an element inserted after load —
  // so playback is started explicitly. A rejected promise (Low Power Mode, or a
  // policy that still refuses) is fine: the poster underneath stays visible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});
  }, [show]);

  if (!show) return null;

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      // Safe to buffer eagerly: nothing else is in flight by the time this
      // element exists, and iOS needs data buffered before play() will start.
      preload="auto"
      poster="/images/expert-poster.webp"
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
