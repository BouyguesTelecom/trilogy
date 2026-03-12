import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Stepper Interface
 */
export interface StepperProps extends CommonProps, Dev {
  children?: React.ReactNode
}

export type StepperRef = HTMLDivElement
export type StepperNativeRef = View
