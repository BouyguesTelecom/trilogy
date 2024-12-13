import React from 'react'

interface IContext {
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

export const TabsContext = React.createContext<IContext>({
  activeIndex: 0,
  setActiveIndex: () => 0,
})
