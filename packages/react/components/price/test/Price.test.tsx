import { render } from '@testing-library/react'
import * as React from 'react'
import { Price } from '@/components/price'

describe('Price', () => {
  test('should have "price" className', () => {
    const { getByTestId } = render(
      <Price amount={10.99} testId="testId" />,
    )
    expect(getByTestId('testId')).toHaveClass('price')
  })
})
