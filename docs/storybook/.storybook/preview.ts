import trilogyTheme from './trilogyTheme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: false,
  },
  html: {
    prettier: {
      tabWidth: 2,
      bracketSameLine: true,
    },
  },
  docs: {
    theme: trilogyTheme,
  },
  backgrounds: {
    default: 'white', // Set the default background color of the canvas
    values: [
      { name: 'white', value: '#ffffff' }, // You can add more color options here
      { name: 'light gray', value: '#f5f5f5' },
      { name: 'dark gray', value: '#333333' },
    ],
  },
  options: {
    storySort: {
      order: ['Quick start' ]
    }
  }
 /* viewport: {
    defaultViewport: 'Container', // Set the default size
    viewports: {
      backgroundColor: 'red',
      'Container': {
        name: 'Container',
        styles: {
          width: '1100px',
          height: '1000px',
        },
      },
      // Add more custom viewports if needed
    },
  },*/
}




