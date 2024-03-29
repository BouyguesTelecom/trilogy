import React from 'react'

import { Meta, Story } from '@storybook/react'
import Radio from './Radio'
import { RadioProps } from './RadioProps'
import { IconName } from '../icon'
import { RadioList } from './list'

export default {
  title: 'Components/Radio',
  component: Radio,
  subcomponents: { RadioList },
} as Meta

export const Base: Story<RadioProps> = (args) => (
  <>
    <Radio {...args} />
    <Radio
      label='Je suis cochée'
      name='checkbox2'
      value='default value 2'
      onClick={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
    />
    <Radio
      label='Je suis disabled'
      name='checkbox3'
      value='default value 3'
      onClick={(e) => console.log(e.radioValue, e.radioChecked)}
      disabled
    />
  </>
)
Base.args = {
  checked: false,
  label: 'On peut me cocher grâce au controls ↓ ',
  name: 'checkbox1',
  value: 'default value 1',
  onClick: (e) => console.log(e.radioValue, e.radioChecked),
  disabled: false,
}

export const Tile: Story<RadioProps> = (args) => (
  <>
    <Radio {...args} />
    <Radio
      label='Radio tile avec Icône'
      name='checkbox'
      value='default value 1'
      onClick={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
      description={'Je suis la description de la checkbox'}
      disabled={false}
      tile={true}
      iconTile={IconName.INFOS_CIRCLE}
    />
    <Radio
      label='Radio tile disabled'
      name='checkbox'
      value='default value 1'
      onClick={(e) => console.log(e.radioValue, e.radioChecked)}
      description={'Je suis la description de la checkbox'}
      disabled
      tile={true}
      iconTile={IconName.UI_5G}
    />
  </>
)
Tile.args = {
  label: 'Radio Tile',
  description: 'On peut me cocher et ajouter une icône grâce au controls ↓ ',
  name: 'checkbox',
  value: 'default value 1',
  onClick: (e) => console.log(e.radioValue, e.radioChecked),
  checked: false,
  disabled: false,
  tile: true,
}

export const TileHorizontal: Story<RadioProps> = (args) => (
  <>
    <Radio {...args} />
    <Radio
      label='Radio tile avec Icône'
      name='checkbox'
      value='default value 1'
      onClick={(e) => console.log(e.radioValue, e.radioChecked)}
      checked
      description={'Je suis la description de la checkbox'}
      disabled={false}
      tile={true}
      iconTile={IconName.INFOS_CIRCLE}
      horizontalTile={true}
    />
    <Radio
      label='Radio tile horizontal disabled'
      name='checkbox'
      value='default value 1'
      onClick={(e) => console.log(e.radioValue, e.radioChecked)}
      description={'Je suis la description de la checkbox'}
      disabled
      tile={true}
      iconTile={IconName.WATCH}
      horizontalTile={true}
    />
  </>
)
TileHorizontal.args = {
  label: 'Radio tile horizontal',
  description: 'On peut me cocher et ajouter une icône grâce au controls ↓ ',
  name: 'checkbox',
  value: 'default value 1',
  onClick: (e) => console.log(e.radioValue, e.radioChecked),
  checked: false,
  disabled: false,
  tile: true,
  horizontalTile: true,
  iconTile: IconName.CHECK_CIRCLE,
}
