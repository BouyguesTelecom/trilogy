import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IconName } from '../icon'
import type { InputProp } from './Input'
import InputComponent from './Input'
import {
  InputAutoCapitalize,
  InputAutoCompleteType,
  InputKeyboardAppearance,
  InputKeyboardType,
  InputStatus,
  InputTextContentType,
  InputType,
} from './InputEnum'

const meta: Meta<InputProp> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: [
        'name',
        'label',
        'sample',
        'placeholder',
        'value',
        'defaultValue',
        'help',
        'accessibilityLabel',
        'type',
        'status',
        'disabled',
        'loading',
        'focused',
        'required',
        'readOnly',
        'forceControl',
        'iconNameLeft',
        'iconNameRight',
        'autoCapitalize',
        'autoCompleteType',
        'keyboardStyle',
        'keyboardType',
        'textContentType',
        'minLength',
        'maxLength',
        'min',
        'max',
        'step',
        'keyType',
        'securityGauge',
        'validationRules',
        'patternValidator',
        'customValidator',
        'formatPattern',
        'onChange',
        'onIconClick',
        'onClick',
        'onSubmit',
        'onStatusChange',
        'onFocus',
        'onBlur',
        'onMouseEnter',
        'onMouseLeave',
      ],
    },
    docs: {
      source: {
        type: 'dynamic',
      },
      description: {
        component:
          'A comprehensive input component story covering labels, icons, statuses, formatting, and validation.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Input name',
    },
    label: {
      control: 'text',
      description: 'Label for input',
    },
    sample: {
      control: 'text',
      description: 'Sample text shown under the label',
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
      description: 'Default value',
    },
    help: {
      control: 'text',
      description: 'Help text',
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Accessibility label used when there is no visible label',
    },
    type: {
      control: 'select',
      options: Object.values(InputType),
      description: 'Input type',
    },
    status: {
      control: 'select',
      options: [undefined, ...Object.values(InputStatus)],
      description: 'Input status',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    focused: {
      control: 'boolean',
      description: 'Force focus state',
    },
    required: {
      control: 'boolean',
      description: 'Mark as required',
    },
    readOnly: {
      control: 'boolean',
      description: 'Read-only input',
    },
    forceControl: {
      control: 'boolean',
      description: 'Force controlled value handling',
    },
    iconNameLeft: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Icon displayed on the left',
    },
    iconNameRight: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Icon displayed on the right',
    },
    autoCapitalize: {
      control: 'select',
      options: [undefined, ...Object.values(InputAutoCapitalize)],
      description: 'Auto capitalize behavior',
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
    keyboardStyle: {
      control: 'select',
      options: [undefined, ...Object.values(InputKeyboardAppearance)],
      description: 'Keyboard appearance',
    },
    keyboardType: {
      control: 'select',
      options: [undefined, ...Object.values(InputKeyboardType)],
      description: 'Keyboard type',
    },
    textContentType: {
      control: 'select',
      options: [undefined, ...Object.values(InputTextContentType)],
      description: 'Text content type',
    },
    minLength: {
      control: { type: 'number', min: 0, max: 200, step: 1 },
      description: 'Minimum length',
      table: { type: { summary: 'number' } },
    },
    maxLength: {
      control: { type: 'number', min: 0, max: 200, step: 1 },
      description: 'Maximum length',
      table: { type: { summary: 'number' } },
    },
    min: {
      control: { type: 'number', min: -10000, max: 10000, step: 1 },
      description: 'Minimum value',
      table: { type: { summary: 'number' } },
    },
    max: {
      control: { type: 'number', min: -10000, max: 10000, step: 1 },
      description: 'Maximum value',
      table: { type: { summary: 'number' } },
    },
    step: {
      control: { type: 'number', min: 0, max: 1000, step: 0.1 },
      description: 'Step value',
      table: { type: { summary: 'number' } },
    },
    keyType: {
      control: 'select',
      options: ['done', 'go', 'next', 'search', 'send', 'none', 'default'],
      description: 'Keyboard action key',
    },
    securityGauge: {
      control: 'boolean',
      description: 'Display the security gauge',
    },
    validationRules: {
      control: false,
      description: 'Validation rules used by the security gauge',
    },
    patternValidator: {
      control: false,
      description: 'Regex validator',
    },
    customValidator: {
      control: false,
      description: 'Custom validator',
    },
    formatPattern: {
      control: false,
      description: 'Formatting function applied on change',
    },
    onChange: {
      action: 'changed',
      description: 'Called when the value changes',
    },
    onIconClick: {
      action: 'icon clicked',
      description: 'Called when an icon is clicked',
    },
    onClick: {
      action: 'clicked',
      description: 'Called when the input is clicked',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Called on submit',
    },
    onStatusChange: {
      action: 'status changed',
      description: 'Called when status changes',
    },
    onFocus: {
      action: 'focused',
      description: 'Called on focus',
    },
    onBlur: {
      action: 'blurred',
      description: 'Called on blur',
    },
    onMouseEnter: {
      action: 'mouse entered',
      description: 'Called on mouse enter',
    },
    onMouseLeave: {
      action: 'mouse left',
      description: 'Called on mouse leave',
    },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    testId: { table: { disable: true } },
    autoCorrect: { table: { disable: true } },
  },
  args: {
    name: 'demo-input',
    label: 'Input label',
    sample: 'Sample text',
    placeholder: 'Type here',
    value: 'Hello',
    defaultValue: 'Hello',
    help: 'Helpful hint for the user',
    accessibilityLabel: 'Demo input',
    type: InputType.TEXT,
    status: InputStatus.DEFAULT,
    disabled: false,
    loading: false,
    focused: false,
    required: false,
    readOnly: false,
    forceControl: true,
    iconNameLeft: undefined,
    iconNameRight: undefined,
    autoCapitalize: undefined,
    autoCompleteType: InputAutoCompleteType.OFF,
    keyboardStyle: undefined,
    keyboardType: undefined,
    textContentType: undefined,
    minLength: 0,
    maxLength: 120,
    min: 0,
    max: 100,
    step: 1,
    keyType: 'default',
    securityGauge: false,
  },
}

