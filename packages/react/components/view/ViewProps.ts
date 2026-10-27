import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { BackgroundProps } from '@/objects/atoms/Background'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { Fullwidth } from '@/objects/facets/Fullwidth'
import { JustifiableProps } from '@/objects/facets/Justifiable'
import { Loadable } from '@/objects/facets/Loadable'
import { ReactNode } from 'react'

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
    Accessibility, Dev {
  children?: ReactNode
  className?: string
  style?: Styles
  flexable?: boolean
  bottom?: boolean
  id?: string
  markup?: ViewMarkup | ViewMarkupValues
}

export type ViewRef = any
export type ViewNativeRef = any
