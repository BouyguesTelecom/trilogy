import { TabsProps } from '@/components/tabs/TabsProps'
import { TabsContext } from '@/components/tabs/context'
import React from 'react'
import { View } from 'react-native'
import { ComponentName } from '../enumsComponentsName'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param activeIndex {number} default active tab index
 */
const Tabs = ({ children, activeIndex, inverted }: TabsProps) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(activeIndex || 0)
  const [isInverted, setIsInverted] = React.useState<boolean>(inverted || false)

  React.useEffect(() => {
    activeIndex !== undefined && setCurrentIndex(activeIndex)
  }, [activeIndex])

  React.useEffect(() => {
    setIsInverted(inverted || false)
  }, [inverted])

  return (
    <TabsContext.Provider
      value={{
        activeIndex: currentIndex,
        inverted: isInverted,
        setInverted: setIsInverted,
        setActiveIndex: setCurrentIndex,
      }}
    >
      <View>{children}</View>
    </TabsContext.Provider>
  )
}

Tabs.displayName = ComponentName.Tabs
export default Tabs
