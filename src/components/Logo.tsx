interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-10 w-10" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
          <stop offset="100%" style={{ stopColor: '#2563EB' }} />
        </linearGradient>
      </defs>

      {/* Main shape */}
      <path
        d="M8 20a12 12 0 1 1 24 0 12 12 0 0 1-24 0z"
        fill="url(#logoGradient)"
      />

      {/* Abstract R shape */}
      <path
        d="M17 14h6a3 3 0 1 1 0 6h-6v6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M23 20l3 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection dots */}
      <circle cx="20" cy="14" r="1" fill="white" />
      <circle cx="20" cy="26" r="1" fill="white" />
    </svg>
  );
}
