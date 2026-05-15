import { Align, DirectionEnum, Justify } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import { GapSize } from '../columns'
import type { FlexItemProps } from './flex-item/FlexItemProps'
import { FlexBox as Flexbox, FlexItem } from './index'
import React from 'react'

Flexbox.displayName = 'FlexBox'
FlexItem.displayName = 'FlexItem'

interface FlexBoxStoryArgs {
  flex_gap?: GapSize
  flex_direction?: DirectionEnum
  flex_align?: Align
  flex_justify?: Justify
  flex_wrap: boolean
  flex_scrollable: boolean
  flex_fullheight: boolean
  flex_mobile: boolean
  item_one_size: FlexItemProps['size']
  item_one_narrow: boolean
  item_one_children: string
  item_two_size: FlexItemProps['size']
  item_two_narrow: boolean
  item_two_children: string
  item_three_size: FlexItemProps['size']
  item_three_narrow: boolean
  item_three_children: string
}

const FlexBox = ({
  flex_gap,
  flex_direction,
  flex_align,
  flex_justify,
  flex_wrap,
  flex_scrollable,
  flex_fullheight,
  flex_mobile,
  item_one_size,
  item_one_narrow,
  item_one_children,
  item_two_size,
  item_two_narrow,
  item_two_children,
  item_three_size,
  item_three_narrow,
  item_three_children,
}: FlexBoxStoryArgs): JSX.Element => (
  <div style={{ minHeight: 260, padding: 16 }}>
    <Flexbox
      gap={flex_gap}
      direction={flex_direction}
      align={flex_align}
      justify={flex_justify}
      wrap={flex_wrap}
      scrollable={flex_scrollable}
      fullheight={flex_fullheight}
      mobile={flex_mobile}
    >
      <FlexItem size={item_one_size} narrow={item_one_narrow}>
        {item_one_children}
      </FlexItem>
      <FlexItem size={item_two_size} narrow={item_two_narrow}>
        {item_two_children}
      </FlexItem>
      <FlexItem size={item_three_size} narrow={item_three_narrow}>
        {item_three_children}
      </FlexItem>
    </Flexbox>
  </div>
)

FlexBox.displayName = 'FlexBox'

const meta: Meta<FlexBoxStoryArgs> = {
  title: 'Components/FlexBox',
  component: FlexBox,
  subcomponents: { FlexItem },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A flexible layout container that supports responsive spacing, direction, alignment and wrapping.',
      },
    },
  },
  argTypes: {
    flex_gap: {
      control: 'select',
      options: [undefined, ...Object.values(GapSize)].filter(
        (value): value is GapSize | undefined => value === undefined || typeof value === 'number',
      ),
      name: 'gap',
      description: 'Gap between children',
      table: { category: 'FlexBox' },
    },
    flex_direction: {
      control: 'select',
      options: Object.values(DirectionEnum),
      name: 'direction',
      description: 'Flex direction',
      table: { category: 'FlexBox' },
    },
    flex_align: {
      control: 'select',
      options: Object.values(Align),
      name: 'align',
      description: 'Align items',
      table: { category: 'FlexBox' },
    },
    flex_justify: {
      control: 'select',
      options: Object.values(Justify),
      name: 'justify',
      description: 'Justify content',
      table: { category: 'FlexBox' },
    },
    flex_wrap: {
      control: 'boolean',
      name: 'wrap',
      description: 'Wrap flex content',
      table: { category: 'FlexBox' },
    },
    flex_scrollable: {
      control: 'boolean',
      name: 'scrollable',
      description: 'Enable horizontal scrolling',
      table: { category: 'FlexBox' },
    },
    flex_fullheight: {
      control: 'boolean',
      name: 'fullheight',
      description: 'Use full height',
      table: { category: 'FlexBox' },
    },
    flex_mobile: {
      control: 'boolean',
      name: 'mobile',
      description: 'Apply mobile-specific layout class',
      table: { category: 'FlexBox' },
    },
    item_one_size: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      name: 'size',
      description: 'First item size',
      table: { category: 'FlexItem' },
    },
    item_one_narrow: {
      control: 'boolean',
      name: 'narrow',
      description: 'First item narrow state',
      table: { category: 'FlexItem' },
    },
    item_one_children: {
      control: 'text',
      name: 'children',
      description: 'First item content',
      table: { category: 'FlexItem' },
    },
    item_two_size: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      name: 'size',
      description: 'Second item size',
      table: { category: 'FlexItem' },
    },
    item_two_narrow: {
      control: 'boolean',
      name: 'narrow',
      description: 'Second item narrow state',
      table: { category: 'FlexItem' },
    },
    item_two_children: {
      control: 'text',
      name: 'children',
      description: 'Second item content',
      table: { category: 'FlexItem' },
    },
    item_three_size: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      name: 'size',
      description: 'Third item size',
      table: { category: 'FlexItem' },
    },
    item_three_narrow: {
      control: 'boolean',
      name: 'narrow',
      description: 'Third item narrow state',
      table: { category: 'FlexItem' },
    },
    item_three_children: {
      control: 'text',
      name: 'children',
      description: 'Third item content',
      table: { category: 'FlexItem' },
    },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    testId: { table: { disable: true } },
    fullBleed: { table: { disable: true } },
  },
  args: {
    flex_gap: GapSize.FOUR,
    flex_direction: DirectionEnum.ROW,
    flex_align: Align.START,
    flex_justify: Justify.SPACE_BETWEEN,
    flex_wrap: false,
    flex_scrollable: false,
    flex_fullheight: false,
    flex_mobile: false,
    item_one_size: 4,
    item_one_narrow: false,
    item_one_children: 'Item one',
    item_two_size: 4,
    item_two_narrow: false,
    item_two_children: 'Item two',
    item_three_size: 4,
    item_three_narrow: false,
    item_three_children: 'Item three',
  },
}

export default meta

type Story = StoryObj<FlexBoxStoryArgs>

export const Default: Story = {}

export const ColumnLayout: Story = {
  args: {
    flex_direction: DirectionEnum.COLUMN,
    flex_justify: Justify.START,
  },
}

export const Wrapped: Story = {
  args: {
    flex_wrap: true,
  },
}

export const NarrowItems: Story = {
  args: {
    item_one_narrow: true,
    item_two_narrow: true,
    item_three_narrow: true,
  },
}
