import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxTile, CheckboxTiles } from '../index'
import { CheckboxTileProps } from './tile/CheckboxTileProps'
import { IconName } from '../../icon'

const meta = {
  title: 'Components/Checkbox/CheckboxTile',
  component: CheckboxTile,
  subcomponents: { CheckboxTiles },
} satisfies Meta<CheckboxTileProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: CheckboxTileProps) => (
  <CheckboxTiles>
    <CheckboxTile {...args} />
    <CheckboxTile
      label='Radio tile avec Icône'
      name='checkbox'
      value='default value 2'
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      checked
      description='Je suis la description de la checkbox'
      icon={IconName.INFOS_CIRCLE}
    />
    <CheckboxTile
      label='Radio tile disabled'
      name='checkbox'
      value='default value 3'
      onChange={(e) => console.log(e.checkboxValue, e.checkboxChecked)}
      description='Je suis la description de la checkbox'
      disabled
      icon={IconName.ALERT}
    />
  </CheckboxTiles>
)

export const Tile: Story = {
  render: Template,
  args: {
    label: 'Checkbox Tile',
    description: 'On peut me cocher et ajouter une icône grâce au controls ↓ ',
    name: 'checkbox1',
    value: 'default value 1',
    onChange: (e) => console.log(e.checkboxValue, e.checkboxChecked),
  },
}

export const TileHorizontal: Story = {
  render: Template,
  args: {
    label: 'Checkbox Tile',
    description: 'On peut me cocher et ajouter une icône grâce au controls ↓ ',
    name: 'checkbox1',
    value: 'default value 1',
    onChange: (e) => console.log(e.checkboxValue, e.checkboxChecked),
    horizontal: true,
  },
}
