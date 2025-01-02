import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Link from './Link'
import { LinkProps } from './LinkProps'
import { Text } from '../text'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Link',
  component: Link,
  argTypes:{
    iconName: {
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
  }
} satisfies Meta<LinkProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: LinkProps) => (
  <Text>
    Je suis dans un paragraphe et ceci est un <Link {...args}>lien standard</Link>
  </Text>
)

export const Base: Story = {
  render: Template,
}

export const DansUnParagraphe: Story = {
  render: Template,
  args: {
    inline: true,
  },
}

export const LiensVersPageExterne: Story = {
  render: Template,
  args: {
    iconName: IconName.ARROW_UP,
    blank: true,
  },
}

export const LienAutonome: Story = {
  render: Template,
  args: {
    href: '_blank',
  },
}

export const Inverted: Story = {
  render: Template,
  args: {
    inverted: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
}
