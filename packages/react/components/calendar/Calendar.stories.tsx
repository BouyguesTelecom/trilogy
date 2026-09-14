import type { Meta, StoryObj } from '@storybook/react'
import CalendarComponent from './Calendar'
import { CalendarYearsOrder } from './CalendarEnum'
import type { CalendarProps, ChangeEventCalendar } from './CalendarProps'
import React from 'react'

CalendarComponent.displayName = 'Calendar'

const Calendar = (props: CalendarProps): JSX.Element => <CalendarComponent {...props} />
Calendar.displayName = 'Calendar'

interface CalendarStoryArgs {
  value: ChangeEventCalendar
  minDate: Date
  maxDate: Date
  disabled: boolean
  readOnly: boolean
  disabledDates: Date[]
  yearsOrder: CalendarYearsOrder
}

const meta: Meta<CalendarStoryArgs> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    value: {
      control: 'date',
      name: 'value',
      description: 'Selected date or date range',
      table: { category: 'Calendar' },
    },
    minDate: {
      control: 'date',
      name: 'minDate',
      description: 'Minimum selectable date',
      table: { category: 'Calendar' },
    },
    maxDate: {
      control: 'date',
      name: 'maxDate',
      description: 'Maximum selectable date',
      table: { category: 'Calendar' },
    },
    disabled: {
      control: 'boolean',
      name: 'disabled',
      description: 'Disable the calendar',
      table: { category: 'Calendar' },
    },
    readOnly: {
      control: 'boolean',
      name: 'readOnly',
      description: 'Read-only calendar',
      table: { category: 'Calendar' },
    },
    disabledDates: {
      control: 'object',
      name: 'disabledDates',
      description: 'List of disabled dates',
      table: { category: 'Calendar' },
    },
    yearsOrder: {
      control: 'select',
      options: [CalendarYearsOrder.ASC, CalendarYearsOrder.DESC],
      name: 'yearsOrder',
      description: 'Order of years in the year selector (asc: oldest to most recent, desc: most recent to oldest)',
      table: { category: 'Calendar' },
    },
  },
  args: {
    value: new Date(),
    minDate: new Date(new Date().getFullYear() - 1, 0, 1),
    maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
    disabled: false,
    readOnly: false,
    disabledDates: [],
    yearsOrder: CalendarYearsOrder.ASC,
  },
  render: ({ value, minDate, maxDate, disabled, readOnly, disabledDates, yearsOrder }) => (
    <Calendar
      value={value}
      minDate={minDate}
      maxDate={maxDate}
      disabled={disabled}
      readOnly={readOnly}
      disabledDates={disabledDates}
      yearsOrder={yearsOrder}
      onChange={() => {}}
      onMonthChange={() => {}}
    />
  ),
}

export default meta

type Story = StoryObj<CalendarStoryArgs>

export const Default: Story = {}
