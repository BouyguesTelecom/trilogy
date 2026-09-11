import { render, screen } from '@testing-library/react-native'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.native'

jest.useFakeTimers()

describe('Breadcrumb component', () => {
  it('should render correctly', () => {
    render(<Breadcrumb testId='Breadcrumb' />)

    expect(screen.getByTestId('Breadcrumb')).toBeOnTheScreen()
  })
})
