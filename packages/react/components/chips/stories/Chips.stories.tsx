import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Chips } from '../index';
import { renderBefore } from '../../../../storybook/preview';

import { ChipsScreen } from '../../../../../examples/react-template/screens/Chips';

const meta = {
  title: 'Chips',
  component: Chips,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Chips component represents a compact element that can be used for input, filtering, or selection.',
      },
    },
  },
  argTypes: {
    active: {
      description: 'Whether the chip is in an active/selected state',
      control: 'boolean',
    },
    disabled: {
      description: 'Whether the chip is disabled',
      control: 'boolean',
    },
    onClick: {
      description: 'Function called when the chip is clicked',
      action: 'clicked',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
    children: {
      description: 'The content of the chip',
      control: 'text',
    },
  },
} as Meta<typeof Chips>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <ChipsScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Chips> = {
  args: {
    children: 'Basic Chip',
  },
};

export const Active: StoryObj<typeof Chips> = {
  args: {
    children: 'Selected',
    active: true,
  },
};

export const Disabled: StoryObj<typeof Chips> = {
  args: {
    children: 'Unavailable',
    disabled: true,
  },
};

export const WithIcon: StoryObj<typeof Chips> = {
  args: {
    children: (
      <>
        <span style={{ marginRight: '4px' }}>🏷️</span>
        <span>Tag</span>
      </>
    ),
  },
};

export const ActiveWithIcon: StoryObj<typeof Chips> = {
  args: {
    children: (
      <>
        <span style={{ marginRight: '4px' }}>✓</span>
        <span>Selected Option</span>
      </>
    ),
    active: true,
  },
};

export default meta;