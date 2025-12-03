import React from 'react'

interface IContext {
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  inverted: boolean
  setInverted: React.Dispatch<React.SetStateAction<boolean>>
  small?: boolean
  fullwidth?: boolean
}

export const TabsContext = React.createContext<IContext>({
  activeIndex: 0,
  inverted: false,
  setActiveIndex: () => 0,
  setInverted: () => false,
  small: false,
  fullwidth: false,
})
