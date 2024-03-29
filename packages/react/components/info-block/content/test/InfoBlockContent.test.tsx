import React from 'react'
import { render } from '@testing-library/react'
import InfoBlockContent from '../InfoBlockContent'

describe('InfoBlockContent', () => {
  it('renders children', () => {
    const { getByText } = render(<InfoBlockContent>Test Content</InfoBlockContent>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies className prop', () => {
    const { container } = render(<InfoBlockContent className='custom-class' />)
    expect(container.firstChild).toHaveClass('info-block-content custom-class')
  })
})
