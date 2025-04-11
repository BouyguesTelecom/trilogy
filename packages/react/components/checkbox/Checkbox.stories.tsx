import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Column, Divider } from '../../lib'
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
  }
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

export const Sandbox: Story = {
  render: (args ) => {
    return (
      <>
        <Columns>
          <Column>
            <Checkbox checked id="checkbox1" label="Label 1" name="name-1" value="value" />
            <Checkbox id="checkbox2" label="Label 2" name="name-1" value="value" />
            <Checkbox {...args} />
            <Checkbox checked id="checkbox4" label="Label 4" name="name-1" value="value" />
            <Checkbox id="checkbox5" label="Label 5" name="name-1" value="value" />
          </Column>
        </Columns>
      </>
    );
  },
  args: {
    id: 'Solo checkbox',
    label: 'Solo checkbox',
    name: 'Solo checkbox',
    value: 'Solo checkbox',
    checked: true,
  },
}
