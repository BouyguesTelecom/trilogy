import type { Preview } from '@storybook/react'

const addStylesheetDecorator = () => {
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  /* @todo : can not be in OpenSource */
  linkElement.href = 'https://cdn.jsdelivr.net/npm/@trilogy-ds/styles';
  document.head.appendChild(linkElement);
};
addStylesheetDecorator();

export const renderBefore = (meta)=> {
  console.log('SUPER PREVIEW !', document)
  document.body.insertAdjacentHTML( 'afterbegin', `Composant Incroyable  PREVIEW ${meta.title}`)
}


const preview: Preview = {
  parameters: {
    actions: {
      disable:true,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      page: null
    }
  },
//  beforeAll: () => { console.log('TOTO', document) }
  
};


export default preview;
