import React from "react";
import { rem } from "@mantine/core";

interface DataProjectsIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function DataProjectsIcon({
  size,
  style,
  ...others
}: DataProjectsIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M12 5.25V10.5C12 11.3438 11.3203 12 10.5 12H1.5C0.65625 12 0 11.3438 0 10.5V5.25C0 4.42969 0.65625 3.75 1.5 3.75H10.5C11.3203 3.75 12 4.42969 12 5.25ZM10.3125 1.875C10.6172 1.875 10.875 2.13281 10.875 2.4375C10.875 2.76562 10.6172 3 10.3125 3H1.6875C1.35938 3 1.125 2.76562 1.125 2.4375C1.125 2.13281 1.35938 1.875 1.6875 1.875H10.3125ZM9.1875 0C9.49219 0 9.75 0.257812 9.75 0.5625C9.75 0.890625 9.49219 1.125 9.1875 1.125H2.8125C2.48438 1.125 2.25 0.890625 2.25 0.5625C2.25 0.257812 2.48438 0 2.8125 0H9.1875Z" />
    </svg>
  );
}
