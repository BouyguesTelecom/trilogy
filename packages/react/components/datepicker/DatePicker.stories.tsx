import type { Meta, StoryObj } from '@storybook/react'
import type { DatePickerProps } from './DatePickerProps'
import { DatePicker } from './index'

const meta: Meta<DatePickerProps> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
    controls: {
      exclude: ['name', 'id',' className','testId'],
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Selected date value (format: YYYY-MM-DD)',
      table: { category: 'Main' },
    },
    minDate: {
      control: 'text',
      description: 'Minimum selectable date (format: YYYY-MM-DD)',
      table: { category: 'Main' },
    },
    maxDate: {
      control: 'text',
      description: 'Maximum selectable date (format: YYYY-MM-DD)',
      table: { category: 'Main' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled DatePicker',
      table: { category: 'State' },
    },
    // disabledDates is not controllable
    // onChange is not controllable
    label: {
      control: 'text',
      description: 'Label text for DatePicker',
      table: { category: 'Main' },
    },
    sample: {
      control: 'text',
      description: 'Example text shown below the label',
      table: { category: 'Main' },
    },
    name: {
      control: 'text',
      description: 'Name attribute',
      table: { category: 'Main' },
    },
    help: {
      control: 'text',
      description: 'Help text shown below the field',
      table: { category: 'Main' },
    },
    required: {
      control: 'boolean',
      description: 'Required field',
      table: { category: 'Validation' },
    },
    status: {
      control: 'select',
      options: ['success', 'warning', 'error', 'default'],
      description: 'DatePicker status',
      table: { category: 'Validation' },
    },
    onChange: { table: { disable: true } },
    disabledDates: { table: { disable: true } },
  },
}

export default meta

export const Default: StoryObj<DatePickerProps> = {
  args: {
    value: '2026-05-15',
    minDate: '2026-01-01',
    maxDate: '2026-12-31',
    label: 'Date',
    help: 'Pick a date',
    required: false,
    status: 'default',
    disabled: false,
    sample: 'Sample text',
    name: 'date-picker',
  },
}

export const WithDisabledDates: StoryObj<DatePickerProps> = {
  args: {
    ...Default.args,
    disabledDates: [new Date('2026-05-20'), new Date('2026-05-21')],
  },
}

export const Disabled: StoryObj<DatePickerProps> = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const Required: StoryObj<DatePickerProps> = {
  args: {
    ...Default.args,
    required: true,
  },
}
