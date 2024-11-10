import { ClickEvent } from '../../events/OnClickEvent'
import { CountdownFormat } from './CountdownEnum'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Countdown Interface
 */
export interface CountdownProps extends CommonProps {
  deadline: Date
  format?: CountdownFormat
  event?: ClickEvent
  small?: boolean
  inverted?: boolean
}
