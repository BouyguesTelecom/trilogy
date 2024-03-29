import React from 'react'

import { Meta, Story } from '@storybook/react'

import AutoComplete from './AutoComplete'
import { AutoCompleteProps, Item } from './AutoCompleteProps'
import { IconName } from '../icon'

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
} as Meta

export const Base: Story<AutoCompleteProps> = (args) => (
  /* L'utilisation de l'autocomplete nécessite l'injection de Trilogy-Vanilla pour fonctioner :
   <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <AutoComplete<Item<{ info: number }>>
    {...args}
    data={[
      { label: 'name', data: { info: 1 } },
      { label: 'age', data: { info: 2 } },
      { label: 'car', data: { info: 3 } },
      { label: 'test', data: { info: 4 } },
      { label: 'trilogy', data: { info: 5 } },
    ]}
  >
    {(item) => <label>La super info : {item.data.info}</label>}
  </AutoComplete>
)
Base.args = {
  customIcon: IconName.EYE,
  displayMenu: false,
  placeholder: 'Autocomplete',
  onItemSelected: (e) => console.log('itemSelected => ', e),
  onChange: (e) => console.log('OnChange Autocomplete : ', e),
}
