import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { useEffect, useState, forwardRef, Ref } from 'react'
import { useAnimatedPressable } from '@/hooks/useAnimatedPressable'
import { View, Text } from 'react-native'
import { Theme } from '@/constants/theme'
import { memoStyles } from '@/helpers/memoStyles'
import {
  SegmentControlItemNativeRef,
  SegmentControlItemProps,
} from '@/components/segment-control/item/SegmentControlItemProps'
import { AnimatedPressable } from '@/components/animatedPressable/AinmatedPressable.native'

/**
 * SegmentControlItem Item Component
 * @param active {boolean} active Segment Control item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param disabled {boolean} disable onClick on item
 * @param id {string} Custom id attribute
 */
const SegmentControlItem = forwardRef<SegmentControlItemNativeRef, SegmentControlItemProps>(
  ({ active, children, onClick, disabled, ...others }, ref): JSX.Element => {
    const { animatedStyle, handleAnimate } = useAnimatedPressable()

    const [activeItem, setActiveItem] = useState<boolean>(active || false)

    const mainColor = getColorStyle(TrilogyColor.MAIN)
    const disabledFadeColor = getColorStyle(TrilogyColor.DISABLED_FADE)
    const bgColor = getColorStyle(TrilogyColor.BACKGROUND)
    const disabledColor = getColorStyle(TrilogyColor.DISABLED)

    const styles = memoStyles({
      tabsItem: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 4,
        borderRadius: Theme.radius.sm,
        alignItems: 'center',
        backgroundColor: (activeItem && mainColor) || (disabled && disabledFadeColor) || bgColor,
      },
      text: {
        paddingHorizontal: 10,
        color: (activeItem && bgColor) || (!activeItem && disabled && disabledColor) || mainColor,
        marginVertical: 12,
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
      <AnimatedPressable
        ref={ref as Ref<View>}
        disabled={disabled}
        style={[styles.tabsItem, animatedStyle]}
        onPress={(e?: unknown) => {
          if (!disabled) {
            handleAnimate()
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
      </AnimatedPressable>
    )
  },
)

SegmentControlItem.displayName = ComponentName.SegmentControlItem

export default SegmentControlItem
