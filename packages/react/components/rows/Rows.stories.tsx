import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { GapSize } from '../columns/ColumnsTypes'
import RowsComponent from './Rows'
import RowComponent from './row/Row'

RowsComponent.displayName = 'Rows'
RowComponent.displayName = 'Row'

interface RowsStoryArgs {
  rows_gap?: GapSize
  rows_id: string
  rows_className: string
  rows_testId: string
  row_narrow: boolean
  row_id: string
  row_className: string
  row_testId: string
  row_one_children: string
  row_two_children: string
  row_three_children: string
}

const Rows = ({
  rows_gap,
  rows_id,
  rows_className,
  rows_testId,
  row_narrow,
  row_id,
  row_className,
  row_testId,
  row_one_children,
  row_two_children,
  row_three_children,
}: RowsStoryArgs): JSX.Element => (
  <RowsComponent
    gap={rows_gap}
    id={rows_id || undefined}
    className={rows_className || undefined}
    testId={rows_testId || undefined}
  >
    <RowComponent
      narrow={row_narrow}
      id={row_id || undefined}
      className={row_className || undefined}
      testId={row_testId || undefined}
    >
      {row_one_children}
    </RowComponent>
    <RowComponent
      narrow={row_narrow}
      id={row_id || undefined}
      className={row_className || undefined}
      testId={row_testId || undefined}
    >
      {row_two_children}
    </RowComponent>
    <RowComponent
      narrow={row_narrow}
      id={row_id || undefined}
      className={row_className || undefined}
      testId={row_testId || undefined}
    >
      {row_three_children}
    </RowComponent>
  </RowsComponent>
)

Rows.displayName = 'Rows'

const meta: Meta<RowsStoryArgs> = {
  title: 'Components/Rows',
  component: Rows,
  subcomponents: { Row: RowComponent },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    rows_gap: {
      control: 'select',
      options: [undefined, ...Object.values(GapSize).filter((value) => typeof value === 'number')],
      name: 'gap',
      description: 'Gap between row items',
      table: { category: 'Rows' },
    },
    rows_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id for Rows',
      table: { category: 'Rows' },
    },
    rows_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes for Rows',
      table: { category: 'Rows' },
    },
    rows_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier for Rows',
      table: { category: 'Rows' },
    },
    row_narrow: {
      control: 'boolean',
      name: 'narrow',
      description: 'Narrow layout for each Row',
      table: { category: 'Row' },
    },
    row_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id for each Row',
      table: { category: 'Row' },
    },
    row_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes for each Row',
      table: { category: 'Row' },
    },
    row_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier for each Row',
      table: { category: 'Row' },
    },
    row_one_children: {
      control: 'text',
      name: 'children',
      description: 'First row content',
      table: { category: 'Row' },
    },
    row_two_children: {
      control: 'text',
      name: 'children',
      description: 'Second row content',
      table: { category: 'Row' },
    },
    row_three_children: {
      control: 'text',
      name: 'children',
      description: 'Third row content',
      table: { category: 'Row' },
    },
  },
  args: {
    rows_gap: GapSize.THREE,
    rows_id: '',
    rows_className: '',
    rows_testId: '',
    row_narrow: false,
    row_id: '',
    row_className: '',
    row_testId: '',
    row_one_children: 'First row',
    row_two_children: 'Second row',
    row_three_children: 'Third row',
  },
  render: ({
    rows_gap,
    rows_id,
    rows_className,
    rows_testId,
    row_narrow,
    row_id,
    row_className,
    row_testId,
    row_one_children,
    row_two_children,
    row_three_children,
  }) => (
    <RowsComponent
      gap={rows_gap}
      id={rows_id || undefined}
      className={rows_className || undefined}
      testId={rows_testId || undefined}
    >
      <RowComponent
        narrow={row_narrow}
        id={row_id || undefined}
        className={row_className || undefined}
        testId={row_testId || undefined}
      >
        {row_one_children}
      </RowComponent>
      <RowComponent
        narrow={row_narrow}
        id={row_id || undefined}
        className={row_className || undefined}
        testId={row_testId || undefined}
      >
        {row_two_children}
      </RowComponent>
      <RowComponent
        narrow={row_narrow}
        id={row_id || undefined}
        className={row_className || undefined}
        testId={row_testId || undefined}
      >
        {row_three_children}
      </RowComponent>
    </RowsComponent>
  ),
}

export default meta

type Story = StoryObj<RowsStoryArgs>

export const Default: Story = {}

export const Gapless: Story = {
  args: {
    rows_gap: GapSize.ZERO,
  },
}

export const Narrow: Story = {
  args: {
    row_narrow: true,
  },
}

export const Playground: Story = {}
