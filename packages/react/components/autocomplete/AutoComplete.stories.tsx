import { IconName } from '@/components/icon'
import { InputStatus, InputType } from '@/components/input/InputEnum'
import { Text } from '@/components/text'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import AutoComplete from './AutoComplete'
import { AutoCompletePropsWeb, Item } from './AutoCompleteProps'

interface CustomData {
  info: number
}

const meta: Meta<AutoCompletePropsWeb> = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty',
    },
    value: {
      control: 'text',
      description: 'Current input value',
    },
    defaultValue: {
      control: 'text',
      description: 'Initial input value',
    },
    sample: {
      control: 'text',
      description: 'Sample text displayed for demonstration',
    },
    name: {
      control: 'text',
      description: 'Input field name attribute',
    },
    help: {
      control: 'text',
      description: 'Help text or error message',
    },
    classNameMenu: {
      control: 'text',
      description: 'CSS class for the dropdown menu',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable user interaction with the field',
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required',
    },
    readOnly: {
      control: 'boolean',
      description: 'Make the field read-only',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    focused: {
      control: 'boolean',
      description: 'Focus the input on mount',
    },
    displayMenu: {
      control: 'boolean',
      description: 'Show autocomplete menu by default',
    },
    absoluteMenu: {
      control: 'boolean',
      description: 'Position menu with absolute positioning',
    },
    fullwidthMenu: {
      control: 'boolean',
      description: 'Make menu full width of the input',
    },
    forceControl: {
      control: 'boolean',
      description: 'Force controlled component behavior',
    },
    securityGauge: {
      control: 'boolean',
      description: 'Show security strength indicator',
    },
    type: {
      control: 'select',
      options: Object.values(InputType),
      description: 'Input field type',
    },
    status: {
      control: 'select',
      options: [undefined, ...Object.values(InputStatus)],
      description: 'Input field status (success, warning, error, etc.)',
    },
    iconNameLeft: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Icon displayed on the left side',
    },
    iconNameRight: {
      control: 'select',
      options: [undefined, ...Object.values(IconName)],
      description: 'Icon displayed on the right side',
    },
    minLength: {
      control: 'number',
      description: 'Minimum number of characters',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters',
    },
    min: {
      control: 'number',
      description: 'Minimum value (for number type)',
    },
    max: {
      control: 'number',
      description: 'Maximum value (for number type)',
    },
    step: {
      control: 'number',
      description: 'Step value (for number type)',
    },
    debounceSuggestionsTimeout: {
      control: 'number',
      description: 'Debounce timeout for suggestions in milliseconds',
    },

    data: { table: { disable: true } },
    children: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onItemSelected: { table: { disable: true } },
    onIconClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    getSuggestions: { table: { disable: true } },
    matching: { table: { disable: true } },
    onStatusChange: { table: { disable: true } },
    customValidator: { table: { disable: true } },
    patternValidator: { table: { disable: true } },
    validationRules: { table: { disable: true } },
    securityRules: { table: { disable: true } },
    formatPattern: { table: { disable: true } },
    onMouseEnter: { table: { disable: true } },
    onMouseLeave: { table: { disable: true } },
    keyboardStyle: { table: { disable: true } },
    autoCapitalize: { table: { disable: true } },
    autoCorrect: { table: { disable: true } },
    autoCompleteType: { table: { disable: true } },
    textContentType: { table: { disable: true } },
    keyboardType: { table: { disable: true } },
    keyType: { table: { disable: true } },
    onSubmit: { table: { disable: true } },
    onKeyUp: { table: { disable: true } },
    onKeyPress: { table: { disable: true } },
    onClick: { table: { disable: true } },
    id: { table: { disable: true } },
    testId: { table: { disable: true } },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
    accessibilityLabel: { table: { disable: true } },
  },
  args: {
    label: 'AutoComplete',
    placeholder: 'Enter text...',
    value: '',
    defaultValue: '',
    sample: '',
    name: '',
    help: '',
    classNameMenu: '',
    disabled: false,
    required: false,
    readOnly: false,
    loading: false,
    focused: false,
    displayMenu: false,
    absoluteMenu: false,
    fullwidthMenu: false,
    forceControl: false,
    securityGauge: false,
    type: InputType.TEXT,
    status: InputStatus.DEFAULT,
    iconNameLeft: IconName.INFOS_CIRCLE,
    iconNameRight: undefined,
    minLength: 0,
    maxLength: 0,
    min: 0,
    max: 0,
    step: 1,
    debounceSuggestionsTimeout: 300,
  },
}

export default meta
type Story = StoryObj<AutoCompletePropsWeb>

const customData: Item<CustomData>[] = [
  { label: 'name', data: { info: 1 } },
  { label: 'age', data: { info: 2 } },
  { label: 'car', data: { info: 3 } },
  { label: 'test', data: { info: 4 } },
  { label: 'trilogy', data: { info: 5 } },
]

