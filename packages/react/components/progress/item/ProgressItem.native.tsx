import React, { useEffect, useRef } from 'react'
import { Animated, ViewStyle } from 'react-native'
import { ComponentName } from '../../enumsComponentsName'
import { ProgressItemNativeRef, ProgressItemProps } from './ProgressItemProps'

/**
 * ProgressItem component - Only if stacked
 * @param percent {number} Progress percent
 * @param minPercent {number} Default min percent is 100
 * @param status {StatusProps} Progress status state
 * @param style {Style} Styles passed from parent
 * @param children {React.ReactNode}
 */
const ProgressItem = React.forwardRef<ProgressItemNativeRef, ProgressItemProps>(
  ({ children, percent, style, ...others }, ref): JSX.Element => {
    const animation = useRef(new Animated.Value(0)).current
    const styles = style as ViewStyle[]

    useEffect(() => {
      percent &&
        Animated.timing(animation, {
          toValue: percent,
          duration: 1000,
          useNativeDriver: false,
        }).start()
    }, [animation, percent, style])

    const width = animation.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp',
    })

    return (
      <Animated.View {...others} style={[{ width }, ...styles]} ref={ref}>
        {children}
      </Animated.View>
    )
  },
)

ProgressItem.displayName = ComponentName.ProgressItem
export default ProgressItem
