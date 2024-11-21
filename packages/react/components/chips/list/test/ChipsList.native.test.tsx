import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Chips from '@/components/chips/Chips.native'
import ChipsList from '@/components/chips/list/ChipsList'

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
