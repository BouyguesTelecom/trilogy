import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CheckboxComponent from './Checkbox'
import type { CheckboxProps } from './CheckboxProps'
import CheckboxList from './list/CheckboxList'
import type { CheckboxListWebProps } from './list/CheckboxListProps'

CheckboxComponent.displayName = 'Checkbox'
CheckboxList.displayName = 'CheckboxList'

const Checkbox = (props: CheckboxProps & { children?: React.ReactNode }): JSX.Element => (
  <CheckboxComponent {...props} />
)
Checkbox.displayName = 'Checkbox'

interface CheckboxStoryArgs extends CheckboxProps, Omit<CheckboxListWebProps, 'children'> {
  label: string
  checkbox_label: string
  checkbox_checked: boolean
  checkbox_disabled: boolean
  checkbox_readonly: boolean
  wrapper_enabled: boolean
  wrapper_label: string
}

const meta: Meta<CheckboxStoryArgs> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: { CheckboxList },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    checkbox_label: {
      control: 'text',
      name: 'label',
      description: 'Checkbox label text',
      table: { category: 'Checkbox' },
    },
    checkbox_checked: {
      control: 'boolean',
      name: 'checked',
      description: 'Checked state',
      table: { category: 'Checkbox' },
    },
    checkbox_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disabled state',
      table: { category: 'Checkbox' },
    },
    checkbox_readonly: {
      control: 'boolean',
      name: 'readonly',
      description: 'Read-only state',
      table: { category: 'Checkbox' },
    },
    wrapper_enabled: {
      control: 'boolean',
      name: 'enabled',
      description: 'Use CheckboxList wrapper (optional)',
      table: { category: 'CheckboxList' },
    },
    wrapper_label: {
      control: 'text',
      name: 'label',
      description: 'CheckboxList group label',
      table: { category: 'CheckboxList' },
    },
    verticalDesktop: {
      control: 'boolean',
      name: 'verticalDesktop',
      description: 'Vertical layout on desktop',
      table: { category: 'CheckboxList' },
    },
    horizontalMobile: {
      control: 'boolean',
      name: 'horizontalMobile',
      description: 'Horizontal layout on mobile',
      table: { category: 'CheckboxList' },
    },
  },
  args: {
    checkbox_label: 'I agree to the terms',
    checkbox_checked: false,
    checkbox_disabled: false,
    checkbox_readonly: false,
    wrapper_enabled: false,
    wrapper_label: '',
    verticalDesktop: false,
    horizontalMobile: false,
  },
  render: ({
    checkbox_label,
    checkbox_checked,
    checkbox_disabled,
    checkbox_readonly,
    wrapper_enabled,
    wrapper_label,
    verticalDesktop,
    horizontalMobile,
  }) => {
    const checkboxNode = (
      <CheckboxComponent
        label={checkbox_label}
        checked={checkbox_checked}
        disabled={checkbox_disabled}
        readonly={checkbox_readonly}
        onChange={() => {}}
      />
    )

    if (!wrapper_enabled) {
      return checkboxNode
    }

    return (
      <CheckboxList label={wrapper_label} verticalDesktop={verticalDesktop} horizontalMobile={horizontalMobile}>
        {checkboxNode}
      </CheckboxList>
    )
  },
}

export default meta

type Story = StoryObj<CheckboxStoryArgs>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    checkbox_checked: true,
  },
}

export const Disabled: Story = {
  args: {
    checkbox_disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    checkbox_readonly: true,
    checkbox_checked: true,
  },
}

export const WithCheckboxList: Story = {
  args: {
    wrapper_enabled: true,
    wrapper_label: 'Select your preferences',
  },
  render: (args) => (
    <CheckboxList label={args.wrapper_label} verticalDesktop={args.verticalDesktop}>
      <CheckboxComponent label='Option 1' onChange={() => {}} />
      <CheckboxComponent label='Option 2' onChange={() => {}} />
      <CheckboxComponent label='Option 3' onChange={() => {}} />
    </CheckboxList>
  ),
}
