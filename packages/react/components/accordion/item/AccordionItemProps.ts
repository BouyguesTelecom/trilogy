import { View } from 'react-native'
import { CommonProps } from '@/interfaces/CommonProps'
import { Dev } from '@/interfaces/Dev'
import { MouseEvent, ReactNode, TouchEvent } from 'react'

export type TargetElement = HTMLElement & {
  active?: boolean
  id?: string
}

/**
 * OnClickEvent type
 */
export type OnClickEvent = MouseEvent<HTMLElement> | TouchEvent<HTMLElement> | { target: TargetElement }

export interface OnClickCallback {
  (e: OnClickEvent): void
}

/**
 * AccordionItem Interface
 */
export interface AccordionItemProps extends CommonProps, Dev {
  children: ReactNode | ReactNode[]
  open?: boolean
  onClick?: OnClickCallback
  disabled?: boolean
}

export type AccordionItemRef = HTMLDetailsElement
export type AccordionItemNativeRef = View
