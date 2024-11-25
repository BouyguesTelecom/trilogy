import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { SegmentControlItemProps } from '@/components/segment-control/item/SegmentControlItemProps'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'

/**
 * SegmentControlItem Item Component
 * @param active {boolean} active Segment Control item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param disabled {boolean} disable onClick on item
 * @param inverted {boolean} invert color of active item
 */
const SegmentControlItem = React.forwardRef(
  (
    { active, children, onClick, inverted, disabled, ...others }: SegmentControlItemProps,
    ref: React.Ref<TouchableOpacity>,
  ): JSX.Element => {
    const [activeItem, setActiveItem] = useState<boolean>(active || false)

    const styles = StyleSheet.create({
      tabsItem: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 4,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor:
          (activeItem && getColorStyle(TrilogyColor.MAIN)) ||
          (inverted && getColorStyle(TrilogyColor.BACKGROUND)) ||
          (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) ||
          getColorStyle(TrilogyColor.NEUTRAL_FADE),
      },
      text: {
        paddingHorizontal: 16,
        color:
          (activeItem && !inverted && getColorStyle(TrilogyColor.BACKGROUND)) ||
          (!activeItem && !inverted && disabled && getColorStyle(TrilogyColor.DISABLED)) ||
          getColorStyle(TrilogyColor.MAIN),
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: activeItem ? '600' : 'normal',
      },
    })

    useEffect(() => {
      setActiveItem(active || false)
    }, [active])

    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled}
        style={[styles.tabsItem]}
        onPress={(e?: unknown) => {
          if (!disabled) {
            setActiveItem(active || false)
            if (onClick) {
              onClick(e)
            }
          }
        }}
        {...others}
      >
        {children && typeof children.valueOf() === 'string' && (
          <Text style={styles.text} ellipsizeMode={'tail'} numberOfLines={1}>
            {String(children)}
          </Text>
        )}
      </TouchableOpacity>
    )
  },
)

SegmentControlItem.displayName = ComponentName.SegmentControlItem
export default SegmentControlItem
