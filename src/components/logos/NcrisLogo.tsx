import React from "react";

// import classes from "./NcrisLogo.module.css";
import classes from "./Ncris20Logo.module.css";

type NcrisLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function NcrisLogo({ ...props }: NcrisLogoProps): React.ReactElement {
  return (
    <div
      className={`${classes.image} ${props.className || ""}`}
      {...props}
    ></div>
  );
}
