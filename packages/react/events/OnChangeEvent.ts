import { ChangeEvent as ReactChangeEvent } from 'react'

export type OnChangeEvent = ReactChangeEvent<Element>

/**
 * Change Event Interface
 */
export interface ChangeEvent {
  (e: OnChangeEvent): void
}
