import { Accessibility, Clickable } from '@/objects'

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
