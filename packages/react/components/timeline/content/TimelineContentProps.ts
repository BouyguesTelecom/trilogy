/**
 * Timeline Content Interface
 */
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface TimelineContentProps {
  children?: React.ReactNode
  heading?: string
  content?: string
  linkTo?: string
  linkLabel?: string
}

/**
 * Timeline Content Web Interface
 */
export interface TimelineContentWebProps extends TimelineContentProps, CommonProps {}
