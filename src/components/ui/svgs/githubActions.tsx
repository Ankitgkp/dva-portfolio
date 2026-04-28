import type { SVGProps } from "react";

const GithubActions = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128-57.307 128-128S198.693 0 128 0Z"
      fill="#2088FF"
    />
    <path
      d="M84.69 132.27a24.59 24.59 0 1 0 0-49.18 24.59 24.59 0 0 0 0 49.18Zm0 0v36.89M171.31 97.68v36.89m0 0a24.59 24.59 0 1 0 0 49.18 24.59 24.59 0 0 0 0-49.18Zm0 0h-86.62"
      stroke="#fff"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export { GithubActions };
