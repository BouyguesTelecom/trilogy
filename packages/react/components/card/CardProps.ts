import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility, Clickable, Fullheight } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Card Interface
 */

export interface CardProps extends Fullheight, Clickable, Accessibility, CommonProps {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  onClick?: ClickEvent
  reversed?: boolean
  href?: string
  active?: boolean
}
