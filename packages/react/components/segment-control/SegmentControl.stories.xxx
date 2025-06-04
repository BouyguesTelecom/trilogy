import type { Meta, StoryObj } from '@storybook/react'
import { SegmentControl, SegmentControlItem } from '../../lib'

const meta: Meta<typeof SegmentControl> = {
  component: SegmentControl,
  subcomponents: { SegmentControlItem },
  argTypes:{
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  }
}

export default meta

type Story = StoryObj<typeof SegmentControl>


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


export const Sandbox: Story = {
  render: (args) => (
    <SegmentControl>
      <SegmentControlItem {...args}/>
      <SegmentControlItem>2</SegmentControlItem>
      <SegmentControlItem>3</SegmentControlItem>
      <SegmentControlItem>4</SegmentControlItem>
    </SegmentControl>
  ),
  args:{
    active: false,
    disabled: false,
    selected: false,
    value: "1",
    children: "Sandbox"
  }
}
