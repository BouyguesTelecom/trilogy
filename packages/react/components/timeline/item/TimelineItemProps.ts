import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Timeline Item Interface
 */
export interface TimelineItemProps {
  children: React.ReactNode
  done?: boolean
  active?: boolean
  cancel?: boolean
}

/**
 * Timeline Item Web Interface
 */
export interface TimelineItemWebProps extends TimelineItemProps, CommonProps {
  done?: boolean
  active?: boolean
  cancel?: boolean
}

export type TimelineItemRef = HTMLDivElement
export type TimelineItemNativeRef = View
