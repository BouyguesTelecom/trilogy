import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { DropdownNativeRef, DropdownProps } from './DropdownProps'

/**
 * Dropdown Component (React Native)
 * @param children {React.ReactNode} Children (DropdownTrigger, DropdownItem and DropdownGroup)
 * @param isActive {boolean} Dropdown active/open state (for manual control)
 * @param defaultOpen {boolean} Initial open state (for automatic control)
 * @param onToggle {Function} Callback when dropdown open state changes
 * @param testId {string} Test Id for Test Integration
 */
const Dropdown = React.forwardRef<DropdownNativeRef, DropdownProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

Dropdown.displayName = ComponentName.Dropdown

export default Dropdown
