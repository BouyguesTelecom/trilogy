import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioTile, RadioTiles, RadioList } from './index'
import { IconName } from '../icon'
import { Checkbox } from '../checkbox'
import { RadioProps } from './RadioProps'
import { RadioTileProps } from './tiles/tile/RadioTileProps'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  subcomponents: { RadioList },
} satisfies Meta<RadioProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: RadioProps) => (
  <RadioList>
    <Radio {...args} />
    <Radio
      label='Je suis cochée'
      name='checkbox2'
      value='default value 2'
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
    />
    <Radio
      label='Je suis disabled'
      name='checkbox3'
      value='default value 3'
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      disabled
    />
  </RadioList>
)

export const Base: Story = {
  render: Template,
  args: {
    checked: false,
    label: "On peut me cocher grâce au controls ↓ ",
    name: "checkbox1",
    value: "default value 1",
    onChange: (e) => console.log(e.radioValue, e.radioChecked),
    disabled: false,
  },
}
