import React from "react";
import { rem } from "@mantine/core";

interface TickIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function TickIcon({ size, style, ...others }: TickIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M12.2832 3.22852C12.5879 3.50977 12.5879 4.00195 12.2832 4.2832L6.2832 10.2832C6.00195 10.5879 5.50977 10.5879 5.22852 10.2832L2.22852 7.2832C1.92383 7.00195 1.92383 6.50977 2.22852 6.22852C2.50977 5.92383 3.00195 5.92383 3.2832 6.22852L5.76758 8.68945L11.2285 3.22852C11.5098 2.92383 12.002 2.92383 12.2832 3.22852Z" />
    </svg>
  );
}
