import { View } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
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
