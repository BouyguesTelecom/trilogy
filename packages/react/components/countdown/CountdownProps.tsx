import { type View } from 'react-native'
import { CountdownFormat } from '@/components/countdown/CountdownEnum'
import { ClickEvent } from "@/interfaces/OnClickEvent";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

/**
 * Countdown Interface
 */
export interface CountdownProps extends CommonProps, Dev {
  deadline: Date
  format?: CountdownFormat
  event?: ClickEvent
  small?: boolean
  inverted?: boolean
}

export type CountdownRef = HTMLUListElement
export type CountdownNativeRef = View
