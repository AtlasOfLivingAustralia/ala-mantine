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

**~~NOTE: This package exports the Mantine theme and components as untransplied TypeScript, a toolchain/framework such as Vite/Next.js is needed to use it.~~**

**NOTE: From version 1.0 onwards, this package exports transpiled JS code. This is a major change and may reqiure client apps to be aware of this.** 
The reason for changing to transpiled JS, was to make the development process easier by enabling hot-linking of library and app for instand changes to be observed. 
Its also worth noting that transpiled JS is the most common format puiblished to npm, and is the most reliable mechanism as well as being the "expected" format by client apps.

**PostCSS** is required as a development depencency in your application, and can be install using the following:

`yarn add --dev postcss postcss-preset-mantine postcss-simple-vars`

Once this is done, you're ready to install `ala-mantine`!

### yarn / npm

This package can be installed with yarn / npm using the following command(s):

`yarn add @atlasoflivingaustralia/ala-mantine`

or

`npm i @atlasoflivingaustralia/ala-mantine`

### Local Development

To enable live updating of `ala-mantine` changes in a client application via `yarn link`, run the following commands.

In the `ala-mantine` root directory, run:
```sh
yarn link
yarn dev 
```

In your client app, run:
```sh
yarn link @atlasoflivingaustralia/ala-mantine
```

When you're done developing and want to go back to the published version, you just run:
```
yarn unlink @atlasoflivingaustralia/ala-mantine
yarn install --force
```

This will restore the normal npm registry version.

Alternatively, you can use `yalc`, which is slower (requires push for each change) and necessitates the cache to be cleared regularly (`node_modules/.vite`). This is a useful sanity check after using `yarn link`, before pushing changes to NPM.

[Yalc](https://github.com/wclr/yalc) is needed to use `ala-mantine` locally. See [here](https://github.com/wclr/yalc?tab=readme-ov-file#installation) for Yalc installation documentation.

1. Once installed, in the `ala-mantine` root folder, run `yalc publish`.
2. In your dependant application, run `yalc add @atlasoflivingaustralia/ala-mantine`, followed by `yarn` to install it as a dependency.
3. PostCSS is also required in your dependant application for the component library. Please see the installation intructions [here](https://mantine.dev/getting-started/#:~:text=Install%20PostCSS%20plugins%20and%20postcss%2Dpreset%2Dmantine%3A).

### Publishing to NPM

Once you've made changes to `ala-mantine`, run `yalc push` from the `ala-mantine` root folder to automatically push all changes to the dependent applications.

Then, in your dependent applications, make sure to remove any cache (`.vite`, `.next` or equivalent) and re-run.

To publish changes to NPM, you need to have a login for https://www.npmjs.com and be added to the ALA group (Ask Matt). Ensure that a new version number is set in `package.json` and create a new GH release for it, documenting the changes.

```sh
# 1. login will redirect you to npm site - you'll need an account and be a member of the ALA org
npm login
# 2. push changes to npm
npm publish
```

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

E.g., the ALA `<Header>` component can be used with either the 2026 "new" ALA skin or the previous "legacy" skin:

```tsx
import {
  Header,
  Footer
} from '@atlasoflivingaustralia/ala-mantine';
import { useAuth } from 'react-oidc-context';

function App() {
  def isLegacySkin = true // or leave blank to get default `false` value
  def handleSignout = null; // needs implementing
  const auth = useAuth();

  return <Header
      isAuthenticated={auth.isAuthenticated}
      onAuthClick={
        () => {
        if (auth.isAuthenticated) {
          handleSignout(auth);
        } else {
          auth.signinRedirect();
        }
      }}
      homeUrl={import.meta.env.VITE_ALA_HOME_PAGE || ''}
      onSearchClick={() => (window.location.href = 'https://bie.ala.org.au')}
      fullWidth 
      compact
      myProfileUrl={import.meta.env.VITE_ALA_USER_PROFILE || ''}
      isLegacySkin={isLegacySkin}
    />
}

export default App;
```

Another example is the `<ConservationStatus>` component can be implemented like so:

```tsx
import { ConservationStatus } from "@atlasoflivingaustralia/ala-mantine";

function App() {
  return <ConservationStatus key="EN" withLabel />;
}

export default App;
```
