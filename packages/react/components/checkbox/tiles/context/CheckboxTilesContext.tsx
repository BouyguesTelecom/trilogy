import React from 'react'
import { CheckboxTilesContextProps } from './CheckboxTilesContextProps'

export const CheckboxTilesContext = React.createContext<CheckboxTilesContextProps>({
  isGrid: false,
})
