import type { SVGProps } from "react";

const DataStructure = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid" fill="none">
    <rect width="256" height="256" rx="30" fill="#1E293B" />
    <circle cx="128" cy="60" r="20" fill="#38BDF8" />
    <circle cx="72" cy="140" r="20" fill="#38BDF8" />
    <circle cx="184" cy="140" r="20" fill="#38BDF8" />
    <circle cx="44" cy="210" r="16" fill="#38BDF8" />
    <circle cx="100" cy="210" r="16" fill="#38BDF8" />
    <circle cx="156" cy="210" r="16" fill="#38BDF8" />
    <circle cx="212" cy="210" r="16" fill="#38BDF8" />
    <line x1="128" y1="80" x2="72" y2="120" stroke="#38BDF8" strokeWidth="4" />
    <line x1="128" y1="80" x2="184" y2="120" stroke="#38BDF8" strokeWidth="4" />
    <line x1="72" y1="160" x2="44" y2="194" stroke="#38BDF8" strokeWidth="4" />
    <line x1="72" y1="160" x2="100" y2="194" stroke="#38BDF8" strokeWidth="4" />
    <line x1="184" y1="160" x2="156" y2="194" stroke="#38BDF8" strokeWidth="4" />
    <line x1="184" y1="160" x2="212" y2="194" stroke="#38BDF8" strokeWidth="4" />
  </svg>
);

export { DataStructure };
