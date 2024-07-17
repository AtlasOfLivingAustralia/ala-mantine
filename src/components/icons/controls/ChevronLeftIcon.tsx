import React from "react";
import { rem } from "@mantine/core";

interface ChevronLeftIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ChevronLeftIcon({
  size,
  style,
  ...others
}: ChevronLeftIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M3.17578 5.65234L7.67578 1.17578C7.88672 0.941406 8.23828 0.941406 8.47266 1.17578C8.68359 1.38672 8.68359 1.73828 8.47266 1.94922L4.34766 6.05078L8.44922 10.1758C8.68359 10.3867 8.68359 10.7383 8.44922 10.9492C8.23828 11.1836 7.88672 11.1836 7.67578 10.9492L3.17578 6.44922C2.94141 6.23828 2.94141 5.88672 3.17578 5.65234Z" />
    </svg>
  );
}
