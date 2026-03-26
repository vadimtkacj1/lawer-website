export default function LocationStarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9c0-2.76 2.24-5 5-5z"/>
      <path d="M12 6.5l1.09 2.21 2.44.35-1.77 1.73.42 2.43L12 11.77l-2.18 1.45.42-2.43-1.77-1.73 2.44-.35z"/>
    </svg>
  );
}
