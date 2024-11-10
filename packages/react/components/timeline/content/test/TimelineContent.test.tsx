import * as React from 'react'
import { render, screen } from '@testing-library/react'
import TimelineContent from '../TimelineContent'

describe('TimelineContent', () => {
  const defaultProps = {
    heading: 'Timeline heading',
    content: 'Timeline content',
    linkTo: 'https://www.example.com',
    linkLabel: 'Example link',
    onClick: jest.fn(),
  }

  it('should render heading, content, and link correctly', () => {
    render(<TimelineContent {...defaultProps} />)

    expect(screen.getByText(defaultProps.heading)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.linkLabel)).toHaveAttribute('href', defaultProps.linkTo)
  })

  it('should render custom children correctly', () => {
    const { container } = render(
      <TimelineContent {...defaultProps}>
        <div data-testid='custom-child'>Custom child</div>
      </TimelineContent>,
    )

    expect(container.querySelector('[data-testid="custom-child"]')).toBeInTheDocument()
  })
})
