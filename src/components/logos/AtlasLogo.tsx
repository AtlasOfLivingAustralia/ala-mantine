import React from "react";

import classes from "./AtlasLogo.module.css";

type AtlasLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function AtlasLogo({ homeUrl, isLegacySkin = false, ...props }: AtlasLogoProps & { homeUrl?: string; isLegacySkin?: boolean }): React.ReactElement {
  const content = (
    <div
      className={`${classes.image} ${isLegacySkin ? classes.logoLegacy : ""} ${props.className || ""}`}
      {...props}
    ></div>
  );

  if (homeUrl) {
    return (
      <a href={homeUrl} className={classes.logoLink}>
        {content}
      </a>
    );
  }

  return content;
}
