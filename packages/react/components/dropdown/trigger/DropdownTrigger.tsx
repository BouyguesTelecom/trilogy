import * as React from 'react'
import { ComponentName } from '@/components/enumsComponentsName'
import { DropdownTriggerProps, DropdownTriggerRef } from './DropdownTriggerProps'

/**
 * DropdownTrigger Component
 * @param children {React.ReactNode} Children
 */
const DropdownTrigger = React.forwardRef<DropdownTriggerRef, DropdownTriggerProps>(
  (
    {
      children,
      ...others
    },
    ref,
  ): JSX.Element => {

    return (
      <div {...others} ref={ref}></div>
    )
  },
)

DropdownTrigger.displayName = ComponentName.DropdownTrigger
export default DropdownTrigger
