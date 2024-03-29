import React from 'react'
import { render } from '@testing-library/react'
import MenuItem from '../MenuItem'
import { Menu } from '../../index'

describe('MenuItem', () => {
  it('renders a li element with the correct class', () => {
    const { container } = render(
      <Menu>
        <MenuItem className='test-class'>toto</MenuItem>
      </Menu>,
    )
    const li = container.querySelector('li')
    expect(li).toBeInTheDocument()
  })

  it('renders a Link element with the correct props when "to" prop is present', () => {
    const { container } = render(
      <Menu>
        <MenuItem to={'/test/'}>toto</MenuItem>
      </Menu>,
    )
    const link = container.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).not.toHaveClass('link')
  })
})
