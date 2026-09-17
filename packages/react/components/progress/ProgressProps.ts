import { View } from 'react-native'
import { StatusProps } from "@/interfaces/Status";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Progress Interface
 */
export interface ProgressProps extends StatusProps, CommonProps, Dev {
  children?: React.ReactNode
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
