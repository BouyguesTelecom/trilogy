import { BackgroundProps } from '@/objects/atoms/Background'
import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { Fullwidth } from '@/objects/facets/Fullwidth'
import { JustifiableProps } from '@/objects/facets/Justifiable'
import { Loadable } from '@/objects/facets/Loadable'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Styles = { [key: string]: any }

export enum ViewMarkup {
  BUTTON = 'button',
  INPUT = 'input',
  A = 'a',
  SPAN = 'span',
  DIV = 'div',
  P = 'p',
  UL = 'ul',
  LI = 'li',
  LABEL = 'label',
  MAIN = 'main',
}

export type ViewMarkupValues = `${ViewMarkup}`

/**
 * View Interface
 */
export interface ViewProps
  extends Loadable,
    Clickable,
    JustifiableProps,
    Fullwidth,
    AlignableProps,
    BackgroundProps,
    Accessibility {
  children?: React.ReactNode
  className?: string
  style?: Styles
  flexable?: boolean
  bottom?: boolean
  id?: string
  markup?: ViewMarkup | ViewMarkupValues
}
