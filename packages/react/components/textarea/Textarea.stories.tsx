import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IconName } from '../icon'
import {
  InputAutoCapitalize,
  InputAutoCompleteType,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputStatus,
  InputTextContentType,
} from '../input/InputEnum'
import TextareaComponent from './Textarea'
import type { TextareaProps } from './TextareaProps'

TextareaComponent.displayName = 'Textarea'

const meta: Meta<TextareaProps> = {
  title: 'Components/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['ref', 'customHeight'],
      include: [
        'id',
        'className',
        'testId',
        'name',
        'label',
        'sample',
        'help',
        'placeholder',
        'defaultValue',
        'value',
        'accessibilityLabel',
        'disabled',
        'required',
        'rows',
        'minLength',
        'maxLength',
        'status',
        'iconNameLeft',
        'iconNameRight',
        'keyboardStyle',
        'autoCapitalize',
        'autoCorrect',
        'autoCompleteType',
        'textContentType',
        'keyboardType',
        'customHeight',
        'onChange',
      ],
    },
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Custom html id',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    testId: {
      control: 'text',
      description: 'Testing identifier',
    },
    name: {
      control: 'text',
      description: 'Textarea name',
    },
    label: {
      control: 'text',
      description: 'Label displayed above the textarea',
    },
    sample: {
      control: 'text',
      description: 'Sample text shown below the label',
    },
    help: {
      control: 'text',
      description: 'Help text shown below the field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Controlled value',
    },
    defaultValue: {
      control: 'text',
      description: 'Initial value',
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Accessibility label used when there is no visible label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable textarea',
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required',
    },
    rows: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
      description: 'Number of visible text lines',
      table: { type: { summary: 'number' } },
    },
    minLength: {
      control: { type: 'number', min: 0, max: 500, step: 1 },
      description: 'Minimum number of characters',
      table: { type: { summary: 'number' } },
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 500, step: 1 },
      description: 'Maximum number of characters',
      table: { type: { summary: 'number' } },
    },
    status: {
      control: 'select',
      options: [undefined, ...Object.values(InputStatus)],
      description: 'Validation status',
    },
    iconNameLeft: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Left icon name',
    },
    iconNameRight: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Right icon name',
    },
    keyboardStyle: {
      control: 'select',
      options: [undefined, ...Object.values(InputKeyboardAppearance)],
      description: 'Keyboard appearance',
    },
    autoCapitalize: {
      control: 'select',
      options: [undefined, ...Object.values(InputAutoCapitalize)],
      description: 'Auto capitalize behavior',
    },
    autoCorrect: {
      control: 'boolean',
      description: 'Enable auto-correction',
    },
    autoCompleteType: {
      control: 'select',
      options: [
        undefined,
        InputAutoCompleteType.OFF,
        InputAutoCompleteType.EMAIL,
        InputAutoCompleteType.USERNAME,
        InputAutoCompleteType.NEW_PASSWORD,
        InputAutoCompleteType.CURRENT_PASSWORD,
        InputAutoCompleteType.ONE_TIME_CODE,
        InputAutoCompleteType.NAME,
        InputAutoCompleteType.GIVEN_NAME,
        InputAutoCompleteType.FAMILY_NAME,
        InputAutoCompleteType.POSTAL_CODE,
        InputAutoCompleteType.TEL,
        InputAutoCompleteType.URL,
      ],
      description: 'Autocomplete hint',
    },
    textContentType: {
      control: 'select',
      options: [undefined, ...Object.values(InputTextContentType)],
      description: 'Text content type',
    },
    keyboardType: {
      control: 'select',
      options: [undefined, ...Object.values(InputKeyboardType)],
      description: 'Keyboard type',
    },
    onChange: {
      control: false,
      description: 'Called when value changes',
    },
    ref: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    id: '',
    className: '',
    testId: '',
    name: 'message',
    label: 'Message',
    sample: '',
    help: '',
    placeholder: 'Write your message',
    value: undefined,
    defaultValue: '',
    accessibilityLabel: '',
    disabled: false,
    required: false,
    rows: 4,
    minLength: 0,
    maxLength: 500,
    status: undefined,
    iconNameLeft: undefined,
    iconNameRight: undefined,
    keyboardStyle: undefined,
    autoCapitalize: undefined,
    autoCorrect: false,
    autoCompleteType: undefined,
    textContentType: undefined,
    keyboardType: undefined,
  },
  render: (args) => <TextareaComponent {...args} onChange={() => {}} />,
}

export default meta

type Story = StoryObj<TextareaProps>

export const Default: Story = {}

export const WithHelp: Story = {
  args: {
    help: 'Use this field to provide additional details.',
  },
}

export const ErrorState: Story = {
  args: {
    status: InputStatus.ERROR,
    help: 'This field contains an error.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Textarea content',
  },
}

export const WithIcons: Story = {
  args: {
    iconNameLeft: IconName.SEARCH,
    iconNameRight: IconName.CHECK,
  },
}

export const WithCounter: Story = {
  args: {
    maxLength: 120,
    defaultValue: 'This textarea displays a live character counter.',
  },
}

export const Required: Story = {
  args: {
    required: true,
  },
}

export const Playground: Story = {}
