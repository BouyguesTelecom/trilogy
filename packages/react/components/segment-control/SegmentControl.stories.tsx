import type { Meta, StoryObj } from '@storybook/react'
import { SegmentControl, SegmentControlItem } from '../../lib'

const meta: Meta<typeof SegmentControl> = {
  component: SegmentControl,
  subcomponents: { SegmentControlItem }
}

export default meta

type Story = StoryObj<typeof SegmentControl>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <SegmentControl>
      <SegmentControlItem>1</SegmentControlItem>
      <SegmentControlItem>2</SegmentControlItem>
      <SegmentControlItem>3</SegmentControlItem>
      <SegmentControlItem>4</SegmentControlItem>
    </SegmentControl>
  ),
}
