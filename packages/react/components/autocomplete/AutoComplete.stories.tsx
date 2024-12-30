import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { AutoComplete, AutoCompletePropsWeb, Item } from './index'
import { IconName } from '../icon'

const meta = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
} satisfies Meta<AutoCompletePropsWeb>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  render: (args: AutoCompletePropsWeb) => (
    <>
      {/* L'utilisation de l'autocomplete nécessite l'injection de Trilogy-Vanilla pour fonctioner : */}
      {/* <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script> */}
      <AutoComplete<Item<{ info: number }>> {...args}>
        {(item) => <label>La super info : {item.data.info}</label>}
      </AutoComplete>
    </>
  ),
  args: {
    data: [
      { label: 'name', data: { info: 1 } },
      { label: 'age', data: { info: 2 } },
      { label: 'car', data: { info: 3 } },
      { label: 'test', data: { info: 4 } },
      { label: 'trilogy', data: { info: 5 } },
    ],
    iconNameLeft: IconName.EYE,
    displayMenu: false,
    placeholder: 'Autocomplete',
    onItemSelected: (e) => console.log('itemSelected => ', e),
    onChange: (e) => console.log('OnChange Autocomplete : ', e),
  },
}
