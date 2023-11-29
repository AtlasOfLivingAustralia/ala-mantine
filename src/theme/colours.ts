import { MantineColorsTuple, VariantColorsResolver, defaultVariantColorsResolver } from "@mantine/core";

export const colors: Record<string, MantineColorsTuple> = {
  flamingo: [
    "#ffece6",
    "#ffd8d0",
    "#fab0a0",
    "#f6856e",
    "#f26649",
    "#f04a27",
    "#f03d19",
    "#d52f0c",
    "#bf2608",
    "#a71b03",
  ],
  'flamingo-ui': [
    "#ffece6",
    "#ffd8d0",
    "#fab0a0",
    "#f6856e",
    "#f26649",
    "#c44d34",
    "#c44d34",
    "#c44d34",
    "#c44d34",
    "#c44d34",
  ],
  rust: [
    "#ffeeea",
    "#f9ddd8",
    "#ebbaaf",
    "#df9485",
    "#d47561",
    "#ce6149",
    "#cb563d",
    "#b4452f",
    "#a13d28",
    "#8e311f",
  ],
  honey: [
    "#fff8e1",
    "#ffefcc",
    "#ffdd9b",
    "#ffca64",
    "#ffb938",
    "#ffaf1b",
    "#ffaa09",
    "#e39500",
    "#ca8400",
    "#af7100",
  ],
  "pale-moss": [
    "#f4f9e9",
    "#e8f1dc",
    "#d1dfbb",
    "#b7cd96",
    "#a1be78",
    "#94b463",
    "#8db058",
    "#7a9a48",
    "#6b883d",
    "#5a7630",
  ],
  seafoam: [
    "#e1fefc",
    "#d2f8f5",
    "#abece9",
    "#80e0dc",
    "#5ed7d1",
    "#46d1cb",
    "#34cec7",
    "#20b7af",
    "#03a29d",
    "#008d88",
  ],
  ocean: [
    "#ebf5ff",
    "#d5e7fa",
    "#a5cef7",
    "#72b3f6",
    "#4e9df5",
    "#3b90f5",
    "#3188f6",
    "#2776dc",
    "#1b68c4",
    "#005aad",
  ],
  lavendar: [
    "#f8f1ff",
    "#e9e2ef",
    "#cec5d8",
    "#b1a4c0",
    "#9a89ac",
    "#8b77a0",
    "#836e9b",
    "#725c88",
    "#65527b",
    "#58456d",
  ],
  plum: [
    "#fbeff2",
    "#f0dce1",
    "#e3b3c1",
    "#d6899f",
    "#cd6682",
    "#c65170",
    "#c44567",
    "#ae3756",
    "#9b2f4d",
    "#892541",
  ],
};


export const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  // Add new variants support
  if (input.variant === 'ala') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};