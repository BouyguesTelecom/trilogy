import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import TimepickerComponent from './Timepicker'
import type { TimepickerDefaultProps } from './default/TimepickerDefaultProps'

TimepickerComponent.displayName = 'Timepicker'

const meta: Meta<TimepickerDefaultProps> = {
  title: 'Components/Timepicker',
  component: TimepickerComponent,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['id', 'className', 'testId', 'value', 'step', 'disabled', 'label', 'sample', 'help', 'required'],
    },
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
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
    value: {
      control: 'text',
      description: 'Time value in HH:MM format',
    },
    step: {
      control: { type: 'number', min: 1, max: 30, step: 1 },
      description: 'Minute step increment',
      table: { type: { summary: 'number' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable timepicker',
    },
    label: {
      control: 'text',
      description: 'Field label',
    },
    sample: {
      control: 'text',
      description: 'Sample text below label',
    },
    help: {
      control: 'text',
      description: 'Help text below field',
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required',
    },
    onChange: {
      control: false,
      description: 'Callback called with new HH:MM value',
    },
  },
  args: {
    id: '',
    className: '',
    testId: '',
    value: '05:40',
    step: 10,
    disabled: false,
    label: 'Heure',
    sample: 'Format HH:MM',
    help: '',
    required: false,
  },
  render: (args) => <TimepickerComponent {...args} onChange={() => {}} />,
}

export default meta

type Story = StoryObj<TimepickerDefaultProps>

export const Default: Story = {}

export const Required: Story = {
  args: {
    required: true,
    help: 'Ce champ est obligatoire.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const StepFive: Story = {
  args: {
    step: 5,
  },
}

export const Playground: Story = {}
