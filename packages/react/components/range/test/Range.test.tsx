import { render } from '@testing-library/react'
import React from 'react'

import Range from '@/components/range/Range'

describe('Range component', () => {
  test('renders with default values', () => {
    const { getByText } = render(<Range min={0} max={100} label='Test Range' />)
    const range = getByText('Test Range')
    expect(range).toBeInTheDocument()
  })
})
