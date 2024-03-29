import React from 'react'
import { render } from '@testing-library/react'
import Slider from '../slider'
import SliderItem from '../item'

describe('Slider component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Slider data-testid='slider' />)
    expect(getByTestId('slider')).toBeInTheDocument()
  })
})
describe('SliderItem component', () => {
  it('renders children', () => {
    const { getByText } = render(<SliderItem>Hello world</SliderItem>)
    expect(getByText('Hello world')).toBeInTheDocument()
  })

  it('adds active class if active prop is true', () => {
    const { container } = render(<SliderItem active />)
    expect(container.firstChild).toHaveClass('is-active')
  })

  it('adds custom class name', () => {
    const { container } = render(<SliderItem className='custom-class' />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('adds default column size of 12', () => {
    const { container } = render(<SliderItem />)
    expect(container.firstChild).toHaveClass('is-12')
  })

  it('adds custom column size', () => {
    const { container } = render(<SliderItem size={6} />)
    expect(container.firstChild).toHaveClass('is-6')
  })
})
