import { render } from '@testing-library/react'
import * as React from 'react'
import { StickyPosition } from '../../../objects'
import Container from '../Container'

describe('Container', () => {
  it('should render with correct classes and props', () => {
    const { getByTestId } = render(
      <Container
        data-testid='container'
        fluid
        centered
        verticalCentered
        medium
        fullwidth
        sticky={StickyPosition.TOP}
        stickyOffSetTop={20}
        backgroundColor='WHITE'
      >
        <div data-testid='test-child'>Test Child</div>
      </Container>,
    )

    const container = getByTestId('container')
    expect(container).toHaveClass('container')
    expect(container).toHaveClass('is-fluid')
    expect(container).toHaveClass('is-centered')
    expect(container).toHaveClass('is-vcentered')
    expect(container).toHaveClass('is-medium')
    expect(container).toHaveClass('is-fullwidth')
    expect(container).toHaveClass('is-sticky-top')
    expect(container).toHaveClass('has-background-white')
    expect(container).toHaveStyle('top: 20px')

    const child = getByTestId('test-child')
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent('Test Child')
  })
})
