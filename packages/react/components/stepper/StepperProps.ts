import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Stepper Interface
 */
export interface StepperProps extends CommonProps {
  children?: React.ReactNode
}

export type StepperRef = HTMLDivElement
export type StepperNativeRef = View
