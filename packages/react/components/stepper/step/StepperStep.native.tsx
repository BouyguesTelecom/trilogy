import React from 'react'
import { StyleSheet } from 'react-native'
import { StepperStepProps } from './StepperStepProps'
import { View } from '../../view'
import { getColorStyle, TrilogyColor } from '../../../objects/facets/color'
import { ComponentName } from '../../enumsComponentsName'

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
const StepperStep = ({ active, current, done, error, ...others }: StepperStepProps): JSX.Element => {
  const styles = StyleSheet.create({
    step: {
      flex: 1,
      width: 59,
      maxWidth: 59,
      height: 4,
      marginRight: 8,
      borderRadius: 4,
      backgroundColor:
        (error && getColorStyle(TrilogyColor.ERROR)) ||
        (active && getColorStyle(TrilogyColor.SECONDARY)) ||
        (current && getColorStyle(TrilogyColor.SECONDARY)) ||
        (done && getColorStyle(TrilogyColor.TERTIARY)) ||
        '#eee',
      zIndex: 1,
    },
  })

  return <View style={styles.step} {...others}></View>
}

StepperStep.displayName = ComponentName.StepperStep

export default StepperStep
