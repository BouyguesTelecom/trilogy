import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Table, TableHead, TableBody, TableTr, TableTh, TableTd } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { TableBorderEnum } from '../TableProps';

import { TableScreen } from '../../../../../examples/react-template/screens/Table';

const meta = {
  title: 'Table',
  component: Table,
  subcomponents: {
    TableHead,
    TableBody,
    TableTr,
    TableTh,
    TableTd,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Table component is used to display data in rows and columns.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'TableHead and TableBody components',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
    border: {
      description: 'Border style for the table',
      control: { type: 'select' },
      options: Object.values(TableBorderEnum),
    },
  },
} as Meta<typeof Table>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <TableScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Table> = {
  args: {
    border: TableBorderEnum.NONE,
    children: (
      <>
        <TableHead>
          <TableTr>
            <TableTh>Header 1</TableTh>
            <TableTh>Header 2</TableTh>
            <TableTh>Header 3</TableTh>
          </TableTr>
        </TableHead>
        <TableBody>
          <TableTr>
            <TableTd>Cell 1-1</TableTd>
            <TableTd>Cell 1-2</TableTd>
            <TableTd>Cell 1-3</TableTd>
          </TableTr>
          <TableTr>
            <TableTd>Cell 2-1</TableTd>
            <TableTd>Cell 2-2</TableTd>
            <TableTd>Cell 2-3</TableTd>
          </TableTr>
          <TableTr>
            <TableTd>Cell 3-1</TableTd>
            <TableTd>Cell 3-2</TableTd>
            <TableTd>Cell 3-3</TableTd>
          </TableTr>
        </TableBody>
      </>
    ),
  },
};

export const WithBorders: StoryObj<typeof Table> = {
  args: {
    border: TableBorderEnum.ALL,
    children: (
      <>
        <TableHead>
          <TableTr>
            <TableTh>Header 1</TableTh>
            <TableTh>Header 2</TableTh>
            <TableTh>Header 3</TableTh>
          </TableTr>
        </TableHead>
        <TableBody>
          <TableTr>
            <TableTd>Cell 1-1</TableTd>
            <TableTd>Cell 1-2</TableTd>
            <TableTd>Cell 1-3</TableTd>
          </TableTr>
          <TableTr>
            <TableTd>Cell 2-1</TableTd>
            <TableTd>Cell 2-2</TableTd>
            <TableTd>Cell 2-3</TableTd>
          </TableTr>
        </TableBody>
      </>
    ),
  },
};

export const BorderStyles: StoryObj<typeof Table> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>No Borders</h3>
        <Table border={TableBorderEnum.NONE}>
          <TableHead>
            <TableTr>
              <TableTh>Header 1</TableTh>
              <TableTh>Header 2</TableTh>
            </TableTr>
          </TableHead>
          <TableBody>
            <TableTr>
              <TableTd>Cell 1-1</TableTd>
              <TableTd>Cell 1-2</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Cell 2-1</TableTd>
              <TableTd>Cell 2-2</TableTd>
            </TableTr>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3>Horizontal Borders</h3>
        <Table border={TableBorderEnum.HORIZONTAL}>
          <TableHead>
            <TableTr>
              <TableTh>Header 1</TableTh>
              <TableTh>Header 2</TableTh>
            </TableTr>
          </TableHead>
          <TableBody>
            <TableTr>
              <TableTd>Cell 1-1</TableTd>
              <TableTd>Cell 1-2</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Cell 2-1</TableTd>
              <TableTd>Cell 2-2</TableTd>
            </TableTr>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3>Vertical Borders</h3>
        <Table border={TableBorderEnum.VERTICAL}>
          <TableHead>
            <TableTr>
              <TableTh>Header 1</TableTh>
              <TableTh>Header 2</TableTh>
            </TableTr>
          </TableHead>
          <TableBody>
            <TableTr>
              <TableTd>Cell 1-1</TableTd>
              <TableTd>Cell 1-2</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Cell 2-1</TableTd>
              <TableTd>Cell 2-2</TableTd>
            </TableTr>
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3>All Borders</h3>
        <Table border={TableBorderEnum.ALL}>
          <TableHead>
            <TableTr>
              <TableTh>Header 1</TableTh>
              <TableTh>Header 2</TableTh>
            </TableTr>
          </TableHead>
          <TableBody>
            <TableTr>
              <TableTd>Cell 1-1</TableTd>
              <TableTd>Cell 1-2</TableTd>
            </TableTr>
            <TableTr>
              <TableTd>Cell 2-1</TableTd>
              <TableTd>Cell 2-2</TableTd>
            </TableTr>
          </TableBody>
        </Table>
      </div>
    </div>
  ),
};

export default meta;
