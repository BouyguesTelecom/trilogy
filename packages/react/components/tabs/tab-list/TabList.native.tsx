import { ComponentName } from '@/components/enumsComponentsName'
import { TabsContext } from '@/components/tabs/context'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListNativeRef, TabListProps } from '@/components/tabs/tab-list/TabListProps'
import { getColorStyle, TrilogyColor } from '@/objects'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param align
 * @param others
 */
const TabList = React.forwardRef<TabListNativeRef, TabListProps>(({ children, ...others }, ref) => {
  const { inverted } = React.useContext(TabsContext)

  const styles = StyleSheet.create({
    tabList: {
      flexDirection: 'row',
      overflow: 'visible',
      backgroundColor: getColorStyle(inverted ? TrilogyColor.MAIN : 'transparent'),
    },
  })

  return (
    <ScrollView ref={ref} horizontal showsHorizontalScrollIndicator={false} style={styles.tabList} {...others}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return <Tab {...child.props} index={index} />
      })}
    </ScrollView>
  )
})

TabList.displayName = ComponentName.TabList
export default TabList
