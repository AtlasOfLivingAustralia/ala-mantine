import { Anchor, Box, Text } from "@mantine/core";

import classes from "./IndigenousAcknowledgement.module.css";

export function IndigenousAcknowledgement() {
  return (
    <Box className={classes.back}>
      <Text className={classes.text}>
        The Atlas of Living Australia acknowledges the Traditional Owners of the
        land. We pay respect to the past and present Elders of the nation's
        Aboriginal and Torres Strait Islander communities.
        <br />
        <br />
        We honour and celebrate their spiritual, cultural and customary
        connections to country and the biodiversity that forms part of that
        country.
      </Text>
      <Anchor
        href="https://www.ala.org.au/indigenous-ecological-knowledge/"
        className={classes.anchor}
      >
        Learn more about the ALA's work with Indigenous communities
      </Anchor>
    </Box>
  );
}
