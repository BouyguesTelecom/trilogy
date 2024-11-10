import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Price from '../Price'

describe('Price', () => {
  it('renders correctly with whole amount', () => {
    render(<Price level={1} amount={24} period={'mois'} tagAmount={10} tagSymbol={'€'} />)
    expect(screen.getByText('24')).toBeOnTheScreen()
  })
})
