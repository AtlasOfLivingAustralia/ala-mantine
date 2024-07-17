import React from "react";
import { rem } from "@mantine/core";

interface LinkedInIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function LinkedInIcon({ size, style, ...others }: LinkedInIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ width: rem(size || 20), height: rem(size || 20), ...style }}
      {...others}
    >
      <path d="M18.5714 0C19.3304 0 20 0.669643 20 1.47321V18.5714C20 19.375 19.3304 20 18.5714 20H1.38393C0.625 20 0 19.375 0 18.5714V1.47321C0 0.669643 0.625 0 1.38393 0H18.5714ZM6.02679 17.1429V7.63393H3.08036V17.1429H6.02679ZM4.55357 6.29464C5.49107 6.29464 6.25 5.53571 6.25 4.59821C6.25 3.66071 5.49107 2.85714 4.55357 2.85714C3.57143 2.85714 2.8125 3.66071 2.8125 4.59821C2.8125 5.53571 3.57143 6.29464 4.55357 6.29464ZM17.1429 17.1429V11.9196C17.1429 9.375 16.5625 7.36607 13.5714 7.36607C12.1429 7.36607 11.1607 8.16964 10.7589 8.92857H10.7143V7.63393H7.90179V17.1429H10.8482V12.4554C10.8482 11.2054 11.0714 10 12.6339 10C14.1518 10 14.1518 11.4286 14.1518 12.5V17.1429H17.1429Z" />
    </svg>
  );
}
