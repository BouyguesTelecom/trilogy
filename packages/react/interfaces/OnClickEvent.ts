import { MouseEvent } from 'react'
export type OnClickEvent = MouseEvent<Element> | unknown

/**
 * Click Event Interface
 */
export interface ClickEvent {
  (e?: OnClickEvent): void
}
