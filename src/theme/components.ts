'use client';
import { Button } from "@mantine/core";

export const components = {
  Button: Button.extend({
    defaultProps: {
      color: 'flamingo.4',
      radius: 6
    },
    vars: () => ({
      // root: {
      //   '--button-bg': '#f26649',
      //   '--button-hover': '#c44d34',
      // },
    })
  }),
};
