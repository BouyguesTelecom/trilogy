import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import {ProgressItemNativeRef, ProgressItemProps} from './ProgressItemProps'
import { ComponentName } from '../../enumsComponentsName'

/**
 * ProgressItem component - Only if stacked
 * @param percent {number} Progress percent
 * @param minPercent {number} Default min percent is 100
 * @param status {StatusProps} Progress status state
 * @param children {React.ReactNode}
 */
const ProgressItem = React.forwardRef<ProgressItemNativeRef, ProgressItemProps>((
    {
     children,
     percent,
     ...others
   }, ref): JSX.Element => {

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
    <Animated.View ref={ref} style={[{ width }, ...givenstyle]} {...others}>
      {children}
    </Animated.View>
  )

})

ProgressItem.displayName = ComponentName.ProgressItem
export default ProgressItem
