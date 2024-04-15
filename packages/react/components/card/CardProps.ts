import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { Fullheight } from '../../objects/facets/Fullheight'
import { TrilogyColor } from '../../objects/facets/Color'
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
