import { TrilogyColor, TrilogyColorValues } from '@/objects'
import React from 'react'

interface BoxContextValue {
  fullHeight: boolean
  highlighted?: TrilogyColor | TrilogyColorValues
  numberOfContent: number
  setNumberOfContent: React.Dispatch<React.SetStateAction<number>>
  header: boolean
  setHeader: React.Dispatch<React.SetStateAction<boolean>>
}

export const BoxContext = React.createContext<BoxContextValue>({
  fullHeight: false,
  highlighted: undefined,
  numberOfContent: 0,
  header: false,
  setHeader: () => {
    //
  },
  setNumberOfContent: () => {
    //
  },
})
