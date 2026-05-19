import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import OtpComponent from './Otp'

OtpComponent.displayName = 'Otp'

interface OtpStoryArgs {
  value?: string
  length: number
  disabled: boolean
  error: boolean
  help?: string
  label?: string
  autoFocus: boolean
  id?: string
  className?: string
  testId?: string
}

const Otp = ({
  value,
  length,
  disabled,
  error,
  help,
  label,
  autoFocus,
  id,
  className,
  testId,
}: OtpStoryArgs): JSX.Element => (
  <OtpComponent
    value={value}
    length={length}
    disabled={disabled}
    error={error}
    help={help}
    label={label}
    autoFocus={autoFocus}
    id={id}
    className={className}
    testId={testId}
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
      source: {
        type: 'dynamic',
      },
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      name: 'value',
      description: 'Current OTP value',
    },
    length: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
      name: 'length',
      description: 'Number of OTP digits',
    },
    disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable all OTP inputs',
    },
    error: {
      control: 'boolean',
      name: 'error',
      description: 'Display error style',
    },
    help: {
      control: 'text',
      name: 'help',
      description: 'Helper or error message',
    },
    label: {
      control: 'text',
      name: 'label',
      description: 'Label displayed above inputs',
    },
    autoFocus: {
      control: 'boolean',
      name: 'autoFocus',
      description: 'Auto focus first input',
    },
    id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
    },
    className: {
      control: 'text',
      name: 'className',
      description: 'Custom CSS classes',
    },
    testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
    },
  },
  args: {
    value: '',
    length: 6,
    disabled: false,
    error: false,
    help: '',
    label: 'Set your OTP',
    autoFocus: false,
    id: '',
    className: '',
    testId: '',
  },
  render: ({ value, length, disabled, error, help, label, autoFocus, id, className, testId }) => (
    <OtpComponent
      value={value}
      length={length}
      disabled={disabled}
      error={error}
      help={help}
      label={label}
      autoFocus={autoFocus}
      id={id}
      className={className}
      testId={testId}
      onChange={() => undefined}
      onCompleted={() => undefined}
      onFocus={() => undefined}
    />
  ),
}

export default meta
type Story = StoryObj<OtpStoryArgs>

export const Default: Story = {}

export const Prefilled: Story = {
  args: {
    value: '123456',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'OTP Disabled',
  },
}

export const Error: Story = {
  args: {
    error: true,
    help: 'This is an error message',
    label: 'OTP Error',
  },
}

export const LengthFour: Story = {
  args: {
    length: 4,
    label: 'OTP code size 4',
  },
}

export const Playground: Story = {}
