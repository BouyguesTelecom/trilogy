import { BackgroundProps } from '@/objects/atoms/Background'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { TrilogyColor, TrilogyColorValues } from '@/objects/facets/Color'
import { Dev } from '@/objects/facets/Dev'
import { Fullheight } from '@/objects/facets/Fullheight'

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
  headerOffset?: boolean
}
