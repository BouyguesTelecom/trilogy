import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ModalFooter } from '../footer/ModalFooter';
import { Modal, ModalBody } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { ModalSize } from '../ModalEnum';
import { Button, ButtonVariant } from '../../button';

const meta = {
  title: 'Modal/ModalFooter',
  component: ModalFooter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The ModalFooter component displays actions at the bottom of a Modal.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the modal footer, typically action buttons',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof ModalFooter>;

renderBefore(meta);

export const Basic: StoryObj<typeof ModalFooter> = {
  args: {
    children: (
      <>
        <Button variant={ButtonVariant.SECONDARY}>Cancel</Button>
        <Button>Confirm</Button>
      </>
    ),
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
          title="Modal with Footer Actions"
          size={ModalSize.MEDIUM}
        >
          <ModalBody>
            <p>This modal demonstrates the use of the ModalFooter component with action buttons.</p>
          </ModalBody>
          <ModalFooter {...args} />
        </Modal>
      </>
    );
  },
};

export const SingleAction: StoryObj<typeof ModalFooter> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Single Action</Button>
        
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Single Action Modal"
          size={ModalSize.MEDIUM}
        >
          <ModalBody>
            <p>This modal has a single action in the footer.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const MultipleLActions: StoryObj<typeof ModalFooter> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Multiple Actions</Button>
        
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Multiple Actions Modal"
          size={ModalSize.MEDIUM}
        >
          <ModalBody>
            <p>This modal has multiple actions in the footer.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant={ButtonVariant.GHOST}>Reset</Button>
            <Button variant={ButtonVariant.SECONDARY} onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)}>Submit</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export default meta;
