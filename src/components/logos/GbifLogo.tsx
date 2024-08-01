import React from "react";

import classes from "./GbifLogo.module.css";

type GbifLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function GbifLogo({ ...props }: GbifLogoProps): React.ReactElement {
  return (
    <div
      className={`${classes.image} ${props.className || ""}`}
      {...props}
    ></div>
  );
}
