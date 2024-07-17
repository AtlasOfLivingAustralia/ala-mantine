import React from "react";
import { rem } from "@mantine/core";

interface InstagramIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function InstagramIcon({ size, style, ...others }: InstagramIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ width: rem(size || 20), height: rem(size || 20), ...style }}
      {...others}
    >
      <path d="M8.66071 8.03571C9.375 7.58929 10.2679 7.5 11.0268 7.90179C11.7857 8.25893 12.3214 9.01786 12.3661 9.86607C12.4107 10.7143 12.0089 11.5179 11.2946 12.0089C10.5804 12.4554 9.6875 12.5446 8.92857 12.1429C8.16964 11.7857 7.67857 11.0268 7.58929 10.1786C7.54464 9.33036 7.94643 8.52679 8.66071 8.03571ZM15 5C15.2232 5.22321 15.4464 5.49107 15.5357 5.80357C15.8482 6.60714 15.8482 8.34821 15.8482 9.50893C15.8482 9.6875 15.8482 9.86607 15.8482 10C15.8482 10.1786 15.8482 10.3571 15.8482 10.5357C15.8482 11.6518 15.8482 13.4375 15.5357 14.2411C15.4464 14.5536 15.2679 14.8214 15 15.0446C14.7768 15.2679 14.5089 15.4464 14.1964 15.5804C13.3929 15.8929 11.6071 15.8929 10.4911 15.8929C10.3125 15.8929 10.1339 15.8929 10 15.8929C9.82143 15.8929 9.64286 15.8929 9.46429 15.8929C8.34821 15.8929 6.5625 15.8929 5.75893 15.5804C5.44643 15.4464 5.17857 15.2679 4.95536 15.0446C4.73214 14.8214 4.55357 14.5536 4.41964 14.2411C4.10714 13.4375 4.10714 11.6518 4.10714 10.5357C4.10714 10.3125 4.10714 10.1786 4.10714 10C4.10714 9.86607 4.10714 9.6875 4.10714 9.50893C4.10714 8.39286 4.10714 6.60714 4.41964 5.80357C4.55357 5.49107 4.73214 5.22321 4.95536 5C5.17857 4.77679 5.44643 4.55357 5.75893 4.46429C6.5625 4.15179 8.34821 4.15179 9.46429 4.15179C9.64286 4.15179 9.82143 4.15179 10 4.15179C10.1339 4.15179 10.3125 4.15179 10.4911 4.15179C11.6071 4.15179 13.3929 4.15179 14.1964 4.46429C14.5089 4.55357 14.7768 4.77679 15 5ZM12.0089 6.96429C10.9375 6.25 9.50893 6.16071 8.34821 6.74107C7.1875 7.32143 6.42857 8.48214 6.33929 9.77679C6.25 11.0714 6.875 12.3214 7.94643 13.0804C9.01786 13.7946 10.4018 13.8839 11.6071 13.3036C12.7679 12.7232 13.5268 11.5625 13.6161 10.2679C13.7054 8.97321 13.0804 7.72321 12.0089 6.96429ZM13.3036 6.91964C13.4821 7.00893 13.6161 7.05357 13.7946 7.05357C13.9286 7.05357 14.0179 7.05357 14.1071 7.00893C14.2411 6.96429 14.3304 6.875 14.4196 6.78571C14.4643 6.74107 14.5536 6.65179 14.5982 6.51786C14.6429 6.42857 14.6429 6.29464 14.6429 6.20536C14.6429 6.02679 14.5982 5.84821 14.5089 5.71429C14.4196 5.58036 14.2857 5.49107 14.1071 5.40179C13.9732 5.35714 13.7946 5.35714 13.6161 5.35714C13.4375 5.40179 13.3036 5.49107 13.1696 5.58036C13.0804 5.71429 12.9911 5.84821 12.9464 6.02679C12.9018 6.20536 12.9464 6.38393 12.9911 6.51786C13.0804 6.69643 13.1696 6.83036 13.3036 6.91964ZM20 2.85714V17.1429C20 18.75 18.7054 20 17.1429 20H2.85714C1.25 20 0 18.75 0 17.1429V2.85714C0 1.29464 1.25 0 2.85714 0H17.1429C18.7054 0 20 1.29464 20 2.85714ZM15.9375 15.9375C16.7411 15.1339 17.0089 14.1071 17.0536 12.9464C17.1429 11.7857 17.1429 8.25893 17.0536 7.05357C17.0089 5.9375 16.7411 4.91071 15.9375 4.0625C15.0893 3.25893 14.0625 2.99107 12.9464 2.94643C11.7411 2.85714 8.21429 2.85714 7.05357 2.94643C5.89286 2.99107 4.86607 3.25893 4.0625 4.0625C3.21429 4.91071 2.94643 5.9375 2.90179 7.05357C2.8125 8.25893 2.8125 11.7857 2.90179 12.9464C2.94643 14.1071 3.21429 15.1339 4.0625 15.9375C4.86607 16.7857 5.89286 17.0536 7.05357 17.0982C8.21429 17.1875 11.7411 17.1875 12.9464 17.0982C14.0625 17.0536 15.0893 16.7857 15.9375 15.9375Z" />
    </svg>
  );
}
