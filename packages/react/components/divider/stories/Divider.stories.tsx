import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { IconName } from '../../icon';

import { DividerScreen } from '../../../../../examples/react-template/screens/Divider';

const meta = {
  title: 'Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Divider component is used to create a horizontal line that separates content.',
      },
    },
  },
  argTypes: {
    content: {
      description: 'Text content to display in the middle of the divider',
      control: 'text',
    },
    unboxed: {
      description: 'Whether the divider should be displayed without its container box styling',
      control: 'boolean',
    },
    iconName: {
      description: 'Icon to display in the middle of the divider',
      control: 'select',
      options: Object.values(IconName),
    },
    inverted: {
      description: 'Whether to use inverted colors for the divider',
      control: 'boolean',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Divider>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <DividerScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Divider> = {
  args: {},
  render: () => (
    <div style={{ padding: '20px' }}>
      <p>Content above divider</p>
      <Divider />
      <p>Content below divider</p>
    </div>
  ),
};

export const WithContent: StoryObj<typeof Divider> = {
  args: {
    content: 'Section Divider',
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <p>First section content</p>
      <Divider {...args} />
      <p>Second section content</p>
    </div>
  ),
};

export const WithIcon: StoryObj<typeof Divider> = {
  args: {
    iconName: IconName.BELL,
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <p>First section content</p>
      <Divider {...args} />
      <p>Second section content</p>
    </div>
  ),
};

export const Unboxed: StoryObj<typeof Divider> = {
  args: {
    unboxed: true,
  },
  render: (args) => (
    <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
      <p>This is a container with an unboxed divider</p>
      <Divider {...args} />
      <p>The divider above doesn't have its own container styling</p>
    </div>
  ),
};

export const Inverted: StoryObj<typeof Divider> = {
  args: {
    inverted: true,
    content: 'Inverted Divider',
  },
  render: (args) => (
    <div style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
      <p>Content in dark container</p>
      <Divider {...args} />
      <p>More content in dark container</p>
    </div>
  ),
};

export default meta;