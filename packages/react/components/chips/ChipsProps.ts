import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'

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
