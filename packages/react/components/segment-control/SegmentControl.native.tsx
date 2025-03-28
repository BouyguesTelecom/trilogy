import { ComponentName } from '@/components/enumsComponentsName'
import { Text, TextLevels } from '@/components/text'
import { View } from '@/components/view'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import SegmentedControlItem from './item'
import { SegmentControlNativeRef, SegmentControlProps } from './SegmentControlProps'

/**
 * SegmentControl Component
 * @param children {ReactNode} Children for SegmentControl
 * @param onClick onClick event
 * @param activeIndex {number} default active SegmentControl index
 * @param disabled {boolean} disabled SegmentControl
 */
const SegmentControl = React.forwardRef<SegmentControlNativeRef, SegmentControlProps>(({ children, onClick, activeIndex, ...others }, ref): JSX.Element => {
  const [activateIndex, setActivateIndex] = useState(activeIndex || 0)

  const isActive = (index: number, childPropsActive: React.ReactNode) => {
    if (typeof childPropsActive !== 'undefined' && !activateIndex) {
      return childPropsActive
    }
    if (index === activateIndex) {
      return true
    }
  }

  const toggleActive = (e: React.MouseEvent, index: number) => {
    setActivateIndex(index)
    if (onClick) {
      onClick(e)
    }
  }

  const styles = StyleSheet.create({
    padding: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    segmentedControl: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
      borderRadius: 4,
      padding: 4,
      paddingRight: -4,
      borderWidth: 1,
      borderColor: getColorStyle(TrilogyColor.NEUTRAL),
    },
  })

  return (
    <View ref={ref} style={styles.padding}>
      <View style={styles.segmentedControl} {...others}>
        {children &&
          Array.isArray(children) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children.map((child: any, index: number) => {
            const props = {
              active: Boolean(isActive(index, child.props.active)) || false,
              disabled: child.props.disabled,
              key: index,
              tabIndex: index,
              onClick: (event: React.MouseEvent) => {
                toggleActive(event, index)
                if (child) {
                  if (child.props.onClick) {
                    child.props.onClick(event)
                  }
                }
              },
            }
            if (index < 5) {
              return typeof child.valueOf() === 'string' ? (
                <SegmentedControlItem
                  disabled={props.disabled}
                  active={props.active}
                  onClick={(e: unknown) => onClick?.(e)}
                >
                  <Text level={TextLevels.ONE}>{String(child)}</Text>
                </SegmentedControlItem>
              ) : (
                React.cloneElement(child, props)
              )
            }
          })}
      </View>
    </View>
  )
})

SegmentControl.displayName = ComponentName.SegmentControl

export default SegmentControl
