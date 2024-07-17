import React from "react";
import { rem } from "@mantine/core";

interface ChevronRightIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ChevronRightIcon({
  size,
  style,
  ...others
}: ChevronRightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M8.47266 5.65234C8.68359 5.88672 8.68359 6.23828 8.47266 6.44922L3.97266 10.9492C3.73828 11.1836 3.38672 11.1836 3.17578 10.9492C2.94141 10.7383 2.94141 10.3867 3.17578 10.1758L7.27734 6.07422L3.17578 1.94922C2.94141 1.73828 2.94141 1.38672 3.17578 1.17578C3.38672 0.941406 3.73828 0.941406 3.94922 1.17578L8.47266 5.65234Z" />
    </svg>
  );
}
