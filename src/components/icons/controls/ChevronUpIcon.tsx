import React from "react";
import { rem } from "@mantine/core";

interface ChevronUpIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ChevronUpIcon({ size, style, ...others }: ChevronUpIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M5.67578 3.1582C5.88672 2.94727 6.23828 2.94727 6.44922 3.1582L10.9727 7.6582C11.1836 7.89258 11.1836 8.24414 10.9727 8.45508C10.7383 8.68945 10.3867 8.68945 10.1758 8.45508L6.07422 4.35352L1.97266 8.45508C1.73828 8.68945 1.38672 8.68945 1.17578 8.45508C0.941406 8.24414 0.941406 7.89258 1.17578 7.68164L5.67578 3.1582Z" />
    </svg>
  );
}
