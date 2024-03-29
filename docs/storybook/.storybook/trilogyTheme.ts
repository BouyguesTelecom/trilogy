import { create } from '@storybook/theming'
import { getColorStyle } from '../../../packages/react'

export default create({
  base: 'light',

  colorPrimary: getColorStyle('PRIMARY'),
  colorSecondary: getColorStyle('SECONDARY'),

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: getColorStyle('TERTIARY'),
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#25465F',
  barSelectedColor: '#25465F',
  barBg: '#F6F6F6',

  // Form colors
  inputBg: '#D44A4A',
  inputBorder: '#D44A4A',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'Trilogy DS',
  brandUrl: '',
  brandTarget: '_self',
})
