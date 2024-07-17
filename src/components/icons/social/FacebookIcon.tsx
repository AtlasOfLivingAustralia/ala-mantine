import React from "react";
import { rem } from "@mantine/core";

interface FacebookIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function FacebookIcon({ size, style, ...others }: FacebookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ width: rem(size || 20), height: rem(size || 20), ...style }}
      {...others}
    >
      <path d="M2.85714 0H17.1429C18.7054 0 20 1.29464 20 2.85714V17.1429C20 18.75 18.7054 20 17.1429 20H11.3839V13.5268H14.4643L15.0893 10H11.3839V8.79464C11.3839 6.91964 12.0982 6.20536 13.9732 6.20536C14.5536 6.20536 15 6.25 15.2679 6.25V3.125C14.7768 2.94643 13.5268 2.8125 12.8125 2.8125C8.97321 2.8125 7.23214 4.64286 7.23214 8.52679V10H4.86607V13.5268H7.23214V20H2.85714C1.25 20 0 18.75 0 17.1429V2.85714C0 1.29464 1.25 0 2.85714 0Z" />
    </svg>
  );
}
