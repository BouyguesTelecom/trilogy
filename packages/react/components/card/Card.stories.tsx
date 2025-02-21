import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from './index'
import { CardProps } from './CardProps'
import { Title, TitleLevels } from '../title'
import { Text } from '../text'

const meta = {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardContent },
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: CardProps) => (
  <Card {...args}>
    <CardContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
    </CardContent>
  </Card>
)

export const Base: Story = {
  render: Template,
}

export const Skeleton: Story = {
  render: Template,
  args: {
    skeleton: true,
  }
}
