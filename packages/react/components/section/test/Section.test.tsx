import React from 'react'
import { render } from '@testing-library/react'
import Section from '../Section'
import { TrilogyColor } from '../../../objects'

describe('Section', () => {
  it('renders with all props', () => {
    const props = {
      className: 'test-class',
      skeleton: true,
      background: TrilogyColor.PRIMARY,
      backgroundSrc: 'https://example.com/image.jpg',
      paddingless: true,
      verticalPaddingless: true,
      onClick: jest.fn(),
      style: { color: 'red' },
    }
    const { getByTestId } = render(
      <Section {...props} data-testid='test-section'>
        <div data-testid='test-children' />
      </Section>,
    )

    const section = getByTestId('test-section')
    const children = getByTestId('test-children')

    expect(section).toHaveClass('section')
    expect(section).toHaveClass('test-class')
    expect(section).toHaveClass('is-loading')
    expect(section).toHaveClass('is-paddingless')
    expect(section).toHaveClass('is-vertical-paddingless')
    expect(section).toHaveClass('has-background-primary has-background')

    expect(children).toBeInTheDocument()
  })
})
