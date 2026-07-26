"use client";

import { useState, useEffect, useLayoutEffect } from 'react';

/**
 * `useLayoutEffect` on the client, `useEffect` on the server (where React warns
 * about layout effects). Consumers of this hook swap between an animated and a
 * static tree, so the switch has to land before the browser paints — with a
 * plain `useEffect` the phone paints the desktop tree first and the correction
 * is visible as a flash.
 */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface PerformanceSettings {
  isMobile: boolean;
  reducedMotion: boolean;
  shouldDisableAnimations: boolean;
  shouldReduceAnimations: boolean;
}

const MOBILE_QUERY = '(max-width: 768px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function sameSettings(a: PerformanceSettings, b: PerformanceSettings): boolean {
  return (
    a.isMobile === b.isMobile &&
    a.reducedMotion === b.reducedMotion &&
    a.shouldDisableAnimations === b.shouldDisableAnimations &&
    a.shouldReduceAnimations === b.shouldReduceAnimations
  );
}

/**
 * Reads device/motion capabilities once and only updates when the answer
 * actually changes.
 *
 * It deliberately does NOT listen to `resize`: on mobile the URL bar collapsing
 * during scroll fires resize continuously, and the previous version pushed a
 * fresh state object on every one of those events. That re-rendered every
 * consumer mid-scroll — restarting the testimonial/logo marquee animations and
 * making the page visibly flicker. `matchMedia` change events only fire when
 * the breakpoint is really crossed.
 */
export function usePerformanceSettings(): PerformanceSettings {
  const [settings, setSettings] = useState<PerformanceSettings>({
    isMobile: false,
    reducedMotion: false,
    shouldDisableAnimations: false,
    shouldReduceAnimations: false,
  });

  useIsomorphicLayoutEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const read = (): PerformanceSettings => {
      const isMobile =
        'ontouchstart' in window ||
        window.navigator.maxTouchPoints > 0 ||
        mobileQuery.matches;

      const reducedMotion = motionQuery.matches;

      const connection = (navigator as any)?.connection;
      const slowConnection = !!connection && (
        connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.saveData
      );

      return {
        isMobile,
        reducedMotion,
        // Disable animations completely for reduced motion users
        shouldDisableAnimations: reducedMotion,
        // Reduce animations on mobile or slow connections
        shouldReduceAnimations: isMobile || slowConnection,
      };
    };

    // Bail out of the state update when nothing changed, so consumers keep the
    // exact same object identity and never re-render.
    const checkSettings = () => {
      setSettings((prev) => {
        const next = read();
        return sameSettings(prev, next) ? prev : next;
      });
    };

    checkSettings();

    mobileQuery.addEventListener('change', checkSettings);
    motionQuery.addEventListener('change', checkSettings);

    return () => {
      mobileQuery.removeEventListener('change', checkSettings);
      motionQuery.removeEventListener('change', checkSettings);
    };
  }, []);

  return settings;
}
