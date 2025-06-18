import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Column } from '../column';
import { Columns } from '../index';
import { ColumnWidth, ColumnsGap } from '../ColumnsTypes';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Layout/Column',
  component: Column,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Column component is used within a Columns layout to create a responsive column structure.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content to display inside the column',
      control: { type: 'object' },
    },
    width: {
      description: 'The width of the column',
      control: { type: 'inline-radio' },
      options: Object.values(ColumnWidth),
    },
    offset: {
      description: 'The offset of the column',
      control: { type: 'inline-radio' },
      options: [undefined, ...Object.values(ColumnWidth)],
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Column>;

renderBefore(meta);

export const Basic: StoryObj<typeof Column> = {
  args: {
    width: ColumnWidth.FULL,
    children: (
      <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        Full Width Column
      </div>
    ),
  },
  render: (args) => (
    <Columns gap={ColumnsGap.MEDIUM}>
      <Column {...args} />
    </Columns>
  ),
};

export const HalfWidth: StoryObj<typeof Column> = {
  args: {
    width: ColumnWidth.HALF,
    children: (
      <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        Half Width Column
      </div>
    ),
  },
  render: (args) => (
    <Columns gap={ColumnsGap.MEDIUM}>
      <Column {...args} />
      <Column width={ColumnWidth.HALF}>
        <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
          Another Half Width Column
        </div>
      </Column>
    </Columns>
  ),
};

export const WithOffset: StoryObj<typeof Column> = {
  args: {
    width: ColumnWidth.HALF,
    offset: ColumnWidth.ONE_QUARTER,
    children: (
      <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        Half Width Column with Quarter Offset
      </div>
    ),
  },
  render: (args) => (
    <Columns gap={ColumnsGap.MEDIUM}>
      <Column {...args} />
    </Columns>
  ),
};

export const ColumnWidths: StoryObj<typeof Column> = {
  render: () => (
    <>
      <Columns gap={ColumnsGap.MEDIUM}>
        <Column width={ColumnWidth.FULL}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Full Width
          </div>
        </Column>
      </Columns>
      
      <Columns gap={ColumnsGap.MEDIUM} style={{ marginTop: '20px' }}>
        <Column width={ColumnWidth.HALF}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Half
          </div>
        </Column>
        <Column width={ColumnWidth.HALF}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Half
          </div>
        </Column>
      </Columns>
      
      <Columns gap={ColumnsGap.MEDIUM} style={{ marginTop: '20px' }}>
        <Column width={ColumnWidth.ONE_THIRD}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            One Third
          </div>
        </Column>
        <Column width={ColumnWidth.ONE_THIRD}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            One Third
          </div>
        </Column>
        <Column width={ColumnWidth.ONE_THIRD}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            One Third
          </div>
        </Column>
      </Columns>
      
      <Columns gap={ColumnsGap.MEDIUM} style={{ marginTop: '20px' }}>
        <Column width={ColumnWidth.ONE_QUARTER}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            1/4
          </div>
        </Column>
        <Column width={ColumnWidth.ONE_QUARTER}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            1/4
          </div>
        </Column>
        <Column width={ColumnWidth.ONE_QUARTER}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            1/4
          </div>
        </Column>
        <Column width={ColumnWidth.ONE_QUARTER}>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            1/4
          </div>
        </Column>
      </Columns>
    </>
  ),
};

export default meta;
