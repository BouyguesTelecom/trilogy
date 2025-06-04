import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../index';
import { renderBefore } from '../../../../storybook/preview';

import { CheckboxScreen } from '../../../../../examples/react-template/screens/Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Checkbox component allows users to select one or multiple items from a set of options.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'The label text displayed next to the checkbox',
      control: 'text',
    },
    checked: {
      description: 'Whether the checkbox is checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Whether the checkbox is disabled',
      control: 'boolean',
    },
    readonly: {
      description: 'Whether the checkbox is read-only',
      control: 'boolean',
    },
    required: {
      description: 'Whether the checkbox is required',
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
} as Meta<typeof Checkbox>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <CheckboxScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Accept terms and conditions',
    name: 'terms',
    value: 'accepted',
  },
};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Selected option',
    name: 'option',
    value: 'selected',
    checked: true,
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Unavailable option',
    name: 'unavailable',
    value: 'unavailable',
    disabled: true,
  },
};

export const ReadOnly: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Read-only option',
    name: 'readonly',
    value: 'readonly',
    readonly: true,
    checked: true,
  },
};

export const Required: StoryObj<typeof Checkbox> = {
  args: {
    label: 'Required option',
    name: 'required',
    value: 'required',
    required: true,
  },
};

export const WithChildren: StoryObj<typeof Checkbox> = {
  args: {
    name: 'custom',
    value: 'custom',
    children: (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        Custom <strong style={{ marginLeft: '5px', marginRight: '5px' }}>formatted</strong> content
      </span>
    ),
  },
};

export default meta;