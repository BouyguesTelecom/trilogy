import { CountdownFormat } from '@/components/countdown/CountdownEnum'
import { ClickEvent } from '@/events/OnClickEvent'

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
