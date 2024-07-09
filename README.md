# ALA Mantine Library

> Shared ALA theming & components using the Mantine component library

- [ALA Mantine Library](#ala-mantine-library)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Local](#local)
    - [yarn / npm](#yarn--npm)
  - [Usage](#usage)
    - [Theme](#theme)
    - [Components](#components)

## Prerequisites

This library requires the following peer dependencies:

- React `18.2.0` or newer
- Mantine `7.2.0` or newer

## Installation

**NOTE: This package exports the Mantine theme and components as untransplied TypeScript, a toolchain/framework such as Vite/Next.js is needed to use it.**

### Local

[Yalc](https://github.com/wclr/yalc) is needed to use `ala-mantine` locally. See [here](https://github.com/wclr/yalc?tab=readme-ov-file#installation) for Yalc installation documentation. Once installed, in the `ala-mantine` root folder, run `yalc publish`.

In your dependant application, run `yalc add ala-mantine`, followed by `yarn` to install it as a dependency.

Once you've made changes to `ala-mantine`, run `yalc push` from the `ala-mantine` root folder to automatically push all changes to the dependent applications.

### yarn / npm

This package can be installed with yarn / npm using the following command(s):

`yarn add ala-mantine` or `npm i ala-mantine`

## Usage

### Theme

ALA's Mantine theme can be imported & used in your project like so:

```tsx
import { MantineProvider } from "@mantine/core";
import { theme } from "ala-mantine";

function App() {
  return (
    <MantineProvider theme={theme}>
      {/* your application here */}
    </MantineProvider>
  );
}

export default App;
```

### Components

This project additionaly provides several high-level components that are leveraged across multiple ALA applications, and can be utilised in your own project.

For example, the <Component> component can be implemented like so:

```tsx
import { MantineProvider } from "@mantine/core";
import { CoolComponent } from "ala-mantine";

function App() {
  return (
    <div>
      <CoolComponent isComponent={true} />
    </div>
  );
}

export default App;
```
