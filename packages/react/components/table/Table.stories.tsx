import { TrilogyColor } from '@/objects/facets/Color'
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

const Table = (props: TableProps): JSX.Element => <TableComponent {...props} />
Table.displayName = 'Table'

interface TableStoryArgs extends TableProps {
  tableHeadColor?: TrilogyColor
  tableHeadBackgroundColor?: TrilogyColor
  tableBodyColor?: TrilogyColor
  tableBodyBackgroundColor?: TrilogyColor
  tableTrExpandable: boolean
  tableTrExpansion: boolean
  tableTrExpanded: boolean
  tableTrColor?: TrilogyColor
  tableThColSpan: number
  tableThRowSpan: number
  tableTdColSpan: number
  tableTdRowSpan: number
}

const meta: Meta<TableStoryArgs> = {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableHead, TableBody, TableTr, TableTh, TableTd } as Record<string, React.ComponentType<unknown>>,
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
      table: { disable: true },
      control: false,
    },
    className: {
      table: { disable: true },
      control: false,
    },
    id: {
      table: { disable: true },
      control: false,
    },
    testId: {
      table: { disable: true },
      control: false,
    },
    border: {
      control: 'select',
      options: [undefined, ...Object.values(TableBorderEnum)],
      description: 'Border display mode',
    },
    striped: {
      control: 'boolean',
      description: 'Alternate row background colors',
    },
    compact: {
      control: 'boolean',
      description: 'Compact row spacing',
    },
    fullwidth: {
      control: 'boolean',
      description: 'Stretch table to full width',
    },
    tableHeadColor: {
      name: 'color',
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      description: 'Text color for TableHead',
      table: { category: 'TableHead' },
    },
    tableHeadBackgroundColor: {
      name: 'backgroundColor',
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      description: 'Background color for TableHead',
      table: { category: 'TableHead' },
    },
    tableBodyColor: {
      name: 'color',
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      description: 'Text color for TableBody',
      table: { category: 'TableBody' },
    },
    tableBodyBackgroundColor: {
      name: 'backgroundColor',
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      description: 'Background color for TableBody',
      table: { category: 'TableBody' },
    },
    tableTrExpandable: {
      name: 'expandable',
      control: 'boolean',
      description: 'Enable expandable state on TableTr',
      table: { category: 'TableTr' },
    },
    tableTrExpansion: {
      name: 'expansion',
      control: 'boolean',
      description: 'Mark row as expansion row',
      table: { category: 'TableTr' },
    },
    tableTrExpanded: {
      name: 'expanded',
      control: 'boolean',
      description: 'Expanded state for TableTr',
      table: { category: 'TableTr' },
    },
    tableTrColor: {
      name: 'color',
      control: 'select',
      options: [undefined, ...Object.values(TrilogyColor)],
      description: 'Highlight color for TableTr',
      table: { category: 'TableTr' },
    },
    tableThColSpan: {
      name: 'colSpan',
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'Column span for first TableTh',
      table: { category: 'TableTh' },
    },
    tableThRowSpan: {
      name: 'rowSpan',
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'Row span for first TableTh',
      table: { category: 'TableTh' },
    },
    tableTdColSpan: {
      name: 'colSpan',
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'Column span for first TableTd',
      table: { category: 'TableTd' },
    },
    tableTdRowSpan: {
      name: 'rowSpan',
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'Row span for first TableTd',
      table: { category: 'TableTd' },
    },
  },
  args: {
    striped: false,
    compact: false,
    fullwidth: true,
    tableTrExpandable: false,
    tableTrExpansion: false,
    tableTrExpanded: false,
    tableThColSpan: 1,
    tableThRowSpan: 1,
    tableTdColSpan: 1,
    tableTdRowSpan: 1,
  },
  render: ({
    border,
    striped,
    compact,
    fullwidth,
    tableHeadColor,
    tableHeadBackgroundColor,
    tableBodyColor,
    tableBodyBackgroundColor,
    tableTrExpandable,
    tableTrExpansion,
    tableTrExpanded,
    tableTrColor,
    tableThColSpan,
    tableThRowSpan,
    tableTdColSpan,
    tableTdRowSpan,
  }) => (
    <TableComponent border={border} striped={striped} compact={compact} fullwidth={fullwidth}>
      <TableHead color={tableHeadColor} backgroundColor={tableHeadBackgroundColor}>
        <TableTr>
          <TableTh colSpan={tableThColSpan} rowSpan={tableThRowSpan}>
            Name
          </TableTh>
          <TableTh>Role</TableTh>
          <TableTh>Status</TableTh>
        </TableTr>
      </TableHead>
      <TableBody color={tableBodyColor} backgroundColor={tableBodyBackgroundColor}>
        <TableTr
          expandable={tableTrExpandable}
          expansion={tableTrExpansion}
          expanded={tableTrExpanded}
          color={tableTrColor}
        >
          <TableTd colSpan={tableTdColSpan} rowSpan={tableTdRowSpan}>
            Alice
          </TableTd>
          <TableTd>Developer</TableTd>
          <TableTd>Active</TableTd>
        </TableTr>
        <TableTr>
          <TableTd>Bob</TableTd>
          <TableTd>Designer</TableTd>
          <TableTd>Active</TableTd>
        </TableTr>
        <TableTr>
          <TableTd>Charlie</TableTd>
          <TableTd>Manager</TableTd>
          <TableTd>Inactive</TableTd>
        </TableTr>
      </TableBody>
    </TableComponent>
  ),
}

export default meta

type Story = StoryObj<TableStoryArgs>

export const Default: Story = {}

export const Striped: Story = {
  args: { striped: true },
}

export const Compact: Story = {
  args: { compact: true },
}

export const BorderAll: Story = {
  args: { border: TableBorderEnum.ALL },
}

export const BorderInner: Story = {
  args: { border: TableBorderEnum.INNER },
}

export const BorderLines: Story = {
  args: { border: TableBorderEnum.LINES },
}

export const Playground: Story = {}
