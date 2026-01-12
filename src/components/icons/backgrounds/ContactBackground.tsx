export default function ContactBackground() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1c3664" strokeWidth="0.5" opacity="0.15"/>
        </pattern>
        <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c3664" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1c3664" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      <g fill="url(#shapeGradient)" opacity="0.6">
        <rect x="100" y="100" width="200" height="200" rx="15" />
        <rect x="1100" y="600" width="180" height="180" rx="15" />
        <rect x="50" y="650" width="150" height="150" rx="12" />
        <rect x="1200" y="150" width="160" height="160" rx="12" />

        <circle cx="300" cy="700" r="80" />
        <circle cx="1100" cy="200" r="70" />
        <circle cx="200" cy="300" r="60" />
        <circle cx="1300" cy="750" r="65" />

        <rect x="600" y="50" width="120" height="120" rx="10" transform="rotate(15 660 110)" />
        <rect x="700" y="750" width="100" height="100" rx="10" transform="rotate(-20 750 800)" />
        <rect x="400" y="500" width="140" height="140" rx="12" transform="rotate(10 470 570)" />
      </g>

      <g stroke="#1c3664" strokeWidth="1" opacity="0.1">
        <line x1="150" y1="0" x2="150" y2="900" />
        <line x1="1250" y1="0" x2="1250" y2="900" />
        <line x1="250" y1="0" x2="250" y2="900" />
        <line x1="1150" y1="0" x2="1150" y2="900" />

        <line x1="0" y1="200" x2="1400" y2="200" />
        <line x1="0" y1="700" x2="1400" y2="700" />
        <line x1="0" y1="100" x2="1400" y2="100" />
        <line x1="0" y1="800" x2="1400" y2="800" />

        <line x1="0" y1="0" x2="300" y2="300" />
        <line x1="1100" y1="0" x2="1400" y2="300" />
        <line x1="0" y1="600" x2="300" y2="900" />
        <line x1="1100" y1="600" x2="1400" y2="900" />
      </g>
    </svg>
  );
}
