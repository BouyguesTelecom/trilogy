import { render } from '@testing-library/react'
import React from 'react'

import ProductTour from '@/components/product-tour/ProductTour'

describe('ProductTour', () => {
  it('should render the product tour content', () => {
    const { getByText } = render(<ProductTour active>Product tour content</ProductTour>)
    const content = getByText('Product tour content')
    expect(content).toBeInTheDocument()
  })
})
