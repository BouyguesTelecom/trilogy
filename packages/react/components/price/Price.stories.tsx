import { Align } from '@/objects'
import type { Meta, StoryObj } from '@storybook/react'
import PriceComponent from './Price'
import { PriceLevel } from './PriceEnum'
import type { PriceProps } from './PriceProps'
import React from 'react'

PriceComponent.displayName = 'Price'

const meta: Meta<PriceProps> = {
  title: 'Components/Price',
  component: PriceComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    amount: {
      control: { type: 'number', step: 0.01 },
      description: 'Price amount',
    },
    oldAmount: {
      control: { type: 'number', step: 0.01 },
      description: 'Old price amount shown as strike',
    },
    mention: {
      control: 'text',
      description: 'Mention text displayed in superscript',
    },
    period: {
      control: 'text',
      description: 'Period label displayed after slash',
    },
    overline: {
      control: 'text',
      description: 'Text displayed above price',
    },
    hideCents: {
      control: 'boolean',
      description: 'Hide cents',
    },
    inverted: {
      control: 'boolean',
      description: 'Use inverted color variant',
    },
    level: {
      control: 'select',
      options: Object.values(PriceLevel),
      description: 'Price display level',
    },
    align: {
      control: 'select',
      options: [Align.START, Align.CENTER, Align.END, Align.STRETCH],
      description: 'Horizontal alignment',
    },
    verticalAlign: {
      control: 'select',
      options: [Align.START, Align.CENTER, Align.END, Align.STRETCH],
      description: 'Vertical alignment',
    },
    accessibilityLabel: {
      control: 'text',
      description: 'Accessible label',
    },
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
    children: {
      control: false,
      table: { disable: true },
    },
  },
  args: {
    amount: 29.99,
    oldAmount: undefined,
    mention: '',
    period: 'month',
    overline: '',
    hideCents: false,
    inverted: false,
    level: PriceLevel.ONE,
    align: Align.START,
    accessibilityLabel: 'Price: 29 euros and 99 cents per month',
    id: '',
    className: '',
    testId: 'price-default',
    verticalAlign: Align.START
  },
}

export default meta
type Story = StoryObj<PriceProps>

export const Default: Story = {}

export const WithOldAmount: Story = {
  args: {
    oldAmount: 39.99,
  },
}

export const HiddenCents: Story = {
  args: {
    hideCents: true,
  },
}

export const WithOverlineAndMention: Story = {
  args: {
    overline: 'Special offer',
    mention: '(1)',
    period: 'year',
  },
}

export const Inverted: Story = {
  args: {
    inverted: true,
  },
}

export const CenteredLarge: Story = {
  args: {
    align: Align.CENTER,
    level: PriceLevel.FIVE,
    amount: 199.9,
  },
}

export const Playground: Story = {}
