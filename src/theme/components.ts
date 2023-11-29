"use client";
import { Button, Card, Text, Anchor, Pagination, TabsTab } from "@mantine/core";

export const components = {
  Button: Button.extend({
    defaultProps: {
      color: "flamingo.4",
      radius: 6,
    },
    vars: () => ({
      // root: {
      //   '--button-bg': '#f26649',
      //   '--button-hover': '#c44d34',
      // },
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
      lh: 1.5,
    },
  }),
  Anchor: Anchor.extend({
    defaultProps: {
      c: "flamingo.4",
    },
  }),
  Pagination: Pagination.extend({
    vars: () => ({
      root: {
        "--pagination-active-bg": "#f26649",
      },
    }),
  }),
  TabsTab: TabsTab.extend({
    defaultProps: {
      color: "flamingo.4",
    },
  }),
};
