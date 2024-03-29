import React from 'react'
import { render } from '@testing-library/react'
import Options from '../Options'

describe('Options', () => {
  it('renders with default props', () => {
    const { container } = render(<Options />)
    expect(container.firstChild).toHaveClass('options')
  })

  it('renders with custom className', () => {
    const { container } = render(<Options className='custom-class' />)
    expect(container.firstChild).toHaveClass('options custom-class')
  })

  it('renders with inverted prop', () => {
    const { container } = render(<Options inverted />)
    expect(container.firstChild).toHaveClass('options is-inverted')
  })
})
