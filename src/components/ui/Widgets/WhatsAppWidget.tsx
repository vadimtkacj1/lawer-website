"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/972544729513?text=היי אבי , הגעתי מהאתר , אשמח לדעת מתי נוכל לקבוע פגישה ?
"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50
                 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#25d366]
                 flex items-center justify-center shadow-lg shadow-[#25d366]/30
                 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-95"
      aria-label="פתח WhatsApp לשליחת הודעה"
    >
      <WhatsAppIcon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
    </a>
  );
}
