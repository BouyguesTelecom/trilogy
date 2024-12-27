import type { Preview } from '@storybook/react'

import '../../../packages/styles/dist/default/trilogy.css';
import './show-code-fix.css';

const preview: Preview = {
  parameters: {
    disableSaveFromUI: true,
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
