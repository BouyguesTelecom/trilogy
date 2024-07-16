import * as React from "react"
import { Animated, ColorValue, Easing, StyleSheet } from "react-native"
import { StepperStepProps } from "./StepperStepProps"
import { getColorStyle, TrilogyColor } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Stepper Step Component
 * @param children {ReactNode} Stepper Step Children
 * @param active {boolean} Active step
 * @param current {boolean} Current step
 * @param done {boolean} Step done
 * @param label {string} Step label
 * @param step {number|string} Step text circle
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StepperStep = ({
                       active,
                       current,
                       done,
                       error,
                       ...others
                     }: StepperStepProps): JSX.Element => {

  const defaultColor = getColorStyle(TrilogyColor.FONT, 1)
  const activeColor = getColorStyle(TrilogyColor.MAIN)
  const errorColor = getColorStyle(TrilogyColor.ERROR)
  const backgroundColorAnim = React.useRef(new Animated.Value(0)).current

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      defaultColor,
      activeColor,
      errorColor,
    ],
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
      useNativeDriver: true,
      easing: Easing.linear,
    }).start()
  }, [active, current, done, error])

  const styles = StyleSheet.create({
    step: {
      flex: 1,
      width: 59,
      maxWidth: 59,
      height: 4,
      marginRight: 8,
      borderRadius: 4,
      backgroundColor: backgroundColor as unknown as ColorValue,
      zIndex: 1,
    },
  })

  return <Animated.View style={styles.step} {...others}></Animated.View>
}

StepperStep.displayName = ComponentName.StepperStep

export default StepperStep
