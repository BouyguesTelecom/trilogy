import React from 'react'
import { render } from '@testing-library/react'
import MenuScrolling from '../MenuScrolling'

describe('MenuScrolling component', () => {
  test('should render with default props', () => {
    const { getByRole } = render(<MenuScrolling />)
    expect(getByRole('scrolling-menu')).toBeInTheDocument()
  })

  test('should render with correct pulled prop', () => {
    const { container } = render(<MenuScrolling pulled='right' />)
    expect(container.firstChild).toHaveClass('is-pulled-right')
  })

  test('should render with white background when hasBackgroundWhite prop is true', () => {
    const { container } = render(<MenuScrolling hasBackgroundWhite />)
    expect(container.firstChild).toHaveClass('has-background-white')
  })

  test('should render with additional className', () => {
    const { container } = render(<MenuScrolling className='test-class' />)
    expect(container.firstChild).toHaveClass('menu', 'test-class')
  })
})
