import { Accessibility } from '../../../objects/facets/Accessibility'
import { Clickable } from '../../../objects/facets/Clickable'

/**
 * Selector Item Interface
 */
export interface SelectorItemProps extends Clickable, Accessibility {
  children: React.ReactChild
  active?: boolean
  className?: string
  id?: string
  inverted?: boolean
  end?: boolean
  selectorIndex?: number
}
