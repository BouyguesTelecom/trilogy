import { render } from '@testing-library/react'
import * as React from 'react'
import SliderItem from '../SliderItem'

describe('SliderItem component', () => {
  it('renders its children directly without adding an extra wrapper element', () => {
    const { container, getByText } = render(
      <div>
        <SliderItem>
          <span>Slide content</span>
        </SliderItem>
      </div>,
    )
    const span = getByText('Slide content')
    expect(span).toBeInTheDocument()
    // SliderItem returns `children` as-is, so the span is a direct child of the outer div.
    expect(container.firstChild?.firstChild).toBe(span)
  })

  it('renders a plain text child', () => {
    const { container } = render(
      <div>
        <SliderItem>Plain text slide</SliderItem>
      </div>,
    )
    expect(container.textContent).toBe('Plain text slide')
  })

  it('renders nothing when children is null', () => {
    const { container } = render(<SliderItem>{null}</SliderItem>)
    expect(container).toBeEmptyDOMElement()
  })

  it('sets the correct displayName', () => {
    expect(SliderItem.displayName).toBe('SliderItem')
  })
})