import { createTheme } from "@mantine/core";

// Theme override imports
import components from "./components";
import colors from "./colours";

export const theme = createTheme({
  // Colour configutation
  colors,
  // variantColorResolver,
  primaryColor: "rust",
  // Component customisation
  components,
});
