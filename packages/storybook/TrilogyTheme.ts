import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Trilogy',
  brandUrl: '',
  brandImage: '/logo.svg',
  brandTarget: '_self',
  fontBase: 'Bouygues Read, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  colorPrimary: '#25465F',
  colorSecondary: '#25465F',

  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#EFF2F8',
  appBorderColor: '#E4EAED',
  appBorderRadius: 4,

  textColor: '#25465F',
  textInverseColor: '#EFF2F8',

  barTextColor: '#25465F',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#E4EAED',
  inputTextColor: '#25465F',
  inputBorderRadius: 4,
});
