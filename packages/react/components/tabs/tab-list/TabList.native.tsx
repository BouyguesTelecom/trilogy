import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TabsContext } from '@/components/tabs/context'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListNativeRef, TabListProps } from '@/components/tabs/tab-list/TabListProps'
import { getColorStyle, TrilogyColor } from '@/objects'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { TabRef } from './tab/TabProps'

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
  const TabListRef = React.useRef<ScrollView>(null)
  const tabRefs = React.useRef<TabRef[]>([])

  const TabElms = React.useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return false
      return <Tab ref={(el) => (tabRefs.current[index] = el as TabRef)} index={index} {...child.props} />
    })
  }, [children, tabRefs])

  const styles = StyleSheet.create({
    tabList: {
      flexDirection: 'row',
      backgroundColor: getColorStyle(inverted ? TrilogyColor.MAIN : 'transparent'),
    },
  })

  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onLayout={(e) => {
        console.log('container', e.nativeEvent.layout.width)
      }}
    >
      <Icon name='tri-arrow-left' align='ALIGNED_CENTER' />
      <ScrollView
        onLayout={(e) => {
          console.log('scroll', e.nativeEvent.layout.width)
        }}
        ref={TabListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabList}
        {...others}
      >
        {TabElms}
      </ScrollView>
      <Icon name='tri-arrow-right' align='ALIGNED_CENTER' />
    </View>
  )
})

TabList.displayName = ComponentName.TabList
export default TabList
