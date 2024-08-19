import React from "react";
import { rem } from "@mantine/core";

interface ThemeIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ThemeIcon({ size, style, ...others }: ThemeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      viewBox="0 0 14 14"
      {...others}
    >
      <g clip-path="url(#clip0_52_3)">
        <path d="M12.75 7C12.75 4.10156 9.89844 1.25 7 1.25V12.75C9.89844 12.75 12.75 9.89844 12.75 7ZM0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7Z" />
      </g>
      <defs>
        <clipPath id="clip0_52_3">
          <rect width="14" height="14" fill="rgba(0,0,0,0)" />
        </clipPath>
      </defs>
    </svg>
  );
}
