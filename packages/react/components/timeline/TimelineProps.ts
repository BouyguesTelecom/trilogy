import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Timeline Interface
 */
export interface TimelineProps extends CommonProps, Dev {
  children: React.ReactNode
  horizontal?: boolean
}

export type TimelineRef = HTMLDivElement
export type TimelineNativeRef = View
