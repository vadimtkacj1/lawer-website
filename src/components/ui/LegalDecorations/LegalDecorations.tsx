"use client";

import { m } from "framer-motion";

export default function LegalDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Книга 1 - верхний левый угол */}
      <m.div
        className="absolute top-10 left-[5%] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-orange/3"
        animate={{
          y: [0, -5, 0],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
        </svg>
      </m.div>

      {/* Документ с печатью - правый верх */}
      <m.div
        className="absolute top-20 right-[8%] w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 text-blue-dk/3"
        animate={{
          y: [0, 6, 0],
          rotate: [0.5, -0.5, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          {/* Документ */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
          {/* Линии текста */}
          <rect x="8" y="12" width="8" height="1" opacity="0.6"/>
          <rect x="8" y="14" width="6" height="1" opacity="0.6"/>
          <rect x="8" y="16" width="7" height="1" opacity="0.6"/>
        </svg>
      </m.div>

      {/* Печать/Штамп - левый низ */}
      <m.div
        className="absolute bottom-24 left-[10%] w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 text-orange/3"
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
          <text x="12" y="13" fontSize="4" textAnchor="middle" fill="currentColor" opacity="0.5">✓</text>
        </svg>
      </m.div>

      {/* Книга 2 - правый низ */}
      <m.div
        className="absolute bottom-32 right-[12%] w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-blue-dk/3"
        animate={{
          y: [0, -4, 0],
          x: [0, 2, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM7 18V6h13v12H7z"/>
          <path d="M3 6v13a2 2 0 0 0 2 2h13v-2H5V6H3z"/>
          <rect x="9" y="9" width="9" height="1" opacity="0.5"/>
          <rect x="9" y="11" width="9" height="1" opacity="0.5"/>
          <rect x="9" y="13" width="6" height="1" opacity="0.5"/>
        </svg>
      </m.div>

      {/* Контракт/Соглашение - центр слева */}
      <m.div
        className="absolute top-1/2 left-[3%] w-12 h-12 md:w-14 md:h-14 text-orange/3"
        animate={{
          y: [0, 5, 0],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          <path d="M8 13h8v1H8v-1zm0 2h8v1H8v-1zm0 2h5v1H8v-1z" opacity="0.6"/>
          {/* Подпись */}
          <path d="M8 18.5c0 0 2-1 4-1s4 1 4 1" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.7"/>
        </svg>
      </m.div>

      {/* Молоток судьи - правый центр */}
      <m.div
        className="hidden lg:block absolute top-1/3 right-[5%] w-12 h-12 lg:w-14 lg:h-14 text-blue-dk/3"
        animate={{
          rotate: [-1, 1, -1],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l-2 2h4l-2-2zM9 5v3h6V5H9zm-1 4v2h8V9H8zm1 3v8h2v-8h-2zm3 0v8h2v-8h-2z"/>
          <rect x="6" y="20" width="12" height="2" rx="1"/>
        </svg>
      </m.div>

      {/* Весы правосудия - левый верх (только на больших экранах) */}
      <m.div
        className="hidden lg:block absolute top-16 left-[15%] w-14 h-14 lg:w-16 lg:h-16 text-orange/3"
        animate={{
          rotate: [-0.5, 0.5, -0.5],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2v18M8 20h8"/>
          <circle cx="6" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="18" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M4 13l4-7 4 7M14 13l4-7 4 7" fill="none" stroke="currentColor" strokeWidth="1"/>
          <line x1="4" y1="13" x2="10" y2="13" stroke="currentColor" strokeWidth="1"/>
          <line x1="14" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </m.div>
    </div>
  );
}
