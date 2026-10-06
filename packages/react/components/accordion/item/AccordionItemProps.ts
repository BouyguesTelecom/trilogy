import { View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { MouseEvent as ReactMouseEvent, ReactNode, TouchEvent as ReactTouchEvent } from 'react'

export type TargetElement = HTMLElement & {
  active?: boolean
  id?: string
}

/**
 * OnClickEvent type
 */
export type OnClickEvent = ReactMouseEvent<HTMLElement> | ReactTouchEvent<HTMLElement> | { target: TargetElement }

export interface OnClickCallback {
  (e: OnClickEvent): void
}

/**
 * AccordionItem Interface
 */
export interface AccordionItemProps extends CommonProps, Dev {
  children: ReactNode | Array<ReactNode>
  open?: boolean
  onClick?: OnClickCallback
  disabled?: boolean
}

export type AccordionItemRef = HTMLDetailsElement
export type AccordionItemNativeRef = View
