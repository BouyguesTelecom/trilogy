import { ComponentName } from '@/components/enumsComponentsName'
import { TabsNativeRef, TabsProps } from '@/components/tabs/TabsProps'
import { TabsContext } from '@/components/tabs/context'
import { forwardRef, useState, useEffect } from 'react'
import { View } from 'react-native'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param activeIndex {number} default active tab index
 * @param inverted {boolean} Inverted style
 * @param fullwidth {boolean} Fullwidth tabs
 */
const Tabs = forwardRef<TabsNativeRef, TabsProps>(({ children, activeIndex, inverted, fullwidth }, ref) => {
  const [currentIndex, setCurrentIndex] = useState<number>(activeIndex || 0)
  const [isInverted, setIsInverted] = useState<boolean>(inverted || false)

  useEffect(() => {
    activeIndex !== undefined && setCurrentIndex(activeIndex)
  }, [activeIndex])

  useEffect(() => {
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
