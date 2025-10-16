"use client";

import React, { useState } from "react";
import {
  Accordion,
  Box,
  Button,
  Center,
  Container,
  Drawer,
  Group,
  Tabs,
  TabsList,
  TabsTab,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AtlasLogo } from "../logos";
import { ChevronDownIcon, MenuIcon, SearchIcon, ThemeIcon } from "../icons";
import { Panel } from "./Panel";

// Styles
import classes from "./index.module.css";
import tabsClasses from "./classes/Tabs.module.css";
import accordionClasses from "./classes/Accordion.module.css";
import drawerClasses from "./classes/Drawer.module.css";

import headerData from "./header.json";
import { SidebarItem } from "./SidebarItem";

interface HeaderProps {
  onAuthClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
  isAuthenticated?: boolean;
  fullWidth?: boolean; // Header should take full width of the screen (default: false)
  compact?: boolean; // Header should use less vertical space (default: false)
  homeUrl?: string; // URL to navigate to when the logo is clicked (default: ALA home page)
  myProfileUrl?: string; // URL to navigate to when "My Profile" is clicked (default: ALA My Profile page)
}

export function Header({
  onAuthClick,
  onSearchClick,
  isAuthenticated,
  homeUrl = "https://www.ala.org.au/",
  myProfileUrl = "https://auth.ala.org.au/userdetails/myprofile",
  fullWidth = false,
  compact = false,
}: HeaderProps): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const { toggleColorScheme } = useMantineColorScheme();

  const onTabChange = (newTab: string | null) =>
    setActiveTab(newTab !== activeTab ? newTab : null);

  const containerProps = fullWidth ? { fluid: true } : { size: 'lg' };
  const groupClass = compact ? classes.groupCompact : classes.group;
  const tabClass = compact ? classes.tabCompact : undefined;

  return (
    <Box className={classes.header}>
      <Container {...containerProps} className={classes.container}>
        <Group justify="space-between" className={groupClass}>
          <AtlasLogo homeUrl={homeUrl} />
          <Group className={classes.desktop} gap={30}>
            <UnstyledButton
              onClick={toggleColorScheme}
              aria-label="Toggle colour scheme"
            >
              <Center>
                <ThemeIcon />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              onClick={onSearchClick}
              aria-label="Search the Atlas of Living Australia"
            >
              <Center>
                <SearchIcon />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              component="a"
              href="https://www.ala.org.au/contact-us/"
              aria-label="Contact us"
            >
              <Text fw={500}>Contact Us</Text>
            </UnstyledButton>
            {isAuthenticated ? (
              <UnstyledButton className={classes.auth} component="a"
                href={myProfileUrl}
                aria-label="My profile"
              >
                <Text fw={500}>My Profile</Text>
              </UnstyledButton>
            ) : null}
            <Button className={classes.auth} onClick={onAuthClick} size="md">
              {isAuthenticated ? "Sign out" : "Sign in"}
            </Button>
          </Group>
          <UnstyledButton
            className={classes.mobile}
            onClick={open}
            aria-label="Open menu"
          >
            <MenuIcon />
          </UnstyledButton>
        </Group>
      </Container>
      <Tabs
        className={classes.desktop}
        value={activeTab}
        onChange={onTabChange}
        unstyled
        variant="default"
        classNames={tabsClasses}
      >
        <Container {...containerProps} className={classes.container}>
          <TabsList defaultValue="speciesrecords">
            {headerData.map((panel) => (
              <TabsTab key={panel.value} value={panel.value} className={tabClass}>
                {panel.title} <ChevronDownIcon />
              </TabsTab>
            ))}
          </TabsList>
        </Container>
        <Box className={classes.tab}>
          <Container {...containerProps}>
            {headerData.map((panel) => (
              <Panel key={panel.value} data={panel} />
            ))}
          </Container>
        </Box>
      </Tabs>
      <Drawer
        className={classes.mobile}
        classNames={drawerClasses}
        size={345}
        position="right"
        opened={opened}
        onClose={close}
        padding={0}
        withCloseButton={false}
      >
        <Accordion variant="default" classNames={accordionClasses}>
          {headerData.map((panel) => (
            <SidebarItem key={panel.value} data={panel} />
          ))}
        </Accordion>
      </Drawer>
    </Box>
  );
}
