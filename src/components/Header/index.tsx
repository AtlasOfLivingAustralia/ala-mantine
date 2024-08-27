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
import {
  AtlasLogo,
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ThemeIcon,
} from "ala-mantine";
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
}

export function Header({
  onAuthClick,
  onSearchClick,
  isAuthenticated,
}: HeaderProps): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const { toggleColorScheme } = useMantineColorScheme();

  const onTabChange = (newTab: string | null) =>
    setActiveTab(newTab !== activeTab ? newTab : null);

  return (
    <Box className={classes.header}>
      <Container px={15} size="lg">
        <Group justify="space-between" className={classes.group}>
          <AtlasLogo />
          <Group className={classes.desktop} gap={30}>
            <UnstyledButton onClick={toggleColorScheme}>
              <Center>
                <ThemeIcon />
              </Center>
            </UnstyledButton>
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
              {isAuthenticated ? "Sign out" : "Sign in"}
            </Button>
          </Group>
          <UnstyledButton className={classes.mobile} onClick={open}>
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
