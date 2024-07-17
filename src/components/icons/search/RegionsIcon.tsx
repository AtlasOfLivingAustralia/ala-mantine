import React from "react";
import { rem } from "@mantine/core";

interface RegionsIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function RegionsIcon({ size, style, ...others }: RegionsIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M10 4.5C10 6.5625 7.25781 10.1953 6.03906 11.7188C5.75781 12.0703 5.21875 12.0703 4.9375 11.7188C3.74219 10.1953 1 6.5625 1 4.5C1 2.01562 3.01562 0 5.5 0C7.98438 0 10 2.01562 10 4.5Z" />
    </svg>
  );
}
