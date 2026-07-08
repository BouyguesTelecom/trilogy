import React from 'react'

interface IContext {
  activeIndex: number
}

export const SliderContext = React.createContext<IContext>({
  activeIndex: 0,
})
