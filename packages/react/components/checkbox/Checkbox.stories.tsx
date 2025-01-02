import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './index'
import { CheckboxProps } from './CheckboxProps'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
} satisfies Meta<CheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: CheckboxProps) => (
  <>
    <Checkbox {...args} />
    <Checkbox
      label='Je suis cochée'
      name='checkbox2'
      value='default value 2'
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
    />
    <Checkbox
      label='Je suis disabled'
      name='checkbox3'
      value='default value 3'
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      disabled
    />
  </>
)

export const Base: Story = {
  render: Template,
  args: {
    label: 'On peut me cocher grâce au controls ↓ ',
    name: 'checkbox1',
    value: 'default value 1',
    onChange: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  },
}
