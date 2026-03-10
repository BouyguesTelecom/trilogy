import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Timeline Interface
 */
export interface TimelineProps extends CommonProps, Dev {
  children: React.ReactNode
  horizontal?: boolean
}

export type TimelineRef = HTMLDivElement
export type TimelineNativeRef = View
