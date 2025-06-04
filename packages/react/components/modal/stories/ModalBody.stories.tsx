import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ModalBody } from '../body/ModalBody';
import { Modal, ModalFooter } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { ModalSize } from '../ModalEnum';
import { Button } from '../../button';

const meta = {
  title: 'Modal/ModalBody',
  component: ModalBody,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The ModalBody component contains the main content of a Modal.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the modal body',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof ModalBody>;

renderBefore(meta);

export const Basic: StoryObj<typeof ModalBody> = {
  args: {
    children: 'This is the content of the modal body.',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Body"
          size={ModalSize.MEDIUM}
        >
          <ModalBody {...args} />
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const WithRichContent: StoryObj<typeof ModalBody> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Rich Content</Button>
        
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Rich Content"
          size={ModalSize.MEDIUM}
        >
          <ModalBody>
            <h3>Rich Content Example</h3>
            <p>The modal body can contain any content, including:</p>
            <ul>
              <li>Text formatting</li>
              <li>Lists</li>
              <li>Images</li>
              <li>Forms and inputs</li>
            </ul>
            <img 
              src="https://via.placeholder.com/300x150" 
              alt="Example" 
              style={{ maxWidth: '100%', marginTop: '1rem' }} 
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export default meta;
