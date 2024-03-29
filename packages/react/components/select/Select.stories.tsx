import React from 'react'

import { Meta, Story } from '@storybook/react'
import { Select, SelectOption } from './index'
import { SelectProps } from './SelectProps'

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: { SelectOption },
} as Meta

export const Base: Story<SelectProps> = (args) => (
  /* L'utilisation du select nécessite l'injection de Trilogy-Vanilla pour fonctioner :
 <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/

  <Select {...args}>
    <SelectOption iconName='tri-advisor' id='id_one' value='opt_one' label='option1'>
      option 1
    </SelectOption>
    <SelectOption iconName='tri-advisor' id='id_two' value='opt_two' label='option2'>
      option 2
    </SelectOption>
    <SelectOption iconName='tri-advisor' disabled id='id_three' value='opt_three' label='option3'>
      option 3
    </SelectOption>
  </Select>
)
Base.args = {
  label: 'Choisir une option',
  onFocus: (e) => console.log('OUVERT', e),
  onBlur: (e) => console.log('FERMÉ', e),
  onChange: (e) => console.log(e),
  iconName: 'tri-advisor',
}
export const Disabled: Story<SelectProps> = (args) => (
  <Select {...args}>
    <SelectOption iconName='tri-advisor' id='id_one' value='opt_one' label='option1'>
      option 1
    </SelectOption>
    <SelectOption iconName='tri-advisor' id='id_two' value='opt_two' label='option2'>
      option 2
    </SelectOption>
    <SelectOption iconName='tri-advisor' disabled id='id_three' value='opt_three' label='option3'>
      option 3
    </SelectOption>
  </Select>
)
Disabled.args = {
  disabled: true,
  label: 'Choisir une option',
  onFocus: (e) => console.log('OUVERT', e),
  onBlur: (e) => console.log('FERMÉ', e),
  onChange: (e) => console.log(e),
  iconName: 'tri-advisor',
}

export const Native: Story<SelectProps> = (args) => (
  <Select {...args}>
    <SelectOption iconName='tri-advisor' id='id_one' value='opt_one' label='option1'>
      option 1
    </SelectOption>
    <SelectOption iconName='tri-advisor' id='id_two' value='opt_two' label='option2'>
      option 2
    </SelectOption>
    <SelectOption iconName='tri-advisor' disabled id='id_three' value='opt_three' label='option3'>
      option 3
    </SelectOption>
  </Select>
)
Native.args = {
  native: true,
  label: 'Choisir une option',
  id: 'option',
  name: 'option',
  onFocus: () => console.log('Focus'),
  onBlur: () => console.log('Blur'),
  onChange: () => console.log('onchange'),
  iconName: 'tri-advisor',
}
