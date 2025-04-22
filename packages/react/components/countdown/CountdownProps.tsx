import { type View } from 'react-native'
import { ClickEvent } from '../../events/OnClickEvent'
import { CommonProps } from '../../objects/facets/CommonProps'
import { CountdownFormat } from './CountdownEnum'

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

export type CountdownRef = HTMLUListElement
export type CountdownNativeRef = View
