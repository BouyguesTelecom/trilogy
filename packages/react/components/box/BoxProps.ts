import { Accessibility, Clickable, Fullheight, Dev } from '@/objects'
import { BackgroundProps } from '@/objects/atoms/Background'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'

export enum BoxMarkup {
  DIV = 'div',
  A = 'a',
}

export type BoxMarkupValues = keyof typeof BoxMarkup

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Fullheight, Accessibility, Dev {
  children?: React.ReactNode
  skeleton?: boolean
  className?: string
  markup?: BoxMarkup | BoxMarkupValues
  to?: string
  highlighted?: TrilogyColor | TrilogyColorValues
  shadowless?: boolean
  backgroundSrc?: string
  hat?: boolean
  flat?: boolean
  active?: boolean
}
