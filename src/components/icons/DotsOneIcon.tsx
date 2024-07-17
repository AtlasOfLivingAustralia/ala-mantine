import React from "react";
import { rem } from "@mantine/core";

interface DotsOneIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function DotsOneIcon({ size, style, ...others }: DotsOneIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <circle cx="7" cy="8" r="2" />
    </svg>
  );
}
