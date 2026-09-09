import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { DropdownTriggerNativeRef, DropdownTriggerProps } from '@/components/dropdown/trigger/DropdownTriggerProps'

const DropdownTrigger = React.forwardRef<DropdownTriggerNativeRef, DropdownTriggerProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

DropdownTrigger.displayName = ComponentName.DropdownTrigger

export default DropdownTrigger
