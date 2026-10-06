import { Dispatch, SetStateAction, createContext } from 'react'
import { SelectChangeEventHandler, SelectedValue } from '../SelectProps'

interface IContext {
  selectedOptionValues: SelectedValue[]
  isVisibleOptions: boolean
  multiple: boolean
  custom: boolean
  setSelectedOptionValues: Dispatch<SetStateAction<SelectedValue[] | []>>
  setIsVisibleOptions: Dispatch<SetStateAction<boolean>>
  onChange?: SelectChangeEventHandler
}

export const SelectContext = createContext<IContext>({
  selectedOptionValues: [],
  multiple: false,
  custom: false,
  isVisibleOptions: false,
  setIsVisibleOptions: () => false,
  setSelectedOptionValues: () => [],
})
