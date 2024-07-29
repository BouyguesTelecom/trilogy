import React from 'react'
import { SegmentControl, SegmentControlItem } from './index'

const RowsExample: React.ReactNode =
  <SegmentControl>
    <SegmentControlItem
      active
    >
      Appels
    </SegmentControlItem>
    <SegmentControlItem>
      SMS
    </SegmentControlItem>
    <SegmentControlItem>
      Équipements
    </SegmentControlItem>
    <SegmentControlItem disabled>
      Offres
    </SegmentControlItem>
  </SegmentControl>

export default RowsExample
