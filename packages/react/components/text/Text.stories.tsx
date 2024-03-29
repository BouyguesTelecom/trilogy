import React from 'react'

import { Meta, Story } from '@storybook/react'

import Text from './Text'
import { TextProps } from './TextProps'
import { TextLevels, TextMarkup } from './TextEnum'
import { TypographyBold } from '../../objects'

export default {
  title: 'Components/Text',
  component: Text,
} as Meta

export const Base: Story<TextProps> = (args) => <Text {...args}>Ceci est mon paragraphe</Text>
Base.args = {
  level: TextLevels.ONE,
  typo: TypographyBold.TEXT_WEIGHT_SEMIBOLD,
  markup: TextMarkup.P,
  accessibilityLabel: 'ceci est un paragraphe',
}

export const Inverted: Story<TextProps> = (args) => <div style={{ backgroundColor: 'black', padding: 10 }}><Text {...args}>Ceci est mon paragraphe</Text></div>
Inverted.args = {
  inverted: true,
  level: TextLevels.ONE,
  typo: TypographyBold.TEXT_WEIGHT_SEMIBOLD,
  markup: TextMarkup.P,
  accessibilityLabel: 'ceci est un paragraphe',
}

