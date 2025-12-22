import { View } from 'react-native'
import { IconName, IconNameValues } from '../../icon/IconNameEnum'

/**
 * DropdownItem Interface
 */
export interface DropdownItemProps {
  children?: React.ReactNode
  iconName?: IconName | IconNameValues
  active?: boolean
  disabled?: boolean
  onSelect?: () => void
}

export type DropdownItemRef = HTMLDivElement | HTMLAnchorElement | HTMLButtonElement
export type DropdownItemNativeRef = View
