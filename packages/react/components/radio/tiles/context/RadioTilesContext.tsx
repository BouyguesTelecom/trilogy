import React from 'react'
import { RadioTilesContextProps } from './RadioTilesContextProps'

export const RadioTilesContext = React.createContext<RadioTilesContextProps>({
  isGrid: false,
})
