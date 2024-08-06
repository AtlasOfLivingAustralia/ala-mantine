"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Tabs,
  TabsList,
  TabsTab,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { AtlasLogo, ChevronDownIcon, SearchIcon } from "ala-mantine";
import { Panel } from "./Panel";

// Styles
import classes from "./index.module.css";
import tabsClasses from "./classes/Tabs.module.css";

import headerData from "./header.json";

interface HeaderProps {
  onAuthClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
  isAuthenticated?: boolean;
}

export function Header({
  onAuthClick,
  onSearchClick,
  isAuthenticated
}: HeaderProps): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const onTabChange = (newTab: string | null) =>
    setActiveTab(newTab !== activeTab ? newTab : null);

  return (
    <Box className={classes.header}>
      <Container size="lg">
        <Group justify="space-between" className={classes.group}>
          <AtlasLogo />
          <Group gap={30}>
            <UnstyledButton onClick={onSearchClick}>
              <Center>
                <SearchIcon />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              component="a"
              href="https://www.ala.org.au/contact-us/"
            >
              <Text fw={500}>Contact Us</Text>
            </UnstyledButton>
            <Button className={classes.auth} onClick={onAuthClick} size="md">
              {isAuthenticated ? 'Sign out' : 'Sign in'}
            </Button>
          </Group>
        </Group>
      </Container>
      <Tabs
        value={activeTab}
        onChange={onTabChange}
        unstyled
        variant="default"
        classNames={tabsClasses}
      >
        <Container size="lg">
          <TabsList defaultValue="speciesrecords">
            {headerData.map((panel) => (
              <TabsTab key={panel.value} value={panel.value}>
                {panel.title} <ChevronDownIcon />
              </TabsTab>
            ))}
          </TabsList>
        </Container>
        <Box className={classes.tab}>
          <Container size="lg">
            {headerData.map((panel) => (
              <Panel key={panel.value} data={panel} />
            ))}
          </Container>
        </Box>
      </Tabs>
    </Box>
  );
}
