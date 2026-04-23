import { ComponentName } from '@/components/enumsComponentsName'
import { getStatusStyle } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { SwitchNativeRef, SwitchProps } from './SwitchProps'

const TRACK_WIDTH = 44
const TRACK_HEIGHT = 22
/**
 * Switch Component
 * @param id {string} Is auto generate by default
 * @param checked {boolean} Checked switch
 * @param onChange {Function} onChange event
 * @param status {StatusState} Status Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param disabled {boolean} Switch disabled
 * @param readonly {boolean} Switch readonly
 * @param name {string} Switch name
 */
const Switch = React.forwardRef<SwitchNativeRef, SwitchProps>(
  ({ id = React.useId(), checked, onChange, status, disabled, readonly, name }, ref): JSX.Element => {
    const height = useSharedValue(TRACK_HEIGHT)
    const width = useSharedValue(TRACK_WIDTH)
    const value = useSharedValue(checked ? 1 : 0)
    const [_checked, setChecked] = useState<boolean>(checked || false)

    const backgroundColorOff = getColorStyle(TrilogyColor.NEUTRAL)
    const backgroundColorDisabled = getColorStyle(TrilogyColor.DISABLED)
    const thumbColor = getColorStyle(TrilogyColor.BACKGROUND)
    const statusColor = getStatusStyle(status).color
    const trackColorOff = disabled ? backgroundColorDisabled : backgroundColorOff
    const trackColorOn = disabled ? backgroundColorDisabled : statusColor

    const trackAnimatedStyle = useAnimatedStyle(() => {
      const color = interpolateColor(value.value, [0, 1], [trackColorOff, trackColorOn])
      const colorValue = withTiming(color, { duration: 200 })
      return {
        backgroundColor: colorValue,
        borderRadius: height.value / 2,
      }
    })

    const thumbAnimatedStyle = useAnimatedStyle(() => {
      const moveValue = interpolate(Number(value.value), [0, 1], [0, width.value - height.value])
      const translateValue = withTiming(moveValue, { duration: 200 })
      return {
        transform: [{ translateX: translateValue }],
        borderRadius: height.value / 2,
      }
    })

    const styles = StyleSheet.create({
      track: {
        alignItems: 'flex-start',
        width: TRACK_WIDTH,
        height: TRACK_HEIGHT,
        padding: 2,
      },
      thumb: {
        height: '100%',
        aspectRatio: 1,
        backgroundColor: thumbColor,
      },
      pressable: {
        alignSelf: 'flex-start',
      },
    })

    useEffect(() => {
      if (!readonly) {
        setChecked(checked || false)
        value.value = checked ? 1 : 0
      }
    }, [checked, readonly])

    return (
      <Pressable
        style={styles.pressable}
        accessibilityRole='switch'
        ref={ref}
        testID='switch-id'
        nativeID={name ? `${name}_${id}` : id}
        disabled={disabled}
        onPress={() => {
          if (!readonly && onChange) {
            const newValue = !_checked
            setChecked(newValue)
            value.value = newValue ? 1 : 0
            onChange({ switchState: newValue, switchName: name || '' })
          }
        }}
      >
        <Animated.View
          style={[styles.track, trackAnimatedStyle]}
          onLayout={(e) => {
            height.value = e.nativeEvent.layout.height
            width.value = e.nativeEvent.layout.width
          }}
        >
          <Animated.View style={[styles.thumb, thumbAnimatedStyle]} />
        </Animated.View>
      </Pressable>
    )
  },
)

Switch.displayName = ComponentName.Switch

export default Switch
