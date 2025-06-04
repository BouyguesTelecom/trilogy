import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Modal, ModalBody, ModalFooter } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { ModalSize } from '../ModalEnum';

import { Button, ButtonVariant } from '../../button';
import { ModalScreen } from '../../../../../examples/react-template/screens/Modal';

const meta = {
  title: 'Modal',
  component: Modal,
  subcomponents: {
    ModalBody,
    ModalFooter,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Modal component creates a dialog overlay that focuses the user\'s attention on its content.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the modal (ModalBody, ModalFooter)',
      control: { type: 'object' },
    },
    title: {
      description: 'The title of the modal',
      control: 'text',
    },
    size: {
      description: 'The size of the modal',
      control: { type: 'select' },
      options: Object.values(ModalSize),
    },
    isOpen: {
      description: 'Whether the modal is open',
      control: 'boolean',
    },
    onClose: {
      description: 'Function called when the modal is closed',
      action: 'closed',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Modal>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <ModalScreen />,
};

// Basic example with rendering function to handle state
export const Basic: StoryObj<typeof Modal> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Basic Modal"
          size={ModalSize.MEDIUM}
        >
          <ModalBody>
            <p>This is the content of the modal. You can put any content here.</p>
          </ModalBody>
          <ModalFooter>
            <Button 
              variant={ButtonVariant.SECONDARY} 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

// Different sizes
export const Sizes: StoryObj<typeof Modal> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [size, setSize] = useState<ModalSize | null>(null);
    
    return (
      <>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <Button onClick={() => setSize(ModalSize.SMALL)}>Small Modal</Button>
          <Button onClick={() => setSize(ModalSize.MEDIUM)}>Medium Modal</Button>
          <Button onClick={() => setSize(ModalSize.LARGE)}>Large Modal</Button>
          <Button onClick={() => setSize(ModalSize.FULLSCREEN)}>Fullscreen Modal</Button>
        </div>
        
        <Modal
          isOpen={size !== null}
          onClose={() => setSize(null)}
          title={`${size} Modal`}
          size={size || ModalSize.MEDIUM}
        >
          <ModalBody>
            <p>This is a {size} modal.</p>
            <p>The modal size can be adjusted based on the content and use case.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setSize(null)}>Close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

// With complex content
export const ComplexContent: StoryObj<typeof Modal> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Complex Content</Button>
        
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Complex Modal"
          size={ModalSize.LARGE}
        >
          <ModalBody>
            <h3>Modal with rich content</h3>
            <p>Modals can contain various elements:</p>
            <ul>
              <li>Text and typography</li>
              <li>Forms and inputs</li>
              <li>Images and media</li>
              <li>Interactive elements</li>
            </ul>
            <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5' }}>
              <h4>Example Form</h4>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '0.5rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '0.5rem' }} />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button 
              variant={ButtonVariant.SECONDARY} 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Submit</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export default meta;
