"use client";

import React, { useState } from "react";
import {
  Accordion,
  Box,
  Button,
  Center,
  Container,
  Drawer,
  Flex,
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
  fullWidth?: boolean;
  compact?: boolean;
  homeUrl?: string;
  myProfileUrl?: string;
  isLegacySkin?: boolean;
}

// Shared components
interface UtilityButtonsProps {
  toggleColorScheme: () => void;
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLegacySkin?: boolean;
}

/**
 * Utility buttons for toggling color scheme, search, and contact us link.
 * These appear in both legacy and modern skins - on the top row of the header.
 * @param param0 
 * @returns 
 */
function UtilityButtons({ toggleColorScheme, onSearchClick, isLegacySkin }: UtilityButtonsProps) {
  return (
    <>
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
          <SearchIcon size={isLegacySkin ? 16 : undefined} />
        </Center>
      </UnstyledButton>
      <UnstyledButton
        component="a"
        href="https://www.ala.org.au/contact-us/"
        aria-label="Contact us"
      >
        <Text fw={500} c={isLegacySkin ? "white" : undefined}>
          Contact Us
        </Text>
      </UnstyledButton>
    </>
  );
}

interface AuthButtonsProps {
  isAuthenticated?: boolean;
  onAuthClick?: React.MouseEventHandler<HTMLButtonElement>;
  myProfileUrl: string;
  isLegacySkin?: boolean;
}

/**
 * Auth buttons for signing in/out and accessing the user's profile.
 * These appear in both legacy and modern skins - on the top row of the header.
 * @param param0 
 * @returns 
 */
function AuthButtons({ isAuthenticated, onAuthClick, myProfileUrl, isLegacySkin }: AuthButtonsProps) {
  return (
    <>
      {isAuthenticated && (
        <UnstyledButton
          className={isLegacySkin ? classes.authLegacy : classes.auth}
          component="a"
          href={myProfileUrl}
          aria-label="My profile"
        >
          <Text fw={500} c={isLegacySkin ? "white" : undefined}>
            My Profile
          </Text>
        </UnstyledButton>
      )}
      <Button
        className={isLegacySkin ? classes.authLegacy : classes.auth}
        onClick={onAuthClick}
        variant={isLegacySkin ? "ala" : undefined}
        size={isLegacySkin ? "sm" : "md"}
      >
        {isAuthenticated ? "Sign out" : "Sign in"}
      </Button>
    </>
  );
}

interface MobileDrawerProps {
  opened: boolean;
  close: () => void;
  isAuthenticated?: boolean;
  onAuthClick?: React.MouseEventHandler<HTMLButtonElement>;
  myProfileUrl: string;
  isLegacySkin?: boolean;
}

/**
 * Mobile drawer for navigation on small screens, activated by the hamburger icon
 * @param param0 
 * @returns 
 */
function MobileDrawer({ opened, close, isAuthenticated, onAuthClick, myProfileUrl, isLegacySkin }: MobileDrawerProps) {
  const data = isLegacySkin ? headerLegacyData : headerData;
  
  return (
    <Drawer
      className={classes.mobile}
      classNames={drawerClasses}
      size="min(350px, 90vw)"
      position="right"
      opened={opened}
      onClose={close}
      padding={0}
      withCloseButton={false}
    >
      <Group gap="sm" justify="center" grow>
        {isAuthenticated && (
          <Button
            variant="default"
            component="a"
            className={classes.mobileProfileButton}
            href={myProfileUrl}
            aria-label="My profile"
            radius={isLegacySkin ? "md" : undefined}
          >
            My Profile
          </Button>
        )}
        <Button
          onClick={onAuthClick}
          variant="ala"
          className={classes.mobileSignInButton}
          size="sm"
          radius="md"
        >
          {isAuthenticated ? "Sign out" : "Sign in"}
        </Button>
      </Group>
      <Accordion
        variant="default"
        classNames={accordionClasses}
        defaultValue={isLegacySkin ? 'Authentication' : undefined}
      >
        {data.map((item) => (
          <SidebarItem key={item.value} data={item} />
        ))}
      </Accordion>
    </Drawer>
  );
}

