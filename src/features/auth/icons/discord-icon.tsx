interface IconProps {
  className?: string;
}

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a2 2 0 1 0-2-2c0 1.1.9 2 2 2Zm7-2a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 10Z" />
      <path d="M7.5 19.5c2.5 0 6.5-5.5 6.5-5.5s4 5.5 6.5 5.5c1.5 0 3-6 3-12S19.5 1.5 12 1.5 1.5 1.5 1.5 7.5s1.5 12 3 12c2.5 0 3-6 3-6" />
    </svg>
  );
}