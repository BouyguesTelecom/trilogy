'use client'
import { SegmentControl, SegmentControlItem } from '@trilogy-ds/react/lib/components/segment-control'

export default function SegmentControllSSR() {
  return (
    <div>
      <main>
        <SegmentControl>
          <SegmentControlItem active onClick={() => alert('Appels')}>
            Item 1
          </SegmentControlItem>
          <SegmentControlItem onClick={() => alert('SMS')}>Item 2</SegmentControlItem>
          <SegmentControlItem onClick={() => alert('Équipements')}>Item 3</SegmentControlItem>
          <SegmentControlItem disabled>Item 4</SegmentControlItem>
        </SegmentControl>
      </main>
    </div>
  )
}
