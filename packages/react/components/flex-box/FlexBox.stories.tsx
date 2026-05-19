import { Align, DirectionEnum, Justify } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { GapSize } from '../columns'
import type { FlexItemProps } from './flex-item/FlexItemProps'
import { FlexBox as Flexbox, FlexItem } from './index'

Flexbox.displayName = 'FlexBox'
FlexItem.displayName = 'FlexItem'
Object.defineProperty(Flexbox, 'name', { value: 'FlexBox' })

interface FlexBoxStoryArgs {
  gap?: GapSize
  direction?: DirectionEnum
  align?: Align
  justify?: Justify
  wrap: boolean
  scrollable: boolean
  fullheight: boolean
  mobile: boolean
  itemOneSize: FlexItemProps['size']
  itemOneNarrow: boolean
  itemOneChildren: string
  itemTwoSize: FlexItemProps['size']
  itemTwoNarrow: boolean
  itemTwoChildren: string
  itemThreeSize: FlexItemProps['size']
  itemThreeNarrow: boolean
  itemThreeChildren: string
}

const FlexBox = ({
  gap,
  direction,
  align,
  justify,
  wrap,
  scrollable,
  fullheight,
  mobile,
  itemOneSize,
  itemOneNarrow,
  itemOneChildren,
  itemTwoSize,
  itemTwoNarrow,
  itemTwoChildren,
  itemThreeSize,
  itemThreeNarrow,
  itemThreeChildren,
}: FlexBoxStoryArgs): JSX.Element => (
  <div style={{ minHeight: 260, padding: 16 }}>
    <Flexbox
      gap={gap}
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      scrollable={scrollable}
      fullheight={fullheight}
      mobile={mobile}
    >
      <FlexItem size={itemOneSize} narrow={itemOneNarrow}>
        {itemOneChildren}
      </FlexItem>
      <FlexItem size={itemTwoSize} narrow={itemTwoNarrow}>
        {itemTwoChildren}
      </FlexItem>
      <FlexItem size={itemThreeSize} narrow={itemThreeNarrow}>
        {itemThreeChildren}
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
      source: {
        type: 'dynamic',
      },
      description: {
        component: 'A flexible layout container that supports responsive spacing, direction, alignment and wrapping.',
      },
    },
  },
  argTypes: {
    gap: {
      control: 'select',
      options: [undefined, ...Object.values(GapSize)].filter(
        (value): value is GapSize | undefined => value === undefined || typeof value === 'number',
      ),
      name: 'gap',
      description: 'Gap between children',
      table: { category: 'FlexBox' },
    },
    direction: {
      control: 'select',
      options: Object.values(DirectionEnum),
      name: 'direction',
      description: 'Flex direction',
      table: { category: 'FlexBox' },
    },
    align: {
      control: 'select',
      options: Object.values(Align),
      name: 'align',
      description: 'Align items',
      table: { category: 'FlexBox' },
    },
    justify: {
      control: 'select',
      options: Object.values(Justify),
      name: 'justify',
      description: 'Justify content',
      table: { category: 'FlexBox' },
    },
    wrap: {
      control: 'boolean',
      name: 'wrap',
      description: 'Wrap flex content',
      table: { category: 'FlexBox' },
    },
    scrollable: {
      control: 'boolean',
      name: 'scrollable',
      description: 'Enable horizontal scrolling',
      table: { category: 'FlexBox' },
    },
    fullheight: {
      control: 'boolean',
      name: 'fullheight',
      description: 'Use full height',
      table: { category: 'FlexBox' },
    },
    mobile: {
      control: 'boolean',
      name: 'mobile',
      description: 'Apply mobile-specific layout class',
      table: { category: 'FlexBox' },
    },
    itemOneSize: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      name: 'size',
      description: 'First item size',
      table: { category: 'FlexItem' },
    },
    itemOneNarrow: {
      control: 'boolean',
      name: 'narrow',
      description: 'First item narrow state',
      table: { category: 'FlexItem' },
    },
    itemOneChildren: {
      control: 'text',
      name: 'children',
      description: 'First item content',
      table: { category: 'FlexItem' },
    },
    itemTwoSize: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      name: 'size',
      description: 'Second item size',
      table: { category: 'FlexItem' },
    },
    itemTwoNarrow: {
      control: 'boolean',
      name: 'narrow',
      description: 'Second item narrow state',
      table: { category: 'FlexItem' },
    },
    itemTwoChildren: {
      control: 'text',
      name: 'children',
      description: 'Second item content',
      table: { category: 'FlexItem' },
    },
    itemThreeSize: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      name: 'size',
      description: 'Third item size',
      table: { category: 'FlexItem' },
    },
    itemThreeNarrow: {
      control: 'boolean',
      name: 'narrow',
      description: 'Third item narrow state',
      table: { category: 'FlexItem' },
    },
    itemThreeChildren: {
      control: 'text',
      name: 'children',
      description: 'Third item content',
      table: { category: 'FlexItem' },
    },
  },
  args: {
    gap: GapSize.FOUR,
    direction: DirectionEnum.ROW,
    align: Align.START,
    justify: Justify.SPACE_BETWEEN,
    wrap: false,
    scrollable: false,
    fullheight: false,
    mobile: false,
    itemOneSize: 4,
    itemOneNarrow: false,
    itemOneChildren: 'Item one',
    itemTwoSize: 4,
    itemTwoNarrow: false,
    itemTwoChildren: 'Item two',
    itemThreeSize: 4,
    itemThreeNarrow: false,
    itemThreeChildren: 'Item three',
  },
  render: ({
    gap,
    direction,
    align,
    justify,
    wrap,
    scrollable,
    fullheight,
    mobile,
    itemOneSize,
    itemOneNarrow,
    itemOneChildren,
    itemTwoSize,
    itemTwoNarrow,
    itemTwoChildren,
    itemThreeSize,
    itemThreeNarrow,
    itemThreeChildren,
  }) => (
    <Flexbox
      gap={gap}
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      scrollable={scrollable}
      fullheight={fullheight}
      mobile={mobile}
    >
      <FlexItem size={itemOneSize} narrow={itemOneNarrow}>
        {itemOneChildren}
      </FlexItem>
      <FlexItem size={itemTwoSize} narrow={itemTwoNarrow}>
        {itemTwoChildren}
      </FlexItem>
      <FlexItem size={itemThreeSize} narrow={itemThreeNarrow}>
        {itemThreeChildren}
      </FlexItem>
    </Flexbox>
  ),
}

export default meta

type Story = StoryObj<FlexBoxStoryArgs>

export const Default: Story = {}

export const ColumnLayout: Story = {
  args: {
    direction: DirectionEnum.COLUMN,
    justify: Justify.START,
  },
}

export const Wrapped: Story = {
  args: {
    wrap: true,
  },
}

export const NarrowItems: Story = {
  args: {
    itemOneNarrow: true,
    itemTwoNarrow: true,
    itemThreeNarrow: true,
  },
}
