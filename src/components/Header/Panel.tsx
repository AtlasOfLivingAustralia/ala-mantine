import React, { PropsWithChildren } from "react";
import {
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  TabsPanel,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { ArrowRightIcon } from "ala-mantine";

import classes from "./Panel.module.css";

interface PanelLinkData {
  href: string;
  text: string;
  nested?: boolean;
}

export interface PanelData {
  value: string;
  title: string;
  description: string;
  colOneLinks: PanelLinkData[];
  colTwoLinks?: PanelLinkData[];
}

interface HeaderTabProps extends PropsWithChildren {
  data: PanelData;
}

function PanelLink({ link }: { link: PanelLinkData }) {
  return (
    <UnstyledButton component="a" href={link.href} className={classes.link}>
      <Group gap={5} ml={link.nested ? 40 : 0}>
        <Text size="sm">
          {link.text}
          <ArrowRightIcon className={classes.icon} size={14} />
        </Text>
      </Group>
    </UnstyledButton>
  );
}

export function Panel({ data }: HeaderTabProps): React.ReactElement {
  const { value, title, description, colOneLinks, colTwoLinks } = data;

  return (
    <TabsPanel value={value} py={40}>
      <Grid gutter={0}>
        <GridCol span="content">
          <Stack w={324} gap={15}>
            <Title order={4}>{title}</Title>
            <Text size="sm">{description}</Text>
          </Stack>
        </GridCol>
        <GridCol span="content">
          <Divider h="100%" ml={28} mr={41} orientation="vertical" />
        </GridCol>
        <GridCol span="content">
          <Stack w={295} gap={15}>
            {colOneLinks.map((link) => (
              <PanelLink key={link.href} link={link} />
            ))}
          </Stack>
        </GridCol>
        <GridCol span="auto">
          <Stack gap={15}>
            {(colTwoLinks || []).map((link, index) => (
              <PanelLink key={`${link.href}-${index}`} link={link} />
            ))}
          </Stack>
        </GridCol>
      </Grid>
    </TabsPanel>
  );
}
