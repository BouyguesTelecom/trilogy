import { CommonProps } from '../../../objects/facets/CommonProps'

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
export interface AccordionItemProps extends CommonProps {
  children: React.ReactNode | Array<React.ReactNode>
  open?: boolean
  onClick?: OnClickCallback
  disabled?: boolean
}
