import { CountdownFormat } from '@/components/countdown/CountdownEnum'
import { ClickEvent } from '@/events/OnClickEvent'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

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
