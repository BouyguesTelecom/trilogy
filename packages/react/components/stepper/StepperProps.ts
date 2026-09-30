import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

/**
 * Stepper Interface
 */
export interface StepperProps extends CommonProps, Dev {
  children?: ReactNode
}

export type StepperRef = HTMLDivElement
export type StepperNativeRef = View
