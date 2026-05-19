import { Alignable } from '@/objects/facets/Alignable'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import SegmentControlComponent from './SegmentControl'
import SegmentControlItem from './item/SegmentControlItem'

SegmentControlComponent.displayName = 'SegmentControl'
SegmentControlItem.displayName = 'SegmentControlItem'
Object.defineProperty(SegmentControlComponent, 'name', { value: 'SegmentControl' })
Object.defineProperty(SegmentControlItem, 'name', { value: 'SegmentControlItem' })

interface SegmentControlStoryArgs {
  segment_activeIndex?: number
  segment_align?: Alignable
  segment_id: string
  segment_className: string
  segment_testId: string
  item_one_children: string
  item_one_active: boolean
  item_one_disabled: boolean
  item_two_children: string
  item_two_active: boolean
  item_two_disabled: boolean
  item_three_children: string
  item_three_active: boolean
  item_three_disabled: boolean
}

const SegmentControl = ({
  segment_activeIndex,
  segment_align,
  segment_id,
  segment_className,
  segment_testId,
  item_one_children,
  item_one_active,
  item_one_disabled,
  item_two_children,
  item_two_active,
  item_two_disabled,
  item_three_children,
  item_three_active,
  item_three_disabled,
}: SegmentControlStoryArgs): JSX.Element => (
  <SegmentControlComponent
    activeIndex={segment_activeIndex}
    align={segment_align}
    id={segment_id || undefined}
    className={segment_className || undefined}
    testId={segment_testId || undefined}
  >
    <SegmentControlItem active={item_one_active} disabled={item_one_disabled} onClick={() => {}}>
      {item_one_children}
    </SegmentControlItem>
    <SegmentControlItem active={item_two_active} disabled={item_two_disabled} onClick={() => {}}>
      {item_two_children}
    </SegmentControlItem>
    <SegmentControlItem active={item_three_active} disabled={item_three_disabled} onClick={() => {}}>
      {item_three_children}
    </SegmentControlItem>
  </SegmentControlComponent>
)

SegmentControl.displayName = 'SegmentControl'

const meta: Meta<SegmentControlStoryArgs> = {
  title: 'Components/SegmentControl',
  component: SegmentControl,
  subcomponents: { SegmentControlItem },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    segment_activeIndex: {
      control: { type: 'number', min: 0, max: 2, step: 1 },
      name: 'activeIndex',
      description: 'Default active item index',
      table: { category: 'SegmentControl' },
    },
    segment_align: {
      control: 'select',
      options: [undefined, Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'align',
      description: 'Segment control alignment',
      table: { category: 'SegmentControl' },
    },
    segment_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'SegmentControl' },
    },
    segment_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'SegmentControl' },
    },
    segment_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'SegmentControl' },
    },
    item_one_children: {
      control: 'text',
      name: 'children',
      description: 'First item label',
      table: { category: 'SegmentControlItem 1' },
    },
    item_one_active: {
      control: 'boolean',
      name: 'active',
      description: 'First item active state',
      table: { category: 'SegmentControlItem 1' },
    },
    item_one_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'First item disabled state',
      table: { category: 'SegmentControlItem 1' },
    },
    item_two_children: {
      control: 'text',
      name: 'children',
      description: 'Second item label',
      table: { category: 'SegmentControlItem 2' },
    },
    item_two_active: {
      control: 'boolean',
      name: 'active',
      description: 'Second item active state',
      table: { category: 'SegmentControlItem 2' },
    },
    item_two_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Second item disabled state',
      table: { category: 'SegmentControlItem 2' },
    },
    item_three_children: {
      control: 'text',
      name: 'children',
      description: 'Third item label',
      table: { category: 'SegmentControlItem 3' },
    },
    item_three_active: {
      control: 'boolean',
      name: 'active',
      description: 'Third item active state',
      table: { category: 'SegmentControlItem 3' },
    },
    item_three_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Third item disabled state',
      table: { category: 'SegmentControlItem 3' },
    },
  },
  args: {
    segment_activeIndex: 0,
    segment_align: Alignable.ALIGNED_START,
    segment_id: '',
    segment_className: '',
    segment_testId: '',
    item_one_children: 'Item 1',
    item_one_active: false,
    item_one_disabled: false,
    item_two_children: 'Item 2',
    item_two_active: false,
    item_two_disabled: false,
    item_three_children: 'Item 3',
    item_three_active: false,
    item_three_disabled: false,
  },
  render: ({
    segment_activeIndex,
    segment_align,
    segment_id,
    segment_className,
    segment_testId,
    item_one_children,
    item_one_active,
    item_one_disabled,
    item_two_children,
    item_two_active,
    item_two_disabled,
    item_three_children,
    item_three_active,
    item_three_disabled,
  }) => (
    <SegmentControlComponent
      activeIndex={segment_activeIndex}
      align={segment_align}
      id={segment_id || undefined}
      className={segment_className || undefined}
      testId={segment_testId || undefined}
    >
      <SegmentControlItem active={item_one_active} disabled={item_one_disabled} onClick={() => {}}>
        {item_one_children}
      </SegmentControlItem>
      <SegmentControlItem active={item_two_active} disabled={item_two_disabled} onClick={() => {}}>
        {item_two_children}
      </SegmentControlItem>
      <SegmentControlItem active={item_three_active} disabled={item_three_disabled} onClick={() => {}}>
        {item_three_children}
      </SegmentControlItem>
    </SegmentControlComponent>
  ),
}

export default meta

type Story = StoryObj<SegmentControlStoryArgs>

export const Default: Story = {}

export const Centered: Story = {
  args: {
    segment_align: Alignable.ALIGNED_CENTER,
  },
}

export const ActiveSecond: Story = {
  args: {
    segment_activeIndex: 1,
  },
}

export const WithDisabledItem: Story = {
  args: {
    item_three_disabled: true,
  },
}

export const Playground: Story = {}
