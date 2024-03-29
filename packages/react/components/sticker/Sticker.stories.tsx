import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Sticker } from './index'
import { StickerProps } from './StickerProps'
import { VariantState } from '../../objects'
import { Box } from '../box'

export default {
  title: 'Components/Sticker',
  component: Sticker,
} as Meta

export const Base: Story<StickerProps> = (args) => <Sticker {...args}> Code promo </Sticker>
Base.args = {
  variant: VariantState.PRIMARY,
}
export const Small: Story<StickerProps> = (args) => <Sticker {...args}> Code promo </Sticker>
Small.args = {
  variant: VariantState.PRIMARY,
  small: true,
}
export const Fanion: Story<StickerProps> = (args) => <Sticker {...args}> Code promo </Sticker>
Fanion.args = {
  variant: VariantState.PRIMARY,
  flag: true,
}

export const EnChapeauBox: Story<StickerProps> = (args) => (
  <Box hat>
    <Sticker {...args}> Label </Sticker>
  </Box>
)
EnChapeauBox.args = {
  hat: true,
}
