import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { Title, TitleLevels } from '../title'
import { Text } from '../text'

import Card from './Card'
import CardImage from './image'
import { CardContent } from './index'
import { CardProps } from './CardProps'

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardImage, CardContent },
} as Meta

export const Base: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>
      <Title level={TitleLevels.ONE}>Box Title</Title>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
    </CardContent>
  </Card>
)
export const Skeleton: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Phasellus nec iaculis
        mauris.
      </Text>
    </CardContent>
  </Card>
)
Skeleton.args = {
  skeleton: true,
}
