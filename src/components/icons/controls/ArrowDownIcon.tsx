import React from "react";
import { rem } from "@mantine/core";

interface ArrowDownIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ArrowDownIcon({ size, style, ...others }: ArrowDownIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M5.09289 11.3359L1.15539 7.21094C0.944452 6.97656 0.944452 6.625 1.17883 6.41406C1.4132 6.20312 1.76476 6.20312 1.9757 6.4375L4.95226 9.55469V1.5625C4.95226 1.25781 5.18664 1 5.51476 1C5.81945 1 6.07726 1.25781 6.07726 1.5625V9.55469L9.03039 6.4375C9.24133 6.20312 9.61633 6.20312 9.82726 6.41406C10.0616 6.625 10.0616 6.97656 9.8507 7.21094L5.9132 11.3359C5.79601 11.4531 5.65539 11.5 5.51476 11.5C5.3507 11.5 5.21008 11.4531 5.09289 11.3359Z" />
    </svg>
  );
}
