import type { Preview } from '@storybook/react'

const addStylesheetDecorator = () => {
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = 'https://assets.bouyguestelecom.fr/TRILOGY/trilogy-styles@4.1.2/default/trilogy.css';
  document.head.appendChild(linkElement);
};
addStylesheetDecorator();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};


export default preview;
