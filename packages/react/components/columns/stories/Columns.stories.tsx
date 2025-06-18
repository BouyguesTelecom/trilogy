import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Columns, Column } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { ColumnWidth, ColumnsGap } from '../ColumnsTypes';

const meta = {
  title: 'Layout/Columns',
  component: Columns,
  subcomponents: {
    Column,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Columns component is a layout component that arranges Column components horizontally with consistent spacing.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Column components to display',
      control: { type: 'object' },
    },
    gap: {
      description: 'The gap between columns',
      control: { type: 'inline-radio' },
      options: Object.values(ColumnsGap),
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Columns>;

renderBefore(meta);

// Basic examples
export const Basic: StoryObj<typeof Columns> = {
  args: {
    gap: ColumnsGap.MEDIUM,
    children: (
      <>
        <Column>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Column 1
          </div>
        </Column>
        <Column>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Column 2
          </div>
        </Column>
        <Column>
          <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            Column 3
          </div>
        </Column>
      </>
    ),
  },
};

export const WithDifferentWidths: StoryObj<typeof Columns> = {
  render: () => (
    <Columns gap={ColumnsGap.LARGE}>
      <Column width={ColumnWidth.ONE_THIRD}>
        <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
          1/3
        </div>
      </Column>
      <Column width={ColumnWidth.TWO_THIRDS}>
        <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
          2/3
        </div>
      </Column>
    </Columns>
  ),
};

export const Different_Gaps: StoryObj<typeof Columns> = {
  render: () => (
    <>
      <h3>Small Gap</h3>
      <Columns gap={ColumnsGap.SMALL}>
        {[1, 2, 3].map(i => (
          <Column key={i}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
              Column {i}
            </div>
          </Column>
        ))}
      </Columns>
      
      <h3 style={{ marginTop: '20px' }}>Medium Gap</h3>
      <Columns gap={ColumnsGap.MEDIUM}>
        {[1, 2, 3].map(i => (
          <Column key={i}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
              Column {i}
            </div>
          </Column>
        ))}
      </Columns>
      
      <h3 style={{ marginTop: '20px' }}>Large Gap</h3>
      <Columns gap={ColumnsGap.LARGE}>
        {[1, 2, 3].map(i => (
          <Column key={i}>
            <div style={{ background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
              Column {i}
            </div>
          </Column>
        ))}
      </Columns>
    </>
  ),
};

export default meta;
