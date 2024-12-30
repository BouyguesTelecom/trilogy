import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextLevels, TextMarkup } from './index'
import { TextProps } from './TextProps'
import { TypographyBold } from '../../objects'

const meta = {
  title: 'Components/Text',
  component: Text,
} satisfies Meta<TextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: 'Ceci est mon paragraphe',
    level: TextLevels.ONE,
    typo: TypographyBold.TEXT_WEIGHT_SEMIBOLD,
    markup: TextMarkup.P,
    accessibilityLabel: 'ceci est un paragraphe A11Y',
  },
}

export const Inverted: Story = {
  args: {
    inverted: true,
    children: 'Ceci est mon paragraphe',
    level: TextLevels.ONE,
    typo: TypographyBold.TEXT_WEIGHT_SEMIBOLD,
    markup: TextMarkup.P,
    accessibilityLabel: 'ceci est un paragraphe A11Y',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
}
