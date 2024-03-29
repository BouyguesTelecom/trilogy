import React from 'react'
import { render } from '@testing-library/react'
import Menu from '../Menu'

describe('Menu', () => {
  it('renders a ul element with the correct class', () => {
    const { container } = render(<Menu className='test-class' notASide />)
    const ul = container.querySelector('ul')
    expect(ul).toBeInTheDocument()
    expect(ul).toHaveClass('menu-list', 'test-class')
    expect(ul).not.toHaveClass('aside-menu-list')
  })

  it('renders a ul element with the "aside-menu-list" class when notASide is false', () => {
    const { container } = render(<Menu notASide={false} />)
    const ul = container.querySelector('ul')
    expect(ul).toHaveClass('aside-menu-list')
  })
})
