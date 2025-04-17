import React from 'react'
import { SelectChangeEventHandler } from '../SelectProps'

interface IContext {
  selectedOptionValues: string[]
  isVisibleOptions: boolean
  multiple: boolean
  custom: boolean
  setSelectedOptionValues: React.Dispatch<React.SetStateAction<string[] | []>>
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