export default meta

type Story = StoryObj<InputProp>

export const Default: Story = {}

export const SearchWithIcons: Story = {
  args: {
    type: InputType.SEARCH,
    iconNameLeft: IconName.SEARCH,
    iconNameRight: IconName.TIMES,
    placeholder: 'Search for something',
    label: 'Search input',
    sample: 'Search example',
    value: 'query',
    defaultValue: 'query',
  },
}

export const PasswordSecurity: Story = {
  args: {
    type: InputType.PASSWORD,
    securityGauge: true,
    validationRules: {
      length: { min: 8 },
      uppercase: true,
      lowercase: true,
      number: true,
      specialChars: true,
    },
    label: 'Password',
    placeholder: 'Enter a secure password',
    value: 'Trilogy123!',
    defaultValue: 'Trilogy123!',
    iconNameRight: IconName.EYE,
  },
}

export const PhoneFormatting: Story = {
  args: {
    label: 'Phone number',
    placeholder: '06 12 34 56 78',
    value: '0612345678',
    defaultValue: '0612345678',
    formatPattern: (value: string) =>
      value
        .replace(/\D/g, '')
        .replace(/(.{2})/g, '$1 ')
        .trim(),
  },
}

export const CardFormatting: Story = {
  args: {
    label: 'Card number',
    placeholder: '1234 5678 9012 3456',
    value: '1234567890123456',
    defaultValue: '1234567890123456',
    formatPattern: (value: string) =>
      value
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim(),
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    label: 'Readonly input',
    value: 'Read-only content',
    defaultValue: 'Read-only content',
  },
}

export const EmailNativeHints: Story = {
  args: {
    type: InputType.EMAIL,
    label: 'Email address',
    placeholder: 'name@example.com',
    autoCompleteType: InputAutoCompleteType.EMAIL,
    keyboardType: InputKeyboardType.EMAIL_ADDRESS,
    textContentType: InputTextContentType.EMAIL_ADDRESS,
    value: 'hello@example.com',
    defaultValue: 'hello@example.com',
  },
}
