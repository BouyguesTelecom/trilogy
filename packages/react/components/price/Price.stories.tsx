import type { Meta, StoryObj } from '@storybook/react'
import { Price } from './index'
import { PriceProps } from './PriceProps'
import { PriceLevel } from './PriceEnum'
import { Alignable } from '../../objects'

const meta = {
  title: 'Components/Price',
  component: Price,
} satisfies Meta<PriceProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    level: PriceLevel.ONE,
    amount: 24.99,
    mention: '(1)',
    period: 'mois',
  },
}

export const Inverted: Story = {
  args: {
    amount: 24.99,
    mention: '(1)',
    period: 'mois',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
}

export const Barré: Story = {
  args: {
    oldAmount: 28.99,
    amount: 24.99,
    mention: '(1)',
    period: 'mois',
  },
}

export const Alignement: Story = {
  args: {
    amount: 24.99,
    period: 'mois',
    align: Alignable.ALIGNED_CENTER,
  },
}

export const Surtitre: Story = {
  args: {
    overline: 'à partir de',
    amount: 24.99,
    period: 'mois',
  },
}

export const AvecExposant: Story = {
  args: {
    mention: '(1)',
    amount: 24.99,
    period: 'mois',
  },
}
