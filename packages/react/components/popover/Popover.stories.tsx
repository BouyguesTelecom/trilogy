import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import PopoverComponent from './Popover'
import { PopoverArrowPosition, PopoverDirection } from './PopoverEnum'
import { Button } from '../button'

PopoverComponent.displayName = 'Popover'

interface PopoverStoryArgs {
  popover_children: string
  popover_triggerLabel: string
  popover_direction?: PopoverDirection
  popover_active: boolean
  popover_arrowPosition?: PopoverArrowPosition
  popover_id: string
  popover_className: string
  popover_testId: string
}

const Popover = ({
  popover_children,
  popover_triggerLabel,
  popover_direction,
  popover_active,
  popover_arrowPosition,
  popover_id,
  popover_className,
  popover_testId,
}: PopoverStoryArgs): JSX.Element => (
  <PopoverComponent
    direction={popover_direction}
    active={popover_active}
    arrowPosition={popover_arrowPosition}
    id={popover_id || undefined}
    className={popover_className || undefined}
    testId={popover_testId || undefined}
    trigger={<Button variant="PRIMARY">{popover_triggerLabel}</Button>}
  >
    {popover_children}
  </PopoverComponent>
)

Popover.displayName = 'Popover'

const meta: Meta<PopoverStoryArgs> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    popover_children: {
      control: 'text',
      name: 'children',
      description: 'Popover content',
    },
    popover_triggerLabel: {
      control: 'text',
      name: 'trigger',
      description: 'Text rendered inside the trigger button',
    },
    popover_direction: {
      control: 'select',
      options: [undefined, ...Object.values(PopoverDirection)],
      name: 'direction',
      description: 'Popover direction',
    },
    popover_active: {
      control: 'boolean',
      name: 'active',
      description: 'Set popover active state',
    },
    popover_arrowPosition: {
      control: 'select',
      options: [undefined, ...Object.values(PopoverArrowPosition)],
      name: 'arrowPosition',
      description: 'Position of popover arrow',
    },
    popover_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
    },
    popover_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
    },
    popover_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
    },
  },
  args: {
    popover_children: 'Popover content',
    popover_triggerLabel: 'Open popover',
    popover_direction: PopoverDirection.BOTTOM,
    popover_active: true,
    popover_arrowPosition: undefined,
    popover_id: '',
    popover_className: '',
    popover_testId: '',
  },
  render: (args) => <Popover {...args} />,
}

export default meta
type Story = StoryObj<PopoverStoryArgs>

export const Default: Story = {}

export const Left: Story = {
  args: {
    popover_direction: PopoverDirection.LEFT,
  },
}

export const Right: Story = {
  args: {
    popover_direction: PopoverDirection.RIGHT,
  },
}

export const ArrowStart: Story = {
  args: {
    popover_arrowPosition: PopoverArrowPosition.START,
  },
}

export const ArrowEnd: Story = {
  args: {
    popover_arrowPosition: PopoverArrowPosition.END,
  },
}

export const Inactive: Story = {
  args: {
    popover_active: false,
  },
}

export const Playground: Story = {}
