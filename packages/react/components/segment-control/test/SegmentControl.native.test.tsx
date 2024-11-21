import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import SegmentControl from '@/components/segment-control/SegmentControl'
import SegmentControlItem from '@/components/segment-control/item'

jest.useFakeTimers()

describe('SegmentControl', () => {
  it('renders with all props', async () => {
    const onClick = jest.fn()
    const onClickDisabled = jest.fn()
    render(
      <SegmentControl className='custom-class' disabled={false} marginless={true}>
        <SegmentControlItem onClick={onClick}>Segment 1</SegmentControlItem>
        <SegmentControlItem active>Segment 2</SegmentControlItem>
        <SegmentControlItem disabled onClick={onClickDisabled}>
          Segment 3
        </SegmentControlItem>
      </SegmentControl>,
    )

    expect(screen.getByText('Segment 1')).toBeOnTheScreen()
    expect(screen.getByText('Segment 2')).toBeOnTheScreen()
    expect(screen.getByText('Segment 3')).toBeOnTheScreen()

    const user = userEvent.setup()
    await user.press(screen.getByText('Segment 1'))
    await user.press(screen.getByText('Segment 2'))
    expect(onClick).toHaveBeenCalled()
    expect(onClickDisabled).not.toHaveBeenCalled()
  })
})
