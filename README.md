# ALA Mantine Library

![NPM Version](https://img.shields.io/npm/v/%40atlasoflivingaustralia%2Fala-mantine)

**This library is currently in a pre-release state (`v0.1.x`), and is subject to change.**

> Shared ALA theming & components using the Mantine component library

- [ALA Mantine Library](#ala-mantine-library)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [yarn / npm](#yarn--npm)
    - [Local](#local)
  - [Usage](#usage)
    - [Theme](#theme)
    - [Components](#components)

## Prerequisites

This library requires the following peer dependencies in your dependant project:

- React `18.2.0` or newer
- Mantine `7.12.0` or newer

## Installation

**NOTE: This package exports the Mantine theme and components as untransplied TypeScript, a toolchain/framework such as Vite/Next.js is needed to use it.**

**PostCSS** is required as a development depencency in your application, and can be install using the following:

`yarn add --dev postcss postcss-preset-mantine postcss-simple-vars`

Once this is done, you're ready to install `ala-mantine`!

### yarn / npm

This package can be installed with yarn / npm using the following command(s):

`yarn add @atlasoflivingaustralia/ala-mantine`

or

`npm i @atlasoflivingaustralia/ala-mantine`

### Local

[Yalc](https://github.com/wclr/yalc) is needed to use `ala-mantine` locally. See [here](https://github.com/wclr/yalc?tab=readme-ov-file#installation) for Yalc installation documentation.

1. Once installed, in the `ala-mantine` root folder, run `yalc publish`.
2. In your dependant application, run `yalc add ala-mantine`, followed by `yarn` to install it as a dependency.
3. PostCSS is also required in your dependant application for the component library. Please see the installation intructions [here](https://mantine.dev/getting-started/#:~:text=Install%20PostCSS%20plugins%20and%20postcss%2Dpreset%2Dmantine%3A).

Once you've made changes to `ala-mantine`, run `yalc push` from the `ala-mantine` root folder to automatically push all changes to the dependent applications.

Then, in your dependent applications, make sure to remove any cache (`.vite`, `.next` or equivalent) and re-run.

## Usage

> See the [ALA Mantine Demo](https://github.com/AtlasOfLivingAustralia/ala-mantine-demo) application for specific implementation examples

### Theme

ALA's Mantine theme can be imported & used in your project like so:

```tsx
// Root mantine styles
import "@mantine/core/styles.css";

// Mantine provider & theme
import { MantineProvider } from "@mantine/core";
import { theme } from "@atlasoflivingaustralia/ala-mantine";

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* your application here */}
    </MantineProvider>
  );
}

export default App;
```

Don't forget to add the `@mantine/core/styles.css` import at the root of your application too!

### Components

This project additionaly provides several high-level components that are leveraged across multiple ALA applications, and can be utilised in your own project.

For example, the <ConservationStatus /> component can be implemented like so:

```tsx
import { ConservationStatus } from "@atlasoflivingaustralia/ala-mantine";

function App() {
  return <ConservationStatus key="EN" withLabel />;
}

export default App;
```
