import type { Decorator, Preview } from '@storybook/react'
import { TrilogyProvider } from '@trilogy-ds/react/context/provider'
import '@trilogy-ds/styles/dist/default/trilogy-mangled.css'

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
    },
  },
}

export default preview
