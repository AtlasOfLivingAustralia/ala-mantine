import React from "react";
import { rem } from "@mantine/core";

interface FilterIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function FilterIcon({ size, style, ...others }: FilterIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 9.91665C0 9.59448 0.261167 9.33331 0.583333 9.33331H13.4167C13.7388 9.33331 14 9.59448 14 9.91665C14 10.2388 13.7388 10.5 13.4167 10.5H0.583333C0.261167 10.5 0 10.2388 0 9.91665Z"
      />
      <path
        d="M11.6666 9.91666C11.6666 10.8832 10.8831 11.6667 9.91663 11.6667C8.95013 11.6667 8.16663 10.8832 8.16663 9.91666C8.16663 8.95016 8.95013 8.16666 9.91663 8.16666C10.8831 8.16666 11.6666 8.95016 11.6666 9.91666Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.91663 10.5C10.2388 10.5 10.5 10.2388 10.5 9.91666C10.5 9.59449 10.2388 9.33332 9.91663 9.33332C9.59446 9.33332 9.33329 9.59449 9.33329 9.91666C9.33329 10.2388 9.59446 10.5 9.91663 10.5ZM9.91663 11.6667C10.8831 11.6667 11.6666 10.8832 11.6666 9.91666C11.6666 8.95016 10.8831 8.16666 9.91663 8.16666C8.95013 8.16666 8.16663 8.95016 8.16663 9.91666C8.16663 10.8832 8.95013 11.6667 9.91663 11.6667Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 4.0833C0 3.76114 0.261167 3.49997 0.583333 3.49997H13.4167C13.7388 3.49997 14 3.76114 14 4.0833C14 4.40547 13.7388 4.66664 13.4167 4.66664H0.583333C0.261167 4.66664 0 4.40547 0 4.0833Z"
      />
      <path
        d="M5.83337 4.08331C5.83337 5.04981 5.04987 5.83331 4.08337 5.83331C3.11688 5.83331 2.33337 5.04981 2.33337 4.08331C2.33337 3.11681 3.11688 2.33331 4.08337 2.33331C5.04987 2.33331 5.83337 3.11681 5.83337 4.08331Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.08337 4.66665C4.40554 4.66665 4.66671 4.40548 4.66671 4.08331C4.66671 3.76115 4.40554 3.49998 4.08337 3.49998C3.76121 3.49998 3.50004 3.76115 3.50004 4.08331C3.50004 4.40548 3.76121 4.66665 4.08337 4.66665ZM4.08337 5.83331C5.04987 5.83331 5.83337 5.04981 5.83337 4.08331C5.83337 3.11681 5.04987 2.33331 4.08337 2.33331C3.11688 2.33331 2.33337 3.11681 2.33337 4.08331C2.33337 5.04981 3.11688 5.83331 4.08337 5.83331Z"
      />
    </svg>
  );
}
