import { createContext } from 'react'
import { TrilogyBackgroundColor, TrilogyBackgroundColorValues } from '@/interfaces/Color'

interface BoxContextValue {
  fullHeight: boolean
  highlighted?: TrilogyBackgroundColor | TrilogyBackgroundColorValues
  numberOfContent: number
  setNumberOfContent: React.Dispatch<React.SetStateAction<number>>
  header: boolean
  setHeader: React.Dispatch<React.SetStateAction<boolean>>
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
