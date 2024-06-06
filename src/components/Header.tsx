import React, { PropsWithChildren } from "react";
import { Box, Container, Group } from "@mantine/core";

import classes from "./Header.module.css";
import { AtlasLogo } from "./AtlasLogo";

export function Header({
  children,
}: PropsWithChildren<{}>): React.ReactElement {
  return (
    <Box className={classes.header}>
      <Container size="lg">
        <Group
          justify="space-between"
          align="flex-end"
          className={classes.group}
        >
          <AtlasLogo />
          {children}
        </Group>
      </Container>
    </Box>
  );
}
