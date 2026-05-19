import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import RadioComponent from './Radio'
import type { RadioProps } from './RadioProps'
import RadioList from './list/RadioList'
import type { RadioListWebProps } from './list/RadioListProps'

RadioComponent.displayName = 'Radio'
RadioList.displayName = 'RadioList'
Object.defineProperty(RadioComponent, 'name', { value: 'Radio' })

const Radio = (props: RadioProps & { children?: React.ReactNode }): JSX.Element => <RadioComponent {...props} />
Radio.displayName = 'Radio'

interface RadioStoryArgs extends RadioProps, Omit<RadioListWebProps, 'children'> {
  label: string
  radio_label: string
  radio_checked: boolean
  radio_disabled: boolean
  radio_readonly: boolean
  radio_name: string
  radio_value: string
  wrapper_enabled: boolean
  wrapper_label: string
}

const meta: Meta<RadioStoryArgs> = {
  title: 'Components/Radio',
  component: Radio,
  subcomponents: { RadioList },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    radio_label: {
      control: 'text',
      name: 'label',
      description: 'Radio label text',
      table: { category: 'Radio' },
    },
    radio_checked: {
      control: 'boolean',
      name: 'checked',
      description: 'Checked state',
      table: { category: 'Radio' },
    },
    radio_disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disabled state',
      table: { category: 'Radio' },
    },
    radio_readonly: {
      control: 'boolean',
      name: 'readonly',
      description: 'Read-only state',
      table: { category: 'Radio' },
    },
    radio_name: {
      control: 'text',
      name: 'name',
      description: 'Radio group name',
      table: { category: 'Radio' },
    },
    radio_value: {
      control: 'text',
      name: 'value',
      description: 'Radio value',
      table: { category: 'Radio' },
    },
    wrapper_enabled: {
      control: 'boolean',
      name: 'enabled',
      description: 'Use RadioList wrapper (optional)',
      table: { category: 'RadioList' },
    },
    wrapper_label: {
      control: 'text',
      name: 'label',
      description: 'RadioList group label',
      table: { category: 'RadioList' },
    },
    verticalDesktop: {
      control: 'boolean',
      name: 'verticalDesktop',
      description: 'Vertical layout on desktop',
      table: { category: 'RadioList' },
    },
    horizontalMobile: {
      control: 'boolean',
      name: 'horizontalMobile',
      description: 'Horizontal layout on mobile',
      table: { category: 'RadioList' },
    },
  },
  args: {
    radio_label: 'I prefer this option',
    radio_checked: false,
    radio_disabled: false,
    radio_readonly: false,
    radio_name: 'contact-method',
    radio_value: 'email',
    wrapper_enabled: false,
    wrapper_label: '',
    verticalDesktop: false,
    horizontalMobile: false,
  },
  render: ({
    radio_label,
    radio_checked,
    radio_disabled,
    radio_readonly,
    radio_name,
    radio_value,
    wrapper_enabled,
    wrapper_label,
    verticalDesktop,
    horizontalMobile,
  }) => {
    const radioNode = (
      <RadioComponent
        label={radio_label}
        checked={radio_checked}
        disabled={radio_disabled}
        readonly={radio_readonly}
        name={radio_name}
        value={radio_value}
        onChange={() => {}}
      />
    )

    if (!wrapper_enabled) {
      return radioNode
    }

    return (
      <RadioList label={wrapper_label} verticalDesktop={verticalDesktop} horizontalMobile={horizontalMobile}>
        {radioNode}
      </RadioList>
    )
  },
}

export default meta

type Story = StoryObj<RadioStoryArgs>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    radio_checked: true,
  },
}

export const Disabled: Story = {
  args: {
    radio_disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    radio_readonly: true,
    radio_checked: true,
  },
}

export const WithRadioList: Story = {
  args: {
    wrapper_enabled: true,
    wrapper_label: 'Select your preferences',
  },
  render: (args) => (
    <RadioList
      label={args.wrapper_label}
      verticalDesktop={args.verticalDesktop}
      horizontalMobile={args.horizontalMobile}
    >
      <RadioComponent name='radio-list-group' label='Option 1' value='one' checked onChange={() => {}} />
      <RadioComponent name='radio-list-group' label='Option 2' value='two' onChange={() => {}} />
      <RadioComponent name='radio-list-group' label='Option 3' value='three' onChange={() => {}} />
    </RadioList>
  ),
}
