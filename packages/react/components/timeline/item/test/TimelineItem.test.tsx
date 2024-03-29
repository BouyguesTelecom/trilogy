import React from 'react'
import { render } from '@testing-library/react'
import TimelineItem from '../TimelineItem'

describe('TimelineItem', () => {
  it('renders with correct classNames when done prop is true', () => {
    const { container } = render(<TimelineItem done>toto</TimelineItem>)
    expect(container.firstChild).toHaveClass('timeline-item done')
  })

  it('renders with correct classNames when active prop is true', () => {
    const { container } = render(<TimelineItem active>toto</TimelineItem>)
    expect(container.firstChild).toHaveClass('timeline-item active')
  })

  it('renders with correct classNames when undone prop is true', () => {
    const { container } = render(<TimelineItem undone>toto</TimelineItem>)
    expect(container.firstChild).toHaveClass('timeline-item undone')
  })

  it('renders with correct classNames when cancel prop is true', () => {
    const { container } = render(<TimelineItem cancel>toto</TimelineItem>)
    expect(container.firstChild).toHaveClass('timeline-item cancel')
  })

  it('renders with custom className when provided', () => {
    const { container } = render(<TimelineItem className='custom-class'>toto</TimelineItem>)
    expect(container.firstChild).toHaveClass('timeline-item custom-class')
  })
})
