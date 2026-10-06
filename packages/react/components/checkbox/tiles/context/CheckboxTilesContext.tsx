import { createContext } from 'react'
import { CheckboxTilesContextProps } from './CheckboxTilesContextProps'

export const CheckboxTilesContext = createContext<CheckboxTilesContextProps>({
  isGrid: false,
})
