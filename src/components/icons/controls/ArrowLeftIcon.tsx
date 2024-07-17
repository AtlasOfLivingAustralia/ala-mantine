import React from "react";
import { rem } from "@mantine/core";

interface ArrowLeftIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ArrowLeftIcon({ size, style, ...others }: ArrowLeftIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M1.16406 6.9132C1.04688 6.79601 1 6.65539 1 6.49133C1 6.3507 1.04688 6.21008 1.16406 6.09289L5.28906 2.15539C5.52344 1.94445 5.875 1.94445 6.08594 2.17883C6.29688 2.38976 6.29688 2.76476 6.0625 2.9757L2.94531 5.92883H10.9375C11.2422 5.92883 11.5 6.18664 11.5 6.49133C11.5 6.81945 11.2422 7.05383 10.9375 7.05383H2.94531L6.0625 10.0304C6.29688 10.2413 6.29688 10.5929 6.08594 10.8273C5.875 11.0616 5.52344 11.0616 5.28906 10.8507L1.16406 6.9132Z" />
    </svg>
  );
}
