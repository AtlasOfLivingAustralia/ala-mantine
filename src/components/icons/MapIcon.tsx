import React from "react";
import { rem } from "@mantine/core";

interface MapIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function MapIcon({ size, style, ...others }: MapIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path
        d="M12.7708 2.10454C12.9167 2.19376 13 2.37218 13 2.5283V10.022C13 10.2451 12.8542 10.4458 12.6667 10.535L9.16667 11.9624C9.0625 12.007 8.9375 12.007 8.83333 11.9624L5 10.6019L1.66667 11.9624C1.52083 12.0293 1.33333 12.007 1.20833 11.8955C1.0625 11.8062 1 11.6278 1 11.4494V3.95567C1 3.73265 1.125 3.55422 1.3125 3.46501L4.8125 2.03764C4.91667 1.99303 5.04167 1.99303 5.14583 2.03764L8.97917 3.3981L12.3125 2.03764C12.4583 1.97073 12.6458 1.99303 12.7708 2.10454ZM2 4.33482V10.6911L4.5 9.66518V3.30889L2 4.33482ZM8.5 10.7134V4.35712L5.5 3.28659V9.64288L8.5 10.7134ZM9.5 10.6911L12 9.66518V3.30889L9.5 4.33482V10.6911Z"
        fill="#212121"
      />
    </svg>
  );
}
