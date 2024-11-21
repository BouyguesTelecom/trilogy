import { render } from '@testing-library/react'
import React from 'react'

import Price from '@/components/price/Price'
import { checkCents } from '@/components/price/PriceHelpers'

describe('Price', () => {
  it('renders correctly with whole amount', () => {
    const { getByText } = render(<Price amount={20} showCents={false} />)
    expect(getByText('20')).toBeInTheDocument()
    expect(getByText('€')).toBeInTheDocument()
  })

  it('renders correctly with suptitle', () => {
    const { getByText } = render(<Price amount={20} overline='Starting at' showCents={false} />)
    expect(getByText('Starting at')).toBeInTheDocument()
    expect(getByText('20')).toBeInTheDocument()
    expect(getByText('€')).toBeInTheDocument()
  })
  it('returns "00" when passed an empty string', () => {
    const result = checkCents('')
    expect(result).toBe('00')
  })

  it('adds a "0" to the end of a string with length of 1', () => {
    const result = checkCents('5')
    expect(result).toBe('50')
  })

  it('returns the same string if it has length greater than 1', () => {
    const result = checkCents('50')
    expect(result).toBe('50')
  })
})
