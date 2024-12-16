import { ComponentName } from '@/components/enumsComponentsName'
import { TabsContext } from '@/components/tabs/context'
import { TabPanelProps } from '@/components/tabs/tab-panels/tab-panel/TabPanelProps'
import React from 'react'
import { Animated, StyleSheet } from 'react-native'

/**
 * Tab Panel Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param testId
 * @param others
 */
const TabPanel = ({ children, testId, ...others }: TabPanelProps) => {
  const { index, ...props } = others as any
  const { activeIndex } = React.useContext(TabsContext)
  const opacity = React.useRef(new Animated.Value(0)).current

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        tabPanel: {
          display: activeIndex !== index ? 'none' : 'flex',
          opacity: opacity,
        },
      }),
    [activeIndex, index, opacity],
  )

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
    <Animated.View style={styles.tabPanel} {...props} testID={testId}>
      {children}
    </Animated.View>
  )
}

TabPanel.displayName = ComponentName.TabPanel
export default TabPanel
