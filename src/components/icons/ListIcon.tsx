import React from "react";
import { rem } from "@mantine/core";

interface ListIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ListIcon({ size, style, ...others }: ListIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M5.5 2.125V4.1875H11.875V2.5C11.875 2.3125 11.6875 2.125 11.5 2.125H5.5ZM4.375 2.125H2.5C2.28906 2.125 2.125 2.3125 2.125 2.5V4.1875H4.375V2.125ZM2.125 5.3125V7.1875H4.375V5.3125H2.125ZM2.125 8.3125V10C2.125 10.2109 2.28906 10.375 2.5 10.375H4.375V8.3125H2.125ZM5.5 10.375H11.5C11.6875 10.375 11.875 10.2109 11.875 10V8.3125H5.5V10.375ZM11.875 7.1875V5.3125H5.5V7.1875H11.875ZM1 2.5C1 1.67969 1.65625 1 2.5 1H11.5C12.3203 1 13 1.67969 13 2.5V10C13 10.8438 12.3203 11.5 11.5 11.5H2.5C1.65625 11.5 1 10.8438 1 10V2.5Z" />
    </svg>
  );
}
