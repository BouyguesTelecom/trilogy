import type { Meta, StoryObj } from '@storybook/react'
import { Section, Table, TableBorderEnum } from '../../lib'
import TableHead from './head'
import TableTr from './tr'
import TableTh from './th'
import TableBody from './body'
import TableTd from './td'

// Interface pour les propriétés de la story Example
interface ExampleProps {
  columns: string[];
  lines: string[][];
}

const meta: Meta<typeof Table> = {
  component: Table,
  subcomponents: { TableHead, TableTr, TableTh, TableBody, TableTd },
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    border: {
      options: [TableBorderEnum.INNER, TableBorderEnum.ALL, TableBorderEnum.LINES],
      control: { type: 'inline-radio' },
    },
    children: {
      control: { type: 'text' },
    }
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Sandbox: Story = {
  render: ({...args}) => (
    <Section>
      <Table {...args}>
        <TableHead>
          <TableTr>
            {args.columns.map((column, index) => (
              <TableTh key={index}>{column}</TableTh>
            ))}
          </TableTr>
        </TableHead>
        <TableBody>
          {args.lines.map((line, lineIndex) => (
            <TableTr key={lineIndex}>
              {line.map((data, dataIndex) => (
                <TableTd key={dataIndex}>{data}</TableTd>
              ))}
            </TableTr>
          ))}
        </TableBody>
      </Table>
    </Section>
  ),
  args: {
    columns: ['Title 1', 'Title 2', 'Title 3'],
    lines: [
      ['Donnée 1-1', 'Donnée 1-2', 'Donnée 1-3'],
      ['Donnée 2-1', 'Donnée 2-2', 'Donnée 2-3'],
      ['Donnée 3-1', 'Donnée 3-2', 'Donnée 3-3'],
    ],
  }
};

export const Example: Story = {
  render: () => (
    <Section>
      <Table border={TableBorderEnum.ALL}>
        <TableHead>
          <TableTr>
            <TableTh> Title 1 </TableTh>
            <TableTh> Title 2 </TableTh>
            <TableTh> Title 3 </TableTh>
          </TableTr>
        </TableHead>
        <TableBody>
          <TableTr>
            <TableTd> Donnée 1 </TableTd>
            <TableTd> Donnée 2 </TableTd>
            <TableTd> Donnée 3 </TableTd>
          </TableTr>
          <TableTr>
            <TableTd> Donnée 4 </TableTd>
            <TableTd> Donnée 5 </TableTd>
            <TableTd> Donnée 6 </TableTd>
          </TableTr>
        </TableBody>
      </Table>
    </Section>
  )
};
