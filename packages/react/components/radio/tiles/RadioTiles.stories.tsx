import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioTile, RadioTiles, RadioList } from '../index'
import { IconName } from '../../icon'
import { Checkbox } from '../../checkbox'
import { RadioProps } from '../RadioProps'
import { RadioTileProps } from './tile/RadioTileProps'

const meta = {
  title: 'Components/Radio/RadioTile',
  component: Radio,
  subcomponents: { RadioTile, RadioTiles },
} satisfies Meta<RadioTileProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: RadioTileProps) => (
  <RadioTiles>
    <RadioTile {...args} />
    <RadioTile
      label='Radio tile avec Icône'
      name='checkbox'
      value='default value 1'
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
      description='Je suis la description de la checkbox'
      icon={IconName.INFOS_CIRCLE}
    />
    <RadioTile
      label='Radio tile disabled'
      name='checkbox'
      value='default value 1'
      onChange={(e) => console.log(e.radioValue, e.radioChecked)}
      description='Je suis la description de la checkbox'
      disabled
      icon={IconName.EYE}
    />
  </RadioTiles>
)

export const Tile: Story = {
  render: Template,
  args: {
    label: "Radio Tile",
    description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
    name: "checkbox",
    value: "default value 1",
    onChange: (e) => console.log(e.radioValue, e.radioChecked),
    checked: false,
    disabled: false,
  },
}

export const TileHorizontal: Story = {
  render: Template,
  args: {
    label: "Radio tile horizontal",
    description: "On peut me cocher et ajouter une icône grâce au controls ↓ ",
    name: "checkbox",
    value: "default value 1",
    onChange: (e) => console.log(e.radioValue, e.radioChecked),
    checked: false,
    disabled: false,
    horizontal: true,
    icon: IconName.CHECK_CIRCLE,
  },
}
