import React from "react";
import { rem } from "@mantine/core";

interface PlusIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function PlusIcon({ size, style, ...others }: PlusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M7.75 1.25V6.25H12.75C13.1562 6.25 13.5 6.59375 13.5 7C13.5 7.4375 13.1562 7.75 12.75 7.75H7.75V12.75C7.75 13.1875 7.40625 13.5 7 13.5C6.5625 13.5 6.25 13.1875 6.25 12.75V7.75H1.25C0.8125 7.75 0.5 7.4375 0.5 7C0.5 6.59375 0.8125 6.25 1.25 6.25H6.25V1.25C6.25 0.84375 6.5625 0.5 7 0.5C7.40625 0.5 7.75 0.84375 7.75 1.25Z" />
    </svg>
  );
}
