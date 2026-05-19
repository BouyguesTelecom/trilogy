import type { Decorator, Preview } from '@storybook/react'
import { create } from '@storybook/theming/create'
import { TrilogyProvider } from '@trilogy-ds/react/context/provider'
import '@trilogy-ds/styles/dist/default/trilogy-mangled.css'

const trilogyTheme = create({
  base: 'light',
  brandTitle: 'Trilogy',
  brandTarget: '_self',
  colorPrimary: '#3d5d7e',
  colorSecondary: '#3d5d7e',
  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',
})

const withTrilogyProvider: Decorator = (Story) => (
  <TrilogyProvider mangled>
    <div style={{ padding: '1.5rem' }}>
      <Story />
    </div>
  </TrilogyProvider>
)

const preview: Preview = {
  decorators: [withTrilogyProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
    },
    docs: {
      toc: true,
      theme: trilogyTheme,
    },
  },
}

export default preview
