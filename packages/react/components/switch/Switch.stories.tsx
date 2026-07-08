import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { StatusState } from '../../objects/facets/Status'
import SwitchComponent from './Switch'
import type { SwitchProps } from './SwitchProps'

SwitchComponent.displayName = 'Switch'

const Switch = (props: SwitchProps): JSX.Element => <SwitchComponent {...props} />
Switch.displayName = 'Switch'

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed next to the switch',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
    },
    readonly: {
      control: 'boolean',
      description: 'Read-only mode',
    },
    reversed: {
      control: 'boolean',
      description: 'Reverse label and switch positions',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch switch to full width',
    },
    status: {
      control: 'select',
      options: [undefined, ...Object.values(StatusState)],
      description: 'Validation status',
    },
    name: {
      control: 'text',
      description: 'Input name attribute',
    },
    value: {
      control: 'text',
      description: 'Input value attribute',
    },
    id: {
      control: 'text',
      description: 'Custom html id',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    testId: {
      control: 'text',
      description: 'Testing identifier',
    },
  },
  args: {
    label: 'Toggle me',
    checked: false,
    disabled: false,
    readonly: false,
    reversed: false,
    fullWidth: false,
    status: undefined,
    name: 'switch',
    value: '',
    id: '',
    className: '',
    testId: '',
  },
  render: ({ id, className, testId, name, value, label, checked, disabled, readonly, reversed, fullWidth, status }) => (
    <SwitchComponent
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
      name={name || undefined}
      value={value || undefined}
      label={label}
      checked={checked}
      disabled={disabled}
      readonly={readonly}
      reversed={reversed}
      fullWidth={fullWidth}
      status={status}
      onChange={() => {}}
    />
  ),
}

export default meta

type Story = StoryObj<SwitchProps>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

export const Reversed: Story = {
  args: {
    reversed: true,
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

export const ErrorState: Story = {
  args: {
    status: StatusState.ERROR,
  },
}

export const Playground: Story = {}
