import { render, screen } from '@testing-library/react-native'
import Checkbox from '@/components/checkbox/Checkbox.native'

jest.useFakeTimers()

describe('Checkbox component', () => {
  it('renders label correctly', () => {
    render(<Checkbox id={'test'} />)
    expect(screen.getByTestId('test')).toBeOnTheScreen()
  })
})
