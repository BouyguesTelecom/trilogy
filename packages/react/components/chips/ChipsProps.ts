import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'

/**
 * Chips Interface
 */
export interface ChipsProps extends Clickable, Accessibility {
  children: string | React.ReactNode
  onClick?: ClickEvent
  className?: string
  active?: boolean
  disabled?: boolean
  id?: string

  inverted?: boolean
}
