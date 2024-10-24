import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { SelectorProps } from './SelectorProps'
import { Text, TextLevels } from '@/components/text'
import SelectorItem from './item'
import { getAlignStyle } from '@/objects'

/**
 * Selector Component
 * @param children {ReactNode} Children for Selector
 * @param onClick onClick event
 * @param activeIndex {number} default active tab index
 * @param disabled {boolean} Disabled Selector
 * @param clipped {boolean} Remove the separator bar
 * @param align {Alignable} Horizontal Align
 * @param inverted {boolean} Inverted Selector Color
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * @param accessibilityActivate {boolean}
 * @param end {SelectorEnd} set selector item at last position
 */
const Selector = ({
                    children,
                    onClick,
                    activeIndex = 0,
                    disabled,
                    inverted,
                    align,
                    end,
                    testId,
                    accessibilityLabel,
                    accessibilityActivate = true,
                    ...others
                  }: SelectorProps): JSX.Element => {
  const [activateIndex, setActivateIndex] = useState(activeIndex)

  useEffect(() => {
    setActivateIndex(activeIndex)
  }, [activeIndex])

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
    selector: {
      height: 'auto',
      width: '100%',
      alignSelf: getAlignStyle(align),
    },
  })

  return (
    <View
      style={styles.selector}
      testID={testId}
      accessibilityLabel={accessibilityLabel}
      accessible={accessibilityActivate}
      {...others}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children &&
          Array.isArray(children) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children.map((child: any, index: number) => {
            const props = {
              active: Boolean(isActive(index, child.props.active)) || false,
              key: index,
              selectorIndex: index,
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
              <SelectorItem active={props.active} onClick={(e: unknown) => onClick?.(e)}>
                <Text level={TextLevels.THREE}>{String(child)}</Text>
              </SelectorItem>
            ) : (
              React.cloneElement(child, props)
            )
          })}
        {end && (
          <SelectorItem end onClick={(e: unknown) => end.onClick?.(e)}>
            {end.message}
          </SelectorItem>
        )}
      </ScrollView>
    </View>
  )
}

Selector.displayName = 'Selector'

export default Selector
