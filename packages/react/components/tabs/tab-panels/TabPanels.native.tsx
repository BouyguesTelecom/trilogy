import { ComponentName } from '@/components/enumsComponentsName'
import { TabsContext } from '@/components/tabs/context'
import TabPanel from '@/components/tabs/tab-panels/tab-panel'
import { TabPanelsProps } from '@/components/tabs/tab-panels/TabPanelsProps'
import { getColorStyle, TrilogyColor } from '@/objects'
import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param others
 */
const TabPanels = ({ children, ...others }: TabPanelsProps) => {
  const { inverted } = React.useContext(TabsContext)

  const styles = StyleSheet.create({
    tabPanels: {
      paddingVertical: 8,
      backgroundColor: getColorStyle(inverted ? TrilogyColor.MAIN : 'transparent'),
    },
  })
  return (
    <View style={styles.tabPanels} {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <TabPanel {...child.props} index={index} />
      })}
    </View>
  )
}

TabPanels.displayName = ComponentName.TabPanels
export default TabPanels
