import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TypographyAlign, TypographyBold, TypographyColor, TypographyTransform } from '../../objects'
import TitleComponent from './Title'
import { TitleLevels, TitleMarkup } from './TitleEnum'

TitleComponent.displayName = 'Title'

interface TitleStoryArgs {
  children: string
  level: TitleLevels
  markup?: TitleMarkup
  typo?: string
  subtitle: boolean
  overline: boolean
  inverted: boolean
  skeleton: boolean
  marginless: boolean
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

const meta: Meta<TitleStoryArgs> = {
  title: 'Components/Title',
  component: TitleComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: { component: ' ' },
    },
  },
  argTypes: {
    children: { control: 'text', description: 'Title content' },
    level: {
      control: 'select',
      options: [
        TitleLevels.ONE,
        TitleLevels.TWO,
        TitleLevels.THREE,
        TitleLevels.FOUR,
        TitleLevels.FIVE,
        TitleLevels.SIX,
      ],
      description: 'Title level',
    },
    markup: {
      control: 'select',
      options: [undefined, ...Object.values(TitleMarkup)],
      description: 'HTML markup element',
    },
    typo: {
      control: 'select',
      options: typoOptions,
      description: 'Typography utility class',
    },
    subtitle: { control: 'boolean', description: 'Subtitle style' },
    overline: { control: 'boolean', description: 'Overline style' },
    inverted: { control: 'boolean', description: 'Inverted color mode' },
    skeleton: { control: 'boolean', description: 'Loading skeleton state' },
    marginless: { control: 'boolean', description: 'Remove bottom margin' },
    id: { control: 'text', description: 'Custom html id' },
    className: { control: 'text', description: 'Additional CSS classes' },
    testId: { control: 'text', description: 'Testing identifier' },
  },
  args: {
    children: 'Title component',
    level: TitleLevels.THREE,
    markup: undefined,
    typo: undefined,
    subtitle: false,
    overline: false,
    inverted: false,
    skeleton: false,
    marginless: false,
    id: '',
    className: '',
    testId: '',
  },
  render: ({
    children,
    level,
    markup,
    typo,
    subtitle,
    overline,
    inverted,
    skeleton,
    marginless,
    id,
    className,
    testId,
  }) => (
    <TitleComponent
      level={level}
      markup={markup}
      typo={typo}
      subtitle={subtitle}
      overline={overline}
      inverted={inverted}
      skeleton={skeleton}
      marginless={marginless}
      id={id || undefined}
      className={className || undefined}
      testId={testId || undefined}
    >
      {children}
    </TitleComponent>
  ),
}

export default meta

type Story = StoryObj<TitleStoryArgs>

export const Default: Story = {}

export const Subtitle: Story = {
  args: {
    subtitle: true,
  },
}

export const Overline: Story = {
  args: {
    overline: true,
  },
}

export const Colored: Story = {
  args: {
    typo: TypographyColor.TEXT_INFO,
  },
}

export const Playground: Story = {}
