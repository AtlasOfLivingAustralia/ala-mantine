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
  Menu,
  Stack,
  Tabs,
  TabsList,
  TabsTab,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AtlasLogo } from "../logos";
import { CaretDownIcon, ChevronDownIcon, MenuIcon, SearchIcon, ThemeIcon } from "../icons";
import { Panel } from "./Panel";

// Styles
import classes from "./index.module.css";
import tabsClasses from "./classes/Tabs.module.css";
import accordionClasses from "./classes/Accordion.module.css";
import drawerClasses from "./classes/Drawer.module.css";

import headerData from "./header.json";
import headerLegacyData from "./headerLegacy.json";
import { SidebarItem } from "./SidebarItem";

interface HeaderProps {
  onAuthClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
  isAuthenticated?: boolean;
  fullWidth?: boolean; // Header should take full width of the screen (default: false)
  compact?: boolean; // Header should use less vertical space (default: false)
  homeUrl?: string; // URL to navigate to when the logo is clicked (default: ALA home page)
  myProfileUrl?: string; // URL to navigate to when "My Profile" is clicked (default: ALA My Profile page)
  isLegacySkin?: boolean; // Use legacy skin styles (default: false)
}

export function Header({
  onAuthClick,
  onSearchClick,
  isAuthenticated,
  homeUrl = "https://www.ala.org.au/",
  myProfileUrl = "https://auth.ala.org.au/userdetails/myprofile",
  fullWidth = false,
  compact = false,
  isLegacySkin = false,
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
    isLegacySkin ? (
      // Legacy version
      <Box className={classes.header}>
        <Container {...containerProps} className={classes.containerLegacy}>
          <Group justify="space-between" className={groupClass}>
            <AtlasLogo homeUrl={homeUrl} isLegacySkin={true} />
            <Group className={classes.desktopLegacy} gap={10}>
              <Stack align="flex-end" justify="flex-start" gap={5}>
                <Group gap={25} mr={20}>
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
                      <SearchIcon size={16}/>
                    </Center>
                  </UnstyledButton>
                  <UnstyledButton
                    component="a"
                    href="https://www.ala.org.au/contact-us/"
                    aria-label="Contact us"
                  >
                    <Text fw={500} c="white">Contact Us</Text>
                  </UnstyledButton>
                  {isAuthenticated ? (
                    <UnstyledButton className={classes.authLegacy} component="a"
                      href={myProfileUrl}
                      aria-label="My profile"
                    >
                      <Text fw={500} c="white">My Profile</Text>
                    </UnstyledButton>
                  ) : null}
                  <Button className={classes.authLegacy} onClick={onAuthClick} variant="ala" size="sm">
                    {isAuthenticated ? "Sign out" : "Sign in"}
                  </Button>
                </Group>
                <Group gap={5} mr={20}>
                  {headerLegacyData.map((menu) => (
                    <Menu key={menu.value} trigger="click" shadow="md" openDelay={100} closeDelay={400}  >
                      <Menu.Target>
                        <Button 
                          variant="subtle" 
                          color="white" 
                          classNames={{ inner: classes.navButton }}
                          fz={17}
                          fw={500}
                          pl={5} mr={5}
                          rightSection={<CaretDownIcon size={14}/>}
                        >
                          {menu.title} 
                        </Button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        {/* Section 1 */}
                        {menu.colOneLinks.map((item) => (
                          <Menu.Item key={item.text} component="a" href={item.href}>
                            {item.text}
                          </Menu.Item>
                        ))}
                        {menu.colTwoLinks && menu.colTwoLinks.length > 0 && <Menu.Divider />}
                        {/* Section 2 */}
                        {menu.colTwoLinks?.map((item) => (
                          <Menu.Item key={item.text} component="a" href={item.href}>
                            {item.text}
                          </Menu.Item>
                        ))}
                      </Menu.Dropdown>
                    </Menu>
                  ))}
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
                    <Group gap="md" align="space-between" grow>
                      {isAuthenticated && (
                        <Button 
                          variant="default" 
                          component="a"
                          href={myProfileUrl}
                          aria-label="My profile"
                          radius="md" 
                          m={10}
                          px={15} py={6}
                        >
                          My Profile
                        </Button>
                      )}
                      <Button 
                        onClick={onAuthClick} 
                        variant="ala" 
                        size="sm" 
                        radius="md" 
                        m={10}
                        px={15} py={6}
                      >
                        {isAuthenticated ? "Sign out" : "Sign in"}
                      </Button>
                    </Group>
                    <Accordion variant="default" classNames={accordionClasses} defaultValue={'Authentication'}>
                      {headerLegacyData.map((menu) => (
                        <SidebarItem key={menu.value} data={menu} />
                      ))}
                    </Accordion>
                  </Drawer>
                </Group>
              </Stack>
              
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
      </Box>
  )
    :
  (
    // New skin version
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
        <Group gap="md" align="space-between" grow>
          {isAuthenticated && (
            <Button 
              variant="default" 
              component="a"
              href={myProfileUrl}
              aria-label="My profile"
              m={10}
              px={15} py={6}
            >
              My Profile
            </Button>
          )}
          <Button 
            onClick={onAuthClick} 
            variant="ala" 
            size="sm" 
            radius="md" 
            m={10}
            px={15} py={6}
          >
            {isAuthenticated ? "Sign out" : "Sign in"}
          </Button>
        </Group>
        <Accordion variant="default" classNames={accordionClasses}>
          {headerData.map((panel) => (
            <SidebarItem key={panel.value} data={panel} />
          ))}
        </Accordion>
      </Drawer>
    </Box>
  )
);
}
