import { View } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Stepper Interface
 */
export interface StepperProps extends CommonProps, Dev {
  children?: ReactNode
}

export type StepperRef = HTMLDivElement
export type StepperNativeRef = View
