import { View } from 'react-native'
import { ReactNode } from 'react'

/**
 * Dropdown Interface
 */
export interface DropdownProps {
  children?: ReactNode
  isActive?: boolean
  defaultOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  className?: string
  testId?: string
}

export type DropdownRef = HTMLDivElement
export type DropdownNativeRef = View
