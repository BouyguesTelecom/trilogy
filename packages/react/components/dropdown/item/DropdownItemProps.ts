import { View } from 'react-native'

/**
 * DropdownItem Interface
 */
export interface DropdownItemProps {
  children?: React.ReactNode
  iconName?: string
  active?: boolean
  disabled?: boolean
  onSelect?: () => void
}

export type DropdownItemRef = HTMLDivElement | HTMLAnchorElement | HTMLButtonElement
export type DropdownItemNativeRef = View
