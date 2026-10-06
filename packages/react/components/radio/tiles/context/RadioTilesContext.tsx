import { createContext } from 'react'
import { RadioTilesContextProps } from './RadioTilesContextProps'

export const RadioTilesContext = createContext<RadioTilesContextProps>({
  isGrid: false,
})
