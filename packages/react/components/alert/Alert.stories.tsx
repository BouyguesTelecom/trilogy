import { Button, ButtonVariant } from '@/components/button'
import { IconName } from '@/components/icon'
import { StatusState } from '@/objects/facets/Status'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import AlertComponent, { ToasterAlertProvider } from './Alert'
import { AlertMarkup } from './AlertEnum'
import { AlertProps, ToasterAlertFloat, ToasterAlertPosition } from './AlertProps'
import ToasterDocsComponent from './ToasterDocs'
import ToasterContext from './context'

type AlertStoryArgs = AlertProps & {
  toastTitle: string
  toastDescription: string
  toastStatus: StatusState
  toastPosition: ToasterAlertPosition
  toastFloat: ToasterAlertFloat
  toastDuration: number
  toastOffset: number
  toastMarkup: AlertMarkup
  toastClosable: boolean
  toastButtonLabel: string
}

const Alert = (props: AlertProps): JSX.Element => <Alert {...props} />
Alert.displayName = 'Alert'
Object.defineProperty(Alert, 'name', { value: 'Alert' })

const ToasterTrigger = (args: AlertStoryArgs): JSX.Element => {
  const { show } = React.useContext(ToasterContext)

  const handleShow = () => {
    const toast = {
      title: args.toastTitle,
      description: args.toastDescription,
      status: args.toastStatus,
      position: args.toastPosition,
      float: args.toastFloat,
      duration: args.toastDuration,
      offset: args.toastOffset,
      markup: args.toastMarkup,
      closable: args.toastClosable ? () => null : undefined,
    } as Parameters<typeof show>[0]

    show(toast)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <Button onClick={handleShow} variant={ButtonVariant.PRIMARY}>
        {args.toastButtonLabel}
      </Button>
    </div>
  )
}

const meta: Meta<AlertStoryArgs> = {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: { 'ToasterContext : show()': ToasterDocsComponent },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: Object.values(StatusState),
      table: { category: 'Alert' },
    },
    iconName: {
      control: 'select',
      options: Object.values(IconName),
      table: { category: 'Alert' },
    },
    title: {
      control: 'text',
      table: { category: 'Alert' },
    },
    description: {
      control: 'text',
      table: { category: 'Alert' },
    },
    banner: {
      control: 'boolean',
      table: { category: 'Alert' },
    },
    display: {
      control: 'boolean',
      table: { category: 'Alert' },
    },
    markup: {
      control: 'select',
      options: Object.values(AlertMarkup),
      table: { category: 'Alert' },
    },
    toastTitle: {
      control: 'text',
      table: { category: 'Toaster' },
    },
    toastDescription: {
      control: 'text',
      table: { category: 'Toaster' },
    },
    toastStatus: {
      control: 'select',
      options: Object.values(StatusState),
      table: { category: 'Toaster' },
    },
    toastPosition: {
      control: 'select',
      options: Object.values(ToasterAlertPosition),
      table: { category: 'Toaster' },
    },
    toastFloat: {
      control: 'select',
      options: Object.values(ToasterAlertFloat),
      table: { category: 'Toaster' },
    },
    toastDuration: {
      control: { type: 'number', min: 500, step: 500 },
      table: { category: 'Toaster' },
    },
    toastOffset: {
      control: { type: 'number', min: 0, step: 4 },
      table: { category: 'Toaster' },
    },
    toastMarkup: {
      control: 'select',
      options: Object.values(AlertMarkup),
      table: { category: 'Toaster' },
    },
    toastClosable: {
      control: 'boolean',
      table: { category: 'Toaster' },
    },
    toastButtonLabel: {
      control: 'text',
      table: { category: 'Toaster' },
    },
  },
  args: {
    status: StatusState.INFO,
    title: 'Information',
    description: 'Your changes have been saved successfully.',
    banner: false,
    display: true,
    markup: AlertMarkup.H6,
    iconName: undefined,
    toastTitle: 'Notification',
    toastDescription: 'Your changes have been saved successfully.',
    toastStatus: StatusState.SUCCESS,
    toastPosition: ToasterAlertPosition.TOP,
    toastFloat: ToasterAlertFloat.RIGHT,
    toastDuration: 5000,
    toastOffset: 16,
    toastMarkup: AlertMarkup.H6,
    toastClosable: true,
    toastButtonLabel: 'Show Toast',
  },
}

export default meta

type Story = StoryObj<AlertStoryArgs>

export const Playground: Story = {
  parameters: {
    controls: {
      include: ['status', 'iconName', 'title', 'description', 'banner', 'display', 'markup'],
    },
  },
  render: ({ status, iconName, title, description, banner, display, markup }) => (
    <AlertComponent
      status={status}
      iconName={iconName}
      title={title}
      description={description}
      banner={banner}
      display={display}
      markup={markup}
    />
  ),
}

export const AllStatuses: Story = {
  parameters: {
    controls: {
      include: ['title', 'description', 'markup', 'banner'],
    },
  },
  render: ({ title, description, markup, banner }) => (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <AlertComponent status={StatusState.INFO} title={title} description={description} markup={markup} banner={banner} />
      <AlertComponent status={StatusState.SUCCESS} title={title} description={description} markup={markup} banner={banner} />
      <AlertComponent status={StatusState.WARNING} title={title} description={description} markup={markup} banner={banner} />
      <AlertComponent status={StatusState.ERROR} title={title} description={description} markup={markup} banner={banner} />
    </div>
  ),
}

export const ToasterAlert: Story = {
  render: (args) => (
    <ToasterAlertProvider>
      <ToasterTrigger {...args} />
    </ToasterAlertProvider>
  ),
}
