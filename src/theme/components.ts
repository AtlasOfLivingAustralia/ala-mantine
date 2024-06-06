"use client";
import {
  Accordion,
  Alert,
  Anchor,
  Button,
  Checkbox,
  Divider,
  Image,
  Radio,
  Text,
  Table,
  Tabs,
  Title,
} from "@mantine/core";

import classes from "./classes";

const components = {
  Accordion: Accordion.extend({
    classNames: classes.accordion,
    defaultProps: {
      variant: "ala",
    },
  }),
  Alert: Alert.extend({
    classNames: classes.alert,
    defaultProps: {
      variant: "ala",
    },
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
  Checkbox: Checkbox.extend({
    classNames: classes.checkbox,
    defaultProps: {
      variant: "ala",
    },
  }),
  Divider: Divider.extend({
    classNames: classes.divider,
  }),
  Image: Image.extend({
    defaultProps: {
      radius: 10,
    },
  }),
  Radio: Radio.extend({
    classNames: classes.radio,
    defaultProps: {
      variant: "ala",
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
