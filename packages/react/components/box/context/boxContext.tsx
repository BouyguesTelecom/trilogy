import { Padding } from '@/objects/facets/Padding'
import React from 'react'

interface BoxContextValue {
  fullHeight: boolean
  padding?: Padding | `${Padding}`
}

export const BoxContext = React.createContext<BoxContextValue>({
  fullHeight: false,
  padding: undefined,
})
