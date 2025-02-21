import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { ArrowDirection, AvatarDirection, ProductTour, ProductTourProps } from './index'
import { Text } from '../text'

const meta = {
  title: 'Components/ProductTour',
  component: ProductTour,
} satisfies Meta<ProductTourProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ProductTourProps) => (
  <ProductTour {...args}>
    <Text>Product tour text content</Text>
  </ProductTour>
)

export const Base: Story = {
  render: Template,
  args: {
    avatarDirection: AvatarDirection.LEFT,
    active: true,
    closeable: true,
    arrowDirection: ArrowDirection.UP,
    avatarSrc: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
  },
}
