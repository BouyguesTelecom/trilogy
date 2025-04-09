import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Column } from '../../lib'
import Chips from './Chips'
import ChipsList from './list'

const meta: Meta<typeof Chips> = {
  component: Chips,
}

export default meta

type Story = StoryObj<typeof Chips>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column align="ALIGNED_CENTER" narrow>
        <ChipsList>
          <Chips active> Chips du panel de controls </Chips>
          <Chips> Chips 2 </Chips>
          <Chips active > Chips 3 </Chips>
          <Chips> Chips 4 </Chips>
          <Chips disabled> Chips disabled </Chips>
        </ChipsList>
      </Column>
    </Columns>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Columns multiline>
      <Column align="ALIGNED_CENTER" narrow>
        <ChipsList>
          <Chips {...args}/>
        </ChipsList>
      </Column>
    </Columns>
  ),
  args: {
    active: true,
    disabled: false,
    iconName: 'tri-search',
    children: 'Chips',
    onClick: () => {},
    testId: 'testId',
    id: 'id',
    className: undefined,
    accessibilityLabel: "accessibilityLabel",
  }
}
