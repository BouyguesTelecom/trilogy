import type { Meta, StoryObj } from '@storybook/react'
import { Title, TitleLevels } from './index'
import { TitleProps } from './TitleProps'

const meta = {
  title: 'Components/Title',
  component: Title,
} satisfies Meta<TitleProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    children: 'Ceci est un titre',
    level: TitleLevels.ONE,
  },
}

export const Subtitle: Story = {
  args: {
    children: 'Ceci est un titre',
    level: TitleLevels.ONE,
    subtitle: true,
  },
}

export const Overline: Story = {
  args: {
    children: 'Ceci est un sous-titre',
    level: TitleLevels.ONE,
    overline: true,
  },
}

export const Inverted: Story = {
  args: {
    inverted: true,
    children: 'Ceci est text surligner',
    level: TitleLevels.ONE,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
}
