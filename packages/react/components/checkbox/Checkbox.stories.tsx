import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Column } from '../../lib'
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>


export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column align="ALIGNED_CENTER" narrow>
        <Checkbox checked id="checkbox1" label="Label 1" name="name-1" value="value" />
        <Checkbox id="checkbox2" label="Label 2" name="name-1" value="value" />
        <Checkbox disabled id="checkbox3" label="Label 3" name="name-1" value="value" />
        <Checkbox id="checkbox4" label="Label 4" name="name-1" readonly value="value" />
      </Column>
    </Columns>
  ),
}
