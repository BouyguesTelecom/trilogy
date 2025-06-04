import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../index';
import { BadgePositionEnum } from '../BadgeEnum';
import { BadgeVariant } from '../BadgeProps';

import { renderBefore } from '../../../../storybook/preview';
import { StatusState } from '../../../objects';

import { BadgeScreen } from '../../../../../examples/react-template/screens/Badge';

const meta = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Badge component is used to highlight and display information, notifications, or statuses.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'The visual style of the badge',
      control: { type: 'inline-radio' },
      options: [
        BadgeVariant.FILLED,
        BadgeVariant.OUTLINED,
      ],
    },
    position: {
      description: 'The position of the badge relative to its container',
      control: { type: 'inline-radio' },
      options: [
        BadgePositionEnum.TOP_RIGHT,
        BadgePositionEnum.TOP_LEFT,
        BadgePositionEnum.BOTTOM_RIGHT,
        BadgePositionEnum.BOTTOM_LEFT,
      ],
    },
    status: {
      description: 'The status color of the badge',
      control: { type: 'inline-radio' },
      options: [
        StatusState.PRIMARY,
        StatusState.SECONDARY,
        StatusState.SUCCESS,
        StatusState.WARNING,
        StatusState.ERROR,
        StatusState.INFO,
      ],
    },
    children: {
      description: 'The content of the badge',
      control: 'text',
    },
  },
} as Meta<typeof Badge>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: ({ ...args }) => {
    return <BadgeScreen />;
  },
};

// Basic examples
export const Basic: StoryObj<typeof Badge> = {
  args: {
    children: '1',
  },
};

export const WithStatus: StoryObj<typeof Badge> = {
  args: {
    children: '3',
    status: StatusState.ERROR,
  },
};

export const Outlined: StoryObj<typeof Badge> = {
  args: {
    children: 'New',
    variant: BadgeVariant.OUTLINED,
  },
};

export const Positioned: StoryObj<typeof Badge> = {
  args: {
    children: '4',
    position: BadgePositionEnum.TOP_RIGHT,
  },
  render: (args) => (
    <div style={{ position: 'relative', width: 50, height: 50, background: '#f0f0f0' }}>
      <Badge {...args} />
    </div>
  ),
};

export default meta;
