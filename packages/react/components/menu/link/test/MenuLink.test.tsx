import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MenuLink from '../MenuLink'

describe('MenuLink', () => {
  it('renders the link with the correct text content', () => {
    const { getByText } = render(<MenuLink>Link Text</MenuLink>)
    expect(getByText('Link Text')).toBeInTheDocument()
  })

  it('adds "with-arrow" class if "arrow" prop is passed', () => {
    const { container } = render(<MenuLink arrow />)
    expect(container.firstChild).toHaveClass('with-arrow')
  })

  it('adds additional classes passed in "className" prop', () => {
    const { container } = render(<MenuLink className='extra-class' />)
    expect(container.firstChild).toHaveClass('extra-class')
  })

  it('calls onClick event when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<MenuLink onClick={handleClick}>Link Text</MenuLink>)
    fireEvent.click(getByText('Link Text'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
