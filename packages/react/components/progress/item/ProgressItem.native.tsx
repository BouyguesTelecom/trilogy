import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { ProgressItemProps } from './ProgressItemProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Progress Item component - Only if stacked
 * @param percent {number} Progress percent
 * @param minPercent {number} Default min percent is 100
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param children {React.ReactNode}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProgressItem = ({ children, percent, status, ...others }: ProgressItemProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const givenProps = others as any
  const givenstyle = givenProps.style

  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    percent &&
      Animated.timing(animation, {
        toValue: percent,
        duration: 1000,
        useNativeDriver: false,
      }).start()
  }, [animation, percent])

  const width = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  })

  return (
    <Animated.View {...others} style={[{ width }, ...givenstyle]}>
      {children}
    </Animated.View>
  )
}

ProgressItem.dispmayName = ComponentName.ProgressItem

export default ProgressItem
