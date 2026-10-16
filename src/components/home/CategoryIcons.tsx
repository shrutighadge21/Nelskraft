import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * 1. Refractory Products: Clean geometric isometric stack of refractory bricks.
 * Features a top cube/block stacked upon two supporting blocks.
 */
export function RefractoryBricksIcon({ className = "w-6 h-6", size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Top Brick */}
        {/* Top Rhombus */}
        <path d="M16 2.5 L23 6.5 L16 10.5 L9 6.5 Z" />
        {/* Left Face */}
        <path d="M9 6.5 L9 13.5 L16 17.5 L16 10.5" />
        {/* Right Face */}
        <path d="M23 6.5 L23 13.5 L16 17.5" />

        {/* Bottom Left Brick */}
        {/* Exposed Top Edge */}
        <path d="M2.5 13.5 L9 9.5" />
        {/* Left Face */}
        <path d="M2.5 13.5 L2.5 20.5 L9.5 24.5 L9.5 17.5 Z" />
        {/* Front-Right Face */}
        <path d="M9.5 24.5 L16 20.5 L16 17.5" />

        {/* Bottom Right Brick */}
        {/* Exposed Top Edge */}
        <path d="M29.5 13.5 L23 9.5" />
        {/* Right Face */}
        <path d="M29.5 13.5 L29.5 20.5 L22.5 24.5 L22.5 17.5 Z" />
        {/* Front-Left Face */}
        <path d="M22.5 24.5 L16 20.5" />
      </g>
    </svg>
  );
}

/**
 * 2. Biomass Fuels: Refined outline leaf icon.
 * Delicate single organic leaf tilted diagonally with subtle central spine and branching vein.
 */
export function BiomassLeafIcon({ className = "w-6 h-6", size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Elegant tilted ovate leaf body */}
        <path d="M7 25 C6 16.5 12 7 25 5 C25 18 16.5 26 7 25 Z" />
        {/* Central stem / midrib */}
        <path d="M7 25 C13.5 20.5 18.5 15.5 25 5" />
        {/* Subtle diagonal vein branch */}
        <path d="M14 18 L19 19" />
      </g>
    </svg>
  );
}

/**
 * 3. Industrial Minerals: Clean outlined mineral/crystal aggregate triangle symbol.
 * Geometric triangle with refined stippling / crystalline mineral particles inside.
 */
export function IndustrialMineralsIcon({ className = "w-6 h-6", size = 26 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main Triangle Structure */}
        <path d="M16 4 L28 26 L4 26 Z" />
        {/* Mineral facet tick */}
        <path d="M19 12 L22 8" />
      </g>
      {/* Crystalline mineral grains / sand particles */}
      <circle cx="16" cy="14" r="1" fill="currentColor" />
      <circle cx="11.5" cy="20.5" r="1" fill="currentColor" />
      <circle cx="20.5" cy="21" r="1" fill="currentColor" />
      <circle cx="15.5" cy="22" r="0.75" fill="currentColor" />
    </svg>
  );
}
