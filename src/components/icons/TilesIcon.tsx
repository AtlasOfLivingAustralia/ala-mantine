import React from "react";
import { rem } from "@mantine/core";

interface TilesIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function TilesIcon({ size, style, ...others }: TilesIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M4.0625 1.9375H2.9375V3.0625H4.0625V1.9375ZM2.9375 1H4.0625C4.57812 1 5 1.42188 5 1.9375V3.0625C5 3.60156 4.57812 4 4.0625 4H2.9375C2.39844 4 2 3.60156 2 3.0625V1.9375C2 1.42188 2.39844 1 2.9375 1ZM4.0625 5.6875H2.9375V6.8125H4.0625V5.6875ZM2.9375 4.75H4.0625C4.57812 4.75 5 5.17188 5 5.6875V6.8125C5 7.35156 4.57812 7.75 4.0625 7.75H2.9375C2.39844 7.75 2 7.35156 2 6.8125V5.6875C2 5.17188 2.39844 4.75 2.9375 4.75ZM2.9375 9.4375V10.5625H4.0625V9.4375H2.9375ZM2 9.4375C2 8.92188 2.39844 8.5 2.9375 8.5H4.0625C4.57812 8.5 5 8.92188 5 9.4375V10.5625C5 11.1016 4.57812 11.5 4.0625 11.5H2.9375C2.39844 11.5 2 11.1016 2 10.5625V9.4375ZM7.8125 1.9375H6.6875V3.0625H7.8125V1.9375ZM6.6875 1H7.8125C8.32812 1 8.75 1.42188 8.75 1.9375V3.0625C8.75 3.60156 8.32812 4 7.8125 4H6.6875C6.14844 4 5.75 3.60156 5.75 3.0625V1.9375C5.75 1.42188 6.14844 1 6.6875 1ZM6.6875 5.6875V6.8125H7.8125V5.6875H6.6875ZM5.75 5.6875C5.75 5.17188 6.14844 4.75 6.6875 4.75H7.8125C8.32812 4.75 8.75 5.17188 8.75 5.6875V6.8125C8.75 7.35156 8.32812 7.75 7.8125 7.75H6.6875C6.14844 7.75 5.75 7.35156 5.75 6.8125V5.6875ZM7.8125 9.4375H6.6875V10.5625H7.8125V9.4375ZM6.6875 8.5H7.8125C8.32812 8.5 8.75 8.92188 8.75 9.4375V10.5625C8.75 11.1016 8.32812 11.5 7.8125 11.5H6.6875C6.14844 11.5 5.75 11.1016 5.75 10.5625V9.4375C5.75 8.92188 6.14844 8.5 6.6875 8.5ZM10.4375 1.9375V3.0625H11.5625V1.9375H10.4375ZM9.5 1.9375C9.5 1.42188 9.89844 1 10.4375 1H11.5625C12.0781 1 12.5 1.42188 12.5 1.9375V3.0625C12.5 3.60156 12.0781 4 11.5625 4H10.4375C9.89844 4 9.5 3.60156 9.5 3.0625V1.9375ZM11.5625 5.6875H10.4375V6.8125H11.5625V5.6875ZM10.4375 4.75H11.5625C12.0781 4.75 12.5 5.17188 12.5 5.6875V6.8125C12.5 7.35156 12.0781 7.75 11.5625 7.75H10.4375C9.89844 7.75 9.5 7.35156 9.5 6.8125V5.6875C9.5 5.17188 9.89844 4.75 10.4375 4.75ZM10.4375 9.4375V10.5625H11.5625V9.4375H10.4375ZM9.5 9.4375C9.5 8.92188 9.89844 8.5 10.4375 8.5H11.5625C12.0781 8.5 12.5 8.92188 12.5 9.4375V10.5625C12.5 11.1016 12.0781 11.5 11.5625 11.5H10.4375C9.89844 11.5 9.5 11.1016 9.5 10.5625V9.4375Z" />
    </svg>
  );
}