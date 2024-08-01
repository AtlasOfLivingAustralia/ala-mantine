import React from "react";

import classes from "./AusTraitsLogo.module.css";

type AusTraitsLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function AusTraitsLogo({
  ...props
}: AusTraitsLogoProps): React.ReactElement {
  return (
    <div
      className={`${classes.image} ${props.className || ""}`}
      {...props}
    ></div>
  );
}
