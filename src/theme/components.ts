"use client";
import {
  Alert,
  Button,
  Card,
  Text,
  Pagination,
  Table,
  Tabs,
} from "@mantine/core";

import tabsClasses from "./classes/Tabs.module.css";
import buttonClasses from "./classes/Button.module.css";
import tableClasses from "./classes/Table.module.css";

import colours, { mainShades } from "./colours";

const components = {
  Button: Button.extend({
    classNames: buttonClasses,
    defaultProps: {
      variant: "ala-primary",
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
  Card: Card.extend({
    defaultProps: {
      radius: 12,
      withBorder: true,
    },
  }),
  Text: Text.extend({
    defaultProps: {
      size: "sm",
    },
  }),
  Pagination: Pagination.extend({
    vars: () => ({
      root: {
        "--pagination-active-bg": "#f26649",
      },
    }),
  }),
  Table: Table.extend({
    classNames: tableClasses,
    defaultProps: {
      striped: "even",
      withRowBorders: false,
    },
  }),
  Tabs: Tabs.extend({
    // classNames: tabsClasses,
    defaultProps: {
      variant: "ala",
    },
  }),
};

export default components;
