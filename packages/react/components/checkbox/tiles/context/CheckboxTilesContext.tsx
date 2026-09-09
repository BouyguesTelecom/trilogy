import React from 'react'
import { CheckboxTilesContextProps } from '@/components/checkbox/tiles/context/CheckboxTilesContextProps'

export const CheckboxTilesContext = React.createContext<CheckboxTilesContextProps>({
  isGrid: false,
})
