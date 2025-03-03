import { ClickEvent } from '../../../events/OnClickEvent'
import { IconName, IconNameValues } from '../../../components/icon'
import { Accessibility, Dev } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { TouchableOpacity } from 'react-native'

/**
 * Select Option Interface
 */
export interface SelectOptionProps<T extends string | number = string> extends Accessibility, Dev, CommonProps {
  children?: string
  label?: string
  value?: T
  disabled?: boolean
  onClick?: ClickEvent
  iconName?: IconName | IconNameValues
}

export type SelectOptionRef = HTMLOptionElement | HTMLLIElement
export type SelectOptionNativeRef = TouchableOpacity
