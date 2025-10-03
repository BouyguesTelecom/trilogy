import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon/index.native'
import { TabsContext } from '@/components/tabs/context'
import Tab from '@/components/tabs/tab-list/tab/Tab.native'
import { TabListNativeRef, TabListProps } from '@/components/tabs/tab-list/TabListProps'
import { getColorStyle, TrilogyColor } from '@/objects/index.native'
import React from 'react'
import {
  LayoutChangeEvent,
  LayoutRectangle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

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
  const paddingHorizontalTab = 12
  const negativeGap = -35

  const [tabsWidth, setTabsWidth] = React.useState<number>(0)
  const [tabListWidth, setTabListWidth] = React.useState<number>(0)
  const [scrollLeft, setScrollLeft] = React.useState<number>(0)
  const [tabFocused, setTabFocused] = React.useState<number>(0)
  const [tabElms, setTabElms] = React.useState<LayoutRectangle[]>([])

  React.useImperativeHandle(ref, () => TabListRef.current as ScrollView)

  const styles = StyleSheet.create({
    tabList: {
      flexDirection: 'row',
      backgroundColor: getColorStyle(inverted ? TrilogyColor.MAIN : 'transparent'),
    },
    arrow: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 2 },
  })

  const isVisibleArrowLeft = React.useMemo(() => {
    if (!tabElms.length) return false
    return scrollLeft > tabElms[0].width / 2
  }, [tabElms, scrollLeft])

  const isVisibleArrowRight = React.useMemo(
    () => tabListWidth - tabsWidth - scrollLeft > negativeGap,
    [tabListWidth, tabsWidth, scrollLeft],
  )

  const handleScrollList = React.useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollLeft = e.nativeEvent.contentOffset.x
      const scrollPosition = tabElms.findIndex(
        (tab) => scrollLeft >= tab.x - paddingHorizontalTab && scrollLeft <= tab.x + tab.width - paddingHorizontalTab,
      )
      setTabFocused(scrollPosition)
      setScrollLeft(scrollLeft)
    },
    [tabElms],
  )

  const scrollWithArrow = React.useCallback(
    (direction: number) => {
      if (tabElms.length) {
        const nextTab = tabFocused + direction
        const nextPosition = tabElms[nextTab === -1 ? 0 : nextTab]
        nextPosition && TabListRef.current?.scrollTo({ x: nextPosition.x + 1, animated: true })
      }
    },
    [tabFocused, TabListRef, tabElms],
  )

  const onClickPrev = React.useCallback(() => {
    isVisibleArrowLeft && scrollWithArrow(-1)
  }, [scrollWithArrow, isVisibleArrowLeft])

  const onClickNext = React.useCallback(() => {
    isVisibleArrowRight && scrollWithArrow(1)
  }, [scrollWithArrow, isVisibleArrowRight])

  return (
    <View style={{ flexDirection: 'row' }} onLayout={(e) => setTabsWidth(e.nativeEvent.layout.width)}>
      {tabListWidth > tabsWidth && (
        <View style={styles.arrow}>
          <Icon
            name='tri-arrow-left'
            align='ALIGNED_CENTER'
            color={isVisibleArrowLeft ? undefined : 'transparent'}
            onClick={onClickPrev}
          />
        </View>
      )}
      <ScrollView
        ref={TabListRef}
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
              onLayout={(e: LayoutChangeEvent) => {
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
      {tabListWidth > tabsWidth && (
        <View style={styles.arrow}>
          <Icon
            name='tri-arrow-right'
            align='ALIGNED_CENTER'
            color={isVisibleArrowRight ? undefined : 'transparent'}
            onClick={onClickNext}
          />
        </View>
      )}
    </View>
  )
})

TabList.displayName = ComponentName.TabList
export default TabList
