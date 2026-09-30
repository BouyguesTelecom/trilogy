import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { ReactNode } from 'react'

/**
 * Timeline Interface
 */
export interface TimelineProps extends CommonProps, Dev {
  children: ReactNode
  horizontal?: boolean
}

export type TimelineRef = HTMLDivElement
export type TimelineNativeRef = View
