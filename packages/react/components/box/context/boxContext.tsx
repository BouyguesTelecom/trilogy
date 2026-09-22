import { TrilogyColor, TrilogyColorValues } from '@/objects'
import React from 'react'

interface BoxContextValue {
  fullHeight: boolean
  highlighted?: TrilogyColor | TrilogyColorValues
}

export const BoxContext = React.createContext<BoxContextValue>({
  fullHeight: false,
  highlighted: undefined,
})
