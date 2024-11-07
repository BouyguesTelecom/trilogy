import { IconColor, IconColorValues, IconName, IconNameValues } from '@/components/icon'
import { Accessibility, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Timeline Marker Interface
 */
export interface TimelineMarkerProps extends Accessibility, Dev {
  children?: React.ReactNode
  iconName: IconName | IconNameValues
  iconColor?: IconColor | IconColorValues
}

/**
 * Timeline Marker Web Interface
 */
export interface TimelineMarkerWebProps extends TimelineMarkerProps, Accessibility, CommonProps {
  iconClassname?: string
}
