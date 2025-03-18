import React, {useEffect, useRef} from 'react'
import {Animated, StyleSheet} from 'react-native'
import {ProgressItemNativeRef, ProgressItemProps} from './ProgressItemProps'
import {ComponentName} from '../../enumsComponentsName'
import {getColorStyle, getStatusStyle, TrilogyColor} from "../../../objects/facets";

/**
 * ProgressItem component - Only if stacked
 * @param percent {number} Progress percent
 * @param minPercent {number} Default min percent is 100
 * @param status {StatusProps} Progress status state
 * @param style {ViewStyle[]} Styles passed from parent
 * @param children {React.ReactNode}
 */
const ProgressItem = React.forwardRef<ProgressItemNativeRef, ProgressItemProps>(({
                                                                                   children,
                                                                                   percent,
                                                                                   minPercent = 100,
                                                                                   status,
                                                                                   style,
                                                                                   ...others
                                                                                 }, ref): JSX.Element => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const givenProps = others as any
  const givenstyle = givenProps.style

  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    percent &&
    Animated.timing(animation, {
      toValue: percent,
      duration: 1000,
      useNativeDriver: false,
    }).start()
    console.log('style : ', style)
  }, [animation, percent, style])

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

})

ProgressItem.displayName = ComponentName.ProgressItem
export default ProgressItem
