import { ComponentName } from '@/components/enumsComponentsName'
import TabPanel from '@/components/tabs/tab-panels/tab-panel'
import { TabPanelsProps } from '@/components/tabs/tab-panels/TabPanelsProps'
import React from 'react'
import { View } from 'react-native'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param others
 */
const TabPanels = ({ children, ...others }: TabPanelsProps) => {
  return (
    <View {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <TabPanel {...child.props} index={index} />
      })}
    </View>
  )
}

TabPanels.displayName = ComponentName.TabPanels
export default TabPanels
