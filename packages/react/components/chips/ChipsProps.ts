import { TouchableOpacity } from 'react-native'
import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '../../objects/facets/Dev'

/**
 * Chips Interface
 */
export interface ChipsProps extends Clickable, Accessibility, Dev, CommonProps {
  children: React.ReactNode
  onClick?: ClickEvent
  active?: boolean
  disabled?: boolean
}

export type ChipsRef = HTMLButtonElement
export type ChipsNativeRef = TouchableOpacity
