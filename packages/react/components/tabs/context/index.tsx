import { createContext, Dispatch, SetStateAction } from 'react'
interface IContext {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  inverted: boolean
  setInverted: Dispatch<SetStateAction<boolean>>
  small?: boolean
  fullwidth?: boolean
}

export const TabsContext = createContext<IContext>({
  activeIndex: 0,
  inverted: false,
  setActiveIndex: () => 0,
  setInverted: () => false,
  small: false,
  fullwidth: false,
})
