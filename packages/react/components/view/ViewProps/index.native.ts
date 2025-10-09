import {
  Accessibility,
  AlignableProps,
  BackgroundProps,
  Clickable,
  Fullwidth,
  JustifiableProps,
  Loadable,
} from '@/objects/index.native'

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
  SUMMARY = 'summary',
  DETAILS = 'details',
  OL = 'ol',
  DL = 'dl',
  DT = 'dt',
  DD = 'dd',
  DIALOG = 'dialog',
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

export type ViewRef = any
export type ViewNativeRef = any
