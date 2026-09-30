import { CheckboxTilesContextProps } from '@/components/checkbox/tiles/context/CheckboxTilesContextProps'
import { createContext } from 'react'

export const CheckboxTilesContext = createContext<CheckboxTilesContextProps>({
  isGrid: false,
})
