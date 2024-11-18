import React from 'react'
import { Platform, RefreshControl, ScrollView as ScrollViewNative, StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { ScrollViewProps } from '@/components/scroll-view/ScrollViewProps'
import { getColorStyle } from '@/objects/facets/Color'
import { ScrollDirectionEnum } from '@/objects/facets/ScrollDirection'

/**
 * Scroll View Component
 * @param children {React.ReactNode} ScrollView child
 * @param footer {React.ReactNode} ScrollView footer
 * @param bounce {boolean} Bounce effect on scroll
 * @param centerContent {boolean} center content in scrollView
 * @param refresh {boolean} Is Refreshable ScrollView
 * @param onRefresh {void} On Refreshing ScrollView
 * @param refreshControlColor {TrilogyColor} Color Of Refresh Control
 * @param scrollDirection {Direction} Scroll vertically in default
 * @param id {string} Id for Web / TestID for Native
 */

const ScrollView = (
  {
    children,
    footer,
    bounce,
    centerContent,
    refresh,
    onRefresh,
    refreshControlColor,
    id,
    scrollDirection,
    ...others
  }: ScrollViewProps,
  ref: React.Ref<ScrollViewNative>,
): JSX.Element => {
  const [refreshing, setRefreshing] = React.useState(false)

  const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }

  const onRefreshing = React.useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  const styles = StyleSheet.create({
    stickyContent: {
      flexGrow: 1,
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
  })

  if (footer) {
    return (
      <ScrollViewNative
        horizontal={scrollDirection === ScrollDirectionEnum.HORIZONTAL}
        testID={id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.stickyContent}
        bounces={bounce && Platform.OS === 'ios' && true}
        overScrollMode={(bounce && Platform.OS === 'android' && 'always') || 'never'}
        {...(refresh && {
          refreshControl: (
            <RefreshControl
              tintColor={refreshControlColor && getColorStyle(refreshControlColor)}
              colors={refreshControlColor && [getColorStyle(refreshControlColor)]}
              refreshing={refreshing}
              onRefresh={() => {
                onRefreshing()
                if (onRefresh) {
                  onRefresh()
                }
              }}
            />
          ),
        })}
        {...others}
      >
        <View
          style={{
            flex: 1,
            justifyContent: centerContent ? 'center' : 'flex-start',
          }}
        >
          {children}
        </View>
        <View style={{ justifyContent: 'flex-end' }}>{footer}</View>
      </ScrollViewNative>
    )
  }

  return (
    <ScrollViewNative
      horizontal={scrollDirection === ScrollDirectionEnum.HORIZONTAL}
      testID={id}
      contentContainerStyle={{ flexGrow: 1 }}
      ref={ref}
      showsVerticalScrollIndicator={false}
      bounces={bounce && Platform.OS === 'ios' && true}
      overScrollMode={(bounce && Platform.OS === 'android' && 'always') || 'never'}
      {...(refresh && {
        refreshControl: (
          <RefreshControl
            tintColor={refreshControlColor && getColorStyle(refreshControlColor)}
            colors={refreshControlColor && [getColorStyle(refreshControlColor)]}
            refreshing={refreshing}
            onRefresh={() => {
              onRefreshing()
              if (onRefresh) {
                onRefresh()
              }
            }}
          />
        ),
      })}
      {...others}
    >
      {centerContent ? <View style={{ flex: 1, justifyContent: 'center' }}>{children}</View> : children}
    </ScrollViewNative>
  )
}

ScrollView.displayName = ComponentName.ScrollView

export default React.forwardRef(ScrollView)
