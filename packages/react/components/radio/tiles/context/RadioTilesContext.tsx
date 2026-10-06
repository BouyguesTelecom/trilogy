import { createContext } from 'react'
import { RadioTilesContextProps } from '@/components/radio/tiles/context/RadioTilesContextProps'

export const RadioTilesContext = createContext<RadioTilesContextProps>({
  isGrid: false,
})
