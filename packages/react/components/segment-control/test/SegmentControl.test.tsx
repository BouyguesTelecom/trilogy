import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SegmentControl from '../SegmentControl'
import SegmentControlItem from '../item'

describe('SegmentControl', () => {
  it('renders with all props', () => {
    const onClick = jest.fn()
    const activeIndex = 1
    const { container, getByText } = render(
      <SegmentControl
        className='custom-class'
        onClick={onClick}
        disabled={false}
        marginless={true}
        activeIndex={activeIndex}
      >
        <SegmentControlItem>Segment 1</SegmentControlItem>
        <SegmentControlItem active>Segment 2</SegmentControlItem>
        <SegmentControlItem>Segment 3</SegmentControlItem>
      </SegmentControl>,
    )

    // Check if all children are rendered
    expect(getByText('Segment 1')).toBeInTheDocument()
    expect(getByText('Segment 2')).toBeInTheDocument()
    expect(getByText('Segment 3')).toBeInTheDocument()

    // Check if active segment is set correctly
    expect(getByText('Segment 2')).toHaveClass('is-active')

    // Check if onClick event is fired when a segment is clicked
    fireEvent.click(getByText('Segment 3'))
    expect(onClick).toHaveBeenCalled()

    // Check if all props are applied correctly
    expect(container.firstChild).toHaveClass('segmented-control')
    expect(container.firstChild).toHaveClass('is-marginless')
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
