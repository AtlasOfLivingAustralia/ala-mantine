import React from "react";
import { Text, Group, ThemeIcon } from "@mantine/core";

const statuses = {
  EX: {
    label: "Extinct",
    backgroundColour: "black",
    textColour: "honey.3",
  },
  EW: {
    label: "Extinct in the Wild",
    backgroundColour: "black",
    textColour: "white",
  },
  CR: {
    label: "Critically Endangered",
    backgroundColour: "pinot.9",
    textColour: "white",
  },
  EN: {
    label: "Endangered",
    backgroundColour: "flamingo.4",
    textColour: "charcoal.9",
  },
  VU: {
    label: "Vulnerable",
    backgroundColour: "honey.3",
    textColour: "charcoal.9",
  },
  NT: {
    label: "Near Threatened",
    backgroundColour: "forest.9",
    textColour: "white",
  },
  LC: {
    label: "Least Concern",
    backgroundColour: "pale-moss.3",
    textColour: "charcoal.9",
  },
};

export type ConservationStatusKey =
  | "EX"
  | "EW"
  | "CR"
  | "EN"
  | "VU"
  | "NT"
  | "LC";

interface ConservationStatusProps {
  status: ConservationStatusKey;
  withLabel?: boolean;
}

export function ConservationStatus({
  status,
  withLabel,
}: ConservationStatusProps): React.ReactElement {
  const { label, backgroundColour, textColour } = statuses[status];

  return (
    <Group gap={8}>
      <ThemeIcon radius={17.5} size={35} bg={backgroundColour}>
        <Text size="sm" fw="bold" c={textColour}>
          {status}
        </Text>
      </ThemeIcon>
      {withLabel && <Text size="sm">{label}</Text>}
    </Group>
  );
}
