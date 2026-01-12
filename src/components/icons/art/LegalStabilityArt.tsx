export default function LegalStabilityArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M100 20V180M60 40H140M70 180H130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M40 80C60 60 140 60 160 80C180 100 120 140 100 140C80 140 20 100 40 80Z" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="100" cy="80" r="15" stroke="currentColor" strokeWidth="1" className="text-orange" />
    </svg>
  );
}
