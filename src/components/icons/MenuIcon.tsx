import React from "react";
import { rem } from "@mantine/core";

interface MenuIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function MenuIcon({ size, style, ...others }: MenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M0 1.78261C0 1.3587 0.3125 1 0.75 1H13.25C13.6563 1 14 1.3587 14 1.78261C14 2.23913 13.6563 2.56522 13.25 2.56522H0.75C0.3125 2.56522 0 2.23913 0 1.78261ZM0 7C0 6.57609 0.3125 6.21739 0.75 6.21739H13.25C13.6563 6.21739 14 6.57609 14 7C14 7.45652 13.6563 7.78261 13.25 7.78261H0.75C0.3125 7.78261 0 7.45652 0 7ZM14 12.2174C14 12.6739 13.6563 13 13.25 13H0.75C0.3125 13 0 12.6739 0 12.2174C0 11.7935 0.3125 11.4348 0.75 11.4348H13.25C13.6563 11.4348 14 11.7935 14 12.2174Z" />
    </svg>
  );
}
