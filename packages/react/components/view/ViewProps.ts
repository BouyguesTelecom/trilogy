import { Loadable } from "../../objects/facets/Loadable"
import { TrilogyColor, TrilogyColorValues } from "../../objects/facets/Color"
import { Clickable } from "../../objects/facets/Clickable"
import { Fullwidth } from "../../objects/facets/Fullwidth"
import { JustifiableProps } from "../../objects/facets/Justifiable"
import { AlignableProps } from "../../objects/facets/Alignable"

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
}

export type ViewMarkupValues = `${ViewMarkup}`

/**
 * View Interface
 */
export interface ViewProps extends Loadable, Clickable, JustifiableProps, Fullwidth, AlignableProps {
  children?: React.ReactNode
  className?: string
  style?: Styles
  flexable?: boolean
  bottom?: boolean
  color?: TrilogyColor | TrilogyColorValues
  backgroundSrc?: string
  id?: string
  markup?: ViewMarkup | ViewMarkupValues
}
