export default function OpportunityArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <rect x="60" y="40" width="80" height="120" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M140 100H170M170 100L155 85M170 100L155 115" stroke="currentColor" strokeWidth="2" className="text-orange" />
      <circle cx="90" cy="100" r="10" stroke="currentColor" strokeWidth="1" />
      <line x1="60" y1="160" x2="140" y2="160" stroke="currentColor" strokeWidth="4" opacity="0.2" />
    </svg>
  );
}
