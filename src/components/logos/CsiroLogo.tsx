import React from "react";

import classes from "./CsiroLogo.module.css";

type CsiroLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function CsiroLogo({ ...props }: CsiroLogoProps): React.ReactElement {
  return (
    <div
      className={`${classes.image} ${props.className || ""}`}
      {...props}
    ></div>
  );
}
