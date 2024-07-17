import React from "react";
import { rem } from "@mantine/core";

interface ALAGeneralContentIconProps
  extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function ALAGeneralContentIcon({
  size,
  style,
  ...others
}: ALAGeneralContentIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 12"
      style={{ width: rem(size || 12), height: rem(size || 12), ...style }}
      {...others}
    >
      <path d="M12 2.5V10C12 10.8438 11.3203 11.5 10.5 11.5H1.5C0.65625 11.5 0 10.8438 0 10V2.5C0 1.67969 0.65625 1 1.5 1H10.5C11.3203 1 12 1.67969 12 2.5ZM2.25 2.5C1.82812 2.5 1.5 2.85156 1.5 3.25C1.5 3.67188 1.82812 4 2.25 4C2.64844 4 3 3.67188 3 3.25C3 2.85156 2.64844 2.5 2.25 2.5ZM3.75 3.25C3.75 3.67188 4.07812 4 4.5 4C4.89844 4 5.25 3.67188 5.25 3.25C5.25 2.85156 4.89844 2.5 4.5 2.5C4.07812 2.5 3.75 2.85156 3.75 3.25ZM6.75 2.5C6.32812 2.5 6 2.85156 6 3.25C6 3.67188 6.32812 4 6.75 4C7.14844 4 7.5 3.67188 7.5 3.25C7.5 2.85156 7.14844 2.5 6.75 2.5Z" />
    </svg>
  );
}
