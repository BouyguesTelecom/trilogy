import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import SelectComponent from './Select'
import { SelectStatus } from './SelectEnum'
import type { SelectProps } from './SelectProps'
import SelectOption from './option'

SelectComponent.displayName = 'Select'
SelectOption.displayName = 'SelectOption'

const Select = (props: SelectProps): JSX.Element => <SelectComponent {...props} />
Select.displayName = 'Select'

interface SelectStoryArgs {
  select_id: string
  select_name: string
  select_className: string
  select_testId: string
  select_label: string
  select_placeholder: string
  select_help: string
  select_sample: string
  select_selected?: string
  select_status?: SelectStatus
  select_disabled: boolean
  select_required: boolean
  select_readOnly: boolean
  select_custom: boolean
  select_multiple: boolean
  option_one_value: string
  option_one_children: string
  option_one_disabled: boolean
  option_two_value: string
  option_two_children: string
  option_two_disabled: boolean
  option_three_value: string
  option_three_children: string
  option_three_disabled: boolean
}

const meta: Meta<SelectStoryArgs> = {
  title: 'Components/Select',
  component: Select,
  subcomponents: { SelectOption },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    select_id: {
      control: 'text',
      name: 'id',
      description: 'Custom html id',
      table: { category: 'Select' },
    },
    select_name: {
      control: 'text',
      name: 'name',
      description: 'Native select name attribute',
      table: { category: 'Select' },
    },
    select_className: {
      control: 'text',
      name: 'className',
      description: 'Additional CSS classes',
      table: { category: 'Select' },
    },
    select_testId: {
      control: 'text',
      name: 'testId',
      description: 'Testing identifier',
      table: { category: 'Select' },
    },
    select_label: {
      control: 'text',
      name: 'label',
      description: 'Field label',
      table: { category: 'Select' },
    },
    select_placeholder: {
      control: 'text',
      name: 'placeholder',
      description: 'Placeholder text',
      table: { category: 'Select' },
    },
    select_help: {
      control: 'text',
      name: 'help',
      description: 'Help text displayed below the field',
      table: { category: 'Select' },
    },
    select_sample: {
      control: 'text',
      name: 'sample',
      description: 'Sample text displayed below the label',
      table: { category: 'Select' },
    },
    select_selected: {
      control: 'select',
      options: [undefined, 'opt_1', 'opt_2', 'opt_3'],
      name: 'selected',
      description: 'Selected option value',
      table: { category: 'Select' },
    },
    select_status: {
      control: 'select',
      options: [undefined, ...Object.values(SelectStatus)],
      name: 'status',
      description: 'Validation status',
      table: { category: 'Select' },
    },
    select_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable the field',
      table: { category: 'Select' },
    },
    select_required: {
      control: 'boolean',
      name: 'required',
      description: 'Display required marker',
      table: { category: 'Select' },
    },
    select_readOnly: {
      control: 'boolean',
      name: 'readOnly',
      description: 'Read-only mode',
      table: { category: 'Select' },
    },
    select_custom: {
      control: 'boolean',
      name: 'custom',
      description: 'Use custom web select renderer',
      table: { category: 'Select' },
    },
    select_multiple: {
      control: 'boolean',
      name: 'multiple',
      description: 'Enable multiple selection',
      table: { category: 'Select' },
    },
    option_one_value: {
      control: 'text',
      name: 'value',
      description: 'First option value',
      table: { category: 'SelectOption 1' },
    },
    option_one_children: {
      control: 'text',
      name: 'children',
      description: 'First option label',
      table: { category: 'SelectOption 1' },
    },
    option_one_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable first option',
      table: { category: 'SelectOption 1' },
    },
    option_two_value: {
      control: 'text',
      name: 'value',
      description: 'Second option value',
      table: { category: 'SelectOption 2' },
    },
    option_two_children: {
      control: 'text',
      name: 'children',
      description: 'Second option label',
      table: { category: 'SelectOption 2' },
    },
    option_two_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable second option',
      table: { category: 'SelectOption 2' },
    },
    option_three_value: {
      control: 'text',
      name: 'value',
      description: 'Third option value',
      table: { category: 'SelectOption 3' },
    },
    option_three_children: {
      control: 'text',
      name: 'children',
      description: 'Third option label',
      table: { category: 'SelectOption 3' },
    },
    option_three_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable third option',
      table: { category: 'SelectOption 3' },
    },
  },
  args: {
    select_id: 'example-select',
    select_name: 'example-select',
    select_className: '',
    select_testId: '',
    select_label: 'Choose an option',
    select_placeholder: 'Select an option',
    select_help: '',
    select_sample: '',
    select_selected: 'opt_2',
    select_status: undefined,
    select_disabled: false,
    select_required: false,
    select_readOnly: false,
    select_custom: false,
    select_multiple: false,
    option_one_value: 'opt_1',
    option_one_children: 'Option 1',
    option_one_disabled: false,
    option_two_value: 'opt_2',
    option_two_children: 'Option 2',
    option_two_disabled: false,
    option_three_value: 'opt_3',
    option_three_children: 'Option 3',
    option_three_disabled: false,
  },
  render: ({
    select_id,
    select_name,
    select_className,
    select_testId,
    select_label,
    select_placeholder,
    select_help,
    select_sample,
    select_selected,
    select_status,
    select_disabled,
    select_required,
    select_readOnly,
    select_custom,
    select_multiple,
    option_one_value,
    option_one_children,
    option_one_disabled,
    option_two_value,
    option_two_children,
    option_two_disabled,
    option_three_value,
    option_three_children,
    option_three_disabled,
  }) => (
    <SelectComponent
      id={select_id || undefined}
      name={select_name || undefined}
      className={select_className || undefined}
      testId={select_testId || undefined}
      label={select_label || undefined}
      placeholder={select_placeholder || undefined}
      help={select_help || undefined}
      sample={select_sample || undefined}
      selected={select_selected}
      status={select_status}
      disabled={select_disabled}
      required={select_required}
      readOnly={select_readOnly}
      custom={select_custom}
      multiple={select_multiple}
      onChange={() => {}}
    >
      <SelectOption value={option_one_value} disabled={option_one_disabled}>
        {option_one_children}
      </SelectOption>
      <SelectOption value={option_two_value} disabled={option_two_disabled}>
        {option_two_children}
      </SelectOption>
      <SelectOption value={option_three_value} disabled={option_three_disabled}>
        {option_three_children}
      </SelectOption>
    </SelectComponent>
  ),
}

export default meta

type Story = StoryObj<SelectStoryArgs>

export const Default: Story = {}

export const Custom: Story = {
  args: {
    select_custom: true,
  },
}

export const Multiple: Story = {
  args: {
    select_custom: true,
    select_multiple: true,
    select_selected: undefined,
  },
}

export const ErrorState: Story = {
  args: {
    select_status: SelectStatus.ERROR,
    select_help: 'Please select a valid value.',
  },
}

export const Disabled: Story = {
  args: {
    select_disabled: true,
  },
}

export const Playground: Story = {}
