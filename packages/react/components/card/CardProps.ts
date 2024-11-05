import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility, Clickable, Fullheight } from '@/objects'

/**
 * Card Interface
 */

export interface CardProps extends Fullheight, Clickable, Accessibility {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  className?: string
  onClick?: ClickEvent
  reversed?: boolean
  href?: string
  active?: boolean
}
