import { SelectChangeEventHandler, SelectedValue } from '@/components/select/SelectProps'
import { createContext, Dispatch, SetStateAction } from 'react'

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
