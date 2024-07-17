import React from "react";
import { rem } from "@mantine/core";

interface ArrowUpIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ArrowUpIcon({ size, style, ...others }: ArrowUpIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M5.9132 1.1875L9.8507 5.3125C10.0616 5.54688 10.0616 5.89844 9.82726 6.10938C9.59289 6.32031 9.24133 6.32031 9.03039 6.08594L6.07726 2.96875V10.9375C6.07726 11.2656 5.81945 11.5 5.51476 11.5C5.18664 11.5 4.95226 11.2656 4.95226 10.9375V2.96875L1.9757 6.08594C1.76476 6.32031 1.4132 6.32031 1.17883 6.10938C0.944452 5.89844 0.944452 5.52344 1.15539 5.3125L5.09289 1.1875C5.21008 1.07031 5.3507 1 5.51476 1C5.65539 1 5.79601 1.07031 5.9132 1.1875Z" />
    </svg>
  );
}
