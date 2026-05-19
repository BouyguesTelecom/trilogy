import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ProgressRadialComponent from './radial/ProgressRadial'

ProgressRadialComponent.displayName = 'ProgressRadial'

interface ProgressRadialStoryArgs {
  value: number
  secondValue: number
  label: string
  description: string
  small: boolean
  skeleton: boolean
  id: string
  className: string
  testId: string
}

const ProgressRadial = ({
  value,
  secondValue,
  label,
  description,
  small,
  skeleton,
  id,
  className,
  testId,
}: ProgressRadialStoryArgs): JSX.Element => (
  <ProgressRadialComponent
    value={value}
    secondValue={secondValue}
    label={label || undefined}
    description={description || undefined}
    small={small}
    skeleton={skeleton}
    id={id || undefined}
    className={className || undefined}
    testId={testId || undefined}
  />
)

ProgressRadial.displayName = 'ProgressRadial'

const meta: Meta<ProgressRadialStoryArgs> = {
  title: 'Components/ProgressRadial',
  component: ProgressRadial,
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
      control: { type: 'number', min: 0, max: 100, step: 1 },
      name: 'value',
      description: 'Primary radial progress value',
    },
    secondValue: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      name: 'secondValue',
      description: 'Secondary radial progress value',
    },
    label: {
      control: 'text',
      name: 'label',
      description: 'Radial label',
    },
    description: {
      control: 'text',
      name: 'description',
      description: 'Radial description',
    },
    small: {
      control: 'boolean',
      name: 'small',
      description: 'Use compact radial size',
    },
    skeleton: {
      control: 'boolean',
      name: 'skeleton',
      description: 'Display radial skeleton loader',
    },
    id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
    },
    className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
    },
    testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
    },
  },
  args: {
    value: 30,
    secondValue: 30,
    label: '60',
    description: '/ 100 Go',
    small: false,
    skeleton: false,
    id: '',
    className: '',
    testId: 'progress-radial',
  },
  render: ({ value, secondValue, label, description, small, skeleton, id, className, testId }) => (
    <ProgressRadialComponent
      value={value}
      secondValue={secondValue}
      label={label || undefined}
      description={description || undefined}
      small={small}
      skeleton={skeleton}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
    />
  ),
}

export default meta
type Story = StoryObj<ProgressRadialStoryArgs>

export const Default: Story = {}

export const WarningShape: Story = {
  args: {
    value: 60,
    secondValue: 10,
  },
}

export const Small: Story = {
  args: {
    small: true,
  },
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
  },
}

export const WithoutLabel: Story = {
  args: {
    label: '',
    description: '',
  },
  render: ({ value, secondValue, small, skeleton, id, className, testId, label, description }) => (
    <ProgressRadialComponent
      value={value}
      secondValue={secondValue}
      small={small}
      skeleton={skeleton}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
      label={label || undefined}
      description={description || undefined}
    />
  ),
}

export const Playground: Story = {}
