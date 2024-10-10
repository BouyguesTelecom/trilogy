import { getDefaultNormalizer, render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Price from '../Price'

describe('Price', () => {
  it('renders correctly with whole amount', () => {
    render(<Price testId='price' level={1} amount={24.99} showCents period={'mois'} tagAmount={10} tagSymbol={'€'} />)
    expect(screen.getByText('24')).toBeOnTheScreen()
    expect(screen.getByText('€99')).toBeOnTheScreen()
    expect(screen.getByText('10 €')).toBeOnTheScreen()
    expect(
      screen.queryByText('/mois', {
        normalizer: getDefaultNormalizer({ trim: false }),
      }),
    ).toBeOnTheScreen()
  })

  it('renders correctly with suptitle', () => {
    render(<Price amount={20} overline='Starting at' showCents={false} />)
    expect(screen.getByText('Starting at')).toBeOnTheScreen()
    expect(screen.getByText('20')).toBeOnTheScreen()
    expect(screen.getByText('€')).toBeOnTheScreen()
  })
})
