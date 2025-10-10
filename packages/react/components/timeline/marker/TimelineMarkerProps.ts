import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

/**
 * Timeline Marker Interface
 */
export interface TimelineMarkerProps extends Accessibility, Dev {
  iconName: IconName | IconNameValues
}

/**
 * Timeline Marker Web Interface
 */
export interface TimelineMarkerWebProps extends TimelineMarkerProps, Accessibility, CommonProps {
  iconClassname?: string
}

export type TimelineMarkerRef = HTMLDivElement
export type TimelineMarkerNativeRef = View
