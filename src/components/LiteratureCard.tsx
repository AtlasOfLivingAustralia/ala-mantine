import React, { PropsWithChildren } from "react";
import { Paper, PaperProps } from "@mantine/core";

import classes from "./LiteratureCard.module.css";

export function LiteratureCard({
  children,
  ...rest
}: PropsWithChildren<PaperProps>): React.ReactElement {
  return (
    <Paper classNames={classes} radius={10} {...rest}>
      {children}
    </Paper>
  );
}
