import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import OtpComponent from './Otp'

OtpComponent.displayName = 'Otp'

interface OtpStoryArgs {
  otp_value?: string
  otp_length: number
  otp_disabled: boolean
  otp_error: boolean
  otp_help?: string
  otp_label?: string
  otp_autoFocus: boolean
  otp_id?: string
  otp_className?: string
  otp_testId?: string
}

const Otp = ({
  otp_value,
  otp_length,
  otp_disabled,
  otp_error,
  otp_help,
  otp_label,
  otp_autoFocus,
  otp_id,
  otp_className,
  otp_testId,
}: OtpStoryArgs): JSX.Element => (
  <OtpComponent
    value={otp_value}
    length={otp_length}
    disabled={otp_disabled}
    error={otp_error}
    help={otp_help}
    label={otp_label}
    autoFocus={otp_autoFocus}
    id={otp_id}
    className={otp_className}
    testId={otp_testId}
    onChange={() => undefined}
    onCompleted={() => undefined}
    onFocus={() => undefined}
  />
)

Otp.displayName = 'Otp'

const meta: Meta<OtpStoryArgs> = {
  title: 'Components/Otp',
  component: Otp,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    otp_value: {
      control: 'text',
      name: 'value',
      description: 'Current OTP value',
    },
    otp_length: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
      name: 'length',
      description: 'Number of OTP digits',
    },
    otp_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable all OTP inputs',
    },
    otp_error: {
      control: 'boolean',
      name: 'error',
      description: 'Display error style',
    },
    otp_help: {
      control: 'text',
      name: 'help',
      description: 'Helper or error message',
    },
    otp_label: {
      control: 'text',
      name: 'label',
      description: 'Label displayed above inputs',
    },
    otp_autoFocus: {
      control: 'boolean',
      name: 'autoFocus',
      description: 'Auto focus first input',
    },
    otp_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
    },
    otp_className: {
      control: 'text',
      name: 'className',
      description: 'Custom CSS classes',
    },
    otp_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
    },
  },
  args: {
    otp_value: '',
    otp_length: 6,
    otp_disabled: false,
    otp_error: false,
    otp_help: '',
    otp_label: 'Set your OTP',
    otp_autoFocus: false,
    otp_id: '',
    otp_className: '',
    otp_testId: '',
  },
  render: (args) => <Otp {...args} />,
}

export default meta
type Story = StoryObj<OtpStoryArgs>

export const Default: Story = {}

export const Prefilled: Story = {
  args: {
    otp_value: '123456',
  },
}

export const Disabled: Story = {
  args: {
    otp_disabled: true,
    otp_label: 'OTP Disabled',
  },
}

export const Error: Story = {
  args: {
    otp_error: true,
    otp_help: 'This is an error message',
    otp_label: 'OTP Error',
  },
}

export const LengthFour: Story = {
  args: {
    otp_length: 4,
    otp_label: 'OTP code size 4',
  },
}

export const Playground: Story = {}
