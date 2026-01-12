export default function BalanceArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M100 40L100 160M40 100L160 100" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <path d="M160 100C160 133.137 133.137 160 100 160C66.8629 160 40 133.137 40 100C40 66.8629 66.8629 40 100 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M100 40L120 20M100 40L80 20" stroke="currentColor" strokeWidth="2" className="text-orange" />
      <circle cx="100" cy="100" r="4" fill="currentColor" className="text-orange" />
    </svg>
  );
}
