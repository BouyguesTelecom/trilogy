import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import TableComponent from './Table'
import type { TableProps } from './TableProps'
import { TableBorderEnum } from './TableProps'
import TableBody from './body'
import TableHead from './head'
import TableTd from './td'
import TableTh from './th'
import TableTr from './tr'

TableComponent.displayName = 'Table'
TableBody.displayName = 'TableBody'
TableHead.displayName = 'TableHead'
TableTr.displayName = 'TableTr'
TableTh.displayName = 'TableTh'
TableTd.displayName = 'TableTd'
Object.defineProperty(TableComponent, 'name', { value: 'Table' })

const Table = (props: TableProps): JSX.Element => <TableComponent {...props} />
Table.displayName = 'Table'

interface TableStoryArgs {
  table_border?: TableBorderEnum
  table_striped: boolean
  table_compact: boolean
  table_fullwidth: boolean
  table_id: string
  table_className: string
  table_testId: string
  head_col1: string
  head_col2: string
  head_col3: string
  row1_col1: string
  row1_col2: string
  row1_col3: string
  row2_col1: string
  row2_col2: string
  row2_col3: string
  row3_col1: string
  row3_col2: string
  row3_col3: string
}

const meta: Meta<TableStoryArgs> = {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableHead, TableBody, TableTr, TableTh, TableTd },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    table_border: {
      control: 'select',
      options: [undefined, ...Object.values(TableBorderEnum)],
      name: 'border',
      description: 'Border display mode',
      table: { category: 'Table' },
    },
    table_striped: {
      control: 'boolean',
      name: 'striped',
      description: 'Alternate row background colors',
      table: { category: 'Table' },
    },
    table_compact: {
      control: 'boolean',
      name: 'compact',
      description: 'Compact row spacing',
      table: { category: 'Table' },
    },
    table_fullwidth: {
      control: 'boolean',
      name: 'fullwidth',
      description: 'Stretch table to full width',
      table: { category: 'Table' },
    },
    table_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Table' },
    },
    table_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Table' },
    },
    table_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Table' },
    },
    head_col1: {
      control: 'text',
      name: 'col1',
      description: 'First column header',
      table: { category: 'TableHead' },
    },
    head_col2: {
      control: 'text',
      name: 'col2',
      description: 'Second column header',
      table: { category: 'TableHead' },
    },
    head_col3: {
      control: 'text',
      name: 'col3',
      description: 'Third column header',
      table: { category: 'TableHead' },
    },
    row1_col1: {
      control: 'text',
      name: 'col1',
      description: 'Row 1 – first cell',
      table: { category: 'TableBody Row 1' },
    },
    row1_col2: {
      control: 'text',
      name: 'col2',
      description: 'Row 1 – second cell',
      table: { category: 'TableBody Row 1' },
    },
    row1_col3: {
      control: 'text',
      name: 'col3',
      description: 'Row 1 – third cell',
      table: { category: 'TableBody Row 1' },
    },
    row2_col1: {
      control: 'text',
      name: 'col1',
      description: 'Row 2 – first cell',
      table: { category: 'TableBody Row 2' },
    },
    row2_col2: {
      control: 'text',
      name: 'col2',
      description: 'Row 2 – second cell',
      table: { category: 'TableBody Row 2' },
    },
    row2_col3: {
      control: 'text',
      name: 'col3',
      description: 'Row 2 – third cell',
      table: { category: 'TableBody Row 2' },
    },
    row3_col1: {
      control: 'text',
      name: 'col1',
      description: 'Row 3 – first cell',
      table: { category: 'TableBody Row 3' },
    },
    row3_col2: {
      control: 'text',
      name: 'col2',
      description: 'Row 3 – second cell',
      table: { category: 'TableBody Row 3' },
    },
    row3_col3: {
      control: 'text',
      name: 'col3',
      description: 'Row 3 – third cell',
      table: { category: 'TableBody Row 3' },
    },
  },
  args: {
    table_border: undefined,
    table_striped: false,
    table_compact: false,
    table_fullwidth: true,
    table_id: '',
    table_className: '',
    table_testId: '',
    head_col1: 'Name',
    head_col2: 'Role',
    head_col3: 'Status',
    row1_col1: 'Alice',
    row1_col2: 'Developer',
    row1_col3: 'Active',
    row2_col1: 'Bob',
    row2_col2: 'Designer',
    row2_col3: 'Active',
    row3_col1: 'Charlie',
    row3_col2: 'Manager',
    row3_col3: 'Inactive',
  },
  render: ({
    table_border,
    table_striped,
    table_compact,
    table_fullwidth,
    table_id,
    table_className,
    table_testId,
    head_col1,
    head_col2,
    head_col3,
    row1_col1,
    row1_col2,
    row1_col3,
    row2_col1,
    row2_col2,
    row2_col3,
    row3_col1,
    row3_col2,
    row3_col3,
  }) => (
    <TableComponent
      border={table_border}
      striped={table_striped}
      compact={table_compact}
      fullwidth={table_fullwidth}
      id={table_id || undefined}
      className={table_className || undefined}
      testId={table_testId || undefined}
    >
      <TableHead>
        <TableTr>
          <TableTh>{head_col1}</TableTh>
          <TableTh>{head_col2}</TableTh>
          <TableTh>{head_col3}</TableTh>
        </TableTr>
      </TableHead>
      <TableBody>
        <TableTr>
          <TableTd>{row1_col1}</TableTd>
          <TableTd>{row1_col2}</TableTd>
          <TableTd>{row1_col3}</TableTd>
        </TableTr>
        <TableTr>
          <TableTd>{row2_col1}</TableTd>
          <TableTd>{row2_col2}</TableTd>
          <TableTd>{row2_col3}</TableTd>
        </TableTr>
        <TableTr>
          <TableTd>{row3_col1}</TableTd>
          <TableTd>{row3_col2}</TableTd>
          <TableTd>{row3_col3}</TableTd>
        </TableTr>
      </TableBody>
    </TableComponent>
  ),
}

export default meta

type Story = StoryObj<TableStoryArgs>

export const Default: Story = {}

export const Striped: Story = {
  args: {
    table_striped: true,
  },
}

export const Compact: Story = {
  args: {
    table_compact: true,
  },
}

export const BorderAll: Story = {
  args: {
    table_border: TableBorderEnum.ALL,
  },
}

export const BorderInner: Story = {
  args: {
    table_border: TableBorderEnum.INNER,
  },
}

export const BorderLines: Story = {
  args: {
    table_border: TableBorderEnum.LINES,
  },
}

export const Playground: Story = {}
