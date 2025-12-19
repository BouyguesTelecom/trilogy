import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Timeline Interface
 */
export interface TimelineProps extends CommonProps {
  children: React.ReactNode
  horizontal?: boolean
}

export type TimelineRef = HTMLDivElement
export type TimelineNativeRef = View
