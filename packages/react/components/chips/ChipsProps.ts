import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility, Clickable, Dev } from '@/objects'

/**
 * Chips Interface
 */
export interface ChipsProps extends Clickable, Accessibility, Dev {
  children: string | React.ReactNode
  onClick?: ClickEvent
  className?: string
  active?: boolean
  disabled?: boolean
  id?: string
}
