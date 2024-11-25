import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import TabsItem from '@/components/tabs/item'
import { TabsProps } from '@/components/tabs/TabsProps'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * Tabs Component
 * @param children {ReactNode} Children for tabs
 * @param onClick onClick event
 * @param activeIndex {number} default active tab index
 * @param disabled {boolean} Disabled tabs
 * @param inverted {boolean} dark mode
 * @param shadowless {boolean} No shadow
 * @param centered {boolean} Centered tabs
 */
const Tabs = React.forwardRef(
  (
    { children, onClick, activeIndex, disabled, centered, inverted, ...others }: TabsProps,
    ref: React.Ref<ScrollView>,
  ): JSX.Element => {
    const [activateIndex, setActivateIndex] = useState(activeIndex)
    const [isIcons, setIsIcons] = React.useState(false)

    const isActive = (index: number, childPropsActive: React.ReactNode) => {
      if (typeof childPropsActive !== 'undefined' && !activateIndex) {
        return childPropsActive
      }
      if (index === activateIndex) {
        return true
      }
    }

    const toggleActive = (e: React.MouseEvent, index: number) => {
      if (disabled) {
        return false
      }
      setActivateIndex(index)
      if (onClick) {
        onClick(e)
      }
    }

    const styles = StyleSheet.create({
      tabs: {
        height: isIcons ? 64 : 48,
        flexDirection: 'row',
        backgroundColor: inverted ? getColorStyle(TrilogyColor.MAIN) : getColorStyle(TrilogyColor.BACKGROUND),
      },
    })

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
        contentContainerStyle={centered && { justifyContent: 'center', flexGrow: 1 }}
        ref={ref}
        {...others}
      >
        {children &&
          Array.isArray(children) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children.map((child: any, index: number) => {
            if (!isIcons && child.props.iconName) setIsIcons(true)
            const props = {
              active: child.props.active ?? (Boolean(isActive(index, child.props.active)) || false),
              key: index,
              tabIndex: index,
              inverted: inverted,
              onClick: (event: React.MouseEvent) => {
                toggleActive(event, index)
                if (child) {
                  if (child.props.onClick) {
                    child.props.onClick(event)
                  }
                }
              },
            }
            return typeof child.valueOf() === 'string' ? (
              <TabsItem active={props.active} onClick={(e: unknown) => onClick?.(e)}>
                <Text level={TextLevels.THREE}>{String(child)}</Text>
              </TabsItem>
            ) : (
              React.cloneElement(child, props)
            )
          })}
      </ScrollView>
    )
  },
)

Tabs.displayName = ComponentName.Tabs
export default Tabs
