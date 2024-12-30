import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Chips, ChipsList } from './index'
import { ChipsProps } from './ChipsProps'

const meta = {
  title: 'Components/Chips',
  component: Chips,
  subcomponents: { ChipsList },
} satisfies Meta<ChipsProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ChipsProps) => (
  <ChipsList>
    <Chips {...args} />
    <Chips
      onClick={() => {
        console.log('click chips 2')
      }}
    >
      Chips 2
    </Chips>
    <Chips
      onClick={() => {
        console.log('click chips 3')
      }}
      active
    >
      Chips 3
    </Chips>
    <Chips
      onClick={() => {
        console.log('click chips 4')
      }}
    >
      Chips 4
    </Chips>
    <Chips
      onClick={() => {
        console.log('click chips disbabled')
      }}
      active
      disabled
    >
      Chips disabled
    </Chips>
  </ChipsList>
)

export const Base: Story = {
  render: Template,
  args: {
    children: 'Chips du panel de controls',
    active: true,
    onClick: () => {
      console.log('click chips 1')
    },
  },
}
