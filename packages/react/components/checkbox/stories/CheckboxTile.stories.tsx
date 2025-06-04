import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { CheckboxTile } from '../index';
import { renderBefore } from '../../../../storybook/preview';
import { IconName } from '../../icon';

const meta = {
  title: 'Checkbox/CheckboxTile',
  component: CheckboxTile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The CheckboxTile component displays a checkbox option as a visual tile with an icon and description.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'The label text displayed for the checkbox tile',
      control: 'text',
    },
    description: {
      description: 'Additional descriptive text for the checkbox tile',
      control: 'text',
    },
    icon: {
      description: 'Icon to display in the checkbox tile',
      control: 'select',
      options: Object.values(IconName),
    },
    checked: {
      description: 'Whether the checkbox tile is checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Whether the checkbox tile is disabled',
      control: 'boolean',
    },
    readonly: {
      description: 'Whether the checkbox tile is read-only',
      control: 'boolean',
    },
    horizontal: {
      description: 'Whether to display the checkbox tile in a horizontal layout',
      control: 'boolean',
    },
    name: {
      description: 'The name attribute of the checkbox input',
      control: 'text',
    },
    value: {
      description: 'The value attribute of the checkbox input',
      control: 'text',
    },
    onChange: {
      description: 'Function called when the checkbox state changes',
      action: 'changed',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof CheckboxTile>;

renderBefore(meta);

// Basic examples
export const Basic: StoryObj<typeof CheckboxTile> = {
  args: {
    label: 'Standard Shipping',
    name: 'shipping',
    value: 'standard',
    description: 'Delivery in 5-7 business days',
    icon: IconName.BELL,
  },
};

export const Checked: StoryObj<typeof CheckboxTile> = {
  args: {
    label: 'Premium Plan',
    name: 'plan',
    value: 'premium',
    description: 'All features included',
    icon: IconName.EYE,
    checked: true,
  },
};

export const Disabled: StoryObj<typeof CheckboxTile> = {
  args: {
    label: 'Enterprise Plan',
    name: 'plan',
    value: 'enterprise',
    description: 'Contact sales for pricing',
    icon: IconName.ALERT,
    disabled: true,
  },
};

export const Horizontal: StoryObj<typeof CheckboxTile> = {
  args: {
    label: 'Express Delivery',
    name: 'delivery',
    value: 'express',
    description: 'Next day delivery guaranteed',
    icon: IconName.TIMES,
    horizontal: true,
  },
};

export const WithoutIcon: StoryObj<typeof CheckboxTile> = {
  args: {
    label: 'Regular Option',
    name: 'option',
    value: 'regular',
    description: 'This is a simple option without an icon',
  },
};

export default meta;