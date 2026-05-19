import type { Meta, StoryObj } from '@storybook/react'
import type { CountdownProps } from './CountdownProps'
import { Countdown, CountdownFormat } from './index'

const meta: Meta<CountdownProps> = {
  title: 'Components/Countdown',
  component: Countdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
    controls: {
        exclude: ['testId'],
    },
  },
  argTypes: {
    deadline: {
      control: 'date',
      description: 'Date to reach before the end of the countdown',
      table: { category: 'Main' },
    },
    format: {
      control: 'select',
      options: Object.values(CountdownFormat),
      description: 'Format of countdown',
      table: { category: 'Main' },
    },
    small: {
      control: 'boolean',
      description: 'Small countdown',
      table: { category: 'Style' },
    },
    inverted: {
      control: 'boolean',
      description: 'White countdown on dark background',
      table: { category: 'Style' },
    },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    event: { table: { disable: true } },
  },
}

export default meta

export const Default: StoryObj<CountdownProps> = {
  args: {
    deadline: new Date(Date.now() + 1000 * 60 * 60 * 24),
    format: CountdownFormat.DAY_HOUR_MIN_SEC,
    event: undefined,
    small: false,
    inverted: false,
  },
}

export const Small: StoryObj<CountdownProps> = {
  args: {
    ...Default.args,
    small: true,
  },
}

export const Inverted: StoryObj<CountdownProps> = {
  args: {
    ...Default.args,
    inverted: true,
  },
}

export const CustomFormat: StoryObj<CountdownProps> = {
  args: {
    ...Default.args,
    format: CountdownFormat.HOUR_MIN_SEC,
  },
}
