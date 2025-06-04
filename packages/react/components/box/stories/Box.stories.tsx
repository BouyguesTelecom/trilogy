import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, BoxContent, BoxFooter, BoxHeader } from '../index';
import { renderBefore } from '../../../../storybook/preview';

import { BoxScreen } from '../../../../../examples/react-template/screens/Box';

const meta = {
  title: 'Box',
  component: Box,
  subcomponents: {
    BoxHeader,
    BoxContent,
    BoxFooter,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Box component is a container that provides a visually consistent way to group content with an optional header and footer.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the box',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
    disabled: {
      description: 'Whether the box is disabled',
      control: 'boolean',
    },
    action: {
      description: 'Action function to execute when the box is clicked',
      action: 'clicked',
    },
  },
} as Meta<typeof Box>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <BoxScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Box> = {
  args: {
    children: <BoxContent>This is a basic box with content</BoxContent>,
  },
};

export const WithHeaderAndFooter: StoryObj<typeof Box> = {
  args: {
    children: (
      <>
        <BoxHeader>Box Header</BoxHeader>
        <BoxContent>Box Content</BoxContent>
        <BoxFooter>Box Footer</BoxFooter>
      </>
    ),
  },
};

export const Disabled: StoryObj<typeof Box> = {
  args: {
    disabled: true,
    children: (
      <>
        <BoxHeader>Disabled Box</BoxHeader>
        <BoxContent>This box is disabled</BoxContent>
      </>
    ),
  },
};

export const Clickable: StoryObj<typeof Box> = {
  args: {
    action: () => alert('Box clicked'),
    children: (
      <>
        <BoxHeader>Clickable Box</BoxHeader>
        <BoxContent>Click this box to trigger an action</BoxContent>
      </>
    ),
  },
};

export default meta;
