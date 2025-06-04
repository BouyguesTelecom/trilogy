import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Select, SelectOption } from '../index';
import { renderBefore } from '../../../../storybook/preview';

import { SelectScreen } from '../../../../../examples/react-template/screens/Select';

const meta = {
  title: 'Select',
  component: Select,
  subcomponents: {
    SelectOption,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Select component creates a dropdown menu for selecting a value from a list of options.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'SelectOption components to display',
      control: { type: 'object' },
    },
    placeholder: {
      description: 'Placeholder text when no option is selected',
      control: 'text',
    },
    value: {
      description: 'The currently selected value',
      control: 'text',
    },
    onChange: {
      description: 'Function called when a selection is made',
      action: 'changed',
    },
    label: {
      description: 'Label text for the select field',
      control: 'text',
    },
    disabled: {
      description: 'Whether the select is disabled',
      control: 'boolean',
    },
    error: {
      description: 'Error message to display',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Select>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <SelectScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Select> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    
    return (
      <Select 
        placeholder="Select an option"
        value={value}
        onChange={setValue}
      >
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    );
  },
};

export const WithLabel: StoryObj<typeof Select> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    
    return (
      <Select 
        label="Select with Label"
        placeholder="Select an option"
        value={value}
        onChange={setValue}
      >
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    );
  },
};

export const WithError: StoryObj<typeof Select> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    
    return (
      <Select 
        label="Select with Error"
        placeholder="Select an option"
        value={value}
        onChange={setValue}
        error="Please select a valid option"
      >
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    );
  },
};

export const Disabled: StoryObj<typeof Select> = {
  render: () => (
    <Select 
      label="Disabled Select"
      placeholder="Cannot select"
      disabled
    >
      <SelectOption value="option1">Option 1</SelectOption>
      <SelectOption value="option2">Option 2</SelectOption>
      <SelectOption value="option3">Option 3</SelectOption>
    </Select>
  ),
};

export const PreSelected: StoryObj<typeof Select> = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('option2');
    
    return (
      <Select 
        label="Pre-selected"
        placeholder="Select an option"
        value={value}
        onChange={setValue}
      >
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
    );
  },
};

export default meta;
