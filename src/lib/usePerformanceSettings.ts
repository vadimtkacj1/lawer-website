"use client";

import { useState, useEffect } from 'react';

export interface PerformanceSettings {
  isMobile: boolean;
  reducedMotion: boolean;
  shouldDisableAnimations: boolean;
  shouldReduceAnimations: boolean;
}

export function usePerformanceSettings(): PerformanceSettings {
  const [settings, setSettings] = useState<PerformanceSettings>({
    isMobile: false,
    reducedMotion: false,
    shouldDisableAnimations: false,
    shouldReduceAnimations: false,
  });

  useEffect(() => {
    const checkSettings = () => {
      // Check if device is mobile
      const isMobile = 'ontouchstart' in window || 
        window.navigator.maxTouchPoints > 0 || 
        window.innerWidth <= 768;

      // Check for reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Disable animations completely for reduced motion users
      const shouldDisableAnimations = reducedMotion;

      // Reduce animations on mobile or slow connections
      const connection = (navigator as any)?.connection;
      const slowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' || 
        connection.saveData
      );

      const shouldReduceAnimations = isMobile || slowConnection;

      setSettings({
        isMobile,
        reducedMotion,
        shouldDisableAnimations,
        shouldReduceAnimations,
      });
    };

    checkSettings();
    
    // Listen for changes
    window.addEventListener('resize', checkSettings);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkSettings);

    return () => {
      window.removeEventListener('resize', checkSettings);
      mediaQuery.removeEventListener('change', checkSettings);
    };
  }, []);

  return settings;
}
