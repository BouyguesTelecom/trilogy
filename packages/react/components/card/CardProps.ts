import { ClickEvent } from '@/events/OnClickEvent'
import { BackgroundProps } from '@/objects/atoms/Background'
import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/dev'
import { Fullheight } from '@/objects/facets/Fullheight'
import { JustifiableProps } from '@/objects/facets/Justifiable'

/**
 * Card Interface
 */

export enum CardMarkup {
  DIV = 'div',
  A = 'a',
}

export type CardMarkupValues = keyof typeof CardMarkup

export interface CardProps
  extends AlignableProps,
    Fullheight,
    JustifiableProps,
    Clickable,
    Accessibility,
    BackgroundProps,
    Dev {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  className?: string
  onClick?: ClickEvent
  markup?: CardMarkup | CardMarkupValues
  reversed?: boolean
  to?: string
  active?: boolean
}
