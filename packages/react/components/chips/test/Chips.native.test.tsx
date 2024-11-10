import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Chips from '../Chips.native'

jest.useFakeTimers()

describe('chips component', () => {
  it('renders the children correctly', () => {
    render(<Chips>Hello, world!</Chips>)
    expect(screen.getByText('Hello, world!')).toBeOnTheScreen()
  })
})
