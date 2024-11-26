import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Chips from '@/components/chips/Chips'

describe('Chips', () => {
  it('renders the children correctly', () => {
    const { getByText } = render(<Chips>Hello, world!</Chips>)
    expect(getByText('Hello, world!')).toBeInTheDocument()
  })

  it('applies the active class if the active prop is true', () => {
    const { getByText } = render(<Chips active>Hello, world!</Chips>)
    expect(getByText('Hello, world!')).toHaveClass('is-active')
  })

  it('applies the disabled class if the disabled prop is true', () => {
    const { getByText } = render(<Chips disabled>Hello, world!</Chips>)
    expect(getByText('Hello, world!')).toHaveAttribute('disabled')
  })

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Chips onClick={handleClick}>Click me</Chips>)
    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('passes additional props to the component', () => {
    const { getByText } = render(<Chips data-testid='test-chips'>Hello, world!</Chips>)
    expect(getByText('Hello, world!')).toHaveAttribute('data-testid', 'test-chips')
  })
})
