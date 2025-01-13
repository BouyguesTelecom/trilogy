import { SegmentControl, SegmentControlItem } from '@trilogy-ds/react/lib/components/segment-control'

export default function SegmentControllSSR() {
  return (
    <div>
      <main>
        <SegmentControl>
          <SegmentControlItem active>Item 1</SegmentControlItem>
          <SegmentControlItem>Item 2</SegmentControlItem>
          <SegmentControlItem>Item 3</SegmentControlItem>
          <SegmentControlItem disabled>Item 4</SegmentControlItem>
        </SegmentControl>
      </main>
    </div>
  )
}
