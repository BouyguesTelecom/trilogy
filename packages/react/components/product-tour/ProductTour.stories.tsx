import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { ArrowDirection, AvatarDirection, ProductTour, ProductTourProps } from './index'
import { Text } from '../text'

export default {
  title: 'Components/ProductTour',
  component: ProductTour,
} as Meta

export const Base: Story<ProductTourProps> = (args) => (
  <ProductTour {...args}>
    <Text>Product tour text content</Text>
  </ProductTour>
)
Base.args = {
  avatarDirection: AvatarDirection.LEFT,
  active: true,
  closeable: true,
  arrowDirection: ArrowDirection.UP,
  avatarSrc: 'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
}
