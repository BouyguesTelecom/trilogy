import type { Preview } from "@storybook/react-vite"

import "../../styles/src/trilogy.scss"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Components", ["Alert", "Button"]],
      },
    },
  },
}

export default preview
