import type { Meta, StoryObj } from '@storybook/react'
import { IconName } from '../icon'
import FabComponent from './Fab'
import type { FabProps } from './FabProps'
import React from 'react'

FabComponent.displayName = 'Fab'
const meta: Meta<FabProps> = {
  title: 'Components/Fab',
  component: FabComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: ' ',
    },
    iconName: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Icon displayed in the button',
    },
    extended: {
      control: 'boolean',
      description: 'Show extended mode (icon + text)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interaction',
    },
    fixed: {
      control: 'boolean',
      description: 'Use fixed positioning (otherwise absolute)',
    },
    top: {
      control: 'number',
      description: 'Top offset position',
    },
    bottom: {
      control: 'number',
      description: 'Bottom offset position',
    },
    left: {
      control: 'number',
      description: 'Left offset position',
    },
    right: {
      control: 'number',
      description: 'Right offset position',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
    accessibilityLabel: { table: { disable: true } },
    testId: { table: { disable: true } },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    children: 'New Conversation',
    iconName: IconName.INFOS_CIRCLE,
    extended: true,
    disabled: false,
    fixed: false,
    bottom: 16,
    right: 16,
    top: undefined,
    left: undefined,
  },
  render: (args) => (
    <div style={{ minHeight: 220, position: 'relative' }}>
      <FabComponent {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<FabProps>

export const Default: Story = {}

export const Compact: Story = {
  args: {
    extended: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const TopLeft: Story = {
  args: {
    top: 16,
    left: 16,
    bottom: undefined,
    right: undefined,
  },
}
