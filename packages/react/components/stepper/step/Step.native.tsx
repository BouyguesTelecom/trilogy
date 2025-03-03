import * as React from 'react'
import { Animated, ColorValue, Easing, StyleSheet } from 'react-native'
import { StepNativeRef, StepProps } from './StepProps'
import { getColorStyle, TrilogyColor } from '@/objects'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Stepper Step Component
 * @param active {boolean} Active step
 * @param current {boolean} Current step
 * @param done {boolean} Step done
 * @param error {boolean} display error step
 * @param children {ReactNode} Stepper Step Children
 */
const Step = React.forwardRef<StepNativeRef, StepProps>(({ active, current, done, error, ...others }, ref): JSX.Element => {
  const defaultColor = getColorStyle(TrilogyColor.NEUTRAL)
  const activeColor = getColorStyle(TrilogyColor.MAIN)
  const errorColor = getColorStyle(TrilogyColor.ERROR)
  const backgroundColorAnim = React.useRef(new Animated.Value(0)).current

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [defaultColor as string, activeColor as string, errorColor as string],
  })

  React.useEffect(() => {
    let targetValue
    if (error) {
      targetValue = 2
    } else if (active || current || done) {
      targetValue = 1
    } else {
      targetValue = 0
    }

    Animated.timing(backgroundColorAnim, {
      toValue: targetValue,
      duration: 650,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start()
  }, [active, current, done, error])

  const styles = StyleSheet.create({
    step: {
      flex: 1,
      height: 4,
      marginRight: 8,
      borderRadius: 4,
      backgroundColor: backgroundColor as unknown as ColorValue,
      zIndex: 1,
    },
  })

  return <Animated.View ref={ref} style={styles.step} {...others}></Animated.View>
})

Step.displayName = ComponentName.Step

export default Step
