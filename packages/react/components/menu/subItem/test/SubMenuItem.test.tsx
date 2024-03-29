import React from 'react'
import { render } from '@testing-library/react'
import SubMenuItem from '../SubMenuItem'
describe('SubMenuItem', () => {
  it('renders with the correct className', () => {
    const { container } = render(<SubMenuItem className='my-class' />)
    expect(container.firstChild).toHaveClass('my-class')
  })

  it('renders children', () => {
    const { getByText } = render(<SubMenuItem>Hello World!</SubMenuItem>)
    expect(getByText('Hello World!')).toBeInTheDocument()
  })
})
