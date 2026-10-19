import { Section, SegmentControl, SegmentControlItem, Alignable, TrilogyColor } from '@trilogy-ds/react'

export default function SegmentedControlScreen(): JSX.Element {
  return (
    <Section>
      <SegmentControl>
        <SegmentControlItem active onClick={() => alert('Appels')}>
          Item 1
        </SegmentControlItem>
        <SegmentControlItem onClick={() => alert('SMS')}>Item 2</SegmentControlItem>
        <SegmentControlItem onClick={() => alert('Équipements')}>Item 3</SegmentControlItem>
        <SegmentControlItem disabled>Item 4</SegmentControlItem>
      </SegmentControl>
    </Section>
  )
}
