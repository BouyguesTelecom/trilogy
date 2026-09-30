import { TrilogyColor, TrilogyColorValues } from '@/interfaces/Color'
import { createContext, Dispatch, SetStateAction } from 'react'

interface BoxContextValue {
  fullHeight: boolean
  highlighted?: TrilogyColor | TrilogyColorValues
  numberOfContent: number
  setNumberOfContent: Dispatch<SetStateAction<number>>
  header: boolean
  setHeader: Dispatch<SetStateAction<boolean>>
}

export const BoxContext = createContext<BoxContextValue>({
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
