import React from "react";
import { rem } from "@mantine/core";

interface ChevronDownIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ChevronDownIcon({
  size,
  style,
  ...others
}: ChevronDownIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M5.67578 8.45508L1.17578 3.95508C0.941406 3.74414 0.941406 3.39258 1.17578 3.1582C1.38672 2.94727 1.73828 2.94727 1.97266 3.1582L6.07422 7.2832L10.1758 3.18164C10.3867 2.94727 10.7383 2.94727 10.9727 3.18164C11.1836 3.39258 11.1836 3.74414 10.9727 3.95508L6.44922 8.45508C6.23828 8.68945 5.88672 8.68945 5.67578 8.45508Z" />
    </svg>
  );
}
