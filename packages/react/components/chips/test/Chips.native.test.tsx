import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Chips from '../Chips.native'

jest.useFakeTimers()

describe('chips component', () => {
  it('renders the children correctly', () => {
    render(<Chips>Hello, world!</Chips>)
    expect(screen.getByTestId('Hello, world!')).toBeOnTheScreen()
  })

  it('should call onClick when clicked', async () => {
    const onClick = jest.fn()
    render(<Chips onClick={onClick}>Hello, world!</Chips>)
    const user = userEvent.setup()
    await user.press(screen.getByTestId('Hello, world!'))
    expect(onClick).toHaveBeenCalled()
  })
})
