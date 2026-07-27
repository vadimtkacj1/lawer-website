"use client";

import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

// Matches the query the mobile stylesheet uses, so the JS and the CSS agree on
// what counts as a touch device.
const TOUCH_QUERY = "(hover: none) and (pointer: coarse)";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Wraps the app in LazyMotion so all components use the lightweight `m`
// components and only the `domAnimation` feature set (~17 KB) is bundled,
// instead of the full framer-motion runtime. MotionConfig preserves the
// reduced-motion preference. Must be a client component because `domAnimation`
// is a function and cannot cross the server/client boundary as a prop.
export default function MotionProvider({ children }: { children: ReactNode }) {
  const [isTouch, setIsTouch] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const mq = window.matchMedia(TOUCH_QUERY);
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // On touch devices the mobile stylesheet already forces `transform: none` on
  // every Framer element, so the transform half of each animation is computed
  // per frame and then thrown away by CSS — the work still dirties the element
  // and costs a style recalculation, for no visible result. Telling Framer to
  // treat motion as reduced makes it skip transform animations outright, which
  // is visually identical here and removes the wasted per-frame writes.
  return (
    <MotionConfig reducedMotion={isTouch ? "always" : "user"}>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
