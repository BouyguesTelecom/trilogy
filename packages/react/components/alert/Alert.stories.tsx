import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'
import { AlertProps } from './AlertProps'
import { StatusState } from '../../objects'
import { BadgePositionEnum } from '../badge/BadgeEnum'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Alert',
  component: Alert,
} satisfies Meta<AlertProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    display: true,
    status: StatusState.INFO,
    title: 'Alert information',
    description: 'Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..',
  },
  argTypes: {
    status: {
      control: 'select',
      options: Object.values(StatusState),
      table: {
        type: { summary: 'StatusState' },
      },
    },
    iconName: {
      control: 'select',
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
  },
}

const TemplateMultiple = (args: AlertProps) => (
  <>
    <Alert
      {...args}
      display
      status={StatusState.INFO}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />
    <Alert
      display
      status={StatusState.WARNING}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />
    <Alert
      display
      status={StatusState.SUCCESS}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />
    <Alert
      display
      status={StatusState.ERROR}
      title='Alert information'
      description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
    />
  </>
)

export const Variant: Story = {
  render: TemplateMultiple,
}
