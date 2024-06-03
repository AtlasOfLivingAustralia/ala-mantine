import React from "react";
import { Title, Box } from "@mantine/core";

import classes from "./Logo.module.css";

interface LogoProps {
  message: string;
}

export function Logo({ message }: LogoProps): React.ReactElement {
  return <img className={classes.image} />;
}
