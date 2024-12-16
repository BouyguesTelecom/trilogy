import { ComponentName } from '@/components/enumsComponentsName'
import { TabsContext } from '@/components/tabs/context'
import { TabPanelProps } from '@/components/tabs/tab-panels/tab-panel/TabPanelProps'
import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Tab Panel Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param testId
 * @param others
 */
const TabPanel = ({ children, className, testId, ...others }: TabPanelProps) => {
  const { index, ...props } = others as any
  const { activeIndex } = React.useContext(TabsContext)

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        tabPanel: {
          display: activeIndex !== index ? 'none' : undefined,
        },
      }),
    [],
  )

  return (
    <View style={styles.tabPanel} {...props}>
      {children}
    </View>
  )
}

TabPanel.displayName = ComponentName.TabPanel
export default TabPanel
