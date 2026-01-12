export default function TreeHouseArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M100 170V110M100 170L80 185M100 170L120 185" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 110L100 70L140 110H60Z" stroke="currentColor" strokeWidth="1.5" className="text-orange" />
      <circle cx="100" cy="70" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <path d="M70 60C50 40 100 20 130 50" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
