import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility, Clickable, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import { TouchableOpacity } from 'react-native'

/**
 * Chips Interface
 */
export interface ChipsProps extends Clickable, Accessibility, Dev, CommonProps {
  children: string | React.ReactNode
  onClick?: ClickEvent
  active?: boolean
  disabled?: boolean
}

export type ChipsRef = HTMLButtonElement
export type ChipsNativeRef = TouchableOpacity
