import React from 'react'
import {
  Section,
  Title,
  TitleLevels,
  Divider,
  ProductTour,
  AvatarDirection,
  ArrowDirection,
  Text,
} from '@trilogy-ds/react/components'

export const ProductTourScreen = (): JSX.Element => {
  return (
    <Section>
      <Section>
        <Title level={TitleLevels.THREE}>Product tour</Title>
        <Divider />
      </Section>
      <Section>
        <ProductTour
          avatarDirection={AvatarDirection.LEFT}
          active
          closeable
          arrowDirection={ArrowDirection.UP}
          avatarSrc='https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg'
        >
          <Text>Product tour text content</Text>
        </ProductTour>
      </Section>
    </Section>
  )
}
