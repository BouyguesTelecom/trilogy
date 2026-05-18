import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button, ButtonVariant } from '../button'
import ModalBody from './body/ModalBody'
import ModalFooter from './footer/ModalFooter'
import ModalComponent from './Modal'
import { ModalSize } from './ModalEnum'

ModalComponent.displayName = 'Modal'

interface ModalStoryArgs {
  title: string
  size?: ModalSize
  panel: boolean
  unClosable: boolean
  hideCloseButton: boolean
  accessibilityLabel: string
  id?: string
  className?: string
  testId?: string
  bodyChildren: string
  footerPrimaryChildren: string
  footerSecondaryChildren: string
}

const Modal = ({
  title,
  size,
  panel,
  unClosable,
  hideCloseButton,
  accessibilityLabel,
  id,
  className,
  testId,
  bodyChildren,
  footerPrimaryChildren,
  footerSecondaryChildren,
}: ModalStoryArgs): JSX.Element => {
  const [open, setOpen] = React.useState(false)

  return (
    <ModalComponent
      title={title}
      size={size}
      panel={panel}
      unClosable={unClosable}
      hideCloseButton={hideCloseButton}
      accessibilityLabel={accessibilityLabel}
      id={id}
      className={className}
      testId={testId}
      active={open}
      onClose={() => setOpen(false)}
      trigger={
        <Button variant={ButtonVariant.PRIMARY} onClick={() => setOpen(true)}>
          Open modal
        </Button>
      }
    >
      <ModalBody>{bodyChildren}</ModalBody>
      <ModalFooter>
        <Button variant={ButtonVariant.SECONDARY} onClick={() => setOpen(false)}>
          {footerSecondaryChildren}
        </Button>
        <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpen(false)}>
          {footerPrimaryChildren}
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
      source: {
        type: 'dynamic',
      },
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      name: 'title',
      description: 'Modal title',
      table: { category: 'Modal' },
    },
    size: {
      control: 'select',
      options: [undefined, ...Object.values(ModalSize)],
      name: 'size',
      description: 'Modal size',
      table: { category: 'Modal' },
    },
    panel: {
      control: 'boolean',
      name: 'panel',
      description: 'Display as side panel',
      table: { category: 'Modal' },
    },
    unClosable: {
      control: 'boolean',
      name: 'unClosable',
      description: 'Prevent user from closing the modal via overlay or escape',
      table: { category: 'Modal' },
    },
    hideCloseButton: {
      control: 'boolean',
      name: 'hideCloseButton',
      description: 'Hide close button in header',
      table: { category: 'Modal' },
    },
    accessibilityLabel: {
      control: 'text',
      name: 'accessibilityLabel',
      description: 'Accessible label for close action',
      table: { category: 'Modal' },
    },
    id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Modal' },
    },
    className: {
      control: 'text',
      name: 'className',
      description: 'Custom CSS classes',
      table: { category: 'Modal' },
    },
    testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Modal' },
    },
    bodyChildren: {
      control: 'text',
      name: 'children',
      description: 'Content rendered inside ModalBody (required)',
      table: { category: 'ModalBody' },
    },
    footerPrimaryChildren: {
      control: 'text',
      name: 'children',
      description: 'Primary button label inside ModalFooter',
      table: { category: 'ModalFooter' },
    },
    footerSecondaryChildren: {
      control: 'text',
      name: 'children',
      description: 'Secondary button label inside ModalFooter',
      table: { category: 'ModalFooter' },
    },
  },
  args: {
    title: 'Modal title',
    size: ModalSize.MEDIUM,
    panel: false,
    unClosable: false,
    hideCloseButton: false,
    accessibilityLabel: 'Close',
    id: '',
    className: '',
    testId: '',
    bodyChildren: 'This is the modal body content.',
    footerPrimaryChildren: 'Confirm',
    footerSecondaryChildren: 'Cancel',
  },
  render: ({
    title,
    size,
    panel,
    unClosable,
    hideCloseButton,
    accessibilityLabel,
    id,
    className,
    testId,
    bodyChildren,
    footerPrimaryChildren,
    footerSecondaryChildren,
  }) => {
    const [open, setOpen] = React.useState(false)

    return (
      <ModalComponent
        title={title}
        size={size}
        panel={panel}
        unClosable={unClosable}
        hideCloseButton={hideCloseButton}
        accessibilityLabel={accessibilityLabel}
        id={id}
        className={className}
        testId={testId}
        active={open}
        onClose={() => setOpen(false)}
        trigger={
          <Button variant={ButtonVariant.PRIMARY} onClick={() => setOpen(true)}>
            Open modal
          </Button>
        }
      >
        <ModalBody>{bodyChildren}</ModalBody>
        <ModalFooter>
          <Button variant={ButtonVariant.SECONDARY} onClick={() => setOpen(false)}>
            {footerSecondaryChildren}
          </Button>
          <Button variant={ButtonVariant.CONVERSION} onClick={() => setOpen(false)}>
            {footerPrimaryChildren}
          </Button>
        </ModalFooter>
      </ModalComponent>
    )
  },
}

export default meta
type Story = StoryObj<ModalStoryArgs>

export const Default: Story = {}

export const Panel: Story = {
  args: {
    panel: true,
    size: ModalSize.LARGE,
  },
}

export const WithoutFooter: Story = {
  render: ({
    title,
    size,
    panel,
    unClosable,
    hideCloseButton,
    accessibilityLabel,
    id,
    className,
    testId,
    bodyChildren,
  }) => {
    const [open, setOpen] = React.useState(false)

    return (
      <ModalComponent
        title={title}
        size={size}
        panel={panel}
        unClosable={unClosable}
        hideCloseButton={hideCloseButton}
        accessibilityLabel={accessibilityLabel}
        id={id}
        className={className}
        testId={testId}
        active={open}
        onClose={() => setOpen(false)}
        trigger={
          <Button variant={ButtonVariant.PRIMARY} onClick={() => setOpen(true)}>
            Open modal
          </Button>
        }
      >
        <ModalBody>{bodyChildren}</ModalBody>
      </ModalComponent>
    )
  },
}

export const UnClosable: Story = {
  args: {
    unClosable: true,
    hideCloseButton: true,
  },
}

export const Playground: Story = {}
