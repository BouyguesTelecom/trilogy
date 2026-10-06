import { Padding } from '@/objects/facets/Padding'
import { createContext } from 'react'

interface BoxContextValue {
  fullHeight: boolean
  padding?: Padding | `${Padding}`
}

export const BoxContext = createContext<BoxContextValue>({
  fullHeight: false,
  padding: undefined,
})
