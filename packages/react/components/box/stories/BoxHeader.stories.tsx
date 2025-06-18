import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BoxHeader } from '../header';
import { Box } from '../index';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Box/BoxHeader',
  component: BoxHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The BoxHeader component is used to display a header within a Box component.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the header',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof BoxHeader>;

renderBefore(meta);

export const Basic: StoryObj<typeof BoxHeader> = {
  args: {
    children: 'Box Header',
  },
  render: (args) => (
    <Box>
      <BoxHeader {...args} />
    </Box>
  ),
};

export const WithCustomContent: StoryObj<typeof BoxHeader> = {
  render: () => (
    <Box>
      <BoxHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Header Title</span>
          <button>Action</button>
        </div>
      </BoxHeader>
    </Box>
  ),
};

export default meta;
