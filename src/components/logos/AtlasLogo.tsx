import React from "react";

import classes from "./AtlasLogo.module.css";

type AtlasLogoProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function AtlasLogo({ homeUrl, ...props }: AtlasLogoProps & { homeUrl?: string }): React.ReactElement {
  const content = (
    <div
      className={`${classes.image} ${props.className || ""}`}
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
