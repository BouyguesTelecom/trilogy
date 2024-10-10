import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import Card from '../Card'
import CardContent from '../content'

jest.useFakeTimers()

describe('Card', () => {
  it('should render children when passed in', () => {
    const { getByText } = render(
      <Card>
        <CardContent>Hello world</CardContent>
      </Card>,
    )
    expect(getByText('Hello world')).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<Card onClick={handleClick} data-testid='card' />)
    fireEvent.click(getByTestId('card'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('should render as loading when skeleton prop is true', () => {
    const { getByTestId } = render(<Card skeleton data-testid='card' />)
    expect(getByTestId('card')).toHaveClass('is-loading')
  })

  it('should render with the flat class when flat prop is true', () => {
    const { getByTestId } = render(<Card flat data-testid='card' />)
    expect(getByTestId('card')).toHaveClass('is-flat')
  })
})
