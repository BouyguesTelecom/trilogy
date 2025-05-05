import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TabsContext } from '@/components/tabs/context'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListNativeRef, TabListProps } from '@/components/tabs/tab-list/TabListProps'
import { getColorStyle, TrilogyColor } from '@/objects'
import React from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native'

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

  const [tabsWidth, setTabsWidth] = React.useState<number>(0)
  const [tabListWidth, setTabListWidth] = React.useState<number>(0)
  const [scrollLeft, setScrollLeft] = React.useState<number>(0)
  const [tabFocused, setTabFocused] = React.useState<number>(0)
  const [tabElms, setTabElms] = React.useState<[]>([])

  const styles = StyleSheet.create({
    tabList: {
      flexDirection: 'row',
      backgroundColor: getColorStyle(inverted ? TrilogyColor.MAIN : 'transparent'),
    },
  })

  const handleScrollList = React.useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollLeft = e.nativeEvent.contentOffset.x
      const scrollPosition = tabElms.findIndex((tab) => scrollLeft >= tab.x && scrollLeft <= tab.x + tab.width)
      setTabFocused(scrollPosition)
      setScrollLeft(scrollLeft)
    },
    [tabElms],
  )

  const isVisibleArrowLeft = React.useMemo(() => {
    if (!tabElms.length) return false
    return scrollLeft > tabElms[0].width / 2
  }, [tabElms, scrollLeft])

  const isVisibleArrowRight = React.useMemo(
    () => tabListWidth - tabsWidth - scrollLeft > 5,
    [tabListWidth, tabsWidth, scrollLeft],
  )

  return (
    <View style={{ position: 'relative' }} onLayout={(e) => setTabsWidth(e.nativeEvent.layout.width)}>
      {isVisibleArrowLeft && (
        <View style={{ position: 'absolute', left: 0, top: 0 }}>
          <Icon name='tri-arrow-left' align='ALIGNED_CENTER' />
        </View>
      )}
      <ScrollView
        scrollEventThrottle={16}
        onContentSizeChange={(w) => setTabListWidth(w)}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabList}
        onScroll={handleScrollList}
        {...others}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return false
          return (
            <Tab
              onLayout={(e) => {
                e.persist()
                setTabElms((prev) => {
                  const updatedArray = [...prev]
                  updatedArray[index] = e.nativeEvent.layout
                  return updatedArray
                })
              }}
              index={index}
              {...child.props}
            />
          )
        })}
      </ScrollView>
      {isVisibleArrowRight && (
        <View style={{ position: 'absolute', right: 0, top: 0 }}>
          <Icon name='tri-arrow-right' align='ALIGNED_CENTER' />
        </View>
      )}
    </View>
  )
})

TabList.displayName = ComponentName.TabList
export default TabList
