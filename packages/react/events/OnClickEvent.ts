import { MouseEvent as ReactMouseEvent } from 'react'

export type OnClickEvent = ReactMouseEvent<Element> | unknown

/**
 * Click Event Interface
 */
export interface ClickEvent {
  (e?: OnClickEvent): void
}
