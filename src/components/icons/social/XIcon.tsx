import React from "react";
import { rem } from "@mantine/core";

interface XIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function XIcon({ size, style, ...others }: XIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ width: rem(size || 20), height: rem(size || 20), ...style }}
      {...others}
    >
      <path d="M2.85714 0H17.1429C18.7054 0 20 1.29464 20 2.85714V17.1429C20 18.75 18.7054 20 17.1429 20H2.85714C1.25 20 0 18.75 0 17.1429V2.85714C0 1.29464 1.25 0 2.85714 0ZM16.1161 3.75H13.9732L10.4911 7.76786L7.45536 3.75H3.08036L8.30357 10.625L3.34821 16.25H5.49107L9.33036 11.9196L12.6339 16.25H16.9196L11.4732 9.0625L16.1161 3.75ZM14.4196 15H13.2143L5.58036 4.95536H6.83036L14.4196 15Z" />
    </svg>
  );
}
