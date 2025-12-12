import { View } from 'react-native'

/**
 * Dropdown Interface
 */
export interface DropdownProps {
  children?: React.ReactNode
  isActive?: boolean
  className?: string
  testId?: string
}

export type DropdownRef = HTMLDivElement
export type DropdownNativeRef = View
