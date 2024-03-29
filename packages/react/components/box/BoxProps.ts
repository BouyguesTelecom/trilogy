import { Accessibility, Clickable, Fullheight } from '../../objects'
import { BackgroundProps } from '../../objects/atoms/Background'
import { TrilogyColor, TrilogyColorValues } from '../../objects/facets/Color'

export enum BoxMarkup {
  DIV = 'div',
  A = 'a',
}

export type BoxMarkupValues = keyof typeof BoxMarkup

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Fullheight, Accessibility {
  children?: React.ReactNode
  skeleton?: boolean
  className?: string
  markup?: BoxMarkup | BoxMarkupValues
  to?: string
  leftBorder?: TrilogyColor | TrilogyColorValues
  shadowless?: boolean
  background?: TrilogyColor | TrilogyColorValues
  backgroundSrc?: string
  hat?: boolean
  flat?: boolean
  active?: boolean
}
