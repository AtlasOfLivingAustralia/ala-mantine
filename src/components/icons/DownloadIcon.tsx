import React from "react";
import { rem } from "@mantine/core";

interface DownloadIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function DownloadIcon({ size, style, ...others }: DownloadIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M1.5 14C1.21875 14 1 13.7812 1 13.5C1 13.25 1.21875 13 1.5 13H12.5C12.75 13 13 13.25 13 13.5C13 13.7812 12.75 14 12.5 14H1.5ZM7.34375 10.875C7.15625 11.0625 6.8125 11.0625 6.625 10.875L2.625 6.875C2.4375 6.6875 2.4375 6.34375 2.625 6.15625C2.8125 5.96875 3.15625 5.96875 3.34375 6.15625L6.5 9.3125V6V0.5C6.5 0.25 6.71875 0 7 0C7.25 0 7.5 0.25 7.5 0.5V6V9.3125L10.625 6.15625C10.8125 5.96875 11.1562 5.96875 11.3438 6.15625C11.5312 6.34375 11.5312 6.6875 11.3438 6.875L7.34375 10.875Z" />
    </svg>
  );
}
