import { create } from '@storybook/theming'
import { getColorStyle, TrilogyColor } from '@trilogy-ds/react'

export default create({
  base: 'light',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Trilogy DS',
  brandUrl: '',
  brandImage: 'https://design.bouyguestelecom.fr/trilogy.svg',
  brandTarget: '_self',

  //
  colorPrimary: getColorStyle(TrilogyColor.ACCENT),
  colorSecondary: getColorStyle(TrilogyColor.MAIN),

  // UI
  appBg: getColorStyle(TrilogyColor.BACKGROUND),
  appContentBg: getColorStyle(TrilogyColor.BACKGROUND),
  appPreviewBg: getColorStyle(TrilogyColor.BACKGROUND),
  appBorderColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
  appBorderRadius: 4,

  // Text colors
  textColor: getColorStyle(TrilogyColor.FONT),
  textInverseColor: getColorStyle(TrilogyColor.BACKGROUND),

  // Toolbar default and active colors
  barTextColor: getColorStyle(TrilogyColor.MAIN),
  barSelectedColor: getColorStyle(TrilogyColor.MAIN),
  barHoverColor: getColorStyle(TrilogyColor.ACCENT),
  barBg: getColorStyle(TrilogyColor.BACKGROUND),

  // Form colors
  inputBg: getColorStyle(TrilogyColor.BACKGROUND),
  inputBorder: getColorStyle(TrilogyColor.NEUTRAL_FADE),
  inputTextColor: getColorStyle(TrilogyColor.FONT),
  inputBorderRadius: 4,
})
