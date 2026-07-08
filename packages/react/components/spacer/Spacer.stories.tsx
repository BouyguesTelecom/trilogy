import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import SpacerComponent from './Spacer'
import { SpacerSize } from './SpacerEnum'

SpacerComponent.displayName = 'Spacer'

interface SpacerStoryArgs {
  size: SpacerSize
  horizontal: boolean
  id: string
  className: string
  testId: string
}

const meta: Meta<SpacerStoryArgs> = {
  title: 'Components/Spacer',
  component: SpacerComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: { component: ' ' },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(SpacerSize).filter((value) => typeof value === 'number'),
      description: 'Space size in pixels',
    },
    horizontal: {
      control: 'boolean',
      description: 'Use horizontal spacing instead of vertical',
    },
    id: { control: 'text', description: 'Custom html id' },
    className: { control: 'text', description: 'Additional CSS classes' },
    testId: { control: 'text', description: 'Testing identifier' },
  },
  args: {
    size: SpacerSize.FOUR,
    horizontal: false,
    id: '',
    className: '',
    testId: '',
  },
  render: ({ size, horizontal, id, className, testId }) => (
    <div style={{ border: '1px dashed #d1d5db', padding: 12 }}>
      <span>Before</span>
      <SpacerComponent
        size={size}
        horizontal={horizontal}
        id={id || undefined}
        className={className || undefined}
        testId={testId || undefined}
      />
      <span>After</span>
    </div>
  ),
}

export default meta

type Story = StoryObj<SpacerStoryArgs>

export const Default: Story = {}

export const Horizontal: Story = {
  args: {
    horizontal: true,
  },
}

export const Large: Story = {
  args: {
    size: SpacerSize.EIGHT,
  },
}

export const Playground: Story = {}
