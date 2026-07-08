import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const trilogyTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'Trilogy',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#3d5d7e',
  colorSecondary: '#3d5d7e',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 6,

  // Toolbar
  barBg: '#ffffff',
  barTextColor: '#3d5d7e',
  barSelectedColor: '#3d5d7e',

  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#3d5d7e',
  textInverseColor: '#ffffff',
})

addons.setConfig({
  theme: trilogyTheme,
})
