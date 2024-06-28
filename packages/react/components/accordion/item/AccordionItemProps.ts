import { ClickEvent } from '@/events/OnClickEvent'

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
export interface AccordionItemProps {
  children?: React.ReactNode | Array<React.ReactNode>
  active?: boolean
  onClick?: OnClickCallback
  className?: string
  id?: string
  disabled?: boolean
  onClose?: ClickEvent
  onOpen?: ClickEvent
}
