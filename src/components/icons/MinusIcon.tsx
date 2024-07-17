import React from "react";
import { rem } from "@mantine/core";

interface MinusIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function MinusIcon({ size, style, ...others }: MinusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M13.5 7C13.5 7.4375 13.1562 7.75 12.75 7.75H1.25C0.8125 7.75 0.5 7.4375 0.5 7C0.5 6.59375 0.8125 6.25 1.25 6.25H12.75C13.1562 6.25 13.5 6.59375 13.5 7Z" />
    </svg>
  );
}
