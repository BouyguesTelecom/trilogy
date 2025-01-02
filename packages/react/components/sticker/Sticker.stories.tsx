import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Sticker } from './index'
import { StickerProps } from './StickerProps'
import { VariantState } from '../../objects'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Sticker',
  component: Sticker,
  argTypes:{
    iconName: {
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
  }
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
