import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import RangeComponent from './Range'

RangeComponent.displayName = 'Range'

interface RangeStoryArgs {
  min: number
  max: number
  label: string
  simple: boolean
  unit: string
  name: string
  value: number
  valueMin: number
  valueMax: number
  gap: number
  id: string
  className: string
  testId: string
}

const meta: Meta<RangeStoryArgs> = {
  title: 'Components/Range',
  component: RangeComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    min: { control: { type: 'number', min: 0, max: 100, step: 1 }, description: 'Minimum value' },
    max: { control: { type: 'number', min: 1, max: 200, step: 1 }, description: 'Maximum value' },
    label: { control: 'text', description: 'Range label' },
    simple: { control: 'boolean', description: 'Single cursor mode' },
    unit: { control: 'text', description: 'Unit displayed with values' },
    name: { control: 'text', description: 'Input name' },
    value: { control: { type: 'number', min: 0, max: 200, step: 1 }, description: 'Single cursor value' },
    valueMin: { control: { type: 'number', min: 0, max: 200, step: 1 }, description: 'Lower cursor value' },
    valueMax: { control: { type: 'number', min: 0, max: 200, step: 1 }, description: 'Upper cursor value' },
    gap: { control: { type: 'number', min: 0, max: 100, step: 1 }, description: 'Minimum gap between cursors' },
    id: { control: 'text', description: 'Custom html id' },
    className: { control: 'text', description: 'Additional CSS classes' },
    testId: { control: 'text', description: 'Testing identifier' },
  },
  args: {
    min: 0,
    max: 100,
    label: 'Select amount',
    simple: false,
    unit: 'EUR',
    name: 'price-range',
    value: 40,
    valueMin: 20,
    valueMax: 80,
    gap: 0,
    id: '',
    className: '',
    testId: '',
  },
  render: ({ min, max, label, simple, unit, name, value, valueMin, valueMax, gap, id, className, testId }) => {
    const [localMin, setLocalMin] = React.useState(valueMin)
    const [localMax, setLocalMax] = React.useState(simple ? value : valueMax)

    React.useEffect(() => {
      setLocalMin(valueMin)
    }, [valueMin])

    React.useEffect(() => {
      setLocalMax(simple ? value : valueMax)
    }, [simple, value, valueMax])

    return (
      <RangeComponent
        min={min}
        max={max}
        label={label}
        simple={simple}
        unit={unit || undefined}
        name={name || undefined}
        value={simple ? localMax : undefined}
        valueMin={!simple ? localMin : undefined}
        valueMax={!simple ? localMax : undefined}
        gap={gap}
        id={id || undefined}
        className={className || undefined}
        testId={testId || undefined}
        onChangeMin={(e) => setLocalMin(Number(e.inputValue))}
        onChangeMax={(e) => setLocalMax(Number(e.inputValue))}
        onChange={(e) => setLocalMax(Number(e.inputValue))}
      />
    )
  },
}

export default meta

type Story = StoryObj<RangeStoryArgs>

export const Default: Story = {}

export const Simple: Story = {
  args: {
    simple: true,
    value: 35,
  },
}

export const WithGap: Story = {
  args: {
    valueMin: 30,
    valueMax: 70,
    gap: 10,
  },
}

export const Playground: Story = {}
