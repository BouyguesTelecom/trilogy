import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button, ButtonVariant } from '../button'
import ModalBody from './body/ModalBody'
import ModalFooter from './footer/ModalFooter'
import ModalComponent from './Modal'
import { ModalSize } from './ModalEnum'

ModalComponent.displayName = 'Modal'

interface ModalStoryArgs {
  modal_title: string
  modal_size?: ModalSize
  modal_panel: boolean
  modal_unClosable: boolean
  modal_hideCloseButton: boolean
  modal_accessibilityLabel: string
  modal_id?: string
  modal_className?: string
  modal_testId?: string
  body_text: string
  footer_primaryLabel: string
  footer_secondaryLabel: string
}

const Modal = ({
  modal_title,
  modal_size,
  modal_panel,
  modal_unClosable,
  modal_hideCloseButton,
  modal_accessibilityLabel,
  modal_id,
  modal_className,
  modal_testId,
  body_text,
  footer_primaryLabel,
  footer_secondaryLabel,
}: ModalStoryArgs): JSX.Element => {
  const [open, setOpen] = React.useState(false)

  return (
    <ModalComponent
      title={modal_title}
      size={modal_size}
      panel={modal_panel}
      unClosable={modal_unClosable}
      hideCloseButton={modal_hideCloseButton}
      accessibilityLabel={modal_accessibilityLabel}
      id={modal_id}
      className={modal_className}
      testId={modal_testId}
      active={open}
      onClose={() => setOpen(false)}
      trigger={
        <Button variant={ButtonVariant.PRIMARY} onClick={() => setOpen(true)}>
          Open modal
        </Button>
      }
    >
      <ModalBody>{body_text}</ModalBody>
      <ModalFooter>
        <Button variant={ButtonVariant.SECONDARY} onClick={() => setOpen(false)}>
          {footer_secondaryLabel}
        </Button>
        <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpen(false)}>
          {footer_primaryLabel}
        </Button>
      </ModalFooter>
    </ModalComponent>
  )
}

Modal.displayName = 'Modal'

const meta: Meta<ModalStoryArgs> = {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: { ModalBody, ModalFooter },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    modal_title: {
      control: 'text',
      name: 'title',
      description: 'Modal title',
      table: { category: 'Modal' },
    },
    modal_size: {
      control: 'select',
      options: [undefined, ...Object.values(ModalSize)],
      name: 'size',
      description: 'Modal size',
      table: { category: 'Modal' },
    },
    modal_panel: {
      control: 'boolean',
      name: 'panel',
      description: 'Display as side panel',
      table: { category: 'Modal' },
    },
    modal_unClosable: {
      control: 'boolean',
      name: 'unClosable',
      description: 'Prevent user from closing the modal via overlay or escape',
      table: { category: 'Modal' },
    },
    modal_hideCloseButton: {
      control: 'boolean',
      name: 'hideCloseButton',
      description: 'Hide close button in header',
      table: { category: 'Modal' },
    },
    modal_accessibilityLabel: {
      control: 'text',
      name: 'accessibilityLabel',
      description: 'Accessible label for close action',
      table: { category: 'Modal' },
    },
    modal_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Modal' },
    },
    modal_className: {
      control: 'text',
      name: 'className',
      description: 'Custom CSS classes',
      table: { category: 'Modal' },
    },
    modal_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Modal' },
    },
    body_text: {
      control: 'text',
      name: 'children',
      description: 'Content rendered inside ModalBody (required)',
      table: { category: 'ModalBody' },
    },
    footer_primaryLabel: {
      control: 'text',
      name: 'children',
      description: 'Primary button label inside ModalFooter',
      table: { category: 'ModalFooter' },
    },
    footer_secondaryLabel: {
      control: 'text',
      name: 'children',
      description: 'Secondary button label inside ModalFooter',
      table: { category: 'ModalFooter' },
    },
  },
  args: {
    modal_title: 'Modal title',
    modal_size: ModalSize.MEDIUM,
    modal_panel: false,
    modal_unClosable: false,
    modal_hideCloseButton: false,
    modal_accessibilityLabel: 'Close',
    modal_id: '',
    modal_className: '',
    modal_testId: '',
    body_text: 'This is the modal body content.',
    footer_primaryLabel: 'Confirm',
    footer_secondaryLabel: 'Cancel',
  },
  render: (args) => <Modal {...args} />,
}

export default meta
type Story = StoryObj<ModalStoryArgs>

export const Default: Story = {}

export const Panel: Story = {
  args: {
    modal_panel: true,
    modal_size: ModalSize.LARGE,
  },
}

export const WithoutFooter: Story = {
  render: ({
    modal_title,
    modal_size,
    modal_panel,
    modal_unClosable,
    modal_hideCloseButton,
    modal_accessibilityLabel,
    modal_id,
    modal_className,
    modal_testId,
    body_text,
  }) => {
    const [open, setOpen] = React.useState(false)

    return (
      <ModalComponent
        title={modal_title}
        size={modal_size}
        panel={modal_panel}
        unClosable={modal_unClosable}
        hideCloseButton={modal_hideCloseButton}
        accessibilityLabel={modal_accessibilityLabel}
        id={modal_id}
        className={modal_className}
        testId={modal_testId}
        active={open}
        onClose={() => setOpen(false)}
        trigger={
          <Button variant={ButtonVariant.PRIMARY} onClick={() => setOpen(true)}>
            Open modal
          </Button>
        }
      >
        <ModalBody>{body_text}</ModalBody>
      </ModalComponent>
    )
  },
}

export const UnClosable: Story = {
  args: {
    modal_unClosable: true,
    modal_hideCloseButton: true,
  },
}

export const Playground: Story = {}
