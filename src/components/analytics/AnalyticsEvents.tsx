"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * Global conversion-click tracker.
 * Listens in capture phase so component-level stopPropagation can't swallow events,
 * and covers links on server-rendered pages (privacy, accessibility, 404) without
 * converting them to client components.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const params = { page_path: window.location.pathname };

      if (href.startsWith("tel:")) {
        sendGAEvent("event", "phone_call", params);
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        sendGAEvent("event", "whatsapp_click", params);
      } else if (href.startsWith("mailto:")) {
        sendGAEvent("event", "email_click", params);
      } else if (href.includes("wisecard.co.il")) {
        sendGAEvent("event", "wise_documents_click", params);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
