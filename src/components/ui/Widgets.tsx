"use client";

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
                   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
        aria-label="WhatsApp"
      >
        <svg
          className="w-7 h-7 lg:w-8 lg:h-8 text-white"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>

      {/* Accessibility Widget */}
      <button
        className="fixed bottom-6 left-6 lg:bottom-8 lg:left-8 z-50 
                   w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-blue-dk
                   flex items-center justify-center shadow-lg shadow-blue-dk/30
                   transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-blue-dk/90 active:scale-95"
        aria-label="נגישות"
        title="נגישות"
      >
        <svg
          className="w-6 h-6 lg:w-7 lg:h-7 text-white"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143Zm-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 6.632 13h.694a.383.383 0 0 0 .382-.334L8 11.024l.292 1.642a.383.383 0 0 0 .382.334h.694a.383.383 0 0 0 .382-.428l-.323-4.585v-2.5l3.24-.316a.38.38 0 0 0 .333-.42L13 3.334c0-.214-.227-.393-.467-.38L8 3.68 3.467 2.954c-.24-.012-.467.166-.467.38L3 4.667a.38.38 0 0 0 .332.42Z" />
        </svg>
      </button>
    </>
  );
}
