import React from "react";
import {
  Anchor,
  Box,
  Container,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";

// Icons & Logos
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "../icons";
import { AtlasLogo, CsiroLogo, GbifLogo, NcrisLogo } from "../logos";

// Styles
import classes from "./index.module.css";

export function Footer(): React.ReactElement {
  return (
    <Box className={classes.footer}>
      <Container size="lg">
        <Grid gutter={28}>
          <GridCol span={{ base: 12, xs: 12, sm: 4 }}>
            <Stack gap={20}>
              <AtlasLogo
                style={{
                  maxWidth: "100%",
                  backgroundSize: "100% 100%",
                }}
              />
              <Text size="sm" pr={4}>
                The <Anchor size="sm">ALA</Anchor> is made possible by
                contributions from its partners, is supported by{" "}
                <Anchor size="sm">NCRIS</Anchor>, is hosted by{" "}
                <Anchor size="sm">CSIRO</Anchor>, and is the Australian node of{" "}
                <Anchor size="sm">GBIF</Anchor>.
              </Text>
              <Group gap={30}>
                <NcrisLogo />
                <CsiroLogo />
                <GbifLogo />
              </Group>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, xs: 12, sm: 4 }}>
            <Stack gap={15} h="100%">
              <Anchor fw="bold">News & updates</Anchor>
              <Anchor fw="bold">Help and resources</Anchor>
              <Group gap={30}>
                <UnstyledButton
                  component="a"
                  href="https://facebook.com/atlasoflivingaustralia/"
                  target="_blank"
                >
                  <FacebookIcon />
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="https://x.com/atlaslivingaust"
                  target="_blank"
                >
                  <XIcon />
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="https://au.linkedin.com/company/atlas-of-living-australia"
                  target="_blank"
                >
                  <LinkedInIcon />
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="https://www.instagram.com/atlasoflivingaustralia/"
                  target="_blank"
                >
                  <InstagramIcon />
                </UnstyledButton>
              </Group>
              <Group
                style={{ marginTop: "auto" }}
                className={`${classes.links} ${classes.desktop}`}
                gap="xs"
              >
                <Anchor size="sm">Copyright</Anchor>
                <Anchor size="sm">Terms of use</Anchor>
                <Anchor size="sm">Accessibility</Anchor>
                <Anchor size="sm">System status</Anchor>
              </Group>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, xs: 12, sm: 4 }}>
            <Stack gap={15}>
              <Text fw="bold">Contact us</Text>
              <Text>
                <Anchor>support@ala.org.au</Anchor> for technical support and
                general enquiries
              </Text>
              <Text>
                <Anchor>communications@ala.org.au</Anchor> for media and
                engagement enquiries
              </Text>
              <Group
                style={{ marginTop: "auto" }}
                className={`${classes.links} ${classes.mobile}`}
                gap="xs"
              >
                <Anchor size="sm">Copyright</Anchor>
                <Anchor size="sm">Terms of use</Anchor>
                <Anchor size="sm">Accessibility</Anchor>
                <Anchor size="sm">System status</Anchor>
              </Group>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
}
