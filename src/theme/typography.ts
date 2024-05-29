import { rem } from "@mantine/core";

const shared = {
  // General typography theming
  fontFamily: "Roboto",
  headings: {
    fontFamily: "Roboto",
  },
};

const mobile = {
  ...shared,
  // Heading theming
  headings: {
    ...shared.headings,
    sizes: {
      h1: {
        fontWeight: 700,
        fontSize: rem("34px"),
        lineHeight: rem("38px"),
      },
      h2: {
        fontWeight: 600,
        fontSize: rem("22px"),
        lineHeight: rem("28px"),
      },
      h3: {
        fontWeight: 600,
        fontSize: rem("20px"),
        lineHeight: rem("26px"),
      },
      h4: {
        fontWeight: 700,
        fontSize: rem("18px"),
        lineHeight: rem("24px"),
      },
      h5: {
        fontWeight: 700,
        fontSize: rem("16px"),
        lineHeight: rem("20px"),
      },
    },
  },
};

const desktop = {
  ...shared,
  // Heading theming
  headings: {
    ...shared.headings,
    sizes: {
      h1: {
        fontWeight: 700,
        fontSize: rem("52px"),
        lineHeight: rem("58px"),
      },
      h2: {
        fontWeight: 600,
        fontSize: rem("44px"),
        lineHeight: rem("52px"),
      },
      h3: {
        fontWeight: 600,
        fontSize: rem("32px"),
        lineHeight: rem("40px"),
      },
      h4: {
        fontWeight: 700,
        fontSize: rem("26px"),
        lineHeight: rem("32px"),
      },
      h5: {
        fontWeight: 700,
        fontSize: rem("22px"),
        lineHeight: rem("28px"),
      },
    },
  },
};

export default { mobile, desktop };
