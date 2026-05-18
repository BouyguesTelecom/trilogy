import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '../button'
import PopoverComponent from './Popover'
import { PopoverArrowPosition, PopoverDirection } from './PopoverEnum'

PopoverComponent.displayName = 'Popover'

interface PopoverStoryArgs {
  children: string
  triggerLabel: string
  direction?: PopoverDirection
  active: boolean
  arrowPosition?: PopoverArrowPosition
  id: string
  className: string
  testId: string
}

const Popover = ({
  children,
  triggerLabel,
  direction,
  active,
  arrowPosition,
  id,
  className,
  testId,
}: PopoverStoryArgs): JSX.Element => (
  <PopoverComponent
    direction={direction}
    active={active}
    arrowPosition={arrowPosition}
    id={id || undefined}
    className={className || undefined}
    testId={testId || undefined}
    trigger={<Button variant='PRIMARY'>{triggerLabel}</Button>}
  >
    {children}
  </PopoverComponent>
)

Popover.displayName = 'Popover'

const meta: Meta<PopoverStoryArgs> = {
  title: 'Components/Popover',
  component: Popover,
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
    children: {
      control: 'text',
      name: 'children',
      description: 'Popover content',
    },
    triggerLabel: {
      control: 'text',
      name: 'trigger',
      description: 'Text rendered inside the trigger button',
    },
    direction: {
      control: 'select',
      options: [undefined, ...Object.values(PopoverDirection)],
      name: 'direction',
      description: 'Popover direction',
    },
    active: {
      control: 'boolean',
      name: 'active',
      description: 'Set popover active state',
    },
    arrowPosition: {
      control: 'select',
      options: [undefined, ...Object.values(PopoverArrowPosition)],
      name: 'arrowPosition',
      description: 'Position of popover arrow',
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
    children: 'Popover content',
    triggerLabel: 'Open popover',
    direction: PopoverDirection.BOTTOM,
    active: true,
    arrowPosition: undefined,
    id: '',
    className: '',
    testId: '',
  },
  render: ({ children, triggerLabel, direction, active, arrowPosition, id, className, testId }) => (
    <PopoverComponent
      direction={direction}
      active={active}
      arrowPosition={arrowPosition}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
      trigger={<Button variant='PRIMARY'>{triggerLabel}</Button>}
    >
      {children}
    </PopoverComponent>
  ),
}

export default meta
type Story = StoryObj<PopoverStoryArgs>

export const Default: Story = {}

export const Left: Story = {
  args: {
    direction: PopoverDirection.LEFT,
  },
}

export const Right: Story = {
  args: {
    direction: PopoverDirection.RIGHT,
  },
}

export const ArrowStart: Story = {
  args: {
    arrowPosition: PopoverArrowPosition.START,
  },
}

export const ArrowEnd: Story = {
  args: {
    arrowPosition: PopoverArrowPosition.END,
  },
}

export const Inactive: Story = {
  args: {
    active: false,
  },
}

export const Playground: Story = {}
