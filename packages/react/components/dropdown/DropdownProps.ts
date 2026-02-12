import { View } from 'react-native'

/**
 * Dropdown Interface
 */
export interface DropdownProps {
  children?: React.ReactNode
  isActive?: boolean
  defaultOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  className?: string
  testId?: string
}

export type DropdownRef = HTMLDivElement
export type DropdownNativeRef = View
