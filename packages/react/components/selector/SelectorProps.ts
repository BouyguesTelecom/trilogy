import { ClickEvent } from '../../events/OnClickEvent'
import { Centerable } from '../../objects/facets/Centerable'
import { AlignableProps } from '../../objects/facets/Alignable'
import { JustifiableProps } from '../../objects/facets/Justifiable'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'

/**
 * Selector Interface
 */

interface SelectorEnd {
  message: string
  onClick: ClickEvent
}
export interface SelectorProps extends Centerable, AlignableProps, JustifiableProps, Clickable, Accessibility {
  children: React.ReactNode
  disabled?: boolean
  activeIndex?: number
  className?: string
  inverted?: boolean
  end?: SelectorEnd
}
