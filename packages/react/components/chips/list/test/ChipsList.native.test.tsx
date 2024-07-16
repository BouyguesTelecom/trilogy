import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Chips from '../../Chips.native'
import ChipsList from '../ChipsList'

describe('chips component', () => {
  it('renders the children correctly', () => {
    render(
      <ChipsList data-testid='chips-list' multiple>
        <Chips>Hello, world!</Chips>
      </ChipsList>,
    )
    expect(screen.getByTestId('Hello, world!')).toBeOnTheScreen()
  })
})
