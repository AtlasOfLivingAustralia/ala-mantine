"use client";
import {
  Accordion,
  Alert,
  Anchor,
  Button,
  Card,
  Text,
  Table,
  Tabs,
  Title,
} from "@mantine/core";

import colours, { mainShades } from "./colours";
import classes from "./classes";

const components = {
  Accordion: Accordion.extend({
    classNames: classes.accordion,
    defaultProps: {
      variant: "ala",
    },
  }),
  Alert: Alert.extend({
    defaultProps: {
      radius: 5,
    },
    vars: () => ({
      root: {
        "--alert-bg": colours.honey[mainShades.honey],
      },
    }),
  }),
  Anchor: Anchor.extend({
    classNames: classes.anchor,
    defaultProps: {
      variant: "ala",
    },
  }),
  Button: Button.extend({
    classNames: classes.button,
    defaultProps: {
      variant: "ala-primary",
    },
  }),
  Card: Card.extend({
    defaultProps: {
      radius: 12,
      withBorder: true,
    },
  }),
  Title: Title.extend({
    classNames: classes.title,
  }),
  Text: Text.extend({
    classNames: classes.text,
  }),
  Table: Table.extend({
    classNames: classes.table,
    defaultProps: {
      striped: "even",
      withRowBorders: false,
    },
  }),
  Tabs: Tabs.extend({
    classNames: classes.tabs,
    defaultProps: {
      variant: "ala",
    },
  }),
};

export default components;
