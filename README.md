<div align='center'>

# Trilogy DS

## 🚀 [Quick Start](#usage)

Trilogy DS, developed by Bouygues Telecom, is a multiplatform design system ( Web / React / React Native ) with reusable components with same codebase.

</div>

[![npm](https://img.shields.io/npm/v/@trilogy-ds/react?style=for-the-badge&logo=npm&logoColor=white&color=D44A4A)](https://www.npmjs.com/package/@trilogy-ds/react)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
---

### 🚨 Prerequisites

#### Web

- [Node.js](https://nodejs.org/en/) (>= 18.0.0)
- [npm](https://www.npmjs.com/) (>= 9.0.0)

#### Mobile (Android / IOS)

- [Java](https://www.java.com/fr/download/manual.jsp)
- [cocoapods](https://cocoapods.org/) (>= 1.10.1) (only for ios)
- [Xcode](https://developer.apple.com/xcode/) (>= 12.5.1) (only for ios)
- [Android Studio](https://developer.android.com/studio) (>= 4.2.2) (only for android)

See how to setup your environment for [Android](https://reactnative.dev/docs/environment-setup) and [IOS](https://reactnative.dev/docs/environment-setup)

### 👷 Mobile Usage with Expo
If you haven't already installed Expo CLI, you can install it globally:
```sh
npm install -g expo-cli
```

Setup Expo for Native Development:
```sh
npm run setup:native:expo
```

Build the Project:
```sh
npm run build
```

Start the Expo Project:
```sh
npm run start:native:expo
```

Install the Test Application:

- [ANDROID] - Press "a" to install the test application on Android.
- [iOS] - Press "i" to install the test application on iOS.

---

## Usage

```
npm i @trilogy-ds/react
```

```tsx
import { Button, Text } from '@trilogy-ds/react';

<Button variant='PRIMARY'>My Button</Button>
<Text level='1'>My Text</Text>
```

### Trilogy Provider - Import directly css styles

The TrilogyProvider simplifies integrating Trilogy style into your app by wrapping your entry point with a provider. It offers two props for customization:

- `mangled` [optional]: Apply compressed styling for performance.
- `injectTrilogyAssets`: Inject Trilogy assets directly into the DOM.

#### Web Usage

1. Import the `TrilogyProvider` component:

   ```tsx
   import { TrilogyProvider } from "@trilogy-ds/react/lib/context/provider"
   ```

2. Wrap your app's root component with it:

   ```tsx
     <TrilogyProvider mangled injectTrilogyAssets>
       <App />
     </TrilogyProvider>
   ```

#### Native Usage

1. Import the `TrilogyThemeProvider` along with `SVGicons` & colors from trilogy-assets library:

   ```tsx
   import { TrilogyThemeProvider, defaultTheme } from '@trilogy-ds/react/lib/context/providerTheme'
   import { SVGicons } from '@trilogy-ds/assets/lib/iconsPath'
   ```

2. Wrap your app's root component with it:

   ```tsx
     const theme = {
       ...defaultTheme,
       icons: SVGicons,
       // here: override theme colors
     }

     <TrilogyThemeProvider theme={theme}>
       <AppNative />
     </TrilogyThemeProvider>
   ```
