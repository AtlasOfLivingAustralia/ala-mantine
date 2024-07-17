import React from "react";
import { rem } from "@mantine/core";

interface PlayIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function PlayIcon({ size, style, ...others }: PlayIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M0 6.98633C0 4.49805 1.3125 2.20117 3.5 0.943359C5.66016 -0.314453 8.3125 -0.314453 10.5 0.943359C12.6602 2.20117 14 4.49805 14 6.98633C14 9.50195 12.6602 11.7988 10.5 13.0566C8.3125 14.3145 5.66016 14.3145 3.5 13.0566C1.3125 11.7988 0 9.50195 0 6.98633ZM5.14062 4.0332C4.92188 4.14258 4.8125 4.36133 4.8125 4.58008V9.39258C4.8125 9.63867 4.92188 9.85742 5.14062 9.9668C5.33203 10.1035 5.60547 10.0762 5.79688 9.9668L9.73438 7.56055C9.92578 7.42383 10.0625 7.23242 10.0625 6.98633C10.0625 6.76758 9.92578 6.54883 9.73438 6.43945L5.79688 4.0332C5.60547 3.89648 5.33203 3.89648 5.14062 4.00586V4.0332Z" />
    </svg>
  );
}
