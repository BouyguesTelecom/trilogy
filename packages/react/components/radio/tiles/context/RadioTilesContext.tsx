import { RadioTilesContextProps } from '@/components/radio/tiles/context/RadioTilesContextProps'
import { createContext } from 'react'

export const RadioTilesContext = createContext<RadioTilesContextProps>({
  isGrid: false,
})
