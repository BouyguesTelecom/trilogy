import { render } from '@testing-library/react'
import * as React from 'react'
import CardContent from '../CardContent'

describe('CardContent component', () => {
  it('should render a div with a class of card-content', () => {
    const { getByTestId } = render(<CardContent data-testid='card-content' />)
    const cardContentDiv = getByTestId('card-content')
    expect(cardContentDiv).toHaveClass('card-content')
  })
})
