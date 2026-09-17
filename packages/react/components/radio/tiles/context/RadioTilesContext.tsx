import React from 'react'
import { RadioTilesContextProps } from '@/components/radio/tiles/context/RadioTilesContextProps'

export const RadioTilesContext = React.createContext<RadioTilesContextProps>({
  isGrid: false,
})
