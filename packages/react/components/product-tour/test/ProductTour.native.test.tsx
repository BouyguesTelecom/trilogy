import { getDefaultNormalizer, render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { Text } from '../../text'
import ProductTour from '../ProductTour'

describe('ProductTour', () => {
  it('should render the product tour content', () => {
    render(
      <ProductTour
        active
        closeable
        avatarSrc='https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg'
      >
        <Text>Product tour text content</Text>
      </ProductTour>,
    )
    expect(
      screen.getByText('Product tour text content', {
        normalizer: getDefaultNormalizer({ trim: true }),
      }),
    ).toBeOnTheScreen()
  })
})
