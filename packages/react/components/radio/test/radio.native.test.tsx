import { render, screen } from '@testing-library/react-native'
import Radio from '../Radio.native'

jest.useFakeTimers()

describe('Radio', () => {
  it('renders correctly', () => {
    render(<Radio label='Test radio' />)
    expect(screen.getByText('Test radio')).toBeOnTheScreen()
  })
})
