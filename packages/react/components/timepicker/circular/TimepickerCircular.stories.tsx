import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import TimepickerComponent from '../Timepicker'
import type { TimepickerCircularProps } from './TimepickerCircularProps'

TimepickerComponent.displayName = 'Timepicker'

const meta: Meta<TimepickerCircularProps> = {
  title: 'Components/TimepickerCircular',
  component: TimepickerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      include: ['id', 'className', 'testId', 'value', 'step', 'disabled'],
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
      description: 'Disable circular picker',
    },
    onChange: {
      control: false,
      description: 'Callback called with new HH:MM value',
    },
  },
  args: {
    value: '05:40',
    step: 10,
    disabled: false,
  },
  render: (args) => <TimepickerComponent circular {...args} onChange={() => {}} />,
}

export default meta

type Story = StoryObj<TimepickerCircularProps>

export const Default: Story = {}

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
