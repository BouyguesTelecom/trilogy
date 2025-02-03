import React from 'react'
import { TabsContext } from '../context'

interface IParams {
  activeIndex?: number
  inverted?: boolean
}

export const useTabs = ({ activeIndex, inverted }: IParams) => {
  try {
    const [currentIndex, setCurrentIndex] = React.useState<number>(activeIndex || 0)
    const [isInverted, setIsInverted] = React.useState<boolean>(inverted || false)

    React.useEffect(() => {
      activeIndex !== undefined && setCurrentIndex(activeIndex)
    }, [activeIndex])

    const ContextProvider = ({ children }: { children?: React.ReactElement }) => {
      return (
        <TabsContext.Provider
          value={{
            activeIndex: currentIndex,
            inverted: isInverted,
            setInverted: setIsInverted,
            setActiveIndex: setCurrentIndex,
          }}
        >
          {children}
        </TabsContext.Provider>
      )
    }

    return { ContextProvider, isInverted }
  } catch {
    return {
      ContextProvider: ({ children }: { children?: React.ReactElement }) => <>{children}</>,
      isInverted: inverted || false,
    }
  }
}
