import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BoxContent } from '../content';
import { Box } from '../index';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Box/BoxContent',
  component: BoxContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The BoxContent component is used to display the main content within a Box component.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content to display',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof BoxContent>;

renderBefore(meta);

export const Basic: StoryObj<typeof BoxContent> = {
  args: {
    children: 'Box content goes here. This is the main content area of the Box component.',
  },
  render: (args) => (
    <Box>
      <BoxContent {...args} />
    </Box>
  ),
};

export const WithRichContent: StoryObj<typeof BoxContent> = {
  render: () => (
    <Box>
      <BoxContent>
        <h3>Rich Content Example</h3>
        <p>You can include any content inside the BoxContent component.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </BoxContent>
    </Box>
  ),
};

export default meta;
