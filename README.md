# ALA Mantine Library

> Shared ALA theming & components using the Mantine component library

- [ALA Mantine Library](#ala-mantine-library)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Theme](#theme)
    - [Components](#components)

## Prerequisites

This library requires the following peer dependencies:

- React `18.2.0` or newer
- Mantine `7.2.0` or newer

## Installation

**NOTE: This package exports the Mantine theme and components as untransplied TypeScript, a toolchain/framework such as Vite/Next.js is needed to use it.**

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
import { theme } from "ala-mantine";

function App() {
  return (
    <div>
      <Component isComponent={true} />
    </div>
  );
}

export default App;
```