import { createTheme } from "@mantine/core";

// Theme override imports
import components from "./components";
import colors from "./colours";
import typography from "./typography";

export const mobile = createTheme({
  // Colour configutation
  colors,
  // variantColorResolver,
  primaryColor: "rust",
  // Component customisation
  components,
  // Typography configuration
  ...typography["mobile"],
});

export const desktop = createTheme({
  // Colour configutation
  colors,
  // variantColorResolver,
  primaryColor: "rust",
  // Component customisation
  components,
  // Typography configuration
  ...typography["desktop"],
});
