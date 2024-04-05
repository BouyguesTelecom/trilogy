<div align='center'>

# @trilogy-ds/assets

</div>

[![npm](https://img.shields.io/npm/v/@trilogy-ds/assets?style=for-the-badge&logo=npm&logoColor=white&color=D44A4A)](https://www.npmjs.com/package/@trilogy-ds/assets)

## Description

`@trilogy-ds/assets` is a direct dependency of [@trilogy-ds/react](https://www.npmjs.com/package/@trilogy-ds/REACT). It includes all open-source fonts and icons from [Trilogy](https://github.com/BouyguesTelecom/trilogy).

It provides to the `<Icon/>` component, the path information from the `IconPath.ts` file (which is the paths to the icons) and the `IconName` file (which is an enum for the icon names).

## Installation

Download the package by running:

`npm install @trilogy-ds/assets`

## Scripts 💻

This package includes the following scripts using **npm**:

1. `optimise:icons`: This script uses [SVGO](https://github.com/svg/svgo) to optimize all icons in the `assets/icons/all` directory. The optimized icons are stored in `lib/icons/all`.

2. `build`: This script runs the `optimise:icons` script, compiles Typescript files, and finally, copies all fonts from `assets/fonts/` to `lib/fonts/`.

## License

This package is licensed under the ISC license.
