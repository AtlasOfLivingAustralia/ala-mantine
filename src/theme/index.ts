import { createTheme } from "@mantine/core";
import { components } from "./components";
import { colors } from "./colours";

export const theme = createTheme({
  // Colour configutation
  colors,
  // variantColorResolver,
  primaryColor: "rust",
  // Font configuration
  fontFamily: "Roboto, sans-serif",
  headings: {
    fontFamily: "Roboto, sans-serif",
  },
  // Component customisation
  components,
});
