import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BoxFooter } from '../footer';
import { BoxContent, Box } from '../index';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Box/BoxFooter',
  component: BoxFooter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The BoxFooter component is used to display a footer within a Box component.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the footer',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof BoxFooter>;

renderBefore(meta);

export const Basic: StoryObj<typeof BoxFooter> = {
  args: {
    children: 'Box Footer',
  },
  render: (args) => (
    <Box>
      <BoxContent>Box content</BoxContent>
      <BoxFooter {...args} />
    </Box>
  ),
};

export const WithActions: StoryObj<typeof BoxFooter> = {
  render: () => (
    <Box>
      <BoxContent>Box content</BoxContent>
      <BoxFooter>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </BoxFooter>
    </Box>
  ),
};

export default meta;
