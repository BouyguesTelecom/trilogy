// Dependencies
import * as React from 'react'

// Testing methods
import { render } from '@testing-library/react'

// Component to test
import { Badge } from '../'

describe('Badge component', () => {
  test('should contain toto as text', () => {
    const { getByText } = render(<Badge label='toto' />)
    expect(getByText('toto')).toBeInTheDocument()
  })
})
