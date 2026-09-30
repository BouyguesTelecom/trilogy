import { View } from 'react-native'
import { StatusProps } from "@/interfaces/Status"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

/**
 * Progress Interface
 */
export interface ProgressProps extends StatusProps, CommonProps, Dev {
  children?: ReactNode
  value?: number
  max?: number
  small?: boolean
  legendStart?: string
  legendCenter?: string
  legendEnd?: string
  stacked?: boolean
}

export type ProgressRef = HTMLDivElement
export type ProgressNativeRef = View
