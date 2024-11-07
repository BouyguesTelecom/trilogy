/**
 * Timeline Content Interface
 */
import { Clickable } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

export interface TimelineContentProps extends Clickable {
  children?: React.ReactNode
  heading?: string
  content?: string
  link?: string
  contentLink?: string
}

/**
 * Timeline Content Web Interface
 */
export interface TimelineContentWebProps extends TimelineContentProps, Clickable, CommonProps {}
