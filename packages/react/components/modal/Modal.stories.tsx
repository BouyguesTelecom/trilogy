import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Modal, ModalBody, ModalFooter } from './index'
import { ModalProps } from './ModalProps'
import { Button, ButtonVariant } from '../button'
import { Title } from '../title'
import { Text } from '../text'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: { ModalBody, ModalFooter },
} satisfies Meta<ModalProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ModalProps) => (
  <Modal {...args}>
    <ModalBody>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
      <Text>Modal content</Text>
    </ModalBody>
    <ModalFooter>
      <Button variant={ButtonVariant.CONVERSION}>Close</Button>
    </ModalFooter>
  </Modal>
)

export const Base: Story = {
  render: Template,
  args: {
    trigger: <a className='button is-main'>Open modal</a>,
    title: 'title modal',
  },
}

export const ModalPanel: Story = {
  render: Template,
  args: {
    trigger: <a className='button is-main'>Open modal</a>,
    title: 'title modal',
    panel: true,
  },
}