/**
 * Legacy-specific navigation that uses Mantine Menu components
 * to create dropdowns for each main menu item.
 * @param param0
 * @returns 
 */
function LegacyNavigation() {
  return (
    <Group gap={5} mr={20}>
      {headerLegacyData.map((menu) => (
        <Menu key={menu.value} trigger="click" shadow="md" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Button
              variant="subtle"
              color="white"
              classNames={{ inner: classes.navButton }}
              fz={17}
              fw={500}
              pl={5}
              mr={5}
              rightSection={<CaretDownIcon size={14} />}
            >
              {menu.title}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {menu.colOneLinks.map((item) => (
              <Menu.Item key={item.text} component="a" href={item.href}>
                {item.text}
              </Menu.Item>
            ))}
            {menu.colTwoLinks && menu.colTwoLinks.length > 0 && <Menu.Divider />}
            {menu.colTwoLinks?.map((item) => (
              <Menu.Item key={item.text} component="a" href={item.href}>
                {item.text}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </Group>
  );
}

interface ModernNavigationProps {
  activeTab: string | null;
  onTabChange: (value: string | null) => void;
  containerProps: any;
  tabClass?: string;
}

/**
 * Modern navigation that uses Mantine Tabs components
 * to create a tabbed navigation with panels for each main menu item.
 * @param param0 
 * @returns 
 */
function ModernNavigation({ activeTab, onTabChange, containerProps, tabClass }: ModernNavigationProps) {
  return (
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
  );
}

/**
 * Main Header component
 */ 
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
  const containerClass = isLegacySkin ? classes.containerLegacy : classes.container;
  const desktopClass = isLegacySkin ? classes.desktopLegacy : classes.desktop;

  return (
    <Box className={classes.header}>
      <Container {...containerProps} className={containerClass}>
        {isLegacySkin ? (
          <Flex
            justify="space-between"
            align="center"
            wrap="nowrap"
            className={groupClass}
            style={{ overflow: 'hidden' }}
          >
            <AtlasLogo homeUrl={homeUrl} isLegacySkin={isLegacySkin} />
            
            <Flex
              className={desktopClass}
              direction="column"
              align="flex-end"
              justify="center"
              gap={5}
              style={{ flexShrink: 1, minWidth: 0 }}
            >
              <Group gap={25} mr={20} wrap="nowrap">
                <UtilityButtons
                  toggleColorScheme={toggleColorScheme}
                  onSearchClick={onSearchClick}
                  isLegacySkin={isLegacySkin}
                />
                <AuthButtons
                  isAuthenticated={isAuthenticated}
                  onAuthClick={onAuthClick}
                  myProfileUrl={myProfileUrl}
                  isLegacySkin={isLegacySkin}
                />
              </Group>
              <LegacyNavigation />
            </Flex>

            <UnstyledButton
              className={classes.mobile}
              onClick={open}
              aria-label="Open menu"
            >
              <MenuIcon />
            </UnstyledButton>
          </Flex>
        ) : (
          <Group justify="space-between" className={groupClass}>
            <AtlasLogo homeUrl={homeUrl} isLegacySkin={isLegacySkin} />
            
            <Group className={desktopClass} gap={30}>
              <UtilityButtons
                toggleColorScheme={toggleColorScheme}
                onSearchClick={onSearchClick}
              />
              <AuthButtons
                isAuthenticated={isAuthenticated}
                onAuthClick={onAuthClick}
                myProfileUrl={myProfileUrl}
              />
            </Group>

            <UnstyledButton
              className={classes.mobile}
              onClick={open}
              aria-label="Open menu"
            >
              <MenuIcon />
            </UnstyledButton>
          </Group>
        )}
      </Container>

      {!isLegacySkin && (
        <ModernNavigation
          activeTab={activeTab}
          onTabChange={onTabChange}
          containerProps={containerProps}
          tabClass={tabClass}
        />
      )}

      <MobileDrawer
        opened={opened}
        close={close}
        isAuthenticated={isAuthenticated}
        onAuthClick={onAuthClick}
        myProfileUrl={myProfileUrl}
        isLegacySkin={isLegacySkin}
      />
    </Box>
  );
}