export const CustomData: Story = {
  render: ({ placeholder, disabled, required, iconNameLeft, displayMenu = true, value, label }) => {
    const [inputValue, setInputValue] = React.useState(value || '')

    return (
      <AutoComplete<Item<CustomData>>
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        iconNameLeft={iconNameLeft}
        displayMenu={displayMenu}
        value={inputValue}
        data={customData}
        onChange={(e) => setInputValue(e.inputValue)}
        onItemSelected={(e) => console.log('Item selected:', e)}
        onFocus={(e) => console.log('Focus:', e)}
        onBlur={(e) => console.log('Blur:', e)}
      >
        {(item) => <Text>Custom info: {item.data.info}</Text>}
      </AutoComplete>
    )
  },
}

export const WithGetSuggestions: Story = {
  render: ({ placeholder, disabled, required, iconNameLeft, label }) => {
    const [inputValue, setInputValue] = React.useState('')

    const getSuggestions = async (search: string) => {
      return new Promise<Item<CustomData>[]>((resolve) => {
        setTimeout(() => {
          resolve(customData.filter((item) => item.label.includes(search.toLowerCase())))
        }, 500)
      })
    }

    return (
      <AutoComplete<Item<CustomData>>
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        iconNameLeft={iconNameLeft}
        value={inputValue}
        data={[]}
        getSuggestions={getSuggestions}
        debounceSuggestionsTimeout={300}
        onChange={(e) => setInputValue(e.inputValue)}
        onItemSelected={(e) => console.log('Item selected:', e)}
        onFocus={(e) => console.log('Focus:', e)}
        onBlur={(e) => console.log('Blur:', e)}
      >
        {(item) => (
          <Text>
            Suggestion: {item.label} (info: {item.data.info})
          </Text>
        )}
      </AutoComplete>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <AutoComplete<Item<CustomData>>
        label='Disabled AutoComplete'
        placeholder='This field is disabled'
        disabled={true}
        iconNameLeft={IconName.INFOS_CIRCLE}
        value=''
        data={customData}
        onChange={() => {}}
        onItemSelected={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
      >
        {(item) => <Text>Custom info: {item.data.info}</Text>}
      </AutoComplete>
    )
  },
}

export const ReadOnly: Story = {
  render: () => {
    return (
      <AutoComplete<Item<CustomData>>
        label='ReadOnly AutoComplete'
        placeholder='This field is read-only'
        readOnly={true}
        value='name'
        iconNameLeft={IconName.INFOS_CIRCLE}
        data={customData}
        onChange={() => {}}
        onItemSelected={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
      >
        {(item) => <Text>Custom info: {item.data.info}</Text>}
      </AutoComplete>
    )
  },
}

export const Playground: Story = {
  parameters: {
    controls: {
      include: [
        'label',
        'placeholder',
        'value',
        'defaultValue',
        'sample',
        'disabled',
        'required',
        'readOnly',
        'loading',
        'focused',
        'type',
        'status',
        'iconNameLeft',
        'iconNameRight',
        'help',
        'name',
        'minLength',
        'maxLength',
        'displayMenu',
        'absoluteMenu',
        'fullwidthMenu',
        'classNameMenu',
        'debounceSuggestionsTimeout',
        'forceControl',
        'securityGauge',
      ],
    },
  },
  render: ({
    placeholder,
    disabled,
    required,
    readOnly,
    loading,
    focused,
    iconNameLeft,
    iconNameRight,
    displayMenu,
    value,
    label,
    absoluteMenu,
    fullwidthMenu,
    status,
    type,
    help,
    name,
    minLength,
    maxLength,
    defaultValue,
    sample,
    classNameMenu,
    debounceSuggestionsTimeout,
    forceControl,
    securityGauge,
  }) => {
    const [inputValue, setInputValue] = React.useState(value || '')

    return (
      <AutoComplete<Item<CustomData>>
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        loading={loading}
        focused={focused}
        iconNameLeft={iconNameLeft}
        iconNameRight={iconNameRight}
        displayMenu={displayMenu}
        absoluteMenu={absoluteMenu}
        fullwidthMenu={fullwidthMenu}
        status={status}
        type={type}
        help={help}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        value={inputValue}
        defaultValue={defaultValue}
        sample={sample}
        classNameMenu={classNameMenu}
        debounceSuggestionsTimeout={debounceSuggestionsTimeout}
        forceControl={forceControl}
        securityGauge={securityGauge}
        data={customData}
        onChange={(e) => setInputValue(e.inputValue)}
        onItemSelected={(e) => console.log('Item selected:', e)}
        onFocus={(e) => console.log('Focus:', e)}
        onBlur={(e) => console.log('Blur:', e)}
      >
        {(item) => <Text>Custom info: {item.data.info}</Text>}
      </AutoComplete>
    )
  },
}
