import { ComponentName } from '@/components/enumsComponentsName'
import { TabsContext } from '@/components/tabs/context'
import { TabPanelNativeRef, TabPanelProps } from '@/components/tabs/tab-panels/tab-panel/TabPanelProps'
import React from 'react'
import { Animated, StyleSheet } from 'react-native'

/**
 * Tab Panel Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param testId
 * @param others
 */
const TabPanel = React.forwardRef<TabPanelNativeRef, TabPanelProps>(({ children, testId, ...others }, ref) => {
  const { index, ...props } = others as any
  const { activeIndex } = React.useContext(TabsContext)
  const opacity = React.useRef(new Animated.Value(0)).current

  const styles = StyleSheet.create({
    tabPanel: {
      display: activeIndex !== index ? 'none' : 'flex',
      opacity: opacity,
    },
  })

  React.useEffect(() => {
    if (activeIndex === index) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }, [activeIndex, index, opacity])

  return (
    <Animated.View ref={ref} style={styles.tabPanel} {...props} testID={testId}>
      {children}
    </Animated.View>
  )
})

TabPanel.displayName = ComponentName.TabPanel
export default TabPanel
