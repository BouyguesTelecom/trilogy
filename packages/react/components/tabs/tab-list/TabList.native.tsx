import { ComponentName } from '@/components/enumsComponentsName'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListProps } from '@/components/tabs/tab-list/TabListProps'
import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param align
 * @param others
 */
const TabList = ({ children, ...others }: TabListProps) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        tabList: {
          flexDirection: 'row',
        },
      }),
    [],
  )

  return (
    <View style={styles.tabList} {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <Tab {...child.props} index={index} />
      })}
    </View>
  )
}

TabList.displayName = ComponentName.TabList
export default TabList
