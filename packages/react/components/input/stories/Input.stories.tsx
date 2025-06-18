import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Input } from '../index';
import { InputStatus, InputType } from '../InputEnum';
import { renderBefore } from '../../../../storybook/preview';
import { IconName } from '../../icon';

import { InputScreen } from '../../../../../examples/react-template/screens/Input';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Input component is used to get user input in a text field.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'The label text for the input',
      control: 'text',
    },
    value: {
      description: 'The current value of the input',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text when the input is empty',
      control: 'text',
    },
    name: {
      description: 'The name attribute of the input',
      control: 'text',
    },
    help: {
      description: 'Help text displayed below the input',
      control: 'text',
    },
    type: {
      description: 'The type of input',
      control: 'select',
      options: Object.values(InputType),
    },
    status: {
      description: 'The validation status of the input',
      control: 'select',
      options: Object.values(InputStatus),
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: 'boolean',
    },
    readonly: {
      description: 'Whether the input is read-only',
      control: 'boolean',
    },
    required: {
      description: 'Whether the input is required',
      control: 'boolean',
    },
    loading: {
      description: 'Whether the input is in a loading state',
      control: 'boolean',
    },
    iconName: {
      description: 'Icon to display within the input',
      control: 'select',
      options: Object.values(IconName),
    },
    iconRight: {
      description: 'Icon to display at the right side of the input',
      control: 'select',
      options: Object.values(IconName),
    },
    onChange: {
      description: 'Function called when the input value changes',
      action: 'changed',
    },
    onFocus: {
      description: 'Function called when the input receives focus',
      action: 'focused',
    },
    onBlur: {
      description: 'Function called when the input loses focus',
      action: 'blurred',
    },
    onKeyDown: {
      description: 'Function called when a key is pressed down',
      action: 'key down',
    },
    onKeyUp: {
      description: 'Function called when a key is released',
      action: 'key up',
    },
    onPressEnter: {
      description: 'Function called when the Enter key is pressed',
      action: 'enter pressed',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Input>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <InputScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Input> = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    name: 'username',
  },
};

export const WithValue: StoryObj<typeof Input> = {
  args: {
    label: 'Email',
    value: 'user@example.com',
    name: 'email',
    type: InputType.EMAIL,
  },
};

export const WithHelp: StoryObj<typeof Input> = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    name: 'password',
    type: InputType.PASSWORD,
    help: 'Password must be at least 8 characters long',
  },
};

export const WithIcon: StoryObj<typeof Input> = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    name: 'search',
    type: InputType.SEARCH,
    iconNameLeft: IconName.SEARCH,
  },
};

export const WithIconRight: StoryObj<typeof Input> = {
  args: {
    label: 'Verification Code',
    placeholder: 'Enter verification code',
    name: 'code',
    iconNameRight: IconName.CHECK_CIRCLE,
  },
};

export const WithStatus: StoryObj<typeof Input> = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    name: 'email',
    type: InputType.EMAIL,
    status: InputStatus.ERROR,
    help: 'Please enter a valid email address',
  },
};

export const Success: StoryObj<typeof Input> = {
  args: {
    label: 'Username',
    value: 'validuser',
    name: 'username',
    status: InputStatus.SUCCESS,
    help: 'Username is available',
    iconNameRight: IconName.CHECK_CIRCLE,
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    label: 'Username',
    value: 'currentuser',
    name: 'username',
    disabled: true,
    help: 'Cannot change username',
  },
};

export const ReadOnly: StoryObj<typeof Input> = {
  args: {
    label: 'User ID',
    value: '12345678',
    name: 'userId',
    readOnly: true,
    help: 'Your unique user identifier',
  },
};

export const Required: StoryObj<typeof Input> = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    name: 'fullName',
    required: true,
  },
};

export const Loading: StoryObj<typeof Input> = {
  args: {
    label: 'Username',
    placeholder: 'Checking availability...',
    name: 'username',
    loading: true,
  },
};

export const NumberInput: StoryObj<typeof Input> = {
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    name: 'age',
    type: InputType.NUMBER,
    help: 'Must be 18 or older',
  },
};

export const DateInput: StoryObj<typeof Input> = {
  args: {
    label: 'Birth Date',
    name: 'birthDate',
    type: InputType.DATE,
    help: 'Select your date of birth',
  },
};

export default meta;