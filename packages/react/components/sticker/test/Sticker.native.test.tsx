import { render, screen } from '@testing-library/react-native'
import { Sticker } from '@/components/sticker'

jest.useFakeTimers()

describe('Sticker', () => {
  it('should be rendered', () => {
    render(<Sticker label='DEFAULT' />)
    expect(screen.getByText('DEFAULT')).toBeOnTheScreen()
  })
})
