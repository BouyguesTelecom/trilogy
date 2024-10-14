import React from 'react'
import { Select, SelectOption } from './index'

const SelectExample: React.ReactNode =
  <Select
    iconName='tri-search'
    label='Choisir une option'
  >
    <SelectOption
      iconName='tri-search'
      id='id_one'
      label='option1'
      value='opt_one'
    >
      option 1
    </SelectOption>
    <SelectOption
      iconName='tri-search'
      id='id_two'
      label='option2'
      value='opt_two'
    >
      option 2
    </SelectOption>
    <SelectOption
      disabled
      iconName='tri-search'
      id='id_three'
      label='option3'
      value='opt_three'
    >
      option 3
    </SelectOption>
  </Select>

export default SelectExample
