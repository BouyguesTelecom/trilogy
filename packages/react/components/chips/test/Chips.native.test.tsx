import { render, screen, userEvent } from '@testing-library/react-native'
import Chips from '@/components/chips/Chips.native'

jest.useFakeTimers()

describe('chips component', () => {
  it('renders the children correctly', () => {
    render(<Chips>Hello, world!</Chips>)
    expect(screen.getByText('Hello, world!')).toBeOnTheScreen()
  })
})
