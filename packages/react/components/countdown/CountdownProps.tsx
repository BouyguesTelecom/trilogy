import { ClickEvent } from '@/events/OnClickEvent'
import { CountdownFormat } from './CountdownEnum'

/**
 * Countdown Interface
 */
export interface CountdownProps {
  className?: string
  deadline: Date
  format?: CountdownFormat
  event?: ClickEvent
  small?: boolean
  centered?: boolean
  inverted?: boolean
}
