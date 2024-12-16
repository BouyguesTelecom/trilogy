import { TabsProps } from '@/components/tabs/TabsProps'
import { TabsContext } from '@/components/tabs/context'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ComponentName } from '../enumsComponentsName'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param activeIndex {number} default active tab index
 */
const Tabs = ({ children, activeIndex }: TabsProps) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(activeIndex || 0)

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        tabs: {},
      }),
    [],
  )

  React.useEffect(() => {
    activeIndex !== undefined && setCurrentIndex(activeIndex)
  }, [activeIndex])

  return (
    <TabsContext.Provider value={{ activeIndex: currentIndex, setActiveIndex: setCurrentIndex }}>
      <View style={styles.tabs}>{children}</View>
    </TabsContext.Provider>
  )
}

Tabs.displayName = ComponentName.Tabs
export default Tabs
