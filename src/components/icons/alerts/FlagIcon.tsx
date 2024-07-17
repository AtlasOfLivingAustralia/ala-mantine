import React from "react";
import { rem } from "@mantine/core";

interface FlagIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function FlagIcon({ size, style, ...others }: FlagIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M2.71429 0.875V1.3125L4.5625 0.847656C5.58036 0.601562 6.65179 0.710938 7.58929 1.20312C8.82143 1.83203 10.2946 1.83203 11.5268 1.20312L11.7946 1.06641C12.3304 0.792969 13 1.20312 13 1.83203V8.58594C13 8.96875 12.7589 9.26953 12.4375 9.40625L11.5 9.76172C10.2679 10.2539 8.90179 10.1719 7.69643 9.57031C6.67857 9.05078 5.52679 8.91406 4.42857 9.1875L2.71429 9.625V13.125C2.71429 13.6172 2.3125 14 1.85714 14C1.375 14 1 13.6172 1 13.125V10.0625V1.75V0.875C1 0.410156 1.375 0 1.85714 0C2.3125 0 2.71429 0.410156 2.71429 0.875Z" />
    </svg>
  );
}
