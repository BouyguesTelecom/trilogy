import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TypographyAlign, TypographyBold, TypographyColor, TypographyTransform } from '../../objects'
import TextComponent from './Text'
import { TextLevels, TextMarkup } from './TextEnum'
import type { TextProps } from './TextProps'

TextComponent.displayName = 'Text'

interface TextStoryArgs {
  children: string
  level?: TextLevels
  markup?: TextMarkup
  typo?: TextProps['typo']
  inverted: boolean
  skeleton: boolean
  marginless: boolean
  numberOfLines?: number
  id: string
  className: string
  testId: string
}

const typoOptions = [
  undefined,
  ...Object.values(TypographyColor),
  ...Object.values(TypographyBold),
  ...Object.values(TypographyTransform),
  ...Object.values(TypographyAlign),
]

const meta: Meta<TextStoryArgs> = {
  title: 'Components/Text',
  component: TextComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: { component: ' ' },
    },
  },
  argTypes: {
    children: { control: 'text', description: 'Text content' },
    level: {
      control: 'select',
      options: [undefined, TextLevels.ONE, TextLevels.TWO, TextLevels.THREE, TextLevels.FOUR],
      description: 'Text level',
    },
    markup: {
      control: 'select',
      options: [undefined, ...Object.values(TextMarkup)],
      description: 'HTML markup element',
    },
    typo: {
      control: 'select',
      options: typoOptions,
      description: 'Typography utility class',
    },
    inverted: { control: 'boolean', description: 'Inverted color mode' },
    skeleton: { control: 'boolean', description: 'Loading skeleton state' },
    marginless: { control: 'boolean', description: 'Remove bottom margin' },
    numberOfLines: { control: { type: 'number', min: 1, max: 6, step: 1 }, description: 'Clamp line count' },
    id: { control: 'text', description: 'Custom html id' },
    className: { control: 'text', description: 'Additional CSS classes' },
    testId: { control: 'text', description: 'Testing identifier' },
  },
  args: {
    children: 'This is a text component.',
    level: TextLevels.ONE,
    markup: TextMarkup.P,
    typo: undefined,
    inverted: false,
    skeleton: false,
    marginless: false,
    numberOfLines: undefined,
    id: '',
    className: '',
    testId: '',
  },
  render: ({ children, level, markup, typo, inverted, skeleton, marginless, numberOfLines, id, className, testId }) => (
    <TextComponent
      level={level}
      markup={markup}
      typo={typo}
      inverted={inverted}
      skeleton={skeleton}
      marginless={marginless}
      numberOfLines={numberOfLines || undefined}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
    >
      {children}
    </TextComponent>
  ),
}

export default meta

type Story = StoryObj<TextStoryArgs>

export const Default: Story = {}

export const Emphasis: Story = {
  args: {
    typo: TypographyBold.TEXT_WEIGHT_BOLD,
  },
}

export const Colored: Story = {
  args: {
    typo: TypographyColor.TEXT_INFO,
  },
}

export const Clamped: Story = {
  args: {
    children:
      'This text is intentionally long to demonstrate line clamping in the Text component. It should stop after the configured number of lines and display an ellipsis.',
    numberOfLines: 2,
  },
}

export const Playground: Story = {}
