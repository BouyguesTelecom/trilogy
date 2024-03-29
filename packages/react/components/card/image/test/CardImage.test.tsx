import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CardImage from '../CardImage'
import { CardImageSize } from '../CardImageEnum'

describe('CardImage', () => {
  it('renders an image with the specified lib and alt attributes', () => {
    const { getByAltText } = render(<CardImage src='image.jpg' alt='Test Image' />)
    expect(getByAltText('Test Image')).toHaveAttribute('src', 'image.jpg')
  })

  it('applies the specified size class when provided', () => {
    const { container } = render(<CardImage src='image.jpg' alt='Test Image' size={CardImageSize.SIZE_1} />)
    expect(container.firstChild).toHaveClass('card-image', 'is-1')
  })

  it('applies additional CSS classes when provided', () => {
    const { container } = render(<CardImage src='image.jpg' alt='Test Image' className='my-class' />)
    expect(container.firstChild).toHaveClass('card-image', 'my-class')
  })

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn()
    const { container } = render(<CardImage src='image.jpg' alt='Test Image' onClick={handleClick} />)
    fireEvent.click(container?.firstChild as HTMLElement)
    expect(handleClick).toHaveBeenCalled()
  })
})
