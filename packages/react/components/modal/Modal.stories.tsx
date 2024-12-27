import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { ModalProps } from './ModalProps'
import { ModalBody, ModalFooter, Modal } from './index'
import { Button, ButtonVariant } from '../button'
import { Text } from '../text'

export default {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: { ModalBody, ModalFooter },
} as Meta;

export const Base: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
    </ModalBody>
    <ModalFooter>
      <Button variant={ButtonVariant.CONVERSION}>
        Close
      </Button>
    </ModalFooter>
  </Modal>
);
Base.args = {
  trigger: <a className='button is-main'>Open modal</a>,
  title: "title modal",
}

export const ModalPanel: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
    </ModalBody>
    <ModalFooter>
      <Button variant={ButtonVariant.CONVERSION}>
        Close
      </Button>
    </ModalFooter>
  </Modal>
);
ModalPanel.args = {
  panel: true,
  trigger: <a className='button is-main'>Open modal</a>,
  title: "title modal",
};
