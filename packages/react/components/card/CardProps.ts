import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility, Clickable, Fullheight, TrilogyColor } from '../../objects'
import { AlignableProps } from '../../objects/facets/Alignable'
import { JustifiableProps } from '../../objects/facets/Justifiable'

/**
 * Card Interface
 */

export enum CardMarkup {
  DIV = 'div',
  A = 'a',
}

export type CardMarkupValues = keyof typeof CardMarkup
export interface CardProps extends AlignableProps, Fullheight, JustifiableProps, Clickable, Accessibility {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  className?: string
  onClick?: ClickEvent
  markup?: CardMarkup | CardMarkupValues
  backgroundColor?: TrilogyColor.WHITE | 'transparent'
  reversed?: boolean
  to?: string
  active?: boolean
}
