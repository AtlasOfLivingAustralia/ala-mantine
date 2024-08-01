import React from "react";
import { rem } from "@mantine/core";

interface APIIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function APIIcon({ size, style, ...others }: APIIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 14 14"
      style={{ width: rem(size || 14), height: rem(size || 14), ...style }}
      {...others}
    >
      <path d="M13.4517 4.56641C13.5595 4.8125 13.4787 5.05859 13.2901 5.25L12.1318 6.31641C12.1587 6.53516 12.1587 6.78125 12.1587 7C12.1587 7.24609 12.1587 7.49219 12.1318 7.71094L13.2901 8.77734C13.4787 8.94141 13.5595 9.21484 13.4517 9.46094C13.344 9.78906 13.2093 10.0898 13.0477 10.3906L12.913 10.6094C12.7244 10.9102 12.5358 11.2109 12.3203 11.457C12.1587 11.6758 11.8893 11.7305 11.6469 11.6484L10.1653 11.1836C9.78812 11.457 9.38404 11.6758 8.97997 11.8672L8.62977 13.4258C8.57589 13.6719 8.38733 13.8633 8.14488 13.918C7.76774 13.9727 7.39061 14 6.98653 14C6.60939 14 6.23226 13.9727 5.85512 13.918C5.61267 13.8633 5.42411 13.6719 5.37023 13.4258L5.02003 11.8672C4.58902 11.6758 4.21188 11.457 3.83474 11.1836L2.35313 11.6484C2.11069 11.7305 1.8413 11.6758 1.67967 11.4844C1.46417 11.2109 1.2756 10.9102 1.08703 10.6094L0.952338 10.3906C0.790708 10.0898 0.656016 9.78906 0.548263 9.46094C0.440509 9.21484 0.521324 8.96875 0.709893 8.77734L1.86824 7.71094C1.8413 7.49219 1.8413 7.24609 1.8413 7C1.8413 6.78125 1.8413 6.53516 1.86824 6.31641L0.709893 5.25C0.521324 5.05859 0.440509 4.8125 0.548263 4.56641C0.656016 4.23828 0.790708 3.9375 0.952338 3.63672L1.08703 3.41797C1.2756 3.11719 1.46417 2.81641 1.67967 2.54297C1.8413 2.35156 2.11069 2.29688 2.35313 2.37891L3.83474 2.84375C4.21188 2.57031 4.61595 2.32422 5.02003 2.16016L5.37023 0.601562C5.42411 0.355469 5.61267 0.164062 5.85512 0.109375C6.23226 0.0546875 6.60939 0 7.01347 0C7.39061 0 7.76774 0.0546875 8.14488 0.109375C8.38733 0.136719 8.57589 0.355469 8.62977 0.601562L8.97997 2.16016C9.41098 2.32422 9.78812 2.57031 10.1653 2.84375L11.6469 2.37891C11.8893 2.29688 12.1587 2.35156 12.3203 2.54297C12.5358 2.81641 12.7244 3.11719 12.913 3.41797L13.0477 3.63672C13.2093 3.9375 13.344 4.23828 13.4787 4.56641H13.4517ZM7.01347 9.1875C7.76774 9.1875 8.46814 8.77734 8.87222 8.09375C9.24935 7.4375 9.24935 6.58984 8.87222 5.90625C8.46814 5.25 7.76774 4.8125 7.01347 4.8125C6.23226 4.8125 5.53186 5.25 5.12778 5.90625C4.75065 6.58984 4.75065 7.4375 5.12778 8.09375C5.53186 8.77734 6.23226 9.1875 7.01347 9.1875Z" />
    </svg>
  );
}