import { Alignable } from '@/objects/facets/Alignable'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Column from './column/Column'
import ColumnsComponent from './Columns'
import type { ColumnsProps } from './ColumnsProps'
import { ColumnsSize, GapSize } from './ColumnsTypes'

ColumnsComponent.displayName = 'Columns'
Column.displayName = 'Column'

const Columns = (props: ColumnsProps & { children: React.ReactNode }): JSX.Element => <ColumnsComponent {...props} />
Columns.displayName = 'Columns'

interface ColumnsStoryArgs extends ColumnsProps {
  column_size: ColumnsSize
  column_content: string
  columns_gap: GapSize
  columns_multiline: boolean
  columns_scrollable: boolean
  columns_fullBleed: boolean
  columns_marginless: boolean
  columns_fullheight: boolean
  columns_mobile: boolean
  columns_align: Alignable | undefined
  columns_verticalAlign: Alignable | undefined
}

const meta: Meta<ColumnsStoryArgs> = {
  title: 'Components/Columns',
  component: Columns,
  subcomponents: { Column },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    column_size: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as ColumnsSize[],
      name: 'size',
      description: 'Column width (1-12)',
      table: { category: 'Column' },
    },
    column_content: {
      control: 'text',
      name: 'children',
      description: 'Column content text',
      table: { category: 'Column' },
    },
    columns_gap: {
      control: { type: 'select' },
      options: Object.values(GapSize).filter((v) => typeof v === 'number'),
      name: 'gap',
      description: 'Gap between columns',
      table: { category: 'Columns' },
    },
    columns_multiline: {
      control: 'boolean',
      name: 'multiline',
      description: 'Allow columns to wrap to next line',
      table: { category: 'Columns' },
    },
    columns_scrollable: {
      control: 'boolean',
      name: 'scrollable',
      description: 'Make columns horizontally scrollable',
      table: { category: 'Columns' },
    },
    columns_fullBleed: {
      control: 'boolean',
      name: 'fullBleed',
      description: 'Full bleed columns',
      table: { category: 'Columns' },
    },
    columns_marginless: {
      control: 'boolean',
      name: 'marginless',
      description: 'Remove margins',
      table: { category: 'Columns' },
    },
    columns_fullheight: {
      control: 'boolean',
      name: 'fullheight',
      description: 'Full height columns',
      table: { category: 'Columns' },
    },
    columns_mobile: {
      control: 'boolean',
      name: 'mobile',
      description: 'Responsive mobile mode',
      table: { category: 'Columns' },
    },
    columns_align: {
      control: 'select',
      options: [undefined, Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'align',
      description: 'Horizontal alignment',
      table: { category: 'Columns' },
    },
    columns_verticalAlign: {
      control: 'select',
      options: [undefined, Alignable.ALIGNED_START, Alignable.ALIGNED_CENTER, Alignable.ALIGNED_END],
      name: 'verticalAlign',
      description: 'Vertical alignment',
      table: { category: 'Columns' },
    },
  },
  args: {
    column_size: 6 as ColumnsSize,
    column_content: 'Column content',
    columns_gap: GapSize.ZERO,
    columns_multiline: false,
    columns_scrollable: false,
    columns_fullBleed: false,
    columns_marginless: false,
    columns_fullheight: false,
    columns_mobile: false,
    columns_align: undefined,
    columns_verticalAlign: undefined,
  },
  render: ({
    column_size,
    column_content,
    columns_gap,
    columns_multiline,
    columns_scrollable,
    columns_fullBleed,
    columns_marginless,
    columns_fullheight,
    columns_mobile,
    columns_align,
    columns_verticalAlign,
  }) => (
    <ColumnsComponent
      gap={columns_gap}
      multiline={columns_multiline}
      scrollable={columns_scrollable}
      fullBleed={columns_fullBleed}
      marginless={columns_marginless}
      fullheight={columns_fullheight}
      mobile={columns_mobile}
      align={columns_align}
      verticalAlign={columns_verticalAlign}
    >
      <Column size={column_size}>{column_content}</Column>
      <Column size={column_size}>{column_content}</Column>
    </ColumnsComponent>
  ),
}

export default meta

type Story = StoryObj<ColumnsStoryArgs>

export const Default: Story = {}

export const TwoEqualColumns: Story = {
  args: {
    column_size: 6 as ColumnsSize,
  },
}

export const ThreeEqualColumns: Story = {
  render: (args) => (
    <ColumnsComponent gap={args.columns_gap}>
      <Column size={4}>Column 1</Column>
      <Column size={4}>Column 2</Column>
      <Column size={4}>Column 3</Column>
    </ColumnsComponent>
  ),
}

export const MixedSizes: Story = {
  render: (args) => (
    <ColumnsComponent gap={args.columns_gap} multiline>
      <Column size={4}>Sidebar</Column>
      <Column size={8}>Main content</Column>
    </ColumnsComponent>
  ),
}

export const WithGap: Story = {
  args: {
    columns_gap: GapSize.THREE,
  },
}

export const Multiline: Story = {
  args: {
    columns_multiline: true,
  },
  render: (args) => (
    <ColumnsComponent multiline gap={args.columns_gap}>
      <Column size={6}>Item 1</Column>
      <Column size={6}>Item 2</Column>
      <Column size={6}>Item 3</Column>
      <Column size={6}>Item 4</Column>
    </ColumnsComponent>
  ),
}

export const Scrollable: Story = {
  args: {
    columns_scrollable: true,
  },
  render: (args) => (
    <ColumnsComponent scrollable gap={args.columns_gap}>
      <Column size={6}>Scrollable 1</Column>
      <Column size={6}>Scrollable 2</Column>
      <Column size={6}>Scrollable 3</Column>
      <Column size={6}>Scrollable 4</Column>
    </ColumnsComponent>
  ),
}
