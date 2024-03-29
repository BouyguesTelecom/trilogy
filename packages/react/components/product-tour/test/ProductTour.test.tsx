import React from 'react'
import { render } from '@testing-library/react'
import ProductTour from '../ProductTour'

describe('ProductTour', () => {
  it('should render the product tour content', () => {
    const { getByText } = render(<ProductTour active>Product tour content</ProductTour>)
    const content = getByText('Product tour content')
    expect(content).toBeInTheDocument()
  })
})
