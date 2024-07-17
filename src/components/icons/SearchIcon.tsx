import React from "react";
import { rem } from "@mantine/core";

interface SearchIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function SearchIcon({ size, style, ...others }: SearchIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 15"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M10.0625 5.6875C10.0625 4.12891 9.21484 2.70703 7.875 1.91406C6.50781 1.12109 4.83984 1.12109 3.5 1.91406C2.13281 2.70703 1.3125 4.12891 1.3125 5.6875C1.3125 7.27344 2.13281 8.69531 3.5 9.48828C4.83984 10.2812 6.50781 10.2812 7.875 9.48828C9.21484 8.69531 10.0625 7.27344 10.0625 5.6875ZM9.21484 10.1719C8.23047 10.9375 7 11.375 5.6875 11.375C2.54297 11.375 0 8.83203 0 5.6875C0 2.57031 2.54297 0 5.6875 0C8.80469 0 11.375 2.57031 11.375 5.6875C11.375 7.02734 10.9102 8.25781 10.1445 9.24219L13.8086 12.8789C14.0547 13.1523 14.0547 13.5625 13.8086 13.8086C13.5352 14.082 13.125 14.082 12.8789 13.8086L9.21484 10.1719Z" />
    </svg>
  );
}
