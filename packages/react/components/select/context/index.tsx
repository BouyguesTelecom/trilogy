import React from 'react'
import { SelectChangeEventHandler } from '../SelectProps'

interface IContext {
  selectedOptions: string[]
  isVisibleOptions: boolean
  multiple: boolean
  custom: boolean
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[] | []>>
  setIsVisibleOptions: React.Dispatch<React.SetStateAction<boolean>>
  onChange?: SelectChangeEventHandler
}

export const SelectContext = React.createContext<IContext>({
  selectedOptions: [],
  multiple: false,
  custom: false,
  isVisibleOptions: false,
  setIsVisibleOptions: () => false,
  setSelectedOptions: () => [],
})
