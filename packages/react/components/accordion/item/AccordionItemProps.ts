import { View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export type TargetElement = HTMLElement & {
  active?: boolean
  id?: string
}

/**
 * OnClickEvent type
 */
export type OnClickEvent = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement> | { target: TargetElement }

export interface OnClickCallback {
  (e: OnClickEvent): void
}

/**
 * AccordionItem Interface
 */
export interface AccordionItemProps extends CommonProps, Dev {
  children: React.ReactNode | Array<React.ReactNode>
  open?: boolean
  onClick?: OnClickCallback
  disabled?: boolean
}

export type AccordionItemRef = HTMLDetailsElement
export type AccordionItemNativeRef = View
