import React from 'react'

import { Meta, Story } from '@storybook/react'
import Dropdown from './Dropdown'
import { DropdownProps } from './DropdownProps'
import DropdownTrigger from './trigger'
import DropdownMenu from './menu'
import DropdownItem from './item'
import { DropdownDivider } from './index'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownTrigger, DropdownMenu, DropdownItem, DropdownDivider },
} as Meta

export const Base: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <DropdownTrigger label='Dropdown label' placeholder='Dropdown placeholder' />
    <DropdownMenu>
      <DropdownItem label='Item label 1Item' name='item1' value='Value 1' />
      <DropdownItem label='Item label 2Item' name='item2' value='Value 2' />
      <DropdownDivider />
      <DropdownItem label='Item label 3Item' name='item3' value='Value 3' />
    </DropdownMenu>
  </Dropdown>
)
