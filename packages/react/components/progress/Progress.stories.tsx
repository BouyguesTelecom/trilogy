import { StatusState } from '@/objects/facets/Status'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ProgressComponent from './Progress'
import ProgressItem from './item/ProgressItem'

ProgressComponent.displayName = 'Progress'
Object.defineProperty(ProgressComponent, 'name', { value: 'Progress' })

interface ProgressStoryArgs {
  value: number
  max: number
  status?: StatusState
  small: boolean
  legendStart: string
  legendCenter: string
  legendEnd: string
  id: string
  className: string
  testId: string
}

const Progress = ({
  value,
  max,
  status,
  small,
  legendStart,
  legendCenter,
  legendEnd,
  id,
  className,
  testId,
}: ProgressStoryArgs): JSX.Element => (
  <ProgressComponent
    value={value}
    max={max}
    status={status}
    small={small}
    legendStart={legendStart || undefined}
    legendCenter={legendCenter || undefined}
    legendEnd={legendEnd || undefined}
    id={id || undefined}
    className={className || undefined}
    testId={testId || undefined}
  />
)

Progress.displayName = 'Progress'

const meta: Meta<ProgressStoryArgs> = {
  title: 'Components/Progress',
  component: Progress,
  subcomponents: { ProgressItem },
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
      description: 'Current linear progress value',
      table: { category: 'Progress' },
    },
    max: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      name: 'max',
      description: 'Maximum linear progress value',
      table: { category: 'Progress' },
    },
    status: {
      control: 'select',
      options: [undefined, ...Object.values(StatusState)],
      name: 'status',
      description: 'Linear progress status',
      table: { category: 'Progress' },
    },
    small: {
      control: 'boolean',
      name: 'small',
      description: 'Use compact linear progress size',
      table: { category: 'Progress' },
    },
    legendStart: {
      control: 'text',
      name: 'legendStart',
      description: 'Legend displayed at start',
      table: { category: 'Progress' },
    },
    legendCenter: {
      control: 'text',
      name: 'legendCenter',
      description: 'Legend displayed at center',
      table: { category: 'Progress' },
    },
    legendEnd: {
      control: 'text',
      name: 'legendEnd',
      description: 'Legend displayed at end',
      table: { category: 'Progress' },
    },
    id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Progress' },
    },
    className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Progress' },
    },
    testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Progress' },
    },
  },
  args: {
    value: 30,
    max: 100,
    status: StatusState.INFO,
    small: false,
    legendStart: '0',
    legendCenter: '',
    legendEnd: '100',
    id: '',
    className: '',
    testId: 'progress-bar',
  },
  render: ({ value, max, status, small, legendStart, legendCenter, legendEnd, id, className, testId }) => (
    <ProgressComponent
      value={value}
      max={max}
      status={status}
      small={small}
      legendStart={legendStart || undefined}
      legendCenter={legendCenter || undefined}
      legendEnd={legendEnd || undefined}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
    />
  ),
}

export default meta
type Story = StoryObj<ProgressStoryArgs>

export const Default: Story = {}

export const Warning: Story = {
  args: {
    status: StatusState.WARNING,
    value: 60,
  },
}

export const Small: Story = {
  args: {
    small: true,
  },
}

export const StackedLinear: Story = {
  render: () => (
    <ProgressComponent stacked>
      <ProgressItem percent={15} />
      <ProgressItem percent={15} status={StatusState.INFO} />
      <ProgressItem percent={15} status={StatusState.SUCCESS} />
      <ProgressItem percent={30} status={StatusState.WARNING} />
    </ProgressComponent>
  ),
}

export const Playground: Story = {}
