import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Sticker } from './index'
import { StickerProps } from './StickerProps'
import { VariantState } from '../../objects'

const meta = {
  title: 'Components/Sticker',
  component: Sticker,
} satisfies Meta<StickerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 'Code promo',
    variant: VariantState.MAIN,
  },
}

export const Small: Story = {
  args: {
    label: 'Code promo',
    variant: VariantState.MAIN,
    small: true,
  },
}
