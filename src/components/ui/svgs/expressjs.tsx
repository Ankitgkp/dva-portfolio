import type { SVGProps } from "react";

const ExpressJs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="30" fill="#000" />
    <text
      x="128"
      y="148"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fontSize="52"
      fill="#fff"
    >
      ex
    </text>
  </svg>
);

export { ExpressJs };
