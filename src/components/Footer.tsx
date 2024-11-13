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
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./icons";
import { AtlasLogo, CsiroLogo, GbifLogo, NcrisLogo } from "./logos";

// Styles
import classes from "./Footer.module.css";

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
                The{" "}
                <Anchor href="https://www.ala.org.au/about-ala/" size="sm">
                  ALA
                </Anchor>{" "}
                is made possible by contributions from its partners, is
                supported by{" "}
                <Anchor
                  href="https://www.education.gov.au/national-collaborative-research-infrastructure-strategy-ncris"
                  size="sm"
                >
                  NCRIS
                </Anchor>
                , is hosted by{" "}
                <Anchor href="https://csiro.au/" size="sm">
                  CSIRO
                </Anchor>
                , and is the Australian node of{" "}
                <Anchor href="https://www.gbif.org/en/" size="sm">
                  GBIF
                </Anchor>
                .
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
              <Anchor href="https://www.ala.org.au/blog/" fw="bold">
                News & updates
              </Anchor>
              <Anchor href="https://www.ala.org.au/blog/" fw="bold">
                Help and resources
              </Anchor>
              <Group gap={30}>
                <UnstyledButton
                  component="a"
                  href="https://facebook.com/atlasoflivingaustralia/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="https://x.com/atlaslivingaust"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <XIcon />
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="https://au.linkedin.com/company/atlas-of-living-australia"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <LinkedInIcon />
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="https://www.instagram.com/atlasoflivingaustralia/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </UnstyledButton>
              </Group>
              <Group
                style={{ marginTop: "auto" }}
                className={`${classes.links} ${classes.desktop}`}
                gap="xs"
              >
                <Anchor href="https://www.ala.org.au/terms-of-use#cy" size="sm">
                  Copyright
                </Anchor>
                <Anchor href="https://www.ala.org.au/terms-of-use" size="sm">
                  Terms of use
                </Anchor>
                <Anchor size="sm">Accessibility</Anchor>
                <Anchor href="https://status.ala.org.au/" size="sm">
                  System status
                </Anchor>
              </Group>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, xs: 12, sm: 4 }}>
            <Stack gap={15}>
              <Text fw="bold">Contact us</Text>
              <Text>
                <Anchor href="mailto:support@ala.org.au">
                  support@ala.org.au
                </Anchor>{" "}
                for technical support and general enquiries
              </Text>
              <Text>
                <Anchor href="communications@ala.org.au">
                  communications@ala.org.au
                </Anchor>{" "}
                for media and engagement enquiries
              </Text>
              <Group
                style={{ marginTop: "auto" }}
                className={`${classes.links} ${classes.mobile}`}
                gap="xs"
              >
                <Anchor href="https://www.ala.org.au/terms-of-use#cy" size="sm">
                  Copyright
                </Anchor>
                <Anchor href="https://www.ala.org.au/terms-of-use" size="sm">
                  Terms of use
                </Anchor>
                <Anchor size="sm">Accessibility</Anchor>
                <Anchor href="https://status.ala.org.au/" size="sm">
                  System status
                </Anchor>
              </Group>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
}
