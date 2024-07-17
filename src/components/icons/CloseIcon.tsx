import React from "react";
import { rem } from "@mantine/core";

interface CloseIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function CloseIcon({ size, style, ...others }: CloseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M11.7892 3.27244L8.04215 7.01952L11.758 10.7354C12.0703 11.0164 12.0703 11.4848 11.758 11.7658C11.477 12.0781 11.0086 12.0781 10.7276 11.7658L6.98048 8.04996L3.26464 11.7658C2.98361 12.0781 2.51522 12.0781 2.23419 11.7658C1.92194 11.4848 1.92194 11.0164 2.23419 10.7041L5.95004 6.98829L2.23419 3.27244C1.92194 2.99141 1.92194 2.52303 2.23419 2.21077C2.51522 1.92974 2.98361 1.92974 3.29586 2.21077L7.01171 5.95785L10.7276 2.242C11.0086 1.92974 11.477 1.92974 11.7892 2.242C12.0703 2.52303 12.0703 2.99141 11.7892 3.27244Z" />
    </svg>
  );
}
