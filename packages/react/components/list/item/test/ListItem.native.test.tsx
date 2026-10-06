import { render, screen } from '@testing-library/react-native'
import ListItem from '@/components/list/item/ListItem.native'

jest.useFakeTimers()

describe('ListItem component', () => {
  test('renders without errors', () => {
    render(<ListItem>Hello World</ListItem>)
    expect(screen.getByText('Hello World')).toBeOnTheScreen()
  })
})
