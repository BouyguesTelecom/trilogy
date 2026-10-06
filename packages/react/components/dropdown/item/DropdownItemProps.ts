import { View } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { ReactNode } from 'react'

/**
 * DropdownItem Interface
 */
export interface DropdownItemProps {
  children?: ReactNode
  iconName?: IconName | IconNameValues
  active?: boolean
  disabled?: boolean
  onSelect?: () => void
}

export type DropdownItemRef = HTMLDivElement | HTMLAnchorElement | HTMLButtonElement
export type DropdownItemNativeRef = View
