import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Stepper Interface
 */
export interface StepperProps extends CommonProps {
  children?: React.ReactNode
}

export type StepperRef = HTMLDivElement
export type StepperNativeRef = View
