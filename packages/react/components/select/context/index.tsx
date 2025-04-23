'use client'

import React from 'react'
import { SelectChangeEventHandler, SelectedValue } from '../SelectProps'

interface IContext {
  selectedOptionValues: SelectedValue[]
  isVisibleOptions: boolean
  multiple: boolean
  custom: boolean
  setSelectedOptionValues: React.Dispatch<React.SetStateAction<SelectedValue[] | []>>
  setIsVisibleOptions: React.Dispatch<React.SetStateAction<boolean>>
  onChange?: SelectChangeEventHandler
}

export const SelectContext = React.createContext<IContext>({
  selectedOptionValues: [],
  multiple: false,
  custom: false,
  isVisibleOptions: false,
  setIsVisibleOptions: () => false,
  setSelectedOptionValues: () => [],
})
