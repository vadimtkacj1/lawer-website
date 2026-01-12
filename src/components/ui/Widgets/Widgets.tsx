"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import AccessibilityIcon from "@/components/icons/AccessibilityIcon";

export default function Widgets() {
  return (
    <>
      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/972500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50
                   w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#25d366]
                   flex items-center justify-center shadow-lg shadow-[#25d366]/30
                   transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-95"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      </a>

      {/* Accessibility Widget */}
      <button
        className="fixed bottom-6 left-6 lg:bottom-8 lg:left-8 z-50
                   w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-blue-dk
                   flex items-center justify-center shadow-lg shadow-blue-dk/30
                   transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-blue-dk/90 active:scale-95"
        aria-label="נגישות"
        title="נגישות"
      >
        <AccessibilityIcon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
      </button>
    </>
  );
}
