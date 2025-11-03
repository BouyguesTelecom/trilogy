import { ComponentName } from '@/components/enumsComponentsName'
import { TabsNativeRef, TabsProps } from '@/components/tabs/TabsProps'
import { TabsContext } from '@/components/tabs/context'
import React from 'react'
import { View } from 'react-native'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param activeIndex {number} default active tab index
 * @param inverted {boolean} Inverted style
 */
const Tabs = React.forwardRef<TabsNativeRef, TabsProps>(({ children, activeIndex, inverted, fullwidth }, ref) => {
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
        fullwidth,
      }}
    >
      <View ref={ref}>{children}</View>
    </TabsContext.Provider>
  )
})

Tabs.displayName = ComponentName.Tabs
export default Tabs
