import React from 'react'
import { render, screen } from '@testing-library/react'
import Disclaimer from '../Disclaimer'
import DisclaimerItem from '../item'

describe('Disclaimer', () => {
  it('renders disclaimer with title and content', () => {
    const title = 'Disclaimer Title'
    const content = 'Disclaimer Content'
    render(<Disclaimer title={title}>{content}</Disclaimer>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
  })

  it('renders with the correct class name', () => {
    const { container } = render(<DisclaimerItem className='has-text-weight-bold' />)
    expect(container.firstChild).toHaveClass('disclaimer-item has-text-weight-bold')
  })
})
