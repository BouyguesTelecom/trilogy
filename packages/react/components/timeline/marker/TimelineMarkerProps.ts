import { IconColor, IconColorValues, IconName, IconNameValues } from '@/components/icon'
import { Accessibility, Dev } from '@/objects'

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
export interface TimelineMarkerWebProps extends TimelineMarkerProps, Accessibility {
  className?: string
  iconClassname?: string
}
