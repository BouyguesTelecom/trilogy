import { createContext } from 'react'
import { CheckboxTilesContextProps } from '@/components/checkbox/tiles/context/CheckboxTilesContextProps'

export const CheckboxTilesContext = createContext<CheckboxTilesContextProps>({
  isGrid: false,
})
