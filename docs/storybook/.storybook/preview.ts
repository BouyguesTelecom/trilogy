import type { Preview } from '@storybook/react'
import { Alignable, getColorStyle, Justifiable, TrilogyColor } from '@trilogy-ds/react'

import '../../../packages/styles/dist/default/trilogy.css'
import './show-code-fix.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: getColorStyle(TrilogyColor.MAIN) },
        { name: 'Light', value: getColorStyle(TrilogyColor.BACKGROUND) },
      ],
      default: 'Light',
    },
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